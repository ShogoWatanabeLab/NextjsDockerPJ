import Link from "next/link";

const NavLink = (props) => {
  return (
    <Link href={props.url} className="ml-4 hover:underline">
      {props.title}
    </Link>
  );
};

export default NavLink;
