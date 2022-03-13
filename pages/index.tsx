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
    text: "Services",
    link: "/services",
  },
  {
    text: "Posts",
    link: "/posts",
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
          <h2 className="text-base font-bold my-2">Featured Posts</h2>

          <div>Reece</div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
