import Link from "next/link";
import { Layout } from "@components";

const Home = () => {
  return (
    <Layout>
      <Link href="/product/samsung-galaxy-z-flip-3">Link To Product Page</Link>
    </Layout>
  );
};

export default Home;
