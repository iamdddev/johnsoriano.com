import Button from "components/button";
import type { NextPage } from "next";
import Hero from "components/hero";
import useDarkMode from "hooks/useDarkMode";
import Layout from "components/layout";
import Navigation from "components/navigation";
import Footer from "components/footer";

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
    text: "Uses",
    link: "/uses",
  },
  {
    text: "Snippets",
    link: "/snippets",
  },
];

const Home: NextPage = () => {
  const [theme, setTheme] = useDarkMode();
  return (
    <Layout navigation={<Navigation links={links} />} footer={<Footer />}>
      <div>
        <Hero />
        <div>I'm John Soriano, web developer and integration expert based in Manila, Philippines</div>
        <div>I've been building things for the web for last 5 years, working with clients accross various industries.</div>
        <div>My Focus is building tools and web integration for existing workflow such as Notion, Airtable, Shopify and some low-code implementation</div>
      </div>
    </Layout>
  );
};

export default Home;