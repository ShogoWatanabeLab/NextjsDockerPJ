const SectionTitle = (props) => {
  return (
    <>
      <h2 className={`text-4xl font-bold mb-6 ${props.style}`}>
        {props.text}
      </h2>
    </>
  );
};

export default SectionTitle;
