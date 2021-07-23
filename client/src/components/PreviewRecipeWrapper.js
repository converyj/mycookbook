import React from 'react';
import { PropTypes } from 'prop-types';
import PreviewRecipe from './PreviewRecipe';

import './previewRecipeWrapper.scss';
import Pagination from './Pagination';

/* Preview Recipes Container */
const PreviewRecipeWrapper = ({ recipes }) => {
	return (
		<div className="preview preview--container">
			{recipes && recipes.map((recipe) => <PreviewRecipe key={recipe._id} recipe={recipe} />)}
			<Pagination />
		</div>
	);
};

PreviewRecipeWrapper.propTypes = {
	recipes: PropTypes.array
};

export default PreviewRecipeWrapper;
