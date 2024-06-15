const NewsRow = (props) => {
  return (
    <tr>
      <td className="p-2 text-center">{props.date}</td>
      <td>
        <span className="p-1 border">{props.category}</span>
      </td>
      <td>{props.content}</td>
    </tr>
  );
};

export default NewsRow;
