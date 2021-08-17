import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddRecipeForm from './AddRecipeForm';
import NewIngredient from './NewIngredient';
import { handleCreateRecipe } from '../../actions/recipes';

import './addRecipe.scss';
import { useDispatch } from 'react-redux';

class AddRecipeContainer extends Component {
	state = {
		title: '',
		image: '',
		directions: '',
		linkedRecipes: [],
		publisher: '',
		cookingTime: 0,
		servings: Number(0),
		ingredientsList: []
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleFileInput = (e) => {
		fetch('api/read').then((res) => res.json()).then((data) => console.log(data));
	};

	handleInputIngredient = (e, i) => {
		console.log(this.state.ingredientsList[i][e.target.name]);
		let ingredients = [
			...this.state.ingredientsList
		];
		const value = e.target.name == 'quantity' ? parseInt(e.target.value) : e.target.value;

		this.state.ingredientsList[i][e.target.name] = value;
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

	handleArrayInput = (e, data) => {
		console.log('linked', data);
		this.setState({
			linkedRecipes: [
				...this.state.linkedRecipes,
				...data.value
			]
		});
	};

	uploadRecipe = async (e) => {
		// Upload recipe to API
		e.preventDefault();
		try {
			// build object to be sent to API
			const directions = this.state.directions.split(',').map((el) => el.trim());

			const recipe = {
				title: this.state.title,
				image: this.state.image,
				publisher: this.state.publisher,
				servings: parseInt(this.state.servings),
				cookingTime: parseInt(this.state.cookingTime),
				ingredients: this.state.ingredientsList,
				linkedRecipes: this.state.linkedRecipes,
				directions
			};

			console.log(recipe);
			handleCreateRecipe(recipe);
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
					handleFileInput={this.handleFileInput}
					handleInputIngredient={this.handleInputIngredient}
					handleArrayInput={this.handleArrayInput}
					formState={this.state}
					uploadRecipe={this.uploadRecipe}
				/>
			</div>
		);
	}
}

AddRecipeContainer.propTypes = {};

export default connect(null, { handleCreateRecipe })(AddRecipeContainer);
