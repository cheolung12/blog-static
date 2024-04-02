'use client';

import AnimationProvider from '@/components/AnimationProvider';
import CategoryFilter from '@/components/CategoryFilter';
import PostList from '@/components/PostList';
import { iconObj } from '@/lib/icon';
import { posts, useCategoryStore } from '@/lib/store';
import React from 'react';

const categories = [
  'All',
  ...Array.from(new Set(posts.map((p) => p.category))),
];

export default function Page() {
  const sortedPosts = useCategoryStore((state) => state.posts);
  const category = useCategoryStore((state) => state.category);

  return (
    <AnimationProvider className={`flex flex-col mt-4 sm:mt-2`}>
      <div className={`flex flex-col justify-center items-center gap-3 mb-4`}>
        <div className='text-3xl sm:text-[2.5rem] font-medium flex justify-center items-center gap-2'>
          {category}{' '}
          {React.createElement(iconObj[category][0] || 'div', {
            style: { color: iconObj[category][1] },
          })}
        </div>
        <div className='text-lg sm:text-xl font-light'>{sortedPosts.length} posts</div>
      </div>
      <CategoryFilter type={'General'} categories={categories} />
      <div className={`flex flex-col gap-2 mt-2 sm:mt-6`}>
        <PostList sortedPosts={sortedPosts} />
      </div>
    </AnimationProvider>
  );
}
