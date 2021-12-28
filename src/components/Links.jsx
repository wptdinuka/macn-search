import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/home', text: ' Home' },
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/images', text: '📸 Images' },
  { url: '/videos', text: '📺 Videos' },
];

export const Links = () => (
  <div className="flex sm:justify-around  items-center mt-6 text-base   ">
    {links.map(({ url, text }) => (
      <NavLink to={url} activeClassName=" pr-5  text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">{text}</NavLink>
    ))}
  </div>
);
