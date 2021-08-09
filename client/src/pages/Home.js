import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header';

import MainContainer from '../components/MainContainer';
import { Recipe } from './../components/Recipe';

const Home = () => {
	console.log('Home');
	return (
		<React.Fragment>
			<Header />
			<MainContainer />
		</React.Fragment>
	);
};

export default Home;
