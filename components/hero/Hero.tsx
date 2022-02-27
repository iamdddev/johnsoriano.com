import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import Highlighther from "components/highligther";
import { HeroProps } from ".";

export const Hero: React.FC<HeroProps> = (): React.ReactElement => {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];

  
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <Highlighther color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">Developer.</h1>
          </Highlighther>
        </RoughNotationGroup>
      </div>
    </div>
  );
};

export default Hero;