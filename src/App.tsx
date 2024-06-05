import { Global, ThemeProvider } from '@emotion/react';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import theme from '@styles/theme';
import GlobalStyle from '@styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
