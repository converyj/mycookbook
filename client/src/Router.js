import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { Recipe } from './components/Recipe';

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			{/* <Route path="/:recipe_id" component={Recipe} /> */}
		</Switch>
	);
};

export default Router;
