import { styled } from "@mui/material";
import { animated } from "react-spring";
import Link from "next/link";

export const NavList = styled(animated.nav)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 8px;
`;

export const BusyOnFriday = styled("h2")`
  color: ${({ theme }) => theme.palette.primary.main};
  text-shadow: 1px 1px 1px ${({ theme }) => theme.palette.text.primary};
`;

export const NavWrapper = styled(animated.div)`
  display: flex;
  z-index: 999;
  align-items: center;
  position: sticky;
  width: 100%;
  height: 111.2px;
  top: 0;
  backdrop-filter: blur(2px);
  justify-content: end;
  padding: 0 16px;

  @media screen and (min-width: 425px) {
    padding: 0 32px;
  }
`;

export const NavItem = styled(Link)`
  text-shadow: 1px 1px 1px ${({ theme }) => theme.palette.primary.main};
  display: none;
  text-decoration: none;
  width: 1ch;
  overflow: hidden;
  cursor: pointer;
  color: inherit;
  transition: 0.3s ease-in-out;
  position: relative;

  @media screen and (min-width: 375px) {
    display: flex;
  }
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    height: 2px;
    bottom: 0;
    background: salmon;
    transition: all 0.3s linear;
  }

  @media (hover: hover) {
    &:hover {
      color: salmon;
      text-shadow: 1px 1px 1px black;
      &::before {
        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 600px) {
    opacity: 1;
    width: unset;
  }
`;
