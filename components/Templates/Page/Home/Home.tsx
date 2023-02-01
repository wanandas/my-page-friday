import Link from "next/link";
import {
  BusyText,
  HomeTitle,
  RoleText,
  FridayText,
  HomeWrapper,
  MobileLowerBox,
} from "./Home.styled";

const Home = ({ menus }: { menus: any[] }) => {
  return (
    <HomeWrapper>
      <HomeTitle>
        <BusyText>BUSY ON </BusyText>
        <FridayText>FRIDAY</FridayText>
        <RoleText style={{ margin: 0, textAlign: "end" }}>
          Front-end Developer
        </RoleText>
      </HomeTitle>

      <MobileLowerBox>
        {/* mobile menu */}
        {menus.map(({ title }) => {
          return (
            <div key={title}>
              <Link
                style={{
                  width: "1ch",
                  overflow: "hidden",
                }}
                href={title.toLowerCase()}
                key={title}
              >
                {title}
              </Link>
            </div>
          );
        })}
      </MobileLowerBox>
    </HomeWrapper>
  );
};

export default Home;
