import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import PreviewRecipeWrapper from './PreviewRecipeWrapper';

/* Holds the aside menu and the recipe view */
const MainContainer = () => {
	const recipes = useSelector((state) => state.recipes.filteredRecipes);

	return (
		<div>
			<PreviewRecipeWrapper recipes={recipes} />
		</div>
	);
};

MainContainer.propTypes = {
	recipes: PropTypes.array
};

export default MainContainer;
