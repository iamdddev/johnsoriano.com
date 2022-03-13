import React from "react";
import { HeroProps } from ".";

export const Hero: React.FC<HeroProps> = (): React.ReactElement => {
  return (
    <div className="text-slate-700 dark:text-slate-200 text-center md:text-left">
      <h2 className="text-xs text-pink-500 my-2 font-semibold font-sans">HELLO, I&apos;M JOHN SORIANO</h2>
      <h2 className=" text-3xl font-extrabold my-2 leading-tight">Let&apos;s create a better web experience together for humans.</h2>
    </div>
  );
};

export default Hero;
