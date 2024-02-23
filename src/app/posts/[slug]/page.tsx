import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export const generateStaticParams = () => {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
};

export default function Posts({ params }) {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <div className='mt-10 prose'>
      <h1 className='text-sky-700'>{post.title}</h1>
      <MDXComponent />
    </div>
  );
}
