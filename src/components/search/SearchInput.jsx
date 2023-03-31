import React, { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import DictionaryContext from "../../context/DictionaryContext";

const SearchInput = () => {
  const { searchInput, setSearchInput, handleSearchWord, isDarkTheme } =
    useContext(DictionaryContext);
  console.log(searchInput);
  return (
    <form className="relative" onSubmit={handleSearchWord}>
      <input
        autoFocus
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className={`w-full mt-10 px-7 h-12 font-bold rounded-xl text-md focus:outline-purple ${
          isDarkTheme ? "bg-dark-gray text-white" : "bg-gray-purple text-black"
        }`}
        type="text"
      />
      <BiSearch className="text-purple absolute top-14 right-4" size={18} />
    </form>
  );
};

export default SearchInput;
