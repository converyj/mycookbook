import React from 'react';
import PropTypes from 'prop-types';

import './previewRecipe.scss';

/* Renders the preview box of the recipe */
const PreviewRecipe = ({ recipe }) => {
	return (
		<li key={recipe._id} className="preview-item preview-item--active">
			<figure className="preview-item__image">
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
