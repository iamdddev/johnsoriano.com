import React from "react";
import LinkNext from "next/link";
import { LinkProps } from ".";

export const Link: React.FC<LinkProps> = ({ children, ...props }): React.ReactElement => {
  return (
    <LinkNext {...props}>
      <a className="no-underline text-pink-600 dark:text-pink-500 font-bold">{children}</a>
    </LinkNext>
  );
};

export default Link;
