import Link from "next/link";
import React from "react";
import { FooterProps } from ".";

export const Footer: React.FC<FooterProps> = (): React.ReactElement => {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-0 py-6 flex justify-between">
      <div className="flex flex-col space-y-4">
        <Link href="/privacy">
          <a className="underline">Privacy Policy</a>
        </Link>
        <Link href="/terms">
          <a className="underline">Terms of service</a>
        </Link>
      </div>
      <div className="flex flex-col space-y-4">
        <Link href="/about">
          <a className="underline">About</a>
        </Link>
        <Link href="/contact">
          <a className="underline">Contact</a>
        </Link>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-slate-500 dark:text-slate-50">All rights reserved &copy; 2022</div>
        <div>Built with NextJS/MDX</div>
      </div>
    </div>
  );
};

export default Footer;
