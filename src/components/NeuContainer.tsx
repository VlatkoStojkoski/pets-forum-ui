import React, { FC } from 'react';
import { ComponentWithAs, FlexProps } from '@chakra-ui/react';

export interface NeuContainerProps extends FlexProps {
	asContainer: ComponentWithAs<any, any>;
}

export const NeuContainer: FC<NeuContainerProps> = ({
	children,
	asContainer: Container,
	...props
}) => {
	return (
		<Container
			boxShadow={`
					-15px 15px 25px 0 #f6cfa580,
					15px -15px 25px 0 #ffffff
				`}
			{...props}
		>
			{children}
		</Container>
	);
};
