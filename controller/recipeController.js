const Recipe = require('../models/recipe');

const all_recipes = async (req, res) => {
	try {
		const recipes = await Recipe.find();
		res.send(recipes);
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	all_recipes
};
