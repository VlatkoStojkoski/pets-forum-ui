import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

import Routes from 'pages/Routes';
import { NavigationBar } from 'layout';

const App: FC = () => {
	return (
		<Box bg='bg' minH='100vh' minW='100%'>
			<NavigationBar />
			<Box py={5}>
				<Routes />
			</Box>
		</Box>
	);
};

export default App;
