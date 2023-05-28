import cn from 'classnames';
import Link from 'next/link';
import Image, { ImageLoaderProps, ImageLoader } from 'next/image';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const contentfulImageLoader: ImageLoader = ({
  src,
  width,
}: ImageLoaderProps) => {
  return `${src}?w=${width}`;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('w-[70%] mx-auto rounded-lg object-cover', {
        'hover:shadow-lg transition-shadow duration-200 max-h-[200px] md:max-w-[200px]':
          slug,
      })}
      width={1300}
      height={270}
      loader={contentfulImageLoader}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
