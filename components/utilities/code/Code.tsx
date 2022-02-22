import React from "react";
import { CodeProps } from ".";

export const Code: React.FC<CodeProps> = (props): React.ReactElement => {
  return <code {...props} />;
};

export default Code;
