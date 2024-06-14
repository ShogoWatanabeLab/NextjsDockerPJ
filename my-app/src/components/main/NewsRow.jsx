const NewsRow = (props) => {
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.category}</td>
      <td>{props.content}</td>
    </tr>
  );
};

export default NewsRow;