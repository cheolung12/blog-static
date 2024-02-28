'use client';

import { initialSortedPosts } from '@/lib/store';
import { FC } from 'react';
import AnimationProvider from './AnimationProvider';
import PostList from './PostList';

const RecentPosts: FC = () => {
  const recentPosts = initialSortedPosts.slice(0, 3);

  return (
    <AnimationProvider className={`mt-10`}>
      <h1 className={`text-3xl font-bold mb-8`}>📬 Recent Posts</h1>
      <div className={`flex flex-col`}>
        <PostList sortedPosts={recentPosts} />
      </div>
    </AnimationProvider>
  );
};

export default RecentPosts;
