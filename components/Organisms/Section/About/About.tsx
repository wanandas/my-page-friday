import { BlockAbout, BoxGroup, BoxType, Description } from "./About.styled";

const About = () => {
  return (
    <BlockAbout>
      <Description>
        <BoxGroup>
          <BoxType>Passionate Frontend Developer based in Bangkok</BoxType>
          <BoxType>
            Proficient in Javascript and Typescript, Experienced in React
            JS/Next JS and Vue JS/Nuxt JS
          </BoxType>
          <BoxType>
            Knowledgeable in state management (Mobx and Redux), Experienced in
            unit testing with Jest/React Testing Library.
          </BoxType>
          <BoxType>
            Familiar with atomic design methodology for project management
          </BoxType>
        </BoxGroup>
      </Description>
    </BlockAbout>
  );
};

export default About;
