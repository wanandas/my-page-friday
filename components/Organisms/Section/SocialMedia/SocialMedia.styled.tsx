import { styled } from "@mui/material";

export const NameText = styled("h1")`
  text-align: center;
  text-shadow: 1px 4px 4px ${({ theme }) => theme.palette.primary.main};
`;

export const SocialMediaWrapper = styled("footer")`
  padding: 0 3rem 2rem;
  @media screen and (min-width: 768px) {
    padding: 4rem;
  }
`;

export const MediaWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: start;

  svg {
    filter: grayscale(1);
    transition: filter 0.3s ease-in-out;
    &:hover {
      filter: grayscale(0);
    }
  }

  @media screen and (min-width: 650px) {
    justify-content: space-around;
  }
`;

export const MediaItem = styled("div")`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-around;
`;
