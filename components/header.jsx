import Link from 'next/link';

export default function Header() {
  return (
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
  );
}
