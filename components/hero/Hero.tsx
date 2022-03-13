import React from "react";
import { HeroProps } from ".";

export const Hero: React.FC<HeroProps> = (): React.ReactElement => {
  return (
    <div>
      <h1 className="text-3xl  font-semibold text-slate-700 dark:text-slate-200 my-2">I&apos;m John Soriano,</h1>
      <h2 className="text-2xl  text-slate-700 dark:text-slate-200 my-2">Let&apos;s create a better web experience together for humans.</h2>
    </div>
  );
};

export default Hero;
