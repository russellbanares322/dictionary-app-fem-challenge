import { createContext, useState } from "react";
const DictionaryContext = createContext();

export const DictionaryProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [word, setWord] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleSearchWord = () => {
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
