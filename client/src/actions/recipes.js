import { getAllRecipes, getAllRecipesBasedOnQuery } from '../utilites/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECIEVE_ALL = 'RECIEVE_ALL';
export const GET_RECIPE = 'GET_RECIPE';
export const LOAD_NEW_PAGE = 'LOAD_NEW_PAGE';

export const recieveAll = (recipes) => {
	return {
		type: 'RECIEVE_ALL',
		recipes
	};
};

export const getRecipe = (recipe) => {
	return {
		type: 'GET_RECIPE',
		recipe
	};
};

export const loadNewPage = (payload) => {
	return {
		type: LOAD_NEW_PAGE,
		payload
	};
};

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getAllRecipes().then((recipes) => {
			dispatch(recieveAll(recipes));
			dispatch(hideLoading());
		});
	};
}

export function getAllBasedOnQuery(query) {
	return (dispatch) => {
		dispatch(showLoading());
		return getAllRecipesBasedOnQuery(query).then((recipe) => {
			dispatch(getRecipe(recipe));
			dispatch(hideLoading());
		});
	};
}
