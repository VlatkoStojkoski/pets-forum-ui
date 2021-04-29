import React, { FC } from 'react';
import { Button, ButtonProps, Flex } from '@chakra-ui/react';

import { Google } from 'icons';

export interface GoogleButtonProps extends ButtonProps {
	redirect: string;
}

const GoogleButton: FC<GoogleButtonProps> = ({ redirect, ...props }) => {
	return (
		<Button w='full' variant='outline' type='submit' {...props}>
			<Flex align='center' gridColumnGap={2}>
				<Google boxSize={6} />
				Продолжи со Google
			</Flex>
		</Button>
	);
};

export { GoogleButton };
