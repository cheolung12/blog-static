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
    <Link href={`/posts/${slug}`} className={`flex hover:bg-slate-100 gap-4 p-4 rounded-sm`}>
    <div className='relative aspect-[1.8/1] w-[300px]'>
        <Image
          src={thumbnail}
          fill // 상위 요소 크기에 맞춰서 자동 지정
          alt={title}
          sizes='360px'
          className='object-cover'
          priority
        />
      </div>
      <div className='p-2 w-full'>
        <div className='flex items-center justify-between mb-2.5'>
          <h2 className='font-extrabold text-2xl mt-2'>{title}</h2>
          <span className='font-medium text-sm text-gray-400'>
            {format(new Date(date), 'yyyy-MM-d')}
          </span>
        </div>
        <div className='line-clamp-3 font-medium text-gray-600 text-xl mt-1'>{des}</div>
      </div>
  </Link>
  );
};
 
export default PostCard;