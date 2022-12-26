import { Block, BLOCKS, Inline, MARKS } from "@contentful/rich-text-types";
import markdownStyles from "./markdown-styles.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image, { ImageLoader, ImageLoaderProps } from "next/image"

type Props = {
  content: any;
};

const contentfulImageLoader: ImageLoader = ({ src, width }: ImageLoaderProps) => {
  return `${src}?w=${width}`
}

const PostBody = ({ content }: Props) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: Block | Inline, children: any) => (
        <h1 className="my-4 font-bold text-5xl text-[#1D1D1D]">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: Block | Inline, children: any) => (
        <h2 className="my-4 font-bold text-3xl text-[#1D1D1D]">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: Block | Inline, children: any) => (
        <h3 className="my-4 font-bold text-2xl text-[#1D1D1D]">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node: Block | Inline, children: any) => (
        <h4 className="my-4 font-bold text-xl text-[#1D1D1D]">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node: Block | Inline, children: any) => (
        <h5 className="my-4 font-normal text-xl text-[#1D1D1D]">{children}</h5>
      ),
      [BLOCKS.HEADING_5]: (node: Block | Inline, children: any) => (
        <h6 className="my-4 font-normal text-xl text-[#1D1D1D]">{children}</h6>
      ),
      [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: any) => (
        <p className="mb-3 text-lg leading-relaxed font-normal text-[#1D1D1D]">{children}</p>
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
        )
      },
    },
    renderMark: {
      [MARKS.BOLD]: (text: any) => <b>{text}</b>,
    },

    renderText: (text: any) => text.replace("!", "?"),
  };
  return (
    <div className="max-w-2xl mx-auto">
      {documentToReactComponents(content, options)}
    </div>
  );
};

export default PostBody;
