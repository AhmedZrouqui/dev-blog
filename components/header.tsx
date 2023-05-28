import Link from 'next/link';

const Header = () => {
  return (
    <div className="py-12 mb-10">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold tracking-tight md:tracking-tighter leading-tight text-accent-7">
          <Link href="/" className="text-accent-2 bg-accent-7 p-2 rounded-lg">
            Az Devblog.
          </Link>
        </h2>
        <div className="flex gap-6 text-accent-7 text-sm font-semibold">
          <Link href="/">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
