import { GetStaticProps } from "next";
import Head from "next/head";

const Project = () => {
  return (
    <div style={{ minHeight: "60vh" }}>
      <Head>
        <title>Project Friday</title>
      </Head>
      <p>test</p>
    </div>
  );
};
export const getStaticProps = async (ctx: GetStaticProps) => {
  return { props: { data: {} } };
};

export default Project;
