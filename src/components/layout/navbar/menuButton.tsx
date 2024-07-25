import React from "react";

type props = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const MenuButton = ({ isMenuOpen, toggleMenu }: props) => {
  return (
    <div className="w-7 h-7 lg:hidden">
      <button
        onClick={toggleMenu}
        className="group/button h-full w-full relative flex flex-col justify-center gap-1 overflow-hidden"
      >
        <span
          className={`relative block w-7 h-1 rounded-lg bg-gray-700 transition-all duration-500 ${
            isMenuOpen ? "-rotate-45 top-2" : "rotate-0 top-0"
          }`}
        />
        <span
          className={`relative ${
            isMenuOpen ? "left-full" : "left-0"
          } block w-7 h-1 rounded-lg bg-gray-700 transition-all duration-500 delay-75`}
        />
        <span
          className={`relative block w-7 h-1 rounded-lg bg-gray-700 transition-all duration-500 ${
            isMenuOpen ? "rotate-45 bottom-2" : "rotate-0 bottom-0"
          }`}
        />
      </button>
    </div>
  );
};

export default MenuButton;
