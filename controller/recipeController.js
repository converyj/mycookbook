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

const get_recipe_by_id = async (req, res) => {
	const id = req.params.id;
	try {
		const recipe = await Recipe.updateOne({ _id: id }, { bookmarked: !req.bookmarked });
		return res.json(recipe);
	} catch (err) {
		console.log('There was an error: ', err);
	}
};

module.exports = {
	all_recipes,
	get_recipe,
	get_recipe_by_id
};
