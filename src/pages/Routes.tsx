import React from 'react';
import { Route } from 'react-router-dom';

import { Landing } from './landing';

const Routes = () => {
	return (
		<>
			<Route exact path='/' component={Landing} />
		</>
	);
};

export default Routes;
