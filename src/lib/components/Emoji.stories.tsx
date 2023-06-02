import React from "react";
import type { Story } from "@ladle/react";
import { Emoji, EmojiProps } from "./Emoji";

const Template = (props: EmojiProps) => (
  <div className="m-auto">
    <Emoji {...props} />
  </div>
);

export const Default: Story = () => (
  <Template label="Emoji" symbol="🚀" className="w-5" />
);

export const NoLabel = () => <Template symbol="🚀" className="w-5" />;

export const MultipleSymbols = () => (
  <Template label="MultipleSymbols" symbol="🚀🦕" className="w-5" />
);
