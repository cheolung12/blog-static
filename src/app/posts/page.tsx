'use client';

import CategoryFilter from '@/components/CategoryFilter';
import PostList from '@/components/PostList';
import { useCategoryStore } from '@/lib/store';
import { allPosts } from 'contentlayer/generated';

const categories =  ['All', ...Array.from(new Set(allPosts.map((p) => p.category)))];
export default function page() {
  const sortedPosts = useCategoryStore((state) => state.sortedPosts);
  const category = useCategoryStore((state) => state.selected);

  return (
    <div className={`flex flex-col`}>
      <div className={`flex flex-col justify-center items-center gap-2 mb-4`}>
        <div className='text-4xl font-medium'>{category}</div>
        <div className='text-2xl font-light'>{sortedPosts.length} posts</div>
      </div>
      <CategoryFilter categories={categories} />
      <div className={`flex flex-col gap-2`}>
        <PostList sortedPosts={sortedPosts} />
      </div>
    </div>
  );
}
