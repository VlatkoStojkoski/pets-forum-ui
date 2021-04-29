import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading } from '@chakra-ui/react';

import { Brand } from 'icons';

export const NavigationBar: FC = () => {
	return (
		<Flex px={7} py={3} top={0} pos='sticky' w='100%' h='max-content'>
			<Link to='/' style={{ display: 'inline-block' }}>
				<Flex alignItems='center' gridColumnGap={2.5} w='fit-content'>
					<Brand boxSize='36px' />
					<Heading fontSize='xl' color='brand__brown.900'>
						Pets UI
					</Heading>
				</Flex>
			</Link>
		</Flex>
	);
};
