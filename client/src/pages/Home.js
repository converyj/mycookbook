import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header';

import { PreviewRecipeWrapper } from '../components/PreviewRecipe';

const Home = () => {
	const recipes = useSelector((state) => state.recipes.filteredRecipes);

	return (
		<div>
			<Header />
			<main>
				<PreviewRecipeWrapper recipes={recipes} />
			</main>
		</div>
	);
};

Home.propTypes = {
	recipes: PropTypes.array
};

export default Home;
