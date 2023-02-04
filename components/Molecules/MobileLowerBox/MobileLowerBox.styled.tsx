import { styled } from "@mui/material";

export const MobileLowerBoxWrapper = styled("div")`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 14px;
  @media screen and (min-width: 375px) {
    display: none;
  }
`;
