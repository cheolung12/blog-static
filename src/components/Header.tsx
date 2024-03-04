'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import Nav from './Nav';
import ScrollProgressBar from './ScrollProgressBar';

const Header: FC = () => {
  const pathname = usePathname()
  const isProgressBar = pathname.includes('/posts/') && pathname.split('/').length >= 3;

  return (
    <div className='fixed w-full z-50'>
      <header
        className={`flex h-16 py-2 mx-auto w-[375px] sm:w-[700px] lg:w-[840px] bg-white items-center justify-between md:h-[4.5rem] 2xl:h-20`}
      >
        <Link href='/'>
          <h1 className='text-base sm:text-3xl font-bold lg:text-3xl'>
            cheolung.<span className='text-signature'>dev</span>
          </h1>
        </Link>
        <Nav />
      </header>
      {isProgressBar && <ScrollProgressBar />}
    </div>
  );
};

export default Header;
