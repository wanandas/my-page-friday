import { styled } from "@mui/material";
import dayjs from "dayjs";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

type IData = {
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
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}
      >
        {data.map((v) => {
          return (
            <BoxText key={v.id}>
              <div>
                <span style={{ fontWeight: "600", marginRight: "8px" }}>
                  Name :{" "}
                </span>
                <Link target="_blank" href={v.html_url}>
                  {v.full_name}
                </Link>
              </div>
              <div>
                <span style={{ fontWeight: "600", marginRight: "8px" }}>
                  Language:
                </span>{" "}
                {v.language}
              </div>
              <div>
                <span style={{ fontWeight: "600", marginRight: "8px" }}>
                  Description:
                </span>{" "}
                {v.description || "-"}
              </div>
              <div>
                <span style={{ fontWeight: "600", marginRight: "8px" }}>
                  Created at:
                </span>{" "}
                {dayjs(v.created_at).format("MMMM D, YYYY")}
              </div>
            </BoxText>
          );
        })}
      </div>
    </div>
  );
};
export const getStaticProps = async (ctx: GetStaticProps) => {
  const url = process.env.NEXT_GITHUB_REPOS_URL as string;
  // get All my repo
  const repos = await fetch(`${url}?per_page=100`);

  const data = await repos.json();

  return { props: { data: data } };
};

export default Project;

const BoxText = styled("div")`
  border: 3px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 12px;
  padding: 12px;
`;
