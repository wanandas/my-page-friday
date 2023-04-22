import Image from "next/image";
import { AboutMeText, ImageBox, ImageWrapper } from "./ProfileBox.styled";
import { NameText } from "../SocialMedia/SocialMedia.styled";

const ProfileBox = () => {
  return (
    <ImageBox>
      <ImageWrapper>
        <Image
          placeholder="blur"
          blurDataURL={"/img/me-2.jpg"}
          style={{ filter: " grayscale(40%)" }}
          src={"/img/me-2.jpg"}
          alt="it's me"
          width={296}
          height={296}
        />
      </ImageWrapper>
      <NameText>Wantanawat Jitprakop</NameText>
      <AboutMeText>
        Passionate Frontend Developer based in Bangkok Proficient in Javascript
        and Typescript, Experienced in React JS/Next JS and Vue JS/Nuxt JS
        Knowledgeable in state management (Mobx and Redux), Experienced in unit
        testing with Jest/React Testing Library. Familiar with atomic design
        methodology for project management
      </AboutMeText>
    </ImageBox>
  );
};

export default ProfileBox;
