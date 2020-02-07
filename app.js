const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");

const db = require("./database/sequelize");

//Test Db conection
db.authenticate()
  .then(() => console.log("Connected..."))
  .catch(err => console.log("Error: " + err));

const app = express();

//HBS
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs"
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");
//HBS

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home"
  });
});

app.use("/gigs", require("./routes/Gigs"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

//Run app, then load http://localhost:3000 in a browser to see the output.
