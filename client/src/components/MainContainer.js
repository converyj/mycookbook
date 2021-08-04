import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header';

import { PreviewRecipeWrapper } from '../components/PreviewRecipe';
import { RecipeWrapper } from './Recipe';

/* Container to hold the main components */
const MainContainer = () => {
	const recipes = useSelector((state) => state.recipes.filteredRecipes);

	return (
		<main>
			<PreviewRecipeWrapper recipes={recipes} />
			<RecipeWrapper />
		</main>
	);
};

export default MainContainer;
