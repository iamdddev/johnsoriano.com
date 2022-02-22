import React from "react";
import { H1Props, H2Props, HeadingProps } from ".";

interface HeadingComposition {
  H1: React.FC<H1Props>;
  H2: React.FC<H2Props>;
}

export const Heading: React.FC & HeadingComposition = (
  props
): React.ReactElement => {
  return <div>Heading</div>;
};

export const H1: React.FC<H1Props> = ({ children }) => {
  return <h1>{children}</h1>;
};

export const H2: React.FC<H2Props> = ({ children }) => {
  return <h2>{children}</h2>;
};

Heading.H1 = H1;
Heading.H2 = H2;

export default Heading;
