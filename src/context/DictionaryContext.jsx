import { createContext, useState } from "react";

const DictionaryContext = createContext();

export const DictionaryProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const values = {
    isDarkTheme,
    handleToggleTheme,
  };
  return (
    <DictionaryContext.Provider value={values}>
      {children}
    </DictionaryContext.Provider>
  );
};

export default DictionaryContext;
