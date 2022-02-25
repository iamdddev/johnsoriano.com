import React from "react";
import { RoughNotation } from "react-rough-notation";
import { HighlightherProps } from ".";

export const Highlighther: React.FC<HighlightherProps> = ({ children, color }): React.ReactElement => {
  const animationDuration = Math.floor(30 * React.Children.count(children));
  return (
    <RoughNotation type="highlight" multiline={true} padding={[0, 2]} iterations={1} animationDuration={animationDuration} color={color}>
      {children}
    </RoughNotation>
  );
};

export default Highlighther;
