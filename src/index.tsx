import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import theme from 'styles/theme';

ReactDOM.render(
	<Router>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</Router>,
	document.getElementById('root')
);
