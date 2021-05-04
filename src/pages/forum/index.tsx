import React, { FC } from 'react';

import { Heading, VStack } from '@chakra-ui/react';
import { ForumPosts } from 'components';
import { Route } from 'react-router-dom';

export const Forum: FC = () => {
	return (
		<Route exact path='/forum'>
			<Heading textAlign='center' fontSize='6xl' mb={6}>
				Форум
			</Heading>
			<VStack gridRowGap={3} px={5} maxW='600px' w='100%' mx='auto'>
				<ForumPosts query={{ limit: 15 }} />
			</VStack>
		</Route>
	);
};
