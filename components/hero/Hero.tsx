import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import Highlighther from "components/highligther";
import { HeroProps } from ".";

export const Hero: React.FC<HeroProps> = (): React.ReactElement => {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];

  return <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-200 my-2">Under development</h1>;
};

export default Hero;
