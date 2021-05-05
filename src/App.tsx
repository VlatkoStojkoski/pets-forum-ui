import React, { FC } from 'react';

import { Box } from '@chakra-ui/react';
import { NavigationBar } from 'layout';
import Routes from 'pages/Routes';

const App: FC = () => {
	return (
		<Box bg='bg' minH='100vh' minW='100%'>
			<NavigationBar />
			<Routes />
		</Box>
	);
};

export default App;
