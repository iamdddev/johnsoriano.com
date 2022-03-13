import type { NextPage } from "next";
import Hero from "components/hero";
import Layout from "components/layout";
import Navigation from "components/navigation";
import Footer from "components/footer";

const links = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Posts",
    link: "/posts",
  },
  {
    text: "Code",
    link: "/code",
  },
];

const CodeSnippetsPage: NextPage = () => {
  return (
    <Layout navigation={<Navigation links={links} />} footer={<Footer />}>
      <div className="mt-6 prose prose-fuchsia prose-xl text-slate-800 dark:text-slate-50 mx-auto">Code Snippets</div>
    </Layout>
  );
};

export default CodeSnippetsPage;
