import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { Pagination } from '../Pagination';
import { trancateTitle } from '../../utilites/helper';

const Recipe = ({ recipe, handleBookmark }) => {
	// console.log(props.match.params);

	let value;
	const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getRecipe(props.match.params.recipe_id));
	// });

	return (
		<React.Fragment>
			{' '}
			<img
				src="https://s23209.pcdn.co/wp-content/uploads/2014/06/IMG_2388edit-360x360.jpg"
				alt=""
			/>
			<div className="recipe__meta">
				<div className="recipe__meta__title">
					<h1>{trancateTitle(recipe.title)}</h1>
					<p>recipe.com</p>
				</div>
				<p>
					<span>10</span> Minutes
				</p>
				<p>
					<span>4</span> Servings
				</p>
				<button
					className="btn btn--round btn--bookmark"
					onClick={() => handleBookmark(recipe._id)}>
					{recipe.bookmarked ? <FaBookmark /> : <FaRegBookmark />}
				</button>
			</div>
			<div className="ingredients">
				<h2>Ingredients</h2>
				<ul>
					<li>2 ripe avocado</li>
					<li>lemon juice</li>
					<li>1 clove garlic</li>
					<li>pepper</li>
				</ul>
			</div>
			<div className="directions">
				<h2>Directions</h2>
				<ol>
					{recipe.filteredDirections.map((ing, index) => (
						<li
							value={
								recipe.currentPage > 1 ? (
									recipe.currentCount - recipe.countPerPage + index + 1
								) : (
									index + 1
								)
							}
							key={index}>
							<p>{ing}</p>
						</li>
					))}
				</ol>
			</div>
			<Pagination from="directions" />
		</React.Fragment>
	);
};
const MemoizedRecipeComponent = React.memo(Recipe);

Recipe.propTypes = {
	recipe: PropTypes.object.isRequired,
	handleBookmark: PropTypes.func
};

export default MemoizedRecipeComponent;
