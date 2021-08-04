import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import SearchBar from './SearchBar';
import { getAllBasedOnQuery } from '../../actions/recipes';

import './searchBar.scss';

/*  Search by title or category
* Render search bar 
*/
const SearchWrapper = () => {
	const [
		query,
		setQuery
	] = useState('');

	const dispatch = useDispatch();

	const handleChange = (e) => {
		console.log(e.target.value);
		setQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
		const query = e.target.recipe.value;
		console.log(e.target.recipe.value);
		dispatch(getAllBasedOnQuery(query));
		setQuery('');
	};

	return (
		<div className="search">
			<SearchBar handleSubmit={handleSubmit} handleChange={handleChange} query={query} />
		</div>
	);
};

export default withRouter(SearchWrapper);
