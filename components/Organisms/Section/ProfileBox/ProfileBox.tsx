import Image from "next/image";
import { ImageBox, ImageWrapper } from "./ProfileBox.styled";
import { NameText } from "../SocialMedia/SocialMedia.styled";
import me from "../../../../public/img/me.jpeg";

const ProfileBox = () => {
  return (
    <ImageBox>
      <ImageWrapper>
        <Image
          placeholder="blur"
          style={{ filter: " grayscale(40%)" }}
          src={me}
          alt="it's me"
          width={320}
          height={480}
        />
      </ImageWrapper>
      <NameText>Wantanawat Jitprakop</NameText>
    </ImageBox>
  );
};

export default ProfileBox;
