import { BlogPost } from '../shared/types';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

interface IBlogPostContent {
  blogPost: BlogPost;
}

const Content = (props: IBlogPostContent): JSX.Element => {
  const { blogPost } = props;

  return (
    <div className="prose lg:prose-xl container mx-auto py-24 text-tundora text-base p-6 blog-content">
      <ReactMarkdownWithHtml allowDangerousHtml>{blogPost.content}</ReactMarkdownWithHtml>
    </div>
  );
};

export default Content;
