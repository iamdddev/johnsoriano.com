import type { NextPage } from "next";
import Layout from "components/layout";
import Navigation from "components/navigation";
import Footer from "components/footer";

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

const CodeSnippetsPage: NextPage = () => {
  return (
    <Layout navigation={<Navigation branded links={links} />} footer={<Footer />}>
      <div className="mt-6 prose prose-fuchsia prose-xl text-slate-800 dark:text-slate-50 mx-auto">Code Snippets</div>
    </Layout>
  );
};

export default CodeSnippetsPage;
