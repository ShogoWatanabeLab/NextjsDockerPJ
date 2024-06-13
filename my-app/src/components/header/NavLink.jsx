import Link from "next/link";

const NavLink = (props) => {
  return (
    <Link href={props.url} className="px-8 py-2 ml-4 border border-solid rounded-xl border-white hover:bg-gray-100 hover:border-gray-300">
      {props.title}
    </Link>
  );
};

export default NavLink;
