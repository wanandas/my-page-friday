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
  flex-direction: column;
`;

export const HomeWrapper = styled("div")`
  @media screen and (min-width: 1024px) {
    width: 90%;
    align-self: center;
  }
  @media screen and (min-width: 1440px) {
    align-self: unset;
    width: 60%;
  }
`;

export const HomeTitle = styled("div")`
  border: 5px solid ${({ theme }) => theme.palette.primary.main};
  padding: 16px;
  border-radius: 40px;
  box-shadow: 2px 3px 4px ${({ theme }) => theme.palette.secondary.main};
  background: linear-gradient(
    0deg,
    ${({ theme }) => (theme.palette.mode === "dark" ? "#222" : "#dfdfdf")} 0%,
    ${({ theme }) => theme.palette.primary.main} 100%
  );

  @media screen and (min-width: 600px) {
    padding: 32px 48px;
  }
`;

export const FridayText = styled("h1")`
  position: relative;
  font-size: 48px;
  text-shadow: 1px 4px 4px ${({ theme }) => theme.palette.secondary.main};
  display: block;
  margin: 0;
  @media screen and (min-width: 600px) {
    font-size: 64px;
    padding-left: 32px;
  }
`;

export const RoleText = styled("p")`
  font-size: 14px;
  text-shadow: 1px 4px 4px ${({ theme }) => theme.palette.secondary.main};
`;

export const MobileLowerBox = styled("div")`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 14px;
  @media screen and (min-width: 375px) {
    display: none;
  }
`;
