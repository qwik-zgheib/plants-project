import React from 'react';

import { RouterProvider } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import router from './conf/route';
import i18n from './i18n/config';

const App: React.FC = () => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </>
  );
};

export default App;
