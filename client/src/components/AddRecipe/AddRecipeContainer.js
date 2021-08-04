import React from 'react';
import PropTypes from 'prop-types';
import AddRecipeForm from './AddRecipeForm';

class AddRecipeContainer {
	state = {
		name: '',
		url: '',
		image: '',
		publisher: '',
		minutes: 0,
		servings: 0
	};
	render() {
		return (
			<div className="add-recipe-modal">
				<AddRecipeForm />
			</div>
		);
	}
}

AddRecipeContainer.propTypes = {};

export default AddRecipeContainer;
