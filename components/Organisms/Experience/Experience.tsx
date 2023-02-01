import { Badge } from "@/components/Atoms";
import dayjs from "dayjs";
import {
  BlockAbout,
  TitleWrapper,
  SubTitle,
  Description,
} from "./Experience.styled";

export interface IExperience {
  id: number;
  created_at: string;
  position: string;
  companyName: string;
  description: string[];
  leaveDate?: string;
  joinDate?: string;
  technologies: string[];
}

const Experience = ({ data }: { data: IExperience[] }) => {
  return (
    <BlockAbout>
      <TitleWrapper>
        <h1>Experience</h1>
      </TitleWrapper>
      {data.map((value, i) => {
        return (
          <div key={i}>
            <SubTitle>{value.position}</SubTitle>
            <Description>
              {value.companyName} :{" "}
              {dayjs(value.joinDate).format("MMMM D, YYYY")} -{" "}
              {dayjs(value.leaveDate).format("MMMM D, YYYY")}
            </Description>
            <SubTitle>Description</SubTitle>
            <ul style={{ paddingLeft: "16px" }}>
              {value.description.map((v, i) => (
                <li key={v} style={{ wordSpacing: "2.4px", fontWeight: 500 }}>
                  {v}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <strong>Technologies</strong> :{" "}
              {value.technologies.map((v) => (
                <Badge key={v} value={v} />
              ))}
            </div>
          </div>
        );
      })}
    </BlockAbout>
  );
};

export default Experience;
