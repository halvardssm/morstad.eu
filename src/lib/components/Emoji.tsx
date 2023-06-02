import { FC } from "react";
import twemoji from "twemoji";

export interface EmojiProps {
  label?: string;
  symbol: string;
  className?: string;
}

const Emoji: FC<EmojiProps> = (props) => (
  <span
    className={`emoji ${props.className}`}
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    <span
      dangerouslySetInnerHTML={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        __html: twemoji.parse(props.symbol, {
          folder: "svg",
          ext: ".svg",
        }),
      }}
    />
  </span>
);

export default Emoji;
