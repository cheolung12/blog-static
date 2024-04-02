import { format } from 'date-fns';
import Image from 'next/image';
import Link from "next/link";
import { FC } from 'react';

type PostCardProps = {
    date: string;
    title: string;
    category: string;
    des: string;
    slug: string;
    thumbnail: string;
}

const PostCard: FC<PostCardProps> = ({date, title, category, des, slug, thumbnail}) => {
  return (
    <Link href={`/posts/${slug}`} className={`flex gap-10 p-4 rounded-lg shadow-md mb-4  hover:bg-signature4`}>
    <div className='relative aspect-[1.8/1.1] w-[340px] sm:block hidden'>
        <Image
          src={thumbnail}
          fill // 상위 요소 크기에 맞춰서 자동 지정
          alt={title}
          sizes='360px'
          className='object-cover z-0 rounded-lg'
          priority
        />
      </div>
      <div className='p-2 w-full'>
        <div className='flex items-center justify-between mb-3'>
          <h2 className='line-clamp-1 font-bold text-xl sm:text-2xl mt-2'>{title}</h2>
          <span className='font-medium text-sm text-gray-400 hidden sm:block'>
            {format(new Date(date), 'yyyy-MM-dd')}
          </span>
        </div>
        <span className='text-base bg-signature2 text-white rounded-md px-2 py-0.5 hidden sm:inline '>{category}</span>
        <div className='line-clamp-2 font-medium text-gray-600 text-xs sm:text-base mt-2 sm:mt-3'>{des}</div>
      </div>
  </Link>
  );
};
 
export default PostCard;