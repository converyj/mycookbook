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
app.use(express.static('client/public'));

// app.use('/api', createProxyMiddleware({ target: 'http://127.0.0.1:5000', changeOrigin: true }));

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

app.put('/recipe/:id', recipeController.update_recipe_by_id);
app.get('/search/:query', recipeController.get_recipe);

app.get('/all', recipeController.all_recipes);

app.get('/123', (req, res) => {
	res.send({ id: '123' });
});

// Handles any requests that don't match any other routes
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
console.log(__dirname);
