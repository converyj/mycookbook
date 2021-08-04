const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientSchema = new Schema({
	quantity: {
		type: Number,
		required: true
	},
	unit: {
		type: String
	},
	ingredient: {
		type: String,
		required: true
	}
});

const recipeSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String
	},
	category: {
		type: [
			{ id: Number }
		],
		required: true
	},
	ingredients: {
		type: [
			ingredientSchema
		],
		required: true
	},
	directions: {
		type: [],
		required: true
	},
	linkedRecipes: {
		type: [
			{ id: Number }
		]
	},
	bookmarked: {
		type: Boolean
	}
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
