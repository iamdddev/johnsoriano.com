import React from "react";
import Image, { ImageProps } from "next/image";
import { ImgProps } from ".";

export const Img: React.FC<ImgProps> = (props): React.ReactElement => <Image alt={props.alt} layout="responsive" {...props} />;

export default Img;
