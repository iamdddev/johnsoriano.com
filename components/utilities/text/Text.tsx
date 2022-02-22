import React from "react";
import { TextProps } from ".";

export const Text: React.FC<TextProps> = (props): React.ReactElement => {
  return <p {...props} />;
};

export default Text;
