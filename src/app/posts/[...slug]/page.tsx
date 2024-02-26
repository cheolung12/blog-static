import Giscus from '@/components/Giscus';
import { allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

// 정적 경로 생성 (getStaticPath)
export const generateStaticParams = () => {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath.split('/') }));
};

export default function Posts({ params }) {
  const post = allPosts.find(
    (p) => p._raw.flattenedPath === params.slug.join('/')
  );
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <div className='flex flex-col pb-20 gap-7 mx-5 mt-6'>
      <h1 className='text-5xl font-bold mb-1'>{post.title}</h1>
      <div className='flex flex-row items-center justify-between -mb-2'>
        <div className='rounded-md bg-slate-800 px-2 py-1 text-md text-white'>
          {post.category}
        </div>
        <div className='text-md'>
          {format(new Date(post.date), 'yyyy년 M월 d일')}
        </div>
      </div>
      <Image
        src={post.thumbnail}
        alt={post.title}
        width={0}
        height={0}
        sizes='100vw'
        className='h-auto w-full mb-8'
      />

      <div className='prose mb-12'>
        <MDXComponent className='min-w-full' />
      </div>

      <Giscus />
    </div>
  );
}
