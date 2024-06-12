"use client";

import { useState } from "react";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
    console.log(menuOpen);
  };

  return (
    <>
      <div className="hamburgerMenu" onClick={toggleMenu}>
        &#9776; {/* ハンバーガーメニューアイコン */}
      </div>
    </>
  );
};

export default HamburgerMenu;
