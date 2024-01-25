import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from '../components/LanguageSwitcher';

import { RootState, AppDispatch } from '../app/store';

import { increment, decrement, incrementByAmount } from '../app/actions/counter';

const Home: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);

  const dispatch = useDispatch<AppDispatch>();

  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-col">
        <p className="text-gray-700 font-bold px-5">{count}</p>
        <div className="flex felx-row gap-5 p-2">
          <button className="text-blue-600 font-bold" onClick={() => dispatch(increment())}>
            +
          </button>
          <button className="text-red-500 font-bold" onClick={() => dispatch(decrement())}>
            -
          </button>
          <button className="text-sky-600 font-bold" onClick={() => dispatch(incrementByAmount(5))}>
            + 5
          </button>
        </div>
      </div>

      <LanguageSwitcher />
      {t('example')}
    </div>
  );
};

export default Home;
