import React from "react";
import { BounceLoader } from "react-spinners";
import Dictionary from "./components/dictionary/Dictionary";
import Header from "./components/header/Header";
import SearchInput from "./components/search/SearchInput";
import useFetchWord from "./hooks/useFetchWord";

function App() {
  const { isLoading } = useFetchWord();
  return (
    <div
      className={`font-serif flex justify-center items-center py-10 px-10 md:px-1 `}
    >
      <div className="w-[35rem]">
        {!!isLoading && (
          <div className="flex items-center justify-center mt-32">
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
