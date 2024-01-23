import React from 'react';
import { Outlet } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      Navbar {t('example')}
      <LanguageSwitcher />
      <Outlet />
    </div>
  );
};

export default Navbar;
