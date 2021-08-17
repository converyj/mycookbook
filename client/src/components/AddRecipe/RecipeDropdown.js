import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PreviewRecipe from '../PreviewRecipe/PreviewRecipe';
import { Dropdown } from 'semantic-ui-react';

const RecipeDropdown = ({ onChange }) => {
	const recipes = useSelector((state) => state.recipes.allRecipes);
	const recipeOptions =
		recipes &&
		recipes.map((recipe) => ({
			key: recipe._id,
			text: recipe.title,
			value: recipe._id
		}));

	useEffect(
		() => {
			console.log('dropdown update');
		},
		[
			recipes
		]
	);
	return (
		<Dropdown
			fluid
			multiple
			search
			selection
			options={recipeOptions || []}
			onChange={onChange}
		/>
		// <React.Fragment>
		// 	<option defaultValue value="0">
		// 		None
		// 	</option>
		// 	{recipes && recipes.map((recipe) => <option value={recipe._id}>{recipe.title}</option>)}
		// </React.Fragment>
	);
};

export default RecipeDropdown;
