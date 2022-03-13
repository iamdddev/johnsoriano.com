import Button from "components/button";
import type { NextPage } from "next";
import Hero from "components/hero";
import useDarkMode from "hooks/useDarkMode";
import Layout from "components/layout";
import Navigation from "components/navigation";
import Footer from "components/footer";
import Image from "next/image";

const links = [
  {
    text: "Service",
    link: "/service",
  },
  {
    text: "Posts",
    link: "/posts",
  },
  {
    text: "Code",
    link: "/snippets",
  },
  {
    text: "About",
    link: "/about",
  },
];

const Home: NextPage = () => {
  const [theme, setTheme] = useDarkMode();
  return (
    <Layout navigation={<Navigation links={links} />} footer={<Footer />}>
      <div className="mt-24 space-y-44">
        <div className="space-y-8">
          <Hero />
        </div>
        <div className="space-y-16">
          <div className="flex items-center text-slate-700 dark:text-slate-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <h2 className="text-base font-bold my-2">Featured Posts</h2>
          </div>

          <div>Reece</div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
