import React from 'react';
import { useSelector } from 'react-redux';
import { PreviewRecipeWrapper } from './PreviewRecipe';

const BookmarkWrapper = () => {
	const recipes = useSelector((state) => state.recipes.filteredRecipes);

	const bookmarkedRecipes = recipes && recipes.filter((recipe) => recipe.bookmarked === true);

	return (
		<div className="bookmarks">
			<PreviewRecipeWrapper recipes={bookmarkedRecipes} />
		</div>
	);
};

export default BookmarkWrapper;
