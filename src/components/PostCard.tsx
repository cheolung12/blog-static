import { format } from 'date-fns';
import Image from 'next/image';
import Link from "next/link";
import { FC } from 'react';

type PostCardProps = {
    date: string;
    title: string;
    des: string;
    slug: string;
    thumbnail: string;
}

const PostCard: FC<PostCardProps> = ({date, title, des, slug, thumbnail}) => {
  return (
    <Link href={`/posts/${slug}`} className={`flex hover:bg-slate-100 gap-10 p-4 rounded-sm`}>
    <div className='relative aspect-[1.8/1] w-[340px]'>
        <Image
          src={thumbnail}
          fill // 상위 요소 크기에 맞춰서 자동 지정
          alt={title}
          sizes='360px'
          className='object-cover z-0'
          priority
        />
      </div>
      <div className='p-2 w-full'>
        <div className='flex items-center justify-between mb-2.5'>
          <h2 className='font-bold text-xl sm:text-2xl mt-2'>{title}</h2>
          <span className='font-medium text-sm text-gray-400 hidden sm:block'>
            {format(new Date(date), 'yyyy-MM-dd')}
          </span>
        </div>
        <div className='line-clamp-1 font-medium text-gray-600 text-sm sm:text-lg mt-2 sm:mt-4'>{des}</div>
      </div>
  </Link>
  );
};
 
export default PostCard;