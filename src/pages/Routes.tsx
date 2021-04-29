import React from 'react';
import { Route } from 'react-router-dom';

import { Landing } from './landing';
import { Users } from './users';

const Routes = () => {
	return (
		<>
			<Route exact path='/' component={Landing} />
			<Route path='/users' component={Users} />
		</>
	);
};

export default Routes;
