import cloneDeep from 'lodash-es/cloneDeep.js';

import {
	GET_RECIPES,
	GET_RECIPE,
	RECIEVE_ALL,
	LOAD_NEW_PAGE,
	TOGGLE_BOOKMARK
} from './../actions/recipes';

import { whichObj, buildArr, getPropertyName } from '../utilites/helper';

export default function recipes(state = {}, action) {
	switch (action.type) {
		case RECIEVE_ALL:
			let allRecipes = Object.values(action.recipes).length;
			let countPerPage = action.countPerPage || 10;

			// total number of pages
			let totalPages = Math.ceil(allRecipes / countPerPage);
			let filteredRecipes = action.recipes.slice(0, countPerPage);

			return {
				...state,
				// all recipes unfiltered
				allRecipes: action.recipes,
				// recipes per page
				filteredRecipes: filteredRecipes,
				// current number of recipes seen so far
				currentCount: countPerPage,
				countPerPage,
				// number of all recipes
				totalCount: allRecipes,
				currentPage: 1,
				// number of total pages
				totalPages
			};

		case GET_RECIPES:
			return {
				...state,
				filteredRecipes: [
					...action.recipe
				]
			};

		case GET_RECIPE:
			let directionsCountPerPage = action.countPerPage || 3;

			// clone the state
			let getRecipeState = cloneDeep(state);

			// get the recipe
			getRecipeState.recipe = getRecipeState.filteredRecipes.find(
				(recipe) => recipe._id === action.id
			);

			let allDirections = getRecipeState.recipe.directions;

			let filteredDirections = getRecipeState.recipe.directions.slice(
				0,
				directionsCountPerPage
			);

			let directionsTotalPages = Math.ceil(allDirections.length / directionsCountPerPage);

			// all directions unfiltered
			getRecipeState.recipe.allDirections = allDirections;

			// directions per page
			getRecipeState.recipe.filteredDirections = filteredDirections;

			// current number of directions seen so far
			getRecipeState.recipe.currentCount = directionsCountPerPage;

			// number of directions per page
			getRecipeState.recipe.countPerPage = directionsCountPerPage;

			// number of all directions
			getRecipeState.recipe.totalCount = allDirections.length;

			getRecipeState.recipe.currentPage = 1;

			// number of total pages
			getRecipeState.recipe.totalPages = directionsTotalPages;
			console.log(getRecipeState);
			return getRecipeState;

		case TOGGLE_BOOKMARK:
			return {
				...state,
				recipe: {
					...state.recipe,
					bookmarked: !state.recipe.bookmarked
				}
			};
		case LOAD_NEW_PAGE:
			// clone the state
			let loadNewPageState = cloneDeep(state);

			// single recipe object if not all recipes
			const obj =
				action.payload.from !== 'all' &&
				loadNewPageState[whichObj(loadNewPageState, action.payload.from)];
			console.log(obj);
			// how many pages should be added. Will always be 1 or -1
			let addPages = action.payload.page;
			console.log(obj.currentPage);
			// add it to the current page
			obj.currentPage += addPages;

			let perPage = obj.countPerPage; // count of item per page

			let next;

			// next page
			if (addPages === 1) {
				/*
				1. Increase the current shown 
				- moving from page 1 to 2 will cause 'upperCount' to be 20
				*/
				let upperCount = obj.currentCount + perPage;
				// get the previous number of recipes shown: will be 10 (page 2)
				let lowerCount = obj.currentCount;
				/* 2. Update the current number of recipes shown 
				- change the currentCount to match the 'upperCount'. It'll be used as such at any point after this line
				*/
				obj.currentCount += obj.countPerPage;

				// 3. retrieve next recipes eg. within the range of 10-20 (for page 2)
				// use 'allRecipes' array rather than 'filteredRecipes' because using 'filterdRecipes' would result in an empty array since we only have 10 recipes there when the page first loads
				next = obj[getPropertyName(action.payload.from)].slice(lowerCount, upperCount);
			}
			console.log(next);
			// previous page
			if (addPages === -1) {
				/*
				1. Decrease the number of recipes showm
				- 'currentCount' has changed roles: now it serves as the upperCount - will be 20 (page 2)
				*/
				let upperCount = obj.currentCount;
				// get the previous number of recipes shown - will be 10 (page 2)
				let lowerCount = obj.currentCount - perPage; // decrease by 10

				/* 2. Update the current number of recipes shown 
				- change the currentCount to match the 'lowerCount'. It'll be used as such at any point after this line
				*/
				obj.currentCount = lowerCount;

				// 3. retrieve next recipes eg. within the range of 0-10 (starting at page 2)
				// use 'allRecipes' array rather than 'filteredRecipes' because using 'filteredRecipes' would result in an empty array since we only have 10 recipes there when the page first loads
				next = obj[getPropertyName(action.payload.from)].slice(
					lowerCount - perPage,
					upperCount - perPage
				);
			}

			const propertyName = getPropertyName(action.payload.from, 'filtered');

			console.log(propertyName);
			// update filterdRecipes
			obj[propertyName] = next;

			return loadNewPageState;
		default:
			return state;
	}
}
