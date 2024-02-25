import { useState } from 'react';

import { IItems } from '../@types';

const NavbarBtn = ({ text, icon, path, fnHandle }: Omit<IItems, 'name'>) => {
  const [showText, setShowText] = useState(false);

  const handleHover = () => {
    if (text) setShowText(true);
  };

  const handleLeaveHover = () => setShowText(false);

  const handlePath = () => {
    console.log(path);
  };

  return (
    <button
      className="flex flex-row bg-[#A9C2C9] hover:bg-[#C5CFC6] text-[#0A3740] hover:text-[#951F2B] px-4 py-1 rounded-full flex-nowrap justify-center items-center gap-1"
      onClick={path ? handlePath : fnHandle}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeaveHover}
    >
      {icon}
      {showText && <span>{text}</span>}
    </button>
  );
};

export default NavbarBtn;
