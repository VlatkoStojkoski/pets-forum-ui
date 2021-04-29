import React from 'react';
import { Route } from 'react-router-dom';

import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export const Users = () => {
	return (
		<>
			<Route exact path='/users/signup' component={SignUp} />
			<Route exact path='/users/signin' component={SignIn} />
		</>
	);
};
