import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import markdownStyles from "./markdown-styles.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type Props = {
  content: any;
};

const PostBody = ({ content }: Props) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: any) => (
        <h1 className="my-4 font-bold text-5xl">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <h2 className="my-4 font-bold text-3xl">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <h3 className="my-4 font-bold text-2xl">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: any) => (
        <h4 className="my-4 font-bold text-xl">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: any) => (
        <h5 className="my-4 font-normal text-xl">{children}</h5>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: any) => (
        <h6 className="my-4 font-normal text-xl">{children}</h6>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="mb-3">{children}</p>
      ),
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
