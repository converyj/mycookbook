import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

const Router = () => {
	return (
		<Switch>
			<Route exact to="/" component={Home} />
			{/* <Route to="/:recipe_id" component={Recipe} /> */}
		</Switch>
	);
};

export default Router;
