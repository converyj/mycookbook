import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from './Router';

import { handleInitialData } from './actions/recipes';

import './scss/main.scss';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(handleInitialData());
	});

	return (
		<div className="container">
			<Router />
		</div>
	);
};

export default App;
