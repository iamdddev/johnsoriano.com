import React from "react";
import { HeroProps } from ".";

export const Hero: React.FC<HeroProps> = (): React.ReactElement => {
  return (
    <div className="text-slate-700 dark:text-slate-200 ">
      <h2 className="text-xs text-pink-500 my-2 font-sans font-thin">HEY👋, I&apos;M JOHN SORIANO</h2>
      <h2 className="text-xl font-bold my-2 leading-tigh font-sans">Full Stack Engineer</h2>
      <p className="text-xs">
        I helped small and medium-sized businesses in various industries such as manufacturing, finance, and commerce to deliver real value to their customers.
      </p>
    </div>
  );
};

export default Hero;
