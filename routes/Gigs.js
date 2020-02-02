const express = require("express");
const router = express.Router();
const db = require("../database/sequelize");
const Gig = require("../models/Gig");

//Вивод даних
router.get("/", (req, res) =>
  Gig.findAll()
    .then(gigs => res.json(gigs))
    .catch(err => console.log(err))
);

//Пост даних
router.get("/add", (req, res) => {
  const data = {
    title: "looking",
    technologies: "React",
    budget: "$3000",
    description:
      "aasdfklajsdfhhjdksalkjhffkd;saksdjhfjksdjfhfudiwueciuneuskjdjfhskjdxnckesduencin ishdcvkicjn iuwseckjksn iuswic h iucux",
    contact_email: "user@gmail.com"
  };

  let { title, technologies, budget, description, contact_email } = data;
  Gig.create({
    title,
    technologies,
    budget,
    description,
    contact_email
  })
    .then(gig => res.redirect("/"))
    .catch(e => console.log("ERORR...." + e));
});

//Видалиння не може працювати оновленя і видалення з одної url адреси 
// router.get("/:id", (req, res) => {
//   var user = Gig.build({ id: req.params.id });
//   user
//     .destroy()
//     .then(gig => res.redirect("/"))
//     .catch(e => console.log("ERORR...." + e));
// });

//оновлення стерти фів потім запрацює але зверху добавити
// router.get("фів/:id", (req, res) => {
//   Gig.update(
//     { title: "Doe" },
//     {
//       where: {
//         id: req.params.id
//       }
//     }
//   )
//     .then(gig => res.redirect("/"))
//     .catch(e => console.log("ERORR...." + e));
// });

module.exports = router;
