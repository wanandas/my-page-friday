import dayjs from "dayjs";
import Link from "next/link";
import { IData } from "pages/project";
import {
  BoxText,
  LabelSpan,
  ProjectBoxGridWrapper,
} from "./ProjectGitBox.styled";

const ProjectGitBox = ({ data }: { data: IData[] }) => {
  return (
    <ProjectBoxGridWrapper>
      {data.map((v) => {
        return (
          <BoxText key={v.id}>
            <div>
              <LabelSpan>Name : </LabelSpan>
              <Link target="_blank" href={v.html_url}>
                {v.full_name}
              </Link>
            </div>
            <div>
              <LabelSpan>Language:</LabelSpan> {v.language}
            </div>
            <div>
              <LabelSpan>Description:</LabelSpan> {v.description || "-"}
            </div>
            <div>
              <LabelSpan>Created at:</LabelSpan>{" "}
              {dayjs(v.created_at).format("MMMM D, YYYY")}
            </div>
          </BoxText>
        );
      })}
    </ProjectBoxGridWrapper>
  );
};

export default ProjectGitBox;
