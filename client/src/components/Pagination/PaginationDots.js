import React from 'react';

const PaginationDots = ({ totalPages, currentPage }) => {
	console.log(totalPages);
	return (
		<div className="dots">
			{[
				...Array(totalPages)
			].map((_, index) => (
				<span
					className={`dots__dot ${currentPage === index + 1 && 'dots__dot--active'}`}
					key={index}>
					&bull;
				</span>
			))}
		</div>
	);
};

export default PaginationDots;
