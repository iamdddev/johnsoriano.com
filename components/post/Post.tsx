import React from "react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import Link from "components/link";
import { Youtube, Text, Heading, Pre, Code } from "components/utilities";
import "highlight.js/styles/atom-one-dark.css";

import { PostProps } from ".";

const components: any = {
  Image,
  Youtube,
  p: Text,
  h1: Heading.H1,
  h2: Heading.H2,
  code: Code,
  pre: Pre,
  a: Link,
};

export const Post: React.FC<PostProps> = ({ source, meta }): React.ReactElement => {
  return (
    <div className="relative py-16 bg-white dark:bg-black overflow-hidden">
      <div className="relative">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{meta.title}</span>
          </h1>
          {meta.excerpt && <p className="mt-8 text-xl text-gray-500 leading-8">{meta.excerpt}</p>}
        </div>
        <div className="mt-6 prose prose-fuchsia prose-xl text-gray-800 dark:text-gray-50 mx-auto">
          <MDXRemote {...source} components={components} />
        </div>
      </div>
    </div>
  );
};

export default Post;
