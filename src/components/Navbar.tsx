import React from 'react';

import { Outlet } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';
import { HiMiniUser } from 'react-icons/hi2';
import { IoSunny } from 'react-icons/io5';
import { LuLanguages } from 'react-icons/lu';

import logo from '../assets/images/tabnine.png';

interface IItems {
  name: string;
  text?: string;
  icon: JSX.Element;
  path?: string;
  fnHandle: () => void;
}

const NavbarBtn = ({ text, icon, path, fnHandle }: Omit<IItems, 'name'>) => {
  console.log(text, path);

  return (
    <button className="bg-red-600 hover:bg-red-500 text-red-400 hover:text-red-300 px-4 py-1 rounded-full" onClick={fnHandle}>
      {icon}
    </button>
  );
};

const Navbar: React.FC = () => {
  const centerIcons: IItems[] = [
    { name: 'light', icon: <IoSunny />, fnHandle: () => console.log('light') },
    { name: 'market', text: 'shopping cart', icon: <FaShoppingCart />, path: '/shop', fnHandle: () => console.log('market') },
    { name: 'lang', icon: <LuLanguages />, fnHandle: () => console.log('lang') },
  ];

  const rightIcons: IItems[] = [{ name: 'logout', text: 'sign in', icon: <HiMiniUser />, path: '/login', fnHandle: () => console.log('login') }];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center bg-green-900 px-5 py-3">
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
