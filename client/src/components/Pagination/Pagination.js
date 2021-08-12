import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonPrimary } from '../Buttons';
import PaginationDots from './PaginationDots';
import { loadNewPage } from '../../actions/recipes';

import './pagination.scss';

/* Displaying the buttons and the pagination dots for both the recipes and the recipe directions  */
const Pagination = ({ from }) => {
	const dispatch = useDispatch();

	// check where the pagination buttons are coming from: the menu with all the recipes or the recipe itself

	const retrieveState = (state) => {
		let obj;
		if (from === 'recipes') {
			obj = state.recipes;
		}
		else {
			obj = state.recipes.recipe;
		}

		return obj;
	};
	// current page is the recipes current page or the ingredients current page
	const currentPage = useSelector((state) => retrieveState(state).currentPage);

	// total pages is the recipes total pages or the ingredients total pages
	const totalPages = useSelector((state) => retrieveState(state).totalPages);

	const nextPage = () => {
		// go to next page
		dispatch(loadNewPage({ page: 1, from }));
	};

	// go to previous page
	const previousPage = () => {
		dispatch(loadNewPage({ page: -1, from }));
	};

	return (
		<div className="pagination-nav-buttons">
			{currentPage > 1 && (
				<ButtonPrimary styles="btn--pagination" handleClick={previousPage}>
					&larr; Page {currentPage - 1}
				</ButtonPrimary>
			)}
			<PaginationDots currentPage={currentPage} totalPages={totalPages} />
			{currentPage < totalPages && (
				<ButtonPrimary styles="btn--pagination" handleClick={nextPage}>
					Page {currentPage + 1} &rarr;
				</ButtonPrimary>
			)}
		</div>
	);
};

export default Pagination;
