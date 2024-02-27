'use client';

import { useCategoryStore } from '@/lib/store';
import { FC } from 'react';
import AnimationProvider from './AnimationProvider';
import PostList from './PostList';

const RecentPosts: FC = () => {
  const sortedPosts = useCategoryStore((state) => state.sortedPosts).slice(0,3);

  return (
    <AnimationProvider className={`mt-10`}>
      <h1 className={`text-3xl font-bold mb-8`}>📬 Recent Posts</h1>
      <div className={`flex flex-col`}>
        <PostList sortedPosts={sortedPosts} />
      </div>
    </AnimationProvider>
  );
}

export default RecentPosts