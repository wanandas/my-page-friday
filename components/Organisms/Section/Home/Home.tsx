import MobileLowerBox from "@/components/Molecules/MobileLowerBox/MobileLowerBox";
import {
  BusyText,
  HomeTitle,
  RoleText,
  FridayText,
  HomeWrapper,
} from "./Home.styled";

const Home = ({ menus }: { menus: any[] }) => {
  return (
    <HomeWrapper>
      <HomeTitle>
        <BusyText>BUSY ON</BusyText>
        <FridayText>FRIDAY</FridayText>
        <RoleText>Front-end Developer</RoleText>
      </HomeTitle>
      <MobileLowerBox menus={menus} />
    </HomeWrapper>
  );
};

export default Home;
