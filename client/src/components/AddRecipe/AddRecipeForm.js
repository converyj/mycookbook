import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonPrimary from './../Buttons/ButtonPrimary';
import { Form } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import RecipeDropdown from './RecipeDropdown';

const AddRecipeForm = ({
	formState,
	handleInputIngredient,
	handleInput,
	handleFileInput,
	handleNewIngredient,
	handleArrayInput,
	uploadRecipe
}) => {
	const {
		title,
		image,
		directions,
		publisher,
		linkedRecipes,
		cookingTime,
		servings,
		ingredientsList
	} = formState;

	return (
		<React.Fragment>
			<form onSubmit={uploadRecipe} className="upload">
				<h3 className="upload__heading upload__title">Create New Recipe</h3>

				<div className="upload__column">
					<label>Title</label>
					<input value={title} required name="title" type="text" onChange={handleInput} />
					<label>Image URL</label>
					<input value={image} required name="image" type="text" onChange={handleInput} />
					<label>Publisher</label>
					<input
						value={publisher}
						required
						name="publisher"
						type="text"
						onChange={handleInput}
					/>
					<label>Side Dishes:</label>
					<RecipeDropdown onChange={handleArrayInput} />
					<label>Prep time</label>
					<input
						value={cookingTime}
						required
						name="cookingTime"
						type="number"
						onChange={handleInput}
					/>
					<label>Servings</label>
					<input
						value={+servings}
						required
						name="servings"
						type="number"
						onChange={handleInput}
					/>{' '}
				</div>
				<div className="upload__column">
					<div className="ingredients-header">
						<h3 className="upload__heading ">Add Ingredients</h3>
						{
							<span
								className="btn new-ingredient btn--small"
								onClick={handleNewIngredient}>
								New Ingredient<span className="btn btn--round">&plus;</span>
							</span>
						}
					</div>
					{ingredientsList.map((obj, i) => {
						console.log(ingredientsList, obj.quantity);
						return (
							<React.Fragment key={i}>
								<div key={`${i} - ing`} className="form-group">
									<label>Ingredient</label>
									<input
										value={obj.ingredient}
										onChange={(e) => handleInputIngredient(e, i)}
										type="text"
										name="ingredient"
									/>
								</div>
								<div key={`${i} - quan`} className="form-group">
									<label>Quantity</label>
									<input
										value={obj.quantity}
										onChange={(e) => handleInputIngredient(e, i)}
										type="number"
										name="quantity"
									/>
								</div>
								<div key={`${i} - unit`} className="form-group">
									<label>Unit</label>
									<input
										value={obj.unit}
										onChange={(e) => handleInputIngredient(e, i)}
										type="text"
										name="unit"
									/>
								</div>
							</React.Fragment>
						);
					})}
				</div>

				<div className="directions">
					<label htmlFor="">Directions</label>
					<textarea
						name="directions"
						id=""
						cols="30"
						rows="10"
						placeholder="Enter directions seperated by commas"
						value={directions}
						onChange={handleInput}
					/>
				</div>

				<ButtonPrimary styles="btn--primary btn--upload" title="upload">
					<svg>
						<use href="${icons}#icon-upload-cloud" alt="upload" />
					</svg>
					<span>Upload</span>
				</ButtonPrimary>
			</form>
		</React.Fragment>
	);
};

AddRecipeForm.propTypes = {};

export default AddRecipeForm;
