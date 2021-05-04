import React, { FC } from 'react';

import { Button, VStack } from '@chakra-ui/react';
import { ForumPosts } from 'components';
import { HotIcon } from 'icons';
import { Link } from 'react-router-dom';

import { Section } from './Section';

export const HotPosts: FC = () => {
	return (
		<Section title='Најжешки теми' icon={<HotIcon boxSize='32px' />}>
			<VStack gridRowGap={3}>
				<ForumPosts query={{ limit: 2 }} />
				<Link to='/forum'>
					<Button colorScheme='brand__brown'>Видете повеќе...</Button>
				</Link>
			</VStack>
		</Section>
	);
};
