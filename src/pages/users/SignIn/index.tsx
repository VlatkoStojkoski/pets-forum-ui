import React, { FC } from 'react';
import { FormikHelpers } from 'formik';

import { GoogleButton, Form } from 'components';
import { signIn, SignInParameters } from 'api';

export const SignIn: FC = () => {
	const handleSubmit = async (
		values: SignInParameters,
		actions: FormikHelpers<SignInParameters>
	) => {
		actions.setSubmitting(true);

		await signIn(values);

		actions.setSubmitting(false);
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
