import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { NotificationsProvider } from './context/notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ChakraProvider>
      <NotificationsProvider>
        <App />
      </NotificationsProvider>
    </ChakraProvider>
  </StrictMode>
);
