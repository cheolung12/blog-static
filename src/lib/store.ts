import { Post, allPosts } from 'contentlayer/generated';
import { create } from 'zustand';

// 모든 포스트를 날짜 순으로 정렬
export const initialSortedPosts = allPosts.sort(
  (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
);

type State = {
  sortedPosts: Post[];
  selected: string;
};

type Action = {
  updateCategory: (category: State['selected']) => void;
};

export const useCategoryStore = create<State & Action>((set) => ({
  sortedPosts: initialSortedPosts,
  selected: 'All',
  updateCategory: (category) =>
    set((state) => ({
      selected: category,
      sortedPosts:
        category === 'All'
          ? initialSortedPosts
          : initialSortedPosts.filter((post) => post.category === category),
    })),
}));
