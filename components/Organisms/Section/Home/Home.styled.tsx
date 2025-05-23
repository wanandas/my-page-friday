import { styled } from "@mui/material";

export const HomePageWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const HomeTopSectionWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  position: 2;
`;

export const HomeWrapper = styled("div")`
  padding: ${({ theme }) => theme.spacing(0, 2)};
  @media screen and (min-width: 768px) {
    width: 90%;
    align-self: center;
  }

  @media screen and (min-width: 1440px) {
    width: 80%;
  }
`;

export const FridayText = styled("h1")`
  position: relative;
  font-family: ${({ theme }) => theme.typography.h1.fontFamily};
  text-align: center;
  font-size: 88px;
  display: block;
  margin: 0;
  text-shadow: 1px 4px 4px ${({ theme }) => theme.palette.primary.main};

  @media screen and (min-width: 1024px) {
    font-size: 128px;
  }
`;
