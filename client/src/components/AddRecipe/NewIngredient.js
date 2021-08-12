import React from 'react';

const NewIngredient = () => {
	return (
		<React.Fragment>
			<div className="form-group">
				<label>Ingredient 1</label>
				<input
					type="text"
					required
					name="ingredient-1"
					placeholder="Format: 'Quantity,Unit,Description'"
				/>
			</div>
			<ButtonPrimary styles="new-ingredient" onClick={handleNewIngredient}>
				New Ingredient<span class="btn btn--round">&plus;</span>
			</ButtonPrimary>
		</React.Fragment>
	);
};

export default NewIngredient;
