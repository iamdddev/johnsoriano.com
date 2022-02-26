import Button from "components/button";
import type { NextPage } from "next";
import Hero from "components/hero";
import useDarkMode from "hooks/useDarkMode";
import Layout from "components/layout";
import Navigation from "components/navigation";
import Footer from "components/footer";

const Home: NextPage = () => {
  const [theme, setTheme] = useDarkMode();
  return (
    <Layout navigation={<Navigation />} footer={<Footer />}>
      <Hero />
    </Layout>
  );
};

export default Home;
