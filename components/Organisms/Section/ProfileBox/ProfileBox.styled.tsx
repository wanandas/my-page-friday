import { styled } from "@mui/material";
import { animated } from "react-spring";

export const ImageBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageWrapper = styled(animated.div)`
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 300px;
  box-sizing: border-box;
  border: 4px solid;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
    img {
      width: 396px;
      height: 396px;
    }
  }
`;

export const AboutMeText = styled("h3")`
  padding: 1rem;
  font-size: 1.2rem;
  text-align: center;
  max-width: 40rem;
`;
