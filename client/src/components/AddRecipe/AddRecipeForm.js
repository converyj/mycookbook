import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonPrimary from './../Buttons/ButtonPrimary';

const AddRecipeForm = ({
	uploadRecipe,
	handleNewIngredient,
	handleInput,
	handleInputIngredient,
	ingredientsList,
	formState
}) => {
	const { title, sourceUrl, image, publisher, cookingTime, servings } = formState;

	useEffect(
		() => {
			console.log('form update');
		},
		[
			ingredientsList
		]
	);
	return (
		<React.Fragment>
			<form className="upload" onSubmit={uploadRecipe}>
				<h3 className="upload__heading">Create New Recipe</h3>
				<div className="upload__columns">
					<div className="column">
						<div className="form-group">
							<label>Title</label>
							<input
								value={title}
								required
								name="title"
								type="text"
								onChange={handleInput}
							/>
						</div>
						<div className="form-group">
							<label>URL</label>
							<input
								value={sourceUrl}
								required
								name="sourceUrl"
								type="text"
								onChange={handleInput}
							/>
						</div>
						<div className="form-group">
							<label>Image URL</label>
							<input
								value={image}
								required
								name="image"
								type="text"
								onChange={handleInput}
							/>
						</div>
						<div className="form-group">
							<label>Publisher</label>
							<input
								value={publisher}
								required
								name="publisher"
								type="text"
								onChange={handleInput}
							/>
						</div>
						<div className="form-group">
							<label>Prep time</label>
							<input
								value={cookingTime}
								required
								name="cookingTime"
								type="number"
								onChange={handleInput}
							/>
						</div>
						<div className="form-group">
							<label>Servings</label>
							<input
								value={servings}
								required
								name="servings"
								type="number"
								onChange={handleInput}
							/>{' '}
						</div>
					</div>
					<div className="column">
						<h3 className="upload__heading">Add Ingredients</h3>

						{ingredientsList.length === 0 && (
							<span className="btn new-ingredient" onClick={handleNewIngredient}>
								New Ingredient<span className="btn btn--round">&plus;</span>
							</span>
						)}
						{ingredientsList.map((obj, i) => {
							return (
								<React.Fragment>
									<label>Ingredient {i + 1}</label>
									<div key={i} className="form-group">
										<label>Ingredient</label>
										<input
											value={obj.ingredient[i]}
											onChange={(e) => handleInputIngredient(e, i)}
											type="text"
											name="ingredient"
											placeholder="Format: 'Quantity,Unit,Description'"
										/>
									</div>
									<div key={i} className="form-group">
										<label>Quantity</label>
										<input
											value={obj.quantity[i]}
											onChange={(e) => handleInputIngredient(e, i)}
											type="text"
											name="quantity"
											placeholder="Format: 'Quantity,Unit,Description'"
										/>
									</div>
									<div key={i} className="form-group">
										<label>Unit</label>
										<input
											value={obj.unit[i]}
											onChange={(e) => handleInputIngredient(e, i)}
											type="text"
											name="unit"
											placeholder="Format: 'Quantity,Unit,Description'"
										/>
									</div>
									{ingredientsList.length - 1 === i && (
										<span
											className="new-ingredient"
											onClick={handleNewIngredient}>
											New Ingredient<span className="btn btn--round">&plus;</span>
										</span>
									)}
								</React.Fragment>
							);
						})}
					</div>
				</div>

				<ButtonPrimary styles="btn--primary" title="upload">
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
