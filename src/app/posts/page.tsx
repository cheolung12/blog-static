'use client';

import AnimationProvider from '@/components/AnimationProvider';
import CategoryFilter from '@/components/CategoryFilter';
import PostList from '@/components/PostList';
import { iconObj } from '@/lib/icon';
import { useCategoryStore } from '@/lib/store';
import { allPosts } from 'contentlayer/generated';
import React from 'react';

const categories = [
  'All',
  ...Array.from(new Set(allPosts.map((p) => p.category))),
];

export default function Page() {
  const sortedPosts = useCategoryStore((state) => state.sortedPosts);
  const category = useCategoryStore((state) => state.selected);

  return (
    <AnimationProvider className={`flex flex-col`}>
      <div className={`flex flex-col justify-center items-center gap-2 mb-4`}>
        <div className='text-4xl font-medium flex justify-center items-center gap-2'>
          {category}{' '}
          {React.createElement(iconObj[category][0] || 'div', {
            style: { color: iconObj[category][1] },
          })}
        </div>
        <div className='text-2xl font-light'>{sortedPosts.length} posts</div>
      </div>
      <CategoryFilter categories={categories} />
      <div className={`flex flex-col gap-2`}>
        <PostList sortedPosts={sortedPosts} />
      </div>
    </AnimationProvider>
  );
}
