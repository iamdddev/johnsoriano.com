import type { NextPage } from "next";
import Layout from "components/layout";
import Navigation from "components/navigation";
import Footer from "components/footer";
import { ContactForm } from "components/form";

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

const ContactPage: NextPage = () => {
  return (
    <Layout navigation={<Navigation branded links={links} />} footer={<Footer />}>
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
