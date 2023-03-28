import React, { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import DictionaryContext from "../../context/DictionaryContext";

const SearchInput = () => {
  const { searchInput, setSearchInput, handleSearchWord } =
    useContext(DictionaryContext);
  console.log(searchInput);
  return (
    <form className="relative" onSubmit={handleSearchWord}>
      <input
        autoFocus
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full mt-10 bg-gray-purple  px-7 h-12 font-bold rounded-xl text-md  text-black focus:outline-purple"
        type="text"
      />
      <BiSearch className="text-purple absolute top-14 right-4" size={18} />
    </form>
  );
};

export default SearchInput;
