import { ChakraProvider, extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config }, withDefaultColorScheme({ colorScheme: 'blue' }));

const rootElement = document.getElementById('root');
const app = (
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

if (rootElement?.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
