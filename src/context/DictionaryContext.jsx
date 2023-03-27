import { createContext, useState } from "react";
const DictionaryContext = createContext();

export const DictionaryProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [word, setWord] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleSearchWord = (e) => {
    e.preventDefault();
    setWord(searchInput);
  };

  const values = {
    isDarkTheme,
    handleToggleTheme,
    word,
    setWord,
    setSearchInput,
    searchInput,
    handleSearchWord,
  };
  return (
    <DictionaryContext.Provider value={values}>
      {children}
    </DictionaryContext.Provider>
  );
};

export default DictionaryContext;
