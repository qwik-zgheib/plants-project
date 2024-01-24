import React from 'react';

import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import i18n from './i18n/config';
import router from './conf/route';
import store from './app/store';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <RouterProvider router={router} />
        </I18nextProvider>
      </Provider>
    </>
  );
};

export default App;
