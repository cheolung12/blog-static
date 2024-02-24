import PostCard from '@/components/PostCard';
import { allPosts } from "contentlayer/generated";

const sortedPosts = allPosts.sort(
  (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
);

export default async function page() {

  return (
    <div className={`flex flex-col`}>
      {sortedPosts.map((post) => (
          <PostCard
            date={post.date}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            key={post._id}
            thumbnail={post.thumbnail}
          />
        ))}
    </div>
  );
}
