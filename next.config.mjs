import withPlaiceholder from '@plaiceholder/next';
import { withContentlayer } from 'next-contentlayer';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withPlaiceholder({
  // ...
});

// contentlayer가 mjs랑 호환이 잘 안되는거 같다..  경고가 뜸
export default withContentlayer(nextConfig);
