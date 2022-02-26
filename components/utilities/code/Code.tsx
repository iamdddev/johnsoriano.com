import React from "react";
import { CodeProps } from ".";

export const Code: React.FC<CodeProps> = (props): React.ReactElement => {
  return <code className="text-gray-800 dark:text-gray-100" {...props} />;
};

export default Code;
