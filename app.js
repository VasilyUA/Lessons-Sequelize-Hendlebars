const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const db = require('./database/sequelize');

const app = express();

//HBS
const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
//HBS

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes/Gigs'));

app.use((req, res) => res.status(404).send('404 - Not Found!'));

app.use((req, res) => res.status(500).send('500 - Something was error!'));

const PORT = process.env.PORT || 5000;
//перезасдає занови тим самим стирає данні
// db.sync({ force: true })
// 	.then(() => console.log('Таблиця перебудована'))
// 	.catch((err) => console.error(err));

db.authenticate()
	.then(() => console.log('Connected...'))
	.catch((err) => console.log('Error: ' + err));

app.listen(PORT, () =>
	console.log(`Example app listening on port http://localhost:${PORT}/`)
);
