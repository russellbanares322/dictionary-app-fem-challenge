import React, { useContext } from "react";
import DictionaryContext from "../../context/DictionaryContext";

const SearchInput = () => {
  const { searchInput, setSearchInput, handleSearchWord } =
    useContext(DictionaryContext);
  console.log(searchInput);
  return (
    <form onSubmit={handleSearchWord}>
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full mt-4 bg-gray-purple outline-none px-7 h-12 font-bold rounded-lg text-md  text-black"
        type="text"
      />
    </form>
  );
};

export default SearchInput;
