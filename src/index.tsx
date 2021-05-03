import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from 'styles/theme';

import App from './App';

ReactDOM.render(
	<Router>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</Router>,
	document.getElementById('root')
);
