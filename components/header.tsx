import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-12'>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/" className="hover:underline">
          Az - Dev Blog
        </Link>
        .
      </h2>
      <div className='flex gap-4'>
        <Link href={'/'} className="hover:underline font-medium">
          Home
        </Link>
        <Link href={'/posts'} className="hover:underline font-medium">
          Blogs
        </Link>
        <a className="hover:underline font-medium" href='https://ahmedzrouqui.com' target="_blank" rel="noreferrer">
          Portfolio
        </a>
      </div>
    </div>
    
  )
}

export default Header
