import React from 'react';
import { Route } from 'react-router-dom';

import { Landing } from './landing';
import { Users } from './users';
import { Dashboard } from './dashboard';

const Routes = () => {
	return (
		<>
			<Route exact path='/' component={Landing} />
			<Route path='/users' component={Users} />
			<Route path='/dashboard' component={Dashboard} />
		</>
	);
};

export default Routes;
