import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import LoaderProvider from 'context/LoaderProvider';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/finance">
          <LoaderProvider>
            <App />
          </LoaderProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  // </React.StrictMode>
);
