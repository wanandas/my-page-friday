import { About, Home, ProfileBox } from "@/components/Organisms/Section";
import { HomePageWrapper } from "@/components/Organisms/Section/Home/Home.styled";

export default function HomePage() {
  const menus = [{ title: "About" }, { title: "Project" }];

  return (
    <HomePageWrapper>
      <Home menus={menus} />
      <ProfileBox />
      <About />
    </HomePageWrapper>
  );
}
export const getStaticProps = async () => {
  return {
    props: {},
  };
};
