import { styled } from "@mui/material";

export const NameText = styled("h1")`
  text-shadow: 1px 4px 4px ${({ theme }) => theme.palette.secondary.main};
  text-align: center;
`;

export const SocialMediaWrapper = styled("footer")`
  border-top: 4px solid salmon;
  margin-top: 8rem;

  @media screen and (min-width: 768px) {
    margin: 4rem;
  }
`;

export const MediaWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 24px;
  flex-wrap: wrap;
  @media screen and (min-width: 1440px) {
    justify-content: space-around;
  }
`;

export const MediaItem = styled("div")`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-around;
`;
