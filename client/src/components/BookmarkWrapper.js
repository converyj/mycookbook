import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PreviewRecipeWrapper } from './PreviewRecipe';

/* use only localStorage ? */
const BookmarkWrapper = () => {
	const recipes = useSelector((state) => state.recipes.filteredRecipes);
	const recipe = useSelector((state) => state.recipes.recipe);
	const bookmarkedRecipes = recipes && recipes.filter((recipe) => recipe.bookmarked === true);
	console.log(recipes);
	console.log(bookmarkedRecipes);

	useEffect(
		() => {
			console.log('update');
		},
		[
			recipe
		]
	);

	return (
		<div className="bookmarks">
			<PreviewRecipeWrapper recipes={bookmarkedRecipes} />
		</div>
	);
};

export default BookmarkWrapper;
