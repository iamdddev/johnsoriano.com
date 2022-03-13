import React from "react";
import { HeroProps } from ".";

export const Hero: React.FC<HeroProps> = (): React.ReactElement => {
  return (
    <div className="text-slate-700 dark:text-slate-200">
      <h2 className="text-xs text-pink-500 my-2 font-bold font-sans">HEY, I&apos;M JOHN SORIANO</h2>
      <h2 className="text-xl md:text-2xl font-extrabold my-2 leading-tight">Manila-based Web developer helping businesses to bring their ideas to life.</h2>
    </div>
  );
};

export default Hero;
