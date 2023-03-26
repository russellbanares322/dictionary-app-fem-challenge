import React, { useContext } from "react";
import { BiBook, BiMoon } from "react-icons/bi";
import { TbChevronDown } from "react-icons/tb";
import DictionaryContext from "../../context/DictionaryContext";

const Header = () => {
  const { isDarkTheme, handleToggleTheme } = useContext(DictionaryContext);

  const dropdownIcon = <TbChevronDown size={20} />;

  return (
    <div className="flex justify-between items-center">
      <BiBook className="text-gray" size={33} />
      <div className="flex justify-center items-center">
        <p
          className={`text-black mr-5 relative font-bold after:content-['${dropdownIcon}'] after:pl-2 after:absolute`}
        >
          Serif
        </p>
        <div
          onClick={handleToggleTheme}
          className="w-[2.1rem] bg-gray h-[1rem] rounded-full ml-4 mr-2 relative cursor-pointer"
        >
          <div
            className={`rounded-full w-[0.8rem] h-[0.8rem] bg-white absolute top-[1.3px] ${
              !isDarkTheme ? "left-[2.5px]" : "left-[18px]"
            } transition-all duration-100 ease-in-out`}
          ></div>
        </div>
        <BiMoon className="text-gray" size={20} />
      </div>
    </div>
  );
};

export default Header;
