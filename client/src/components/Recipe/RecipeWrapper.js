import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Recipe from './Recipe';
import { handleToggleBookmark } from './../../actions/recipes';

import './recipe.scss';

/* Container to hold the recipe and actions */
const RecipeWrapper = () => {
	const dispatch = useDispatch();

	const recipe = useSelector((state) => state.recipes.recipe);

	const handleBookmark = (id) => {
		dispatch(handleToggleBookmark(id));
	};
	return (
		<section className="recipe">
			{recipe && <Recipe recipe={recipe} handleBookmark={handleBookmark} />}
		</section>
	);
};

export default RecipeWrapper;
