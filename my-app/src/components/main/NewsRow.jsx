const NewsRow = (props) => {
  return (
    <tr className="border-y-2">
      <td className="p-4 text-center">{props.date}</td>
      <td>
        <span className="p-1 border">{props.category}</span>
      </td>
      <td>{props.content}</td>
    </tr>
  );
};

export default NewsRow;
