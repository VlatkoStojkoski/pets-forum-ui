import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
	fonts: {
		heading: 'Inter',
		body: 'Inter',
	},
	colors: {
		accent: {
			100: '#adb6ff',
			200: '#99a3ff',
			300: '#8591ff',
			400: '#707eff',
			500: '#5465ff',
			600: '#475aff',
			700: '#3347ff',
			800: '#1f35ff',
			900: '#0a23ff',
		},
	},
	components: {
		Button: {
			baseStyle: {
				fontWeight: 'bold',
			},
			sizes: {
				xl: {
					h: '56px',
					fontSize: 'lg',
					px: '28px',
				},
			},
		},
	},
});
