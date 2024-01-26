import React from 'react';

import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { FaShoppingCart } from 'react-icons/fa';
import { HiMiniUser } from 'react-icons/hi2';
import { IoSunny } from 'react-icons/io5';
import { LuLanguages } from 'react-icons/lu';

import logo from '../assets/images/tabnine.png';
import NavbarBtn from './NavbarBtn';

import { IItems } from '../@types';
import { RootState } from '../app/store';
import { setLanguage } from '../app/reducers/languageSlice';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const currentLanguage = useSelector((state: RootState) => state.language.value);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
    dispatch(setLanguage(newLanguage));
  };

  const centerIcons: IItems[] = [
    { name: 'light', icon: <IoSunny />, fnHandle: () => console.log('light') },
    { name: 'market', text: 'shopping cart', icon: <FaShoppingCart />, path: '/shop' },
    { name: 'lang', text: currentLanguage === 'es' ? 'en' : 'es', icon: <LuLanguages />, fnHandle: () => handleChangeLanguage() },
  ];

  const rightIcons: IItems[] = [
    { name: 'logout', text: 'sign in/sign up', icon: <HiMiniUser />, path: '/login', fnHandle: () => console.log('login') },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center bg-[#00755C] px-5 py-3">
        <img src={logo} alt="Tree Icon" className="rounded-full  w-8" />

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
