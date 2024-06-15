import { SectionTitle, SectionParagraph } from "../index";

const Blog = () => {
  return (
    <>
      {/* Blog */}
      <section className="h-fit mb-16 bg-gray-100 p-8">
          <SectionTitle text={"Blog"} style={""} />
          <SectionParagraph text={"最新のブログを紹介"} style={""}/>
      </section>
    </>
  );
};

export default Blog;
