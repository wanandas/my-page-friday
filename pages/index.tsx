import { Home, ProfileBox } from "@/components/Organisms/Section";
import {
  HomePageWrapper,
  HomeTopSectionWrapper,
} from "@/components/Organisms/Section/Home/Home.styled";

export default function HomePage() {
  return (
    <HomePageWrapper>
      <HomeTopSectionWrapper>
        <Home />
        <ProfileBox />
      </HomeTopSectionWrapper>
    </HomePageWrapper>
  );
}
