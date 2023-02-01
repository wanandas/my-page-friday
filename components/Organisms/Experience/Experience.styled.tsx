import { styled } from "@mui/material";

export const BlockAbout = styled("section")`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled("div")`
  display: inline-flex;
  & > h1 {
    padding-bottom: 12px;
    border-bottom: 2px solid salmon;
  }
`;

export const SubTitle = styled("h3")`
  margin-bottom: 0;
`;

export const Description = styled("h4")`
  line-height: 2.4;
  word-spacing: 1.8px;
`;
