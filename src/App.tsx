import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

import Routes from 'pages/Routes';

const App: FC = () => {
	return (
		<Box bg='#fff6ee' minH='100vh' minW='100vw'>
			<Routes />
		</Box>
	);
};

export default App;
