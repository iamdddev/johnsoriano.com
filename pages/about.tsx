import type { NextPage } from "next";
import Layout from "components/layout";
import Navigation from "components/navigation";
import Footer from "components/footer";
import { ContactForm } from "components/form";
import Head from "next/head";
import Highlighther from "components/highligther";

const links = [
  {
    text: "Home",
    link: "/",
  },
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
    link: "https://drive.google.com/file/d/1VCRl0_HhXuf-hJ25k6tZ2BRdCSrz5PM9/view?usp=sharing",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - John Soriano</title>
      </Head>
      <Layout navigation={<Navigation branded links={links} />} footer={<Footer />}>
        <div className="space-y-4">
          <div className="mt-6 prose prose-fuchsia prose-xl text-slate-800 dark:text-slate-50 mx-auto">
            <p>I&apos;m John Soriano, Full Stack Developer based in Manila, Philippines</p>
            <p>
              I developed countless web applications over the last 6+ years. With a combined knowledge of both backend and frontend, I helped small and medium-sized businesses in
              various industries such as manufacturing, finance, and commerce to deliver real value to their customers.
            </p>
          </div>
          <div>
            <Highlighther color="red">hire@johnsoriano.dev</Highlighther>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
