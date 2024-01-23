import React from 'react';

import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <LanguageSwitcher />
      {t('example')}
    </div>
  );
};

export default Home;
