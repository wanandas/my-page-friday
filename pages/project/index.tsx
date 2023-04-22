import Head from "next/head";
import { ProjectGitBox } from "@/components/Organisms";
import { GetStaticProps } from "next";
import { Box } from "@mui/material";
import { ImageWrapper } from "@/components/Organisms/Section/ProfileBox/ProfileBox.styled";

export type IData = {
  id: string;
  created_at: string;
  description: string;
  full_name: string;
  html_url: string;
  language: string;
  languages_url: string;
};

const Project = ({ data }: { data: IData[] }) => {
  return (
    <div style={{ minHeight: "60vh" }}>
      <Head>
        <title>Project Friday</title>
      </Head>

      <h1 style={{ textAlign: "center", paddingBottom: "16px" }}>
        My Project Repo in GITHUB
      </h1>

      <Box display={"flex"} justifyContent={"center"} mb="3rem">
        <img
          src="https://api.daily.dev/devcards/97f9ee5e21b54ca4abbe49ab656d5c99.png?r=9wk"
          width="400"
          alt="BusyOnFriday's Dev Card"
        />
      </Box>
      <ProjectGitBox data={data} />
    </div>
  );
};

export const getStaticProps = async (ctx: GetStaticProps) => {
  // get All my repo
  const url = process.env.NEXT_GITHUB_REPOS_URL as string;
  const repos = await fetch(`${url}?per_page=100&sort=created`);

  const data = await repos.json();

  const result = data?.map((v: IData) => {
    // return only id, created_at, description, full_name, html_url, language
    return {
      id: v.id,
      created_at: v.created_at,
      description: v.description,
      full_name: v.full_name,
      html_url: v.html_url,
      language: v.language,
    };
  });

  return { props: { data: result ?? [] } };
};

export default Project;
