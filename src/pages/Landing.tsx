import React from 'react';
import { svg_bg_1, svg_bg_2 } from '../assets/svg';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div>
      <main className="bg-green-100 font-abhaya-libre relative">
        <div className="container mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center relative z-10">
          <div className="sm:w-3/4 xl:w-3/6 flex flex-col items-start py-24 sm:py-0">
            <span className="xl:text-xl tracking-wider text-cyan-700 font-alegraya-sans">Welcome </span>
            <span className="text-6xl xl:text-10xl font-abhaya-libre text-green-900 font-bold leading-none">
              <Link to="/home">طوابق</Link>
            </span>
            <p className="xl:text-lg pt-10 tracking-wider text-green-800 font-alegraya-sans">A green world awaits you, what are you waiting for?</p>
          </div>
          <div className="hidden sm:flex items-center justify-center xl:justify-end w-1/2 xl:w-4/6 py-32">{svg_bg_1}</div>
        </div>
        {svg_bg_2}
      </main>
    </div>
  );
};

export default Landing;
