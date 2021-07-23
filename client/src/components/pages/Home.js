import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../Header';
import MainContainer from '../MainContainer';

import { handleInitialData } from '../../actions/recipes';

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(handleInitialData());
	});

	return (
		<div>
			<Header />
			<main>
				<MainContainer />
			</main>
		</div>
	);
};

export default Home;
