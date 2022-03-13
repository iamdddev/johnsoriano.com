import type { GetStaticProps, NextPage } from "next";
import Hero from "components/hero";
import Layout from "components/layout";
import Navigation from "components/navigation";
import Footer from "components/footer";
import { getAllPosts } from "utils/api";
import PostList from "components/post/PostList";

const links = [
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Codes",
    link: "/code",
  },
  {
    text: "Posts",
    link: "/posts",
  },
];

const Home: NextPage<{ posts: any }> = ({ posts }) => {
  return (
    <Layout navigation={<Navigation branded links={links} />} footer={<Footer />}>
      <div className="space-y-32">
        <div className="space-y-8">
          <Hero />
          {/* <Link href="/services">
            <button className="bg-gradient-to-tl from-purple-500 via-pink-500 to-fuchsia-600 text-slate-50 font-bold py-2 px-4 rounded">Services</button>
          </Link> */}
        </div>
        <div className="mb-20">
          <h2 className="text-base text-slate-700 dark:text-slate-500 font-bold my-2">Featured Posts</h2>
          <PostList posts={posts} />
        </div>
      </div>
    </Layout>
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
