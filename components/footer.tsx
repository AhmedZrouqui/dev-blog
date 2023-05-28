import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';

const Footer = () => {
  return (
    <footer className="bg-paper">
      <Container>
        <div className="py-14 flex flex-col lg:flex-row items-center justify-center">
          <h3 className="text-xl font-bold tracking-tighter leading-tight text-center lg:mb-0 lg:w-1/2 text-[#d1d1d1]">
            AZ | Dev blog
          </h3>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
