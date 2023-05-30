import Alert from './alert';
import Footer from './footer';
import Meta from './meta';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
  ogImage?: string;
};

const Layout = ({ preview, children, ogImage }: Props) => {
  return (
    <>
      <Meta ogImage={ogImage} />
      <div className="min-h-screen bg-paper">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
