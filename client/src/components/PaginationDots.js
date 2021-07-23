import React from 'react';

const PaginationDots = ({ totalPages, currentPage }) => {
	return (
		<div>
			{[
				...Array(totalPages)
			].map((_, index) => (
				<li className={`dot ${currentPage === index + 1 && 'dot--active'}`} key={index}>
					&bull;
				</li>
			))}
		</div>
	);
};

export default PaginationDots;
