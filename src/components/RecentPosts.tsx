'use client';

import { useCategoryStore } from '@/lib/store';
import { FC } from 'react';
import AnimationProvider from './AnimationProvider';
import PostList from './PostList';

const RecentPosts: FC = () => {
  const recentPosts = useCategoryStore((state) => state.posts).slice(0, 5);
  // const recentPosts = initialSortedPosts.slice(0, 5);

  return (
    <AnimationProvider className={`mt-8 sm:mt-12`}>
      <h1 className={`text-xl sm:text-3xl font-bold mb-2 sm:mb-8`}>Recent Posts</h1>
      <div className={`flex flex-col`}>
        <PostList sortedPosts={recentPosts} />
      </div>
    </AnimationProvider>
  );
};

export default RecentPosts;
