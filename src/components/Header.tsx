import Link from 'next/link';
import { FC } from 'react';
import Nav from './Nav';
import ScrollProgressBar from './ScrollProgressBar';

const Header: FC = () => {
  return (
    <div className='fixed w-full z-99'>
      <header
        className={`flex h-16 py-2 mx-auto w-[900px] bg-white items-center justify-between lg:h-20`}
      >
        <Link href='/'>
          <h1 className='text-3xl font-bold lg:text-3xl '>
            cheolung.<span className='text-signature'>dev</span>
          </h1>
        </Link>
        <Nav />
      </header>
      <ScrollProgressBar />
    </div>
  );
};

export default Header;
