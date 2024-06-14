const SectionParagraph = (props) => {
  return (
    <>
      <p className={`mb-4 text-lg ${props.style}`}>{props.text}</p>
    </>
  );
};

export default SectionParagraph;
