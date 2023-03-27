import React, { useContext } from "react";
import DictionaryContext from "../../context/DictionaryContext";

const SearchInput = () => {
  const { searchInput, setSearchInput, handleSearchWord } =
    useContext(DictionaryContext);
  console.log(searchInput);
  return (
    <input
      onSubmit={handleSearchWord}
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      className="w-full mt-4 bg-gray-purple outline-none px-3 h-11 font-bold rounded-md text-sm"
      type="text"
    />
  );
};

export default SearchInput;
