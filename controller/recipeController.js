const Recipe = require('../models/recipe');

const all_recipes = async (_, res) => {
	try {
		const recipes = await Recipe.find();
		res.json(recipes);
	} catch (err) {
		console.log(err);
	}
};

const get_recipe = (req, res) => {
	const query = req.params.query;
	console.log(query);
	const stringRegex = query + '.*';
	let regexName = new RegExp(stringRegex, 'i');
	console.log(regexName);
	Recipe.find({ title: { $regex: regexName } })
		.then((results) => {
			if (results.length > 0) res.json(results);
			else res.json([]);
		})
		.catch((err) => console.log('Error in server.js'));
};

// update DB to avoid using localStorage to store bookmarks
// just use localStorage because of the toggling back and forth since recipe is in multiple places in state - would have to update the filteredRecipes as well to persist the data --> updated filteredRecipes and recipe object
const get_recipe_by_id = async (req, res) => {
	const id = req.params.id;
	try {
		const recipe = await Recipe.findOne({ _id: id });
		recipe.bookmarked = !recipe.bookmarked;
		const updatedRecipe = await recipe.save();
		return res.json(updatedRecipe);
	} catch (err) {
		console.log('There was an error: ', err);
	}
};

module.exports = {
	all_recipes,
	get_recipe,
	get_recipe_by_id
};
