import React from "react";
import Dictionary from "./components/dictionary/Dictionary";
import Header from "./components/header/Header";
import SearchInput from "./components/search/SearchInput";

function App() {
  return (
    <div className={`font-serif flex justify-center items-center py-10`}>
      <div className="w-[35rem]">
        <Header />
        <SearchInput />
        <Dictionary />
      </div>
    </div>
  );
}

export default App;
