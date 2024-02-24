'use client';

import navlinks from '@/lib/navlinks';
import Link from 'next/link';
import { FC } from 'react';

const Nav: FC = () => {
  return (
    <nav className={`flex justify-around text-2xl gap-4 font-bold`}>
      {navlinks.map((nav) => (
        <Link href={nav.link} key={nav.title} className={`hover:underline`}>
          <span>{nav.title}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
