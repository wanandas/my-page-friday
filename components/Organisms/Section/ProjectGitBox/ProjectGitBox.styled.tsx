import { styled } from "@mui/material";

export const BoxText = styled("div")`
  border: 3px solid ${({ theme }) => theme.palette.primary.main};
  box-shadow: 2px 3px 4px ${({ theme }) => theme.palette.primary.main};
  border-radius: 12px;
  padding: 16px;
`;

export const ProjectBoxGridWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 32px;
  padding: 16px;
  margin: 0 auto;
  max-width: 1200px;
`;

export const LabelSpan = styled("span")`
  font-weight: 600;
  margin-right: 8px;
`;
