import { Experience } from "@/components/Organisms";
import { IExperience } from "@/components/Organisms/Experience/Experience";
import { styled } from "@mui/material";
import { createClient } from "@supabase/supabase-js";
import { GetStaticProps } from "next";
import Head from "next/head";

export default function ExperiencePage({
  // data,
  error,
}: {
  // data: IExperience[];
  error: any;
}) {
  if (error) {
    return <div></div>;
  }

  const data: IExperience[] = [
    {
      id: 2,
      created_at: "2023-01-14T15:34:19.457832+00:00",
      position: "Frontend Developer",
      joinDate: "2021-09-01",
      leaveDate: "2022-09-01",
      companyName: "NEVERSITUP",
      description: [
        "Expertise in converting web design and UX/UI requirements into functional code while optimizing front-end resources and assets for maximum efficiency and performance",
        "Providing guidance and mentorship to the team on best practices related to process, architecture, scalability, and other relevant aspects",
        "Developing highly responsive and interactive user interface components as part of our software modules",
        "Designing and building advanced, feature-rich web applications using React, and ensuring adherence to industry standards and best practices",
        "Creating comprehensive and automated unit tests to ensure code reliability and maintainability",
        "Building reusable, scalable, and modular code that adheres to best practices for maintainability and performance",
        "Optimizing web design for both desktop and mobile devices, ensuring a seamless user experience across all platforms",
        "Collaborating closely with developers and other cross-functional team members to ensure consistency and alignment with designs and requirements",
        "Continuously staying up-to-date with the latest front-end technologies, methodologies, and trends to drive innovation and improve the overall quality of the projects.",
      ],
      technologies: [
        "Vue.js",
        "React.js",
        "JavaScript",
        "anatomic design methodology",
        "Nuxt.js",
        "Ant Design",
        "Cascading Style Sheets(CSS)",
        "HTML",
      ],
    },
    {
      id: 3,
      created_at: "2023-01-14T15:37:17.605724+00:00",
      position: "Frontend Web Developer",
      joinDate: "Jun 2020 - Jun 2021 · 1 yr 1 mo",
      leaveDate: "",
      companyName: "Buddy Review",
      description: [
        "Designing and implementing UI mocks and styled UI components to ensure a visually appealing and user-friendly interface.",
        "Creating a responsive design that worked seamlessly on desktop, tablet, and mobile devices.",
        "Developing a landing page and web application that provided a more interactive and engaging experience for users.",
        "Utilizing version control through Git/Gitlab and working collaboratively as a team to effectively manage the project.",
        "Building the web application using ReactJS, a powerful and versatile JavaScript library that is well-suited for building complex web applications.",
        "Building the landing page using NextJS, a framework for building server-rendered React applications.",
        "Managing tasks using Jira and Trello, to prioritize and delegate tasks, track progress, and communicate effectively with the team.",
      ],
      technologies: [
        "React.js ",
        " JavaScript ",
        " Next.js ",
        " Cascading Style Sheets (CSS) ",
        " HTML",
      ],
    },
  ];

  return (
    <div>
      <Head>
        <title>About Friday</title>
      </Head>
      <MainWrapper>
        {/* Experience */}
        <Experience data={data} />
      </MainWrapper>
    </div>
  );
}

const MainWrapper = styled("main")`
  padding-bottom: 5%;
`;

const BlockAbout = styled("section")`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled("div")`
  display: inline-flex;
  & > h1 {
    padding-bottom: 12px;
    border-bottom: 2px solid salmon;
  }
`;

const Description = styled("h4")`
  line-height: 2.4;
  word-spacing: 1.8px;
`;

export const getStaticProps = async (ctx: GetStaticProps) => {
  // const supaKey = process.env.NEXT_SUPABASE_KEY as string;
  // const supaUrl = process.env.NEXT_SUPABASE_URL as string;
  // console.log(supaUrl);
  // const supabase = createClient(supaUrl, supaKey);

  // const { data, error } = await supabase.from("Experience").select();

  return { props: { data: [], error: "" } };
};
