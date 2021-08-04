import React from 'react';

const PaginationDots = ({ totalPages, currentPage }) => {
	console.log(totalPages);
	return (
		<div>
			{[
				...Array(totalPages)
			].map((_, index) => (
				<span className={`dot ${currentPage === index + 1 && 'dot--active'}`} key={index}>
					&bull;
				</span>
			))}
		</div>
	);
};

export default PaginationDots;
