'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Intro: FC = () => {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  return (
    <div className='flex mt-8 mb-6 sm:mb-14'>
      <motion.div
        className='flex-1 flex flex-col justify-center gap-2 sm:gap-6'
        initial='hidden'
        animate='visible'
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <motion.div
          className='text-xs sm:text-2xl font-semibold'
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
        >
           <span className='text-signature font-semibold'>프론트엔드</span> 개발자 홍철웅 입니다.
        </motion.div>
        <motion.div className='text-[0.6rem] sm:text-base lg:text-lg' variants={itemVariants}>
          <span className='font-semibold'>더 나은 사용자 경험</span>에 대하여 끊임 없이 고민하며,
        </motion.div>
        <motion.div className='text-[0.6rem] sm:text-base lg:text-lg' variants={itemVariants}>
        <span className='font-semibold'>지속적인 성장</span>을 추구합니다.
        </motion.div>
        <motion.div
          className='flex gap-4 sm:gap-6 items-center text-base sm:text-2xl mt-2'
          variants={itemVariants}
        >
          <Link href='mailto:cheolung97@gmail.com' target='_blank'>
            <SiGmail />
          </Link>
          <Link href='https://github.com/cheolung12' target='_blank'>
            <FaGithub />
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className='flex-1'
        initial='hidden'
        animate='visible'
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      >
        <Image
          className='w-full'
          src='/profile.jpg'
          width={0}
          height={0}
          sizes='30vw'
          alt='image'
        />
      </motion.div>
    </div>
  );
};

export default Intro;
