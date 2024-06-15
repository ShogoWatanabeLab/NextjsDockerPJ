import Link from "next/link";

const ReadMore = (props) => {
  return (
    <div className="flex justify-end">
      <Link href={props.url} className={`${props.style}`}>
        Read More ...
      </Link>
    </div>
  );
};

export default ReadMore;
