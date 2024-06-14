import { SectionTitle, SectionParagraph, NavLink } from "../index";

const Contact = () => {
  return (
    <>
      {/* Contact */}
      <section className="mb-16 bg-gray-100 p-8">
          <SectionTitle text={"Contact"} style={""} />
          <SectionParagraph text={"ここにお知らせのテキストが入ります。"} style={"text-center"}/>
      </section>
    </>
  );
};

export default Contact;
