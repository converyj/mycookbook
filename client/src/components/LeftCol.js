import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import PreviewRecipe from './PreviewRecipe';
import { PreviewRecipeWrapper } from './PreviewRecipe';

import { Pagination } from './Pagination';

/* Preview Recipes Container */
const LeftCol = ({ recipes, history }) => {
	return (
		<aside className="left-col">
			<PreviewRecipeWrapper recipes={recipes} />
			<Pagination from="recipes" />
		</aside>
	);
};

LeftCol.propTypes = {
	recipes: PropTypes.array
};

export default LeftCol;
