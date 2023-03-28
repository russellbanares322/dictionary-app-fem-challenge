import { createContext, useState } from "react";
const DictionaryContext = createContext();

export const DictionaryProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [word, setWord] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [font, setFont] = useState("Serif");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleToggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleSearchWord = (e) => {
    e.preventDefault();
    setWord(searchInput);
    setSearchInput("");
  };

  const values = {
    isDarkTheme,
    handleToggleTheme,
    word,
    setSearchInput,
    searchInput,
    handleSearchWord,
    font,
    setFont,
    isSelectOpen,
    setIsSelectOpen,
    handleToggleSelect,
  };
  return (
    <DictionaryContext.Provider value={values}>
      {children}
    </DictionaryContext.Provider>
  );
};

export default DictionaryContext;
