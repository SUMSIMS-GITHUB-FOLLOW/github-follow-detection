import { Global, ThemeProvider } from '@emotion/react';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import theme from '@styles/theme';
import GlobalStyle from '@styles/global';
import { QueryClientProvider } from 'react-query';
import queryClient from '@hooks/users/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
