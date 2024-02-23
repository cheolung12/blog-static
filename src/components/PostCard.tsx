import Link from "next/link";
import { FC } from 'react';

type PostCardProps = {
    date: string;
    title: string;
    des: string;
    slug: string;
}

const PostCard: FC<PostCardProps> = ({date, title, des, slug}) => {
  return (
    <Link href={`/posts/${slug}`} passHref>
    <div className="w-full my-7 hover:-translate-x-1.5">
      <div className="font-medium text-xs text-gray-400">{date}</div>
      <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
      <div className={`font-medium text-gray-600 text-xl mt-1`}>{des}</div>
    </div>
  </Link>
  );
};
 
export default PostCard;