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
	image: {
		type: String
	},
	publisher: {
		type: String
	},
	category: {
		type: [
			String
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
		type: [
			String
		],
		required: true
	},
	linkedRecipes: {
		type: [
			String
		]
	},
	servings: {
		type: Number,
		required: true
	},
	cookingTime: {
		type: Number,
		required: true
	},
	bookmarked: {
		type: Boolean,
		default: false
	}
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
