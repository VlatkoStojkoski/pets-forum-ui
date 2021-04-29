import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

import Routes from 'pages/Routes';
import { NavigationBar } from 'layout';

const App: FC = () => {
	return (
		<Box bg='#fff6ee' minH='100vh' w='100%'>
			<NavigationBar />
			<Box py={10}>
				<Routes />
			</Box>
		</Box>
	);
};

export default App;
