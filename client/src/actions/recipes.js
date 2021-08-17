import {
	getAllRecipes,
	getAllRecipesBasedOnQuery,
	updateRecipeBookmark,
	createNewRecipe
} from '../utilites/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECIEVE_ALL = 'RECIEVE_ALL';
export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE = 'GET_RECIPE';
export const TOGGLE_BOOKMARK = 'TOGGLE_BOOKMARK';
export const LOAD_NEW_PAGE = 'LOAD_NEW_PAGE';

export const recieveAll = (recipes) => {
	return {
		type: RECIEVE_ALL,
		recipes
	};
};

export const getRecipes = (recipe) => {
	return {
		type: GET_RECIPES,
		recipe
	};
};

export const getRecipe = (id) => {
	return {
		type: GET_RECIPE,
		id
	};
};

export const loadNewPage = (payload) => {
	return {
		type: LOAD_NEW_PAGE,
		payload
	};
};

export function toggleBookmark(id) {
	return {
		type: TOGGLE_BOOKMARK,
		id
	};
}

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
			dispatch(getRecipes(recipe));
			dispatch(hideLoading());
		});
	};
}

export function handleToggleBookmark(id) {
	return (dispatch) => {
		return updateRecipeBookmark(id).then(() => dispatch(toggleBookmark(id)));
	};
}

export function handleCreateRecipe(recipe) {
	console.log('handlecreatere ipe');
	return (dispatch) => {
		return createNewRecipe(recipe).then((data) => console.log(data));
	};
}
