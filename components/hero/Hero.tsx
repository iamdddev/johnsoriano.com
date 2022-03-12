import React from "react";
import Highlighther from "components/highligther";
import { HeroProps } from ".";

export const Hero: React.FC<HeroProps> = (): React.ReactElement => {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];

  return (
    <div>
      <h1 className="text-3xl  font-semibold text-slate-700 dark:text-slate-200 my-2">I'm John Soriano,</h1>
      <h2 className="text-2xl  text-slate-700 dark:text-slate-200 my-2">Let's create a better web experience together for humans.</h2>
    </div>
  );
};

export default Hero;
