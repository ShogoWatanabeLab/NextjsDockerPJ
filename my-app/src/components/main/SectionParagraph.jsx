const SectionParagraph = (props) => {
  return (
    <>
      <p className={`mb-4 text-lg text-center ${props.style}`}>{props.text}</p>
    </>
  );
};

export default SectionParagraph;
