import axios from "axios";
import { useState, useEffect, useContext } from "react";
import DictionaryContext from "../context/DictionaryContext";
import { randomWords } from "../data/DictionaryData";

const useFetchWord = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { word } = useContext(DictionaryContext);

  const randomWord =
    randomWords[Math.floor(Math.random() * randomWords.length)];

  const handleFetchText = async () => {
    setIsLoading(true);

    await axios
      .get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word || randomWord}`
      )
      .then((res) => {
        setData(res.data.slice(0, 1));
        setIsLoading(false);
        setError(null);
      })
      .catch(() => {
        setError(`Sorry, no query matches the word ${word}`);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    handleFetchText();
  }, [word]);

  return { data, isLoading, error };
};
export default useFetchWord;
