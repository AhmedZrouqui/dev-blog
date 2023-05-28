import Container from './container';
import cn from 'classnames';
import { EXAMPLE_PATH } from '../lib/constants';

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-2 border-accent-2 text-white': preview,
        'bg-accent-2 border-none': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm text-accent-7">
          <>
            This dev blog is built and ran by{' '}
            <a
              href="https://ahmedzrouqui.com"
              className="underline hover:text-teal-300 duration-200 transition-colors"
              rel="noreferrer"
              target="_blank"
            >
              Ahmed Zrouqui
            </a>{' '}
          </>
        </div>
      </Container>
    </div>
  );
};

export default Alert;
