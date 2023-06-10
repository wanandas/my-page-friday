import { styled } from "@mui/material";

type subProps = {
  type: "position" | "description";
};

export const BlockAbout = styled("section")`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled("div")`
  & > h1 {
    padding: 0 2rem 12px;
    border-bottom: 4px solid ${({ theme }) => theme.palette.primary.main};
  }
`;

export const SubTitle = styled("h3")<subProps>`
  margin-bottom: 0;
  font-weight: ${(props) => (props.type === "position" ? "bold" : "normal")};
`;

export const Description = styled("h4")`
  line-height: 2.4;
  word-spacing: 1.8px;
`;

export const PositionWrapper = styled("div")`
  margin-bottom: 2rem;

  padding: 0 1rem;
`;

export const DescriptionWrapper = styled("ul")``;

export const DescriptionItem = styled("li")`
  word-spacing: 2.4px;
  margin-top: 12px;
`;
export const TechnologiesWrapper = styled("div")`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
