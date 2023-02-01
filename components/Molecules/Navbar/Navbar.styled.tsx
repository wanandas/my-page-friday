import { styled } from "@mui/material";
import { animated } from "react-spring";
import Link from "next/link";

export const NavList = styled(animated.nav)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BusyOnFriday = styled("h2")`
  color: ${({ theme }) => theme.palette.primary.main};
  text-shadow: 1px 1px 1px ${({ theme }) => theme.palette.text.primary};
`;

export const NavWrapper = styled(animated.div)`
  display: flex;
  align-items: center;
  max-width: 1440px;
  position: sticky;
  width: 100%;
  height: 111.2px;
  top: 0;
  backdrop-filter: blur(2px);
  justify-content: space-between;
  padding: 0 16px;
  margin: 0 auto;

  @media screen and (min-width: 425px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const NavItem = styled(Link)`
  text-shadow: 1px 1px 1px ${({ theme }) => theme.palette.primary.main};
  font-size: 14px;
  display: none;
  width: 1ch;
  overflow: hidden;

  &:hover {
    text-shadow: 1px 1px 1px salmon;
  }

  @media screen and (min-width: 375px) {
    display: flex;
  }

  &:hover {
    color: salmon;
    text-shadow: 1px 1px 1px black;
    /* transform: scale(1.1); */
    transition: all 0.1s linear;
    padding-bottom: 12px;
  }

  @media screen and (min-width: 600px) {
    opacity: 1;
    width: unset;
  }
`;
