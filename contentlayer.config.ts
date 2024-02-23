import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    category: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
});
