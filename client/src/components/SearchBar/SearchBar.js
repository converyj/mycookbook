import React from 'react';
import PropTypes from 'prop-types';

import './searchBar.scss';

const SearchInput = ({ handleChange, handleSubmit, query }) => {
	return (
		<form onSubmit={handleSubmit} className="search__form">
			<input
				className="search__input"
				title="Recipe search"
				type="text"
				name="recipe"
				placeholder="Search for recipes ..."
				value={query}
				onChange={handleChange}
			/>
			<input className="btn--search" type="submit" value="Search" />
		</form>
	);
};

SearchInput.propTypes = {
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	query: PropTypes.string
};

export default SearchInput;
