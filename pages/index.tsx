import {
  BlockAbout,
  Description,
  TitleWrapper,
} from "@/components/Organisms/Experience/Experience.styled";
import { Home } from "@/components/Templates";
import { HomePageWrapper } from "@/components/Templates/Page/Home/Home.styled";

export default function HomePage({ data, test }: any) {
  const menus = [
    { title: "About" },
    { title: "Project" },
    { title: "Contact" },
  ];
  return (
    <HomePageWrapper>
      <Home menus={menus} />

      {/* About me */}
      <BlockAbout>
        <TitleWrapper>
          <h2>
            I'm a Frontend Developer based in <span>Bangkok</span>
          </h2>
        </TitleWrapper>
        <Description>
          <ul>
            <li>Passionate Frontend Developer based in Bangkok</li>
            <li>Proficient in Typescript</li>
            <li>Experienced in React JS/Next JS and Vue JS/Nuxt JS</li>
            <li>Knowledgeable in state management (Mobx and Redux)</li>
            <li>
              Familiar with atomic design methodology for project management
            </li>
            <li>
              Experienced in unit testing with Jest/React Testing Library.
            </li>
          </ul>
        </Description>
      </BlockAbout>
      {/* TODO: for social connect */}
    </HomePageWrapper>
  );
}
export const getStaticProps = async () => {
  const owner = "wanandas";
  return {
    props: {},
  };
};
