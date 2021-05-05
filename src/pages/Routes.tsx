import React, { FC } from 'react';

import { Box } from '@chakra-ui/react';
import { Route, useLocation } from 'react-router-dom';

import { Dashboard } from './dashboard';
import { Forum } from './forum';
import { Landing } from './landing';
import { Profile } from './profile';
import { Users } from './users';

const Routes: FC = () => {
	const { pathname } = useLocation();

	return (
		<Box py={+(!['/profile'].includes(pathname) && 5)}>
			<Route exact path='/' component={Landing} />
			<Route path='/users' component={Users} />
			<Route path='/dashboard' component={Dashboard} />
			<Route path='/forum' component={Forum} />
			<Route path='/profile' component={Profile} />
		</Box>
	);
};
export default Routes;
