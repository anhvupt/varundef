import Link from 'next/link';

export default function Header() {
  return (
    <div className='gap-2 flex flex-col items-start lg:flex-row lg:items-center lg:justify-between w-3/4 m-auto'>
      <Link href=''>
        <h1 className='m-auto lg:m-0 text-2xl text-black font-semibold border border-yellow-700 w-max p-3 cursor-pointer'>
          #VARUNDEF
        </h1>
      </Link>
      <nav className='inline m-auto lg:mx-4 text-xl text-black divide-x divide-yellow-700'>
        <Link className='px-4' href={'/about'}>About</Link>
        <Link className='px-4' href={'/'}>Blog</Link>
      </nav>
      <span className='block text-black border border-yellow-700 p-3 rounded-full cursor-pointer'>Search</span>
    </div>
  );
}
