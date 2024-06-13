import { NavLink } from "../index";

const Nav = (props) => {
  return (
    <nav className={props.style}>
      <NavLink url={"/profile"} title={"Profile"} />
      <NavLink url={"/news"} title={"News"} />
      <NavLink url={"/project"} title={"Project"} />
      <NavLink url={"/blog"} title={"Blog"} />
      <NavLink url={"/contact"} title={"Contact"} />
    </nav>
  );
};

export default Nav;
