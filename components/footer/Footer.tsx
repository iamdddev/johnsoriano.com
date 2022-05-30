import Link from "next/link";
import React from "react";
import { FooterProps } from ".";

export const Footer: React.FC<FooterProps> = (): React.ReactElement => {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-0 py-6 flex justify-between font-thin">
      <div className="flex flex-col space-y-4 ">
        <Link href="/privacy">
          <a className="underline text-slate-500 dark:text-slate-50">Privacy Policy</a>
        </Link>
        <Link href="/terms">
          <a className="underline text-slate-500 dark:text-slate-50">Terms of service</a>
        </Link>
      </div>
      <div className="flex flex-col space-y-4">
        <Link href="/about">
          <a className="underline text-slate-500 dark:text-slate-50">About</a>
        </Link>
        <Link href="/contact">
          <a className="underline text-slate-500 dark:text-slate-50">Contact</a>
        </Link>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-slate-500 dark:text-slate-50">All rights reserved &copy; 2022</div>
        <div className="text-slate-500 dark:text-slate-50">Built with NextJS/MDX &amp; ❤️‍🔥</div>
      </div>
    </div>
  );
};

export default Footer;
