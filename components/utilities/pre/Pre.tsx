import React from "react";
import { PreProps } from ".";

export const Pre: React.FC<PreProps> = (props): React.ReactElement => {
  return <pre {...props} />;
};

export default Pre;
