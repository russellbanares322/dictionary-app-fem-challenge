import React, { useContext } from "react";
import { BiBook, BiMoon } from "react-icons/bi";
import DictionaryContext from "../../context/DictionaryContext";
import { fontOptions } from "../../data/DictionaryData";

const Header = () => {
  const {
    isDarkTheme,
    handleToggleTheme,
    setFont,
    font,
    isSelectOpen,
    setIsSelectOpen,
    handleToggleSelect,
  } = useContext(DictionaryContext);

  const handleSelectFont = (selectedFont) => {
    setFont(selectedFont);
    setIsSelectOpen(false);
  };

  return (
    <div className="flex justify-between items-center">
      <BiBook className="text-gray" size={33} />
      <div className="flex justify-center items-center">
        <div className="relative w-20 cursor-pointer text-center z-20">
          <p
            onClick={handleToggleSelect}
            className="font-bold w-14 after:content-chevronIcon after:absolute after:w-6 after:right-[-1px] after:top-[0.9px]"
          >
            {font}
          </p>
          <div
            className={`${
              isSelectOpen
                ? "bg-white text-start absolute w-full pb-1 visible"
                : "hidden"
            }`}
          >
            {fontOptions.map((val, index) => (
              <p
                onClick={() => handleSelectFont(val.style)}
                className="pl-2 hover:bg-light-purple transition duration-75 ease-in-out"
                key={index}
              >
                {val.style}
              </p>
            ))}
          </div>
        </div>
        <div className="border-l border-light-purple ml-5">
          <div
            onClick={handleToggleTheme}
            className="w-[2.1rem] bg-gray h-[1rem] rounded-full ml-5 mr-2 relative cursor-pointer"
          >
            <div
              className={`rounded-full w-[0.8rem] h-[0.8rem] bg-white absolute top-[1.3px] ${
                !isDarkTheme ? "left-[2.5px]" : "left-[18px]"
              } transition-all duration-100 ease-in-out`}
            ></div>
          </div>
        </div>
        <BiMoon className="text-gray" size={20} />
      </div>
    </div>
  );
};

export default Header;
