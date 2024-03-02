import { Post, allPosts } from 'contentlayer/generated';
import { create } from 'zustand';

// 모든 포스트를 날짜 순으로 정렬
export const initialSortedPosts: Post[] = allPosts.sort(
  (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
);

const algoCategories: string[] = ['Algorithm', 'Baekjoon', 'Programmers'];

// 일반 게시물과 알고리즘 게시물 분류
export const posts: Post[] = [];
export const algoPosts: Post[] = [];

initialSortedPosts.forEach(post => {
  if (algoCategories.includes(post.category)) {
    algoPosts.push(post);
  } else {
    posts.push(post);
  }
});

type State = {
  posts: Post[];
  algoPosts: Post[];
  category: string;
  algoCategory: string;
};

type Action = {
  updateCategory: (category: State['category']) => void;
  updateAlgoCategory: (category: State['algoCategory']) => void;
};

export const useCategoryStore = create<State & Action>((set) => ({
  posts,
  algoPosts,
  category: 'All',
  algoCategory: 'All',
  updateCategory: (category) =>
    set((state) => ({
      category,
      posts:
        category === 'All'
          ? posts
          : posts.filter((post) => post.category === category),
    })),
    updateAlgoCategory: (category) => 
    set((state) => ({
      algoCategory: category,
      algoPosts:
        category === 'All'
          ? algoPosts
          : algoPosts.filter((post) => post.category === category),
    })),
}));
