import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PreviewRecipeWrapper } from './PreviewRecipe';

/* use only DB ? */
const BookmarkWrapper = () => {
	// have to change the filteredRecipes in order for component to rerender
	const recipes = useSelector((state) => state.recipes.filteredRecipes);

	// get all recipes that are bookmarked
	const bookmarkedRecipes = recipes && recipes.filter((recipe) => recipe.bookmarked);

	return (
		<div className="bookmarks">
			<PreviewRecipeWrapper recipes={bookmarkedRecipes} />
		</div>
	);
};

export default BookmarkWrapper;
