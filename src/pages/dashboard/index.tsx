import React, { FC } from 'react';
import { Box, Stack } from '@chakra-ui/react';

import { WelcomeSection } from './WelcomeSection';
import { QuickAccess } from './QuickAccess';

export const Dashboard: FC = () => {
	return (
		<Stack px={7} gridRowGap={7}>
			<Box>
				<WelcomeSection />
			</Box>
			<Box>
				<QuickAccess />
			</Box>
		</Stack>
	);
};
