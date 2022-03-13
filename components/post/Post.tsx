import React from "react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import Link from "components/link";
import { Youtube, Text, Heading, Pre, Code } from "components/utilities";

import { PostProps } from ".";

const components: any = {
  Image,
  Youtube,
  p: Text,
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  code: Code,
  pre: Pre,
  a: Link,
};

export const Post: React.FC<PostProps> = ({ source, meta }): React.ReactElement => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        <div className="text-lg mx-auto">
          <h1 className="mt-2 block sm:text-center font-extrabold tracking-tight text-slate-800 dark:text-slate-50 text-3xl sm:text-4xl">{meta.title} and make better choices</h1>
          {meta.excerpt && <p className="mt-8 text-sm text-gray-500 leading-8">{meta.excerpt}</p>}
        </div>
        <div className="mt-6 prose prose-fuchsia prose-xl text-slate-800 dark:text-slate-50 mx-auto">
          <MDXRemote {...source} components={components} />
        </div>
      </div>
    </div>
  );
};

export default Post;
