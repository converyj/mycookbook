const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeController = require('./controller/recipeController');
const path = require('path');

const Recipe = require('./models/recipe');

require('dotenv').config();

const { NODE_APP_MONGODB_USER_ID, NODE_APP_MONGODB_PASSWORD } = process.env;

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
app.use((req, res, next) => {
	console.log('new request made');
	console.log('host', req.hostname);
	console.log('path', req.path);
	console.log('method', req.method);
	next();
});

// connect to database
const dbURI = `mongodb+srv://${NODE_APP_MONGODB_USER_ID}:${NODE_APP_MONGODB_PASSWORD}@mycookbook.lo05g.mongodb.net/mycookbook?retryWrites=true&w=majority`;
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => app.listen(port, () => console.log(`Listening on port ${port}`)))
	.catch((err) => console.log('DB Error', err));

app.get('/search/:query', (req, res) => {
	console.log('/search');
	const query = req.params.query;
	console.log(query);
	const stringRegex = query + '.*';
	let regexName = new RegExp(stringRegex);
	console.log(regexName);
	Recipe.find({ title: { $regex: regexName } })
		.then((results) => {
			if (results.length > 0) res.json(results);
			else res.json([]);
		})
		.catch((err) => console.log('Error in server.js'));
});

app.get('/all', recipeController.all_recipes);

app.use(express.static(path.join(__dirname, 'public')));
