'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Intro: FC = () => {
  return (
    <>
      <div className='flex justify-center items-center w-full mt-8 mb-8 sm:mb-12'>
        <div className='border overflow-hidden mx-auto sm:mx-12 mr-2.5 my-0 sm:w-36 sm:h-36 w-24 h-24 rounded-full relative'>
          <Image
            className='absolute inset-0 object-cover w-full h-full'
            src='/keyboard.gif'
            width={0}
            height={40}
            sizes=''
            alt='profile'
            priority
          />
        </div>
        <div className='flex flex-grow flex-col justify-center items-start gap-3'>
          <div className='bg-signature4 text-md sm:text-lg font-bold text-signature rounded-lg px-2'>
            @cheolung12
          </div>
          <div className='text-slate-500 mx-1 text-sm sm:text-base'>
            Do what scares you until it doesn&apos;t.
          </div>
          <div className='flex gap-4 text-signature font-semibold mx-1 text-sm sm:text-base'>
            <Link href='https://github.com/cheolung12' target='_blank' className='hover:drop-shadow-xl'>
              Github
            </Link>
            <Link href='mailto:cheolung97@gmail.com' target='_blank' className='hover:drop-shadow-xl'>
              Email
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full border-t-2'></div>
    </>
  );
};

export default Intro;
