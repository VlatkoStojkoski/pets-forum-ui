import { Global } from '@emotion/react';

const Fonts = () => (
	<Global
		styles={`
      @font-face {
        font-family: 'Inter';
        src: url('/assets/fonts/Inter-Light.woff2') format('woff2'),
          url('/assets/fonts/Inter-Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Inter';
        src: url('/assets/fonts/Inter-Regular.woff2') format('woff2'),
          url('/assets/fonts/Inter-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Inter';
        src: url('/assets/fonts/Inter-Bold.woff2') format('woff2'),
          url('/assets/fonts/Inter-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }
    `}
	/>
);

export default Fonts;
