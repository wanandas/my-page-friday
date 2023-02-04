import { styled } from "@mui/material";

export const ImageBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem 0;
  @media screen and (min-width: 768px) {
    margin: 9rem 0;
  }
`;

export const ImageWrapper = styled("div")`
  img {
    border-radius: 25px;
    border: 5px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 2px 3px 4px ${({ theme }) => theme.palette.secondary.main};
  }
`;
