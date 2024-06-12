import Link from "next/link";
import Image from "next/image";
import { Nav, HumburgerMenu } from "../index";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <Image src="/images/Logo.png" alt="ロゴ" width={150} height={75} />
      </Link>
      <div className="flex">
        <Nav style={""} />
        <HumburgerMenu />
      </div>
    </header>
  );
};

export default Header;
