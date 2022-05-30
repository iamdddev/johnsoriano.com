import type { GetStaticProps, NextPage } from "next";
import Hero from "components/hero";
import Layout from "components/layout";
import Navigation from "components/navigation";
import Footer from "components/footer";
import { getAllPosts } from "utils/api";
import PostList from "components/post/PostList";
import Head from "next/head";
import Link from "next/link";

const links = [
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Posts",
    link: "/posts",
  },
  {
    text: "Résumé",
    link: "/resume",
  },
];

const Home: NextPage<{ posts: any }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>John Soriano - Full Stack Engineer</title>
      </Head>
      <Layout navigation={<Navigation branded links={links} />} footer={<Footer />}>
        <div className="space-y-32">
          <div className="space-y-8">
            <Hero />
            {/* <Link href="/services">
              <button className=" bg-purple-500 text-slate-50 font-bold py-2 px-4 rounded">Services</button>
            </Link> */}
          </div>
          <div className="mb-20">
            <h2 className="text-sm text-slate-700 dark:text-slate-50 font-semibold my-2 font-sans">Featured Posts</h2>
            <PostList posts={posts} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts()
    .slice(0, 5)
    .map((post) => post.meta);
  return {
    props: { posts },
  };
};

export default Home;
