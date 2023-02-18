import Head from 'next/head';
import Link from 'next/link';
import { getAllPublished } from '../lib/notion';
import { useState } from 'react';

export default function Home({ posts }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Head>
        <title>VARUNDEF</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='pt-16'>
        <div className='gap-2 flex flex-col items-start lg:flex-row lg:items-center lg:justify-between w-3/4 m-auto'>
          <Link href=''>
            <h1 className='m-auto lg:m-0 text-2xl text-black font-semibold border-2 border-yellow-700 w-max p-3 cursor-pointer'>
              #VARUNDEF
            </h1>
          </Link>
          <nav className='flex items-center m-auto lg:mx-4 gap-4 text-xl text-black'>
            <Link href={'/about'}>About</Link>
            <Link href={''}>Blog</Link>
          </nav>
          <input
            className='border border-yellow-700 bg-gray-50 bg-opacity-30 shadow-inner py-2 px-3 w-full lg:w-52'
            type='text'
            placeholder='Search'
          />
        </div>
        <section className='w-3/4 m-auto flex flex-col divide-y lg:mt-8'>
          {posts.map((post, index) => (
            <section key={index} className='py-6'>
              <h2 className='w-max text-black text-xl font-semibold bg-yellow-100 rounded-sm'>
                <Link href={`/posts/${post.slug}`}>
                  <h2
                    onClick={() => {
                      setIsLoading(true);
                    }}>
                    {post.title}
                  </h2>
                </Link>
              </h2>
              <small className='text-sm hover:cursor-default'>{post.date}</small>
              <section className='mt-3 text-justify hover:cursor-default leading-6'>
                {post.description}
              </section>
              <div className='flex justify-end'>
                <Link
                  href={`/posts/${post.slug}`}
                  className='mt-2 mr-6 border-b border-yellow-700 hover:bg-yellow-100 hover:text-gray-900 hover:border-none transition ease-linear'>
                  <span
                    onClick={() => {
                      setIsLoading(true);
                    }}>
                    Read more
                  </span>
                </Link>
              </div>
            </section>
          ))}
        </section>
      </main>
      {isLoading && (
        <div className='fixed top-0 left-0 w-screen h-screen z-50 flex justify-center items-center bg-gray-300 bg-opacity-30'>
          <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500'></div>
        </div>
      )}
    </>
  );
}

export const getStaticProps = async () => {
  const data = await getAllPublished();
  return {
    props: {
      posts: data
    },
    revalidate: 60
  };
};