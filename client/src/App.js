import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from './Router';

import { handleInitialData } from './actions/recipes';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(handleInitialData());
	});

	return (
		<div className="App">
			<Router />
		</div>
	);
};

export default App;
