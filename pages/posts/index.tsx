import type { GetStaticProps, NextPage } from "next";
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
    text: "Posts",
    link: "/posts",
  },
  {
    text: "Résumé",
    link: "/resume",
  },
];

const PostsPage: NextPage<{ posts: any }> = ({ posts }) => {
  return (
    <Layout navigation={<Navigation branded links={links} />} footer={<Footer />}>
      <div className="space-y-32">
        <div className="mb-20">
          <h2 className="text-base text-slate-700 dark:text-slate-500 font-bold my-2">Blog Posts</h2>
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

export default PostsPage;
