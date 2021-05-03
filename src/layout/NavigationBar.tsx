import React, { FC } from 'react';

import { Flex, Heading } from '@chakra-ui/react';
import { Brand } from 'icons';
import { Link } from 'react-router-dom';

export const NavigationBar: FC = () => {
	return (
		<Flex
			px={7}
			py={3}
			top={0}
			pos='sticky'
			w='100%'
			h='max-content'
			bgColor='rgba(255, 255, 255, .15)'
			zIndex={9999}
			sx={{ backdropFilter: 'blur(15px)' }}
		>
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
