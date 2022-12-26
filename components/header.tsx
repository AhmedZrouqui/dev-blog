import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-12 mb-10'>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/" className="hover:underline">
          AZ Dev Blog
        </Link>
        .
      </h2>
    </div>
    
  )
}

export default Header
