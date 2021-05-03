import React, { FC } from 'react';

import { signIn, SignInParameters } from 'api';
import { GoogleButton, Form } from 'components';
import { FormikHelpers } from 'formik';
import { RouteComponentProps } from 'react-router-dom';


export const SignIn: FC<RouteComponentProps> = ({
	history,
}: RouteComponentProps) => {
	const handleSubmit = async (
		values: SignInParameters,
		actions: FormikHelpers<SignInParameters>
	) => {
		await signIn(values);

		actions.setSubmitting(false);

		history.push('/dashboard');
	};

	return (
		<>
			<Form
				title='Регистрација'
				buttonText='Регистрирај се'
				initialValues={
					{
						username: '',
						password: '',
					} as SignInParameters
				}
				onSubmit={handleSubmit}
				config={[
					{
						name: 'username',
						type: 'text',
						label: 'Корисничко име или email',
						placeholder: 'cool_cat_420',
						isFieldRequired: true,
					},
					{ type: 'password' },
				]}
			>
				<GoogleButton mt={4} redirect='/' />
			</Form>
		</>
	);
};
