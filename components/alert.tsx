import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          <>
            This dev blog is built and ran by{" "}
            <a
              href="https://ahmedzrouqui.com"
              className="underline hover:text-teal-300 duration-200 transition-colors"
              rel="noreferrer"
              target="_blank"
            >
              Ahmed Zrouqui
            </a>{" "}
          </>
        </div>
      </Container>
    </div>
  );
};

export default Alert;
