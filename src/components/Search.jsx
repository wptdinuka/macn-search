import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useStateContext } from '../contexts/StateContextProvider';
import { Links } from './Links';

export const Search = () => {
  const { setSearchTerm } = useStateContext();
  const [text, setText] = useState();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-28 md:ml-52 sm:-mt-10 mt-3 md:w-2/3 sm:w-full">
      <input
        value={text}
        type="text"
        className=" md:w-full h-20  text-xl dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text !== '' && (
        <button type="button" className="absolute text-3xl top-5 right-4 text-2xl text-gray-500 " onClick={() => setText('')}>
          x
        </button>
      )}
      <Links />
    </div>
  );
};
