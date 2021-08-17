import axios from 'axios';
import Recipe from '../../../models/recipe';

export async function getAllRecipes() {
	try {
		const res = await axios.get('api/all');
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

export async function getAllRecipesBasedOnQuery(query) {
	console.log(query);
	try {
		const res = await axios.get(`api/search/${query}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

export async function updateRecipeBookmark(id) {
	console.log(id);
	try {
		const res = await axios.put(`api/recipe/${id}`);
		return res;
	} catch (err) {
		console.log('There was an error: ', err);
	}
}

export async function createNewRecipe(recipe) {
	console.log('api');
	try {
		const res = await axios.post('api/new', {
			recipe
		});
		return res.data;
	} catch (err) {
		console.log(err);
	}
}
