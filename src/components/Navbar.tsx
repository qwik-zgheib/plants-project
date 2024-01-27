import React from 'react';

import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { FaShoppingCart } from 'react-icons/fa';
import { HiHome, HiMiniMoon, HiMiniUser, HiSun } from 'react-icons/hi2';
import { LuLanguages } from 'react-icons/lu';

import NavbarBtn from './NavbarBtn';

import { IItems } from '../@types';
import { RootState } from '../app/store';
import { setLanguage } from '../app/reducers/languageSlice';
import { changeTheme } from '../app/reducers/themeSlice';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const currentLanguage: string = useSelector((state: RootState) => state.language.value);
  const { i18n } = useTranslation();

  const themeValue: string = useSelector((state: RootState) => state.theme.theme);
  const htmlDoc = document.documentElement;

  if (themeValue === 'light') htmlDoc.classList.remove('dark');
  if (themeValue === 'dark') htmlDoc.classList.add('dark');

  const handleChangeLanguage = () => {
    const newLanguage: string = currentLanguage === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
    dispatch(setLanguage(newLanguage));
  };

  const handleChangeTheme = () => dispatch(changeTheme(themeValue === 'light' ? 'dark' : 'light'));

  const centerIcons: IItems[] = [
    { name: 'theme', icon: themeValue === 'dark' ? <HiSun /> : <HiMiniMoon />, fnHandle: () => handleChangeTheme() },
    { name: 'market', text: t('navbar.market'), icon: <FaShoppingCart />, path: '/shop' },
    { name: 'lang', text: currentLanguage === 'es' ? 'en' : 'es', icon: <LuLanguages />, fnHandle: () => handleChangeLanguage() },
  ];

  const rightIcons: IItems[] = [
    {
      name: 'logout',
      text: `${t('navbar.signin')}/${t('navbar.signup')}`,
      icon: <HiMiniUser />,
      path: '/login',
      fnHandle: () => console.log('login'),
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center bg-[#00755C] px-5 py-3">
        <HiHome className="text-red-600 text-2xl" />

        <div className="flex flex-row gap-2">
          {centerIcons.map((item) => (
            <NavbarBtn key={item.name} text={item?.text} icon={item.icon} path={item?.path} fnHandle={item.fnHandle} />
          ))}
        </div>

        <div className="flex flex-row">
          {rightIcons.map((item) => (
            <NavbarBtn key={item.name} text={item?.text} icon={item.icon} path={item?.path} fnHandle={item.fnHandle} />
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
