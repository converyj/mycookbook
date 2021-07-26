const Recipe = require('../models/recipe');

const all_recipes = async (_, res) => {
	try {
		const recipes = await Recipe.find();
		res.json(recipes);
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	all_recipes
};
