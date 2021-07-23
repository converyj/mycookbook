import cloneDeep from 'lodash-es/cloneDeep.js';

import { GET_RECIPE, RECIEVE_ALL, LOAD_NEW_PAGE } from './../actions/recipes';

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

		case GET_RECIPE:
			return {
				...state,
				recipes: [
					...action.recipe
				]
			};

		case LOAD_NEW_PAGE:
			// clone the state
			let loadNewPageState = cloneDeep(state);
			// how many pages should be added. Will always be 1 or -1
			let addPages = action.payload.page;
			// add it to the current page
			loadNewPageState.currentPage += addPages;

			let perPage = loadNewPageState.countPerPage; // 10 by default

			let nextRecipes;

			// next page
			if (addPages === 1) {
				/*
				1. Increase the current recipes shown 
				- moving from page 1 to 2 will cause 'upperCount' to be 20
				*/
				let upperCount = loadNewPageState.currentCount + perPage;
				// get the previous number of recipes shown: will be 10 (page 2)
				let lowerCount = loadNewPageState.currentCount;
				/* 2. Update the current number of recipes shown 
				- change the currentCount to match the 'upperCount'. It'll be used as such at any point after this line
				*/
				loadNewPageState.currentCount += loadNewPageState.countPerPage;

				// 3. retrieve next recipes eg. within the range of 10-20 (for page 2)
				// use 'allRecipes' array rather than 'filteredRecipes' because using 'filterdRecipes' would result in an empty array since we only have 10 recipes there when the page first loads
				nextRecipes = loadNewPageState.allRecipes.slice(lowerCount, upperCount);
			}
			// previous page
			if (addPages === -1) {
				/*
				1. Decrease the number of recipes showm
				- 'currentCount' has changed roles: now it serves as the upperCount - will be 20 (page 2)
				*/
				let upperCount = loadNewPageState.currentCount;
				// get the previous number of recipes shown - will be 10 (page 2)
				let lowerCount = loadNewPageState.currentCount - perPage; // decrease by 10

				/* 2. Update the current number of recipes shown 
				- change the currentCount to match the 'lowerCount'. It'll be used as such at any point after this line
				*/
				loadNewPageState.currentCount = lowerCount;

				// 3. retrieve next recipes eg. within the range of 0-10 (starting at page 2)
				// use 'allRecipes' array rather than 'filteredRecipes' because using 'filteredRecipes' would result in an empty array since we only have 10 recipes there when the page first loads
				nextRecipes = loadNewPageState.allRecipes.slice(
					lowerCount - perPage,
					upperCount - perPage
				);
			}

			// update filterdRecipes and filteredCount
			loadNewPageState.filteredRecipes = nextRecipes;
			loadNewPageState.filteredCount = loadNewPageState.filteredRecipes.length;
			return loadNewPageState;
		default:
			return state;
	}
}
