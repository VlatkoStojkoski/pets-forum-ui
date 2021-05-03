import React, { FC } from 'react';

import { Route } from 'react-router-dom';

import { Dashboard } from './dashboard';
import { Forum } from './forum';
import { Landing } from './landing';
import { Users } from './users';

const Routes: FC = () => {
	return (
		<>
			<Route exact path='/' component={Landing} />
			<Route path='/users' component={Users} />
			<Route path='/dashboard' component={Dashboard} />
			<Route path='/forum' component={Forum} />
		</>
	);
};
export default Routes;
