'use client';

import { Post } from 'contentlayer/generated';
import React, { FC } from 'react';
import PostCard from './PostCard';

type PostListProps = {
  sortedPosts: Post[];
};

const PostList: FC<PostListProps> = ({ sortedPosts }) => {
 
  return (
    <React.Fragment>
      {sortedPosts.map((post) => (
        <PostCard
          date={post.date}
          title={post.title}
          category={post.category}
          des={post.description}
          slug={post._raw.flattenedPath}
          key={post._id}
          thumbnail={post.thumbnail}
        />
      ))}
    </React.Fragment>
  );
};

export default PostList;
