import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gruvboxLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { getAllPublished, getSingleBlogPostBySlug } from '../../lib/notion';

const CodeBlock = ({ language, codestring }) => {
  return (
    <SyntaxHighlighter language={language} style={gruvboxLight} PreTag='div'>
      {codestring}
    </SyntaxHighlighter>
  );
};
const Post = ({ post }) => {
  return (
    <>
      <section className='p-6 lg:p-0 lg:w-3/4 m-auto lg:my-8'>
        <a className='bg-yellow-100 text-black' href='/'>Back to list</a>
        <h2 className='text-xl font-semibold mt-4'>{post.metadata.title}</h2>
        <span>{post.metadata.date}</span>
        {/* <div className='flex gap-2'>
        {post.metadata.tags.map((tag) => (
          <p className='text-gray-400 border border-yellow-100'>{tag}</p>
        ))}
      </div> */}
        <ReactMarkdown
          className='mt-8'
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <CodeBlock codestring={String(children).replace(/\n$/, '')} language={match[1]} />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          }}>
          {post.markdown}
        </ReactMarkdown>
      </section>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSingleBlogPostBySlug(params.slug);
  return {
    props: {
      post
    },
    revalidate: 60
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPublished();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: 'blocking'
  };
};

export default Post;
