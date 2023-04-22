import { styled } from "@mui/material";
import img from "../../../../public/img/bg-2.jpg";
import img2 from "../../../../public/img/bg-3.webp";

export const BoxGroup = styled("div")`
  display: grid;
  gap: 2.5rem;
  justify-content: center;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    gap: 2rem;
    grid-template-columns: repeat(2, 20rem);
  }
`;

export const BoxType = styled("p")`
  display: flex;
  border-radius: 25px;
  padding: 24px;
  min-height: 20rem;
  border: 5px solid ${({ theme }) => theme.palette.primary.main};
  box-shadow: 2px 3px 4px ${({ theme }) => theme.palette.primary.main};

  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.5)"
      : "rgba(255, 255, 255, 0.5)"};

  @media screen and (min-width: 768px) {
    min-height: 10rem;
  }
`;

export const BlockAbout = styled("section")`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5rem 1rem;
  border-top: 5px solid ${({ theme }) => theme.palette.primary.main};
  @media screen and (min-width: 768px) {
    padding: 10rem 3rem;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ theme }) =>
      theme.palette.mode === "dark" ? `url(${img2.src})` : `url(${img.src})`};
    background-size: cover;
    background-position: bottom;
    background-attachment: fixed;
    z-index: -1;
    opacity: 0.5;
  }
`;

export const TitleWrapper = styled("div")`
  & > h1 {
    padding-bottom: 12px;
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
  }
`;

export const SubTitle = styled("h3")`
  margin-bottom: 0;
`;

export const Description = styled("h4")`
  line-height: 2.4;
  word-spacing: 1.8px;
`;
