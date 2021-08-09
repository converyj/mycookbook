import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header';

import { PreviewRecipeWrapper } from '../components/PreviewRecipe';
import { RecipeWrapper } from './Recipe';
import LeftCol from './LeftCol';
import BookmarkWrapper from './BookmarkWrapper';

/* Container to hold the main components */
const MainContainer = () => {
	const recipes = useSelector((state) => state.recipes.filteredRecipes);

	return (
		<main>
			<LeftCol recipes={recipes} />
			<RecipeWrapper />
		</main>
	);
};

export default MainContainer;
