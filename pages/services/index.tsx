import type { NextPage } from "next";
import Layout from "components/layout";
import Navigation from "components/navigation";
import Footer from "components/footer";

const links = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Posts",
    link: "/posts",
  },
  {
    text: "Code",
    link: "/code",
  },
];

const ServicesPage: NextPage = () => {
  return (
    <Layout navigation={<Navigation branded links={links} />} footer={<Footer />}>
      <div className="mt-6 prose prose-fuchsia prose-xl text-slate-800 dark:text-slate-50 mx-auto">Services</div>
    </Layout>
  );
};

export default ServicesPage;
