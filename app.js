const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const cors = require("cors");
const path = require("path");

const db = require("./database/sequelize");

const app = express();

//HBS
const hbs = exphbs.create({
  extname: "hbs",
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views"),
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");
//HBS

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//body-parser
const CORS_CLIENT = process.env.CORS_CLIENT;
app.use(cors({ origin: CORS_CLIENT.split(","), optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", require("./routes/todo"));

app.use((req, res) => res.status(404).send("404 - Not Found!"));

app.use((req, res) => res.status(500).send("500 - Something was error!"));

const PORT = process.env.PORT || 5000;
// sync model with db
// db.sync({ force: true })
//   .then(() => console.log("Таблиця перебудована"))
//   .catch((err) => console.error(err));

db.authenticate()
  .then(() => console.log("Connected..."))
  .catch((err) => console.log("Error data base: " + err));

app.listen(PORT, () =>
  console.log(`Example app listening on port http://localhost:${PORT}`)
);
