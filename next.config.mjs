import withPlaiceholder from '@plaiceholder/next';
import { withContentlayer } from 'next-contentlayer';

/**
 * @type {import('next').NextConfig}
 */

// contentlayer가 mjs랑 호환이 잘 안되는거 같다..  경고가 뜸
const nextConfig = withContentlayer({
  // ...
});


export default withPlaiceholder(nextConfig);