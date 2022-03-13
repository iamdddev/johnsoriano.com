import React from "react";
import { FooterProps } from ".";

export const Footer: React.FC<FooterProps> = (): React.ReactElement => {
  return <div className="max-w-2xl mx-auto px-6 md:px-0 py-6">This is footer</div>;
};

export default Footer;
