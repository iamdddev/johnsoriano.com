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

const ContactPage: NextPage = () => {
  return (
    <Layout navigation={<Navigation branded links={links} />} footer={<Footer />}>
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
