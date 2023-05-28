import React from 'react';
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

function PreviewImage({ title, src, slug }: Props) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('mx-auto h-full object-cover md:max-w-[300px] rounded-lg', {
        'max-h-full': slug,
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
}

export default PreviewImage;
