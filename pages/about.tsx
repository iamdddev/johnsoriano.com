import type { NextPage } from "next";
import Layout from "components/layout";
import Navigation from "components/navigation";
import Footer from "components/footer";
import { ContactForm } from "components/form";

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

const Home: NextPage = () => {
  return (
    <Layout navigation={<Navigation branded links={links} />} footer={<Footer />}>
      <div className="space-y-4">
        <div className="mt-6 prose prose-fuchsia prose-xl text-slate-800 dark:text-slate-50 mx-auto">
          <p>I&apos;m John Soriano, Full Stack Developer based in Manila, Philippines</p>
          <p>I&apos;ve been building things for the web in the last 6 years accross various industries.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
