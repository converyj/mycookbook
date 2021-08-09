import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import PreviewRecipe from './PreviewRecipe';
import { getRecipe } from '../../actions/recipes';

import './previewRecipe.scss';
import { Pagination } from '../Pagination';

/* Preview Recipes Container */
const PreviewRecipeWrapper = ({ recipes, history }) => {
	const dispatch = useDispatch();

	const handleRecipe = (id) => {
		console.log(id);
		dispatch(getRecipe(id));
	};
	return (
		<ul className="preview preview--container">
			{recipes &&
				recipes.map((recipe) => (
					<PreviewRecipe
						key={recipe._id}
						recipe={recipe}
						handleRecipe={() => handleRecipe(recipe._id)}
					/>
				))}
		</ul>
	);
};

PreviewRecipeWrapper.propTypes = {
	recipes: PropTypes.array
};

export default PreviewRecipeWrapper;
