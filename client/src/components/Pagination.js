import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonPrimary from './ButtonPrimary';
import PaginationDots from './PaginationDots';
import { loadNewPage } from '../actions/recipes';

import './pagination.scss';

/* Displaying the buttons and the pagination dots for both the recipes and the recipe instructions */
const Pagination = () => {
	const dispatch = useDispatch();

	const currentPage = useSelector((state) => state.recipes.currentPage);

	const totalPages = useSelector((state) => state.recipes.totalPages);

	const nextPage = () => {
		// go to next page
		dispatch(loadNewPage({ page: 1 }));
	};

	// go to previous page
	const previousPage = () => {
		dispatch(loadNewPage({ page: -1 }));
	};

	return (
		<div className="pagination-nav-buttons">
			{currentPage > 1 && (
				<ButtonPrimary handleClick={previousPage}>
					&larr; Page {currentPage - 1}
				</ButtonPrimary>
			)}
			<PaginationDots currentPage={currentPage} totalPages={totalPages} />
			{currentPage < totalPages && (
				<ButtonPrimary handleClick={nextPage}>Page {currentPage + 1} &rarr;</ButtonPrimary>
			)}
		</div>
	);
};

export default Pagination;
