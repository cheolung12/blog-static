import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'cheolung\'s blog',
  description: '개발 관련 이야기를 나누는 블로그입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} flex flex-col justify-between h-screen w-screen overflow-y-auto`}
      >
        <Header />
        <div className={`flex flex-col flex-grow w-[350px] sm:w-[700px] lg:w-[840px] mx-auto mt-16 sm:mt-24 mb-14`}>
          <main className='w-full'>{children}</main>
        </div>
      <Footer />
      </body>
    </html>
  );
}
