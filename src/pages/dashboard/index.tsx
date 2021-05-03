import React, { FC } from 'react';

import { Box, Stack } from '@chakra-ui/react';

import { HotPosts } from './HotPosts';
import { QuickAccess } from './QuickAccess';
import { WelcomeSection } from './WelcomeSection';

export const Dashboard: FC = () => {
	return (
		<Stack px={7} pb={10} gridRowGap={7} mx='auto' maxW='600px'>
			<WelcomeSection />
			<Box>
				<QuickAccess />
			</Box>
			<HotPosts />
		</Stack>
	);
};
