import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddRecipeForm from './AddRecipeForm';
import NewIngredient from './NewIngredient';

import './addRecipe.scss';

class AddRecipeContainer extends Component {
	state = {
		title: '',
		sourceUrl: '',
		image: '',
		publisher: '',
		cookingTime: 0,
		servings: 0,
		ingredientsList: []
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleInputIngredient = (e, i) => {
		console.log(this.state.ingredientsList[i][e.target.name]);
		let ingredients = [
			...this.state.ingredientsList
		];
		this.state.ingredientsList[i][e.target.name] = e.target.value;
		this.setState({
			ingredientsList: ingredients
		});
	};

	handleNewIngredient = () => {
		console.log('handlenewing');
		this.setState({
			ingredientsList: [
				...this.state.ingredientsList,
				{
					ingredient: '',
					quantity: 0,
					unit: ''
				}
			]
		});
	};

	uploadRecipe = async (e) => {
		// Upload recipe to API
		e.preventDefault();
		console.log(Object.entries(this.state.ingredientsList));
		try {
			// build object to be sent to API
			// const recipe = {
			// 	title: newRecipe.title,
			// 	publisher: newRecipe.publisher,
			// 	source_url: newRecipe.sourceUrl,
			// 	image_url: newRecipe.image,
			// 	servings: newRecipe.servings,
			// 	cooking_time: newRecipe.cookingTime,
			// 	ingredients
			// };
			// const data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);
			// return formatRecipe(data.data.recipe);
		} catch (err) {
			throw err;
		}
	};
	render() {
		return (
			<div className="add-recipe-modal">
				<button className="btn--close-modal" />
				<AddRecipeForm
					handleNewIngredient={this.handleNewIngredient}
					ingredientsList={this.state.ingredientsList}
					handleInput={this.handleInput}
					handleInputIngredient={this.handleInputIngredient}
					formState={this.state}
					uploadRecipe={this.uploadRecipe}
				/>
			</div>
		);
	}
}

AddRecipeContainer.propTypes = {};

export default AddRecipeContainer;
