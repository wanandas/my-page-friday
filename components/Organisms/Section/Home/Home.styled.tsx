import { styled } from "@mui/material";

export const BusyText = styled("span")`
  font-size: 24px !important;
  text-shadow: 1px 4px 4px ${({ theme }) => theme.palette.secondary.main};
  @media screen and (min-width: 600px) {
    font-size: 48px;
  }
`;

export const HomePageWrapper = styled("div")`
  display: flex;
  margin: 4rem 0;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    margin-top: 8rem;
  }
`;

export const HomeWrapper = styled("div")`
  @media screen and (min-width: 1024px) {
    width: 90%;
    align-self: center;
  }

  @media screen and (min-width: 1440px) {
    width: 80%;
  }
`;

export const HomeTitle = styled("div")`
  padding: 16px;
  border-radius: 25px;
  border: 5px solid ${({ theme }) => theme.palette.primary.main};
  box-shadow: 2px 3px 4px ${({ theme }) => theme.palette.secondary.main};

  @media screen and (min-width: 600px) {
    padding: 32px 48px;
  }
`;

export const FridayText = styled("h1")`
  position: relative;
  font-size: 48px;
  display: block;
  margin: 0;
  text-shadow: 1px 4px 4px ${({ theme }) => theme.palette.secondary.main};
  @media screen and (min-width: 425px) {
    font-size: 60px;
  }
  @media screen and (min-width: 768px) {
    font-size: 88px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 128px;
    padding-left: 32px;
  }
`;

export const RoleText = styled("p")`
  margin: 0;
  text-align: end;
  font-size: 14px;
  text-shadow: 1px 4px 4px ${({ theme }) => theme.palette.secondary.main};
`;
