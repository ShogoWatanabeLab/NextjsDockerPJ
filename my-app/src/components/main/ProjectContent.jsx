import Image from "next/image";
import { SectionParagraph, ProjectTag, ReadMore } from "../index";

const ProjectContent = (props) => {
  return (
    <div className="space-y-4 ml-4 p-4 border rounded">
      <Image src={props.src} alt={props.alt} width={360} height={240}/>
      <ProjectTag text={props.tags} />
      <p className="">{props.title}</p>
      <ReadMore url={"/project"} style={"text-xs text-right"}/>
    </div>
  );
};

export default ProjectContent;
