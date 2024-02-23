'use client';

import navlinks from '@/lib/navlinks';
import Link from 'next/link';
import { FC } from 'react';

const Nav: FC = () => {
    return (
      <nav>
        {navlinks.map((nav) => (
          <Link href={nav.link} key={nav.title}>
            <span className={`mr-5`}>{nav.title}</span>
          </Link>
        ))}
      </nav>
    );
  };
   
  export default Nav;