import { Badge } from "@/components/Atoms";
import dayjs from "dayjs";
import {
  BlockAbout,
  TitleWrapper,
  SubTitle,
  Description,
  PositionWrapper,
  DescriptionWrapper,
  DescriptionItem,
  TechnologiesWrapper,
} from "./Experience.styled";
import { diffInMonths } from "helpers/utils";

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
      {data?.map((value, i) => {
        const diff = diffInMonths(value.joinDate, value.leaveDate);

        return (
          <PositionWrapper key={i}>
            <SubTitle type="position">{value.position}</SubTitle>
            <Description>
              {value.companyName} :{" "}
              {dayjs(value.joinDate).format("MMMM D, YYYY")} -{" "}
              {value.leaveDate
                ? dayjs(value.leaveDate).format("MMMM D, YYYY")
                : `Present `}
              <span> ( {diff} )</span>
            </Description>

            <SubTitle type="description">Description</SubTitle>
            <DescriptionWrapper>
              {value.description.map((v, i) => (
                <DescriptionItem key={v}>{v}</DescriptionItem>
              ))}
            </DescriptionWrapper>
            <TechnologiesWrapper>
              <strong>Technologies</strong> :{" "}
              {value.technologies.map((v) => (
                <Badge key={v} value={v} />
              ))}
            </TechnologiesWrapper>
          </PositionWrapper>
        );
      })}
    </BlockAbout>
  );
};

export default Experience;
