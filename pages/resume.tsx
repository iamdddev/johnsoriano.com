import type { NextPage } from "next";
import Layout from "components/layout";
import Navigation from "components/navigation";
import Footer from "components/footer";
import { ContactForm } from "components/form";
import Head from "next/head";

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
    link: "/resume",
  },
];

const ResumePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>John Soriano - Resume</title>
      </Head>
      <Layout navigation={<Navigation branded links={links} />} footer={<Footer />}>
        <div>Resume</div>
      </Layout>
    </>
  );
};

export default ResumePage;
