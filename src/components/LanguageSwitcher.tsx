import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('es')}>Es</button>
      <button onClick={() => changeLanguage('en')}>En</button>
    </div>
  );
};

export default LanguageSwitcher;
