import React from "react";

import { H1Props, H2Props, H3Props, H4Props, HeadingProps } from ".";

interface HeadingComposition {
  H1: React.FC<H1Props>;
  H2: React.FC<H2Props>;
  H3: React.FC<H3Props>;
  H4: React.FC<H4Props>;
}

export const Heading: React.FC & HeadingComposition = (props): React.ReactElement => {
  return <div>Heading</div>;
};

export const H1: React.FC<H1Props> = ({ children }) => {
  return <h1>{children}</h1>;
};

export const H2: React.FC<H2Props> = ({ children }) => {
  return <h2>{children}</h2>;
};

export const H3: React.FC<H3Props> = ({ children }) => {
  return <h3>{children}</h3>;
};

export const H4: React.FC<H3Props> = ({ children }) => {
  return <h4>{children}</h4>;
};

Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;

export default Heading;
