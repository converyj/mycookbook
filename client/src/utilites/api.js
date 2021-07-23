import axios from 'axios';

export async function getAllRecipes() {
	try {
		const res = await axios('http://localhost:5000/all');
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

export async function getAllRecipesBasedOnQuery(query) {
	console.log(query);
	try {
		const res = await axios(`http://localhost:5000/search/${query}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}
