import { SectionTitle, SectionParagraph, ProjectContent } from "../index";

const Project = () => {
  return (
    <>
      {/* Project */}
      <section className="mb-16 bg-gray-100 p-8">
          <SectionTitle text={"Project"} style={""} />
          <SectionParagraph text={"最新のプロジェクトを紹介"} style={""}/>
          <div className="flex justify-between">
            <ProjectContent src={"/images/profile.png"} alt={"プロジェクト画像"} tags={"DX化"} title={"プロジェクト名"}/>
            <ProjectContent src={"/images/profile.png"} alt={"プロジェクト画像"} tags={"教育"} title={"プロジェクト名"}/>
            <ProjectContent src={"/images/profile.png"} alt={"プロジェクト画像"} tags={"教育"} title={"プロジェクト名"}/>
          </div>
      </section>
    </>
  );
};

export default Project;
