import Link from "next/link";
import {
  MediaItem,
  MediaWrapper,
  NameText,
  SocialMediaWrapper,
} from "./SocialMedia.styled";

interface ISocial {
  Component: () => JSX.Element;
  title: string;
  link: string;
  key: string;
}

const SocialMedia = ({ social }: { social: ISocial[] }) => {
  return (
    <SocialMediaWrapper>
      <NameText>Social Media</NameText>
      <MediaWrapper>
        {social?.map(({ Component, title, link, key }) => (
          <Link key={key} target="_blank" href={link}>
            <MediaItem>
              <Component />
              {title}
            </MediaItem>
          </Link>
        ))}
      </MediaWrapper>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
