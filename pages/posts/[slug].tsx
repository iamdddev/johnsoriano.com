import Image from "next/image";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { getPostFromSlug, getSlugs, PostMeta } from "utils/api";
import { Youtube, Text, Heading, Pre, Code } from "components/utilities";
import PostComponent from "components/post";
import "highlight.js/styles/atom-one-dark.css";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

const components: any = {
  Image,
  Youtube,
  p: Text,
  h1: Heading.H1,
  h2: Heading.H2,
  pre: Pre,
  code: Code,
};

export default function Post({ post }: { post: MDXPost }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <PostComponent
        meta={{
          title: post.meta.title,
          excerpt: post.meta.excerpt,
          author: "",
          date: post.meta.date,
        }}
      >
        <MDXRemote {...post.source} components={components} />
      </PostComponent>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }], rehypeHighlight],
    },
  });
  return {
    props: {
      post: {
        source: mdxSource,
        meta,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
