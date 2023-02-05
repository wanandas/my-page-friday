import { styled } from "@mui/material";

export const BoxGroup = styled("div")`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const BoxType = styled("div")`
  display: flex;
  border-radius: 25px;
  padding: 24px;
  min-height: 11rem;
  border: 5px solid ${({ theme }) => theme.palette.primary.main};
  box-shadow: 2px 3px 4px ${({ theme }) => theme.palette.secondary.main};
`;

export const BlockAbout = styled("section")`
  width: 100%;
  display: flex;
  flex-direction: column;
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
