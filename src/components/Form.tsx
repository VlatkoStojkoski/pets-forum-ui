import React, { FC, ReactNode } from 'react';

import { Box, Heading, Button } from '@chakra-ui/react';
import { InputField, InputFieldProps, PasswordField } from 'components';
import { Formik, Form as FormikForm, FormikConfig } from 'formik';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface FormProps extends FormikConfig<any> {
	title: string;
	buttonText: string;
	config: (InputFieldProps | { type: 'password' })[];
	children?: ReactNode;
}

export const Form: FC<FormProps> = ({
	initialValues,
	onSubmit,
	config,
	title,
	buttonText,
	children,
}: FormProps) => {
	return (
		<Box
			w={{ base: '90%', md: '400px' }}
			mx='auto'
			bg='#fff'
			p={5}
			rounded='xl'
			shadow='brown__xl'
		>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{(props) => (
					<>
						<Box textAlign='center' mb={5}>
							<Heading>{title}</Heading>
						</Box>
						<FormikForm
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '1.2em',
							}}
						>
							{config.map((inputConfig, inputConfigI) => {
								if (inputConfig.type === 'password') return <PasswordField />;

								const inputProps = inputConfig as InputFieldProps;

								return <InputField key={inputConfigI} {...inputProps} />;
							})}
							<Button
								colorScheme='brand__brown'
								type='submit'
								isLoading={props.isSubmitting}
							>
								{buttonText}
							</Button>
						</FormikForm>
					</>
				)}
			</Formik>
			{children}
		</Box>
	);
};
