import React from 'react';
import { Link } from 'react-router-dom';

import { Search } from './Search';

export const Navbar = ({ setDarkTheme, darkTheme }) => (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-black-700 border-gray-400 ">
    <div className="flex justify-between items-center space-x-5 w-screen ">
      <Link to="/">
        <p className="text-xl bg-blue-500 font-bold text-white py-2 px-2 mt-5 rounded dark:bg-gray-50 dark:text-gray-900">
          MacnSearch 🔎
        </p>
      </Link>
      <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-md px-4 py-3 hover:shadow-lg">{darkTheme ? 'Light-Mode' : 'Dark-Mode'}</button>
    </div>
    <Search />
  </div>
);