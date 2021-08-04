import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Renders the preview box of the recipe */
const PreviewRecipe = ({ recipe, handleRecipe }) => {
	return (
		<li key={recipe._id} className="preview__item preview__item--active" onClick={handleRecipe}>
			<figure className="preview__item__image">
				<img src="" alt={recipe.title} />
			</figure>
			<h4 className="preview-item__title">{recipe.title}</h4>
			<p className="preview-item__publisher">myrecipes.com</p>
			<p className="preview-item__category">Pasta</p>
		</li>
	);
};

PreviewRecipe.propTypes = {
	recipe: PropTypes.object
};

export default PreviewRecipe;
