import {
  Block,
  BLOCKS,
  Inline,
  INLINES,
  MARKS,
} from '@contentful/rich-text-types';
import markdownStyles from './markdown-styles.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image, { ImageLoader, ImageLoaderProps } from 'next/image';
import Link from 'next/link';

type Props = {
  content: any;
};

const contentfulImageLoader: ImageLoader = ({
  src,
  width,
}: ImageLoaderProps) => {
  return `${src}?w=${width}`;
};

const PostBody = ({ content }: Props) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: Block | Inline, children: any) => (
        <h1 className="mt-12 mb-6 font-bold text-5xl text-accent-7">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node: Block | Inline, children: any) => (
        <h2 className="mt-12 mb-6 font-bold text-3xl text-accent-7">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node: Block | Inline, children: any) => (
        <h3 className="my-4 font-bold text-2xl text-accent-7">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node: Block | Inline, children: any) => (
        <h4 className="my-4 font-bold text-xl text-accent-7">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node: Block | Inline, children: any) => (
        <h5 className="my-4 font-normal text-xl text-accent-7">{children}</h5>
      ),
      [BLOCKS.HEADING_5]: (node: Block | Inline, children: any) => (
        <h6 className="my-4 font-normal text-xl text-accent-7">{children}</h6>
      ),
      [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: any) => (
        <p className="my-3 text-base leading-loose font-normal text-accent-7">
          {children}
        </p>
      ),
      [BLOCKS.QUOTE]: (node: Block | Inline, children: any) => (
        <blockquote className="border-info bg-info bg-opacity-10 rounded py-1 border-l-4 px-4 italic">
          {children}
        </blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
        return (
          <Image
            loader={contentfulImageLoader}
            src={node.data.target.fields.file.url}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          />
        );
      },
      [INLINES.HYPERLINK]: ({ data }, children: any) => (
        <Link
          href={data.uri}
          className="text-info"
          target={`${
            data.uri.startsWith('https://az-devblog.com') ? '_self' : '_blank'
          }`}
          rel={`${
            data.uri.startsWith('https://az-devblog.com')
              ? ''
              : 'noopener noreferrer'
          }`}
        >
          {children}
        </Link>
      ),
    },
    renderMark: {
      [MARKS.BOLD]: (text: any) => <b>{text}</b>,
    },

    renderText: (text: any) => text.replace('!', '?'),
  };
  return (
    <div className="max-w-2xl mx-auto">
      {documentToReactComponents(content, options)}
    </div>
  );
};

export default PostBody;
