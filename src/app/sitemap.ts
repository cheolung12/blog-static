import { allPosts } from 'contentlayer/generated';
import { MetadataRoute } from 'next';

const postSiteMap: MetadataRoute.Sitemap = allPosts.map((post) => {
  return {
    url: `https://cheolung.dev/posts/${post._raw.flattenedPath}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  };
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cheolung.dev',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://cheolung.dev/posts',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://cheolung.dev/algorithm',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    ...postSiteMap,
  ];
}
