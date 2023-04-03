import React, { useContext } from "react";
import { BounceLoader } from "react-spinners";
import Dictionary from "./components/dictionary/Dictionary";
import Header from "./components/header/Header";
import SearchInput from "./components/search/SearchInput";
import DictionaryContext from "./context/DictionaryContext";
import useFetchWord from "./hooks/useFetchWord";

function App() {
  const { isLoading } = useFetchWord();
  const { font, isDarkTheme } = useContext(DictionaryContext);

  const fontStyle =
    font === "Serif"
      ? "font-serif"
      : font === "Mono"
      ? "font-mono"
      : "font-sans";

  return (
    <div
      className={`flex min-h-[400px] flex-col justify-center items-center py-10 px-10 md:px-1 transition duration-500 ease-in-out ${fontStyle} ${
        isDarkTheme ? "bg-dark" : "bg-white"
      }`}
    >
      <div className="w-full md:w-[35rem] mx-3 md:mx-2 flex-grow-1 h-full">
        {!!isLoading && (
          <div className="flex items-center justify-center h-screen">
            <BounceLoader color="#A544ED" size={80} />
          </div>
        )}
        {!isLoading && (
          <>
            <Header />
            <SearchInput />
            <Dictionary />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
