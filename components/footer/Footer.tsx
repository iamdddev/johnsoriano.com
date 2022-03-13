import React from "react";
import { FooterProps } from ".";

export const Footer: React.FC<FooterProps> = (): React.ReactElement => {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-0 py-6 flex justify-between">
      <div className="text-slate-500 dark:text-slate-50">All rights reserved &copy; 2022</div>
    </div>
  );
};

export default Footer;
