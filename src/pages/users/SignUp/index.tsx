import React, { FC } from 'react';
import { FormikHelpers } from 'formik';

import { GoogleButton, Form } from 'components';
import { signUp, SignUpParameters } from 'api';

export const SignUp: FC = () => {
	const handleSubmit = async (
		values: SignUpParameters,
		actions: FormikHelpers<SignUpParameters>
	) => {
		actions.setSubmitting(true);

		await signUp(values);

		actions.setSubmitting(false);
	};

	return (
		<>
			<Form
				title='Регистрација'
				buttonText='Регистрирај се'
				initialValues={
					{
						displayName: '',
						email: '',
						username: '',
						password: '',
					} as SignUpParameters
				}
				onSubmit={handleSubmit}
				config={[
					{
						name: 'displayName',
						type: 'text',
						label: 'Име',
						placeholder: 'Џон Доу',
						isFieldRequired: true,
					},
					{
						name: 'username',
						type: 'text',
						label: 'Корисничко име',
						placeholder: 'cool_cat_420',
						isFieldRequired: true,
					},

					{
						name: 'email',
						type: 'email',
						label: 'Email',
						placeholder: 'small@paws.com',
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
