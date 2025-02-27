import React from "react";
import ThemeToggle from "./Toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-galactic-gray">
      {/* Logo */}
      <h1 className=" md:hidden lg:hidden text-galactic-gold text-xl font-bold">Galactic Character Counter</h1>
    </header>
  );
}