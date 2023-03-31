import React, { useContext, useEffect, useState } from "react";
import { IoPlaySharp, IoStopSharp } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";
import DictionaryContext from "../../context/DictionaryContext";
import useFetchWord from "../../hooks/useFetchWord";

const Dictionary = () => {
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);
  const { data, error } = useFetchWord();
  const { isDarkTheme } = useContext(DictionaryContext);
  const audioIconStyle = isDarkTheme ? "text-purple p-1" : "text-purple p-1";
  const fontColor = isDarkTheme ? "text-white" : "text-black";

  const handlePlayAudio = (wordAudio) => {
    const audio = new Audio(wordAudio);
    audio.play();
    setIsAudioPlayed(true);
  };

  const handleStopAudio = (wordAudio) => {
    const audio = new Audio(wordAudio);
    audio.pause();
    setIsAudioPlayed(false);
  };

  useEffect(() => {
    const modifyAudioIcon = setTimeout(() => {
      setIsAudioPlayed(false);
      clearTimeout(modifyAudioIcon);
    }, 3000);
  }, [isAudioPlayed]);

  return (
    <div>
      {error && <h1 className="text-center mt-20 text-2xl">{error}</h1>}
      {data?.map((val) => (
        <div key={val?.id}>
          <div className="flex justify-between items-center mt-10">
            <div className="flex flex-col gap-1">
              <p className={` font-bold text-4xl ${fontColor}`}>{val?.word}</p>
              <p className="text-purple mt-1 text-lg">{val?.phonetic}</p>
            </div>
            {val?.phonetics
              .filter(({ audio }) => audio !== null)
              .slice(-1)
              .map(({ audio }, index) => (
                <div
                  onClick={() => handlePlayAudio(audio)}
                  key={index}
                  className={` p-3 rounded-full cursor-pointer ${
                    isDarkTheme ? "bg-dark-purple" : "bg-light-purple"
                  }`}
                >
                  {!isAudioPlayed && (
                    <IoPlaySharp
                      onClick={() => handlePlayAudio(audio)}
                      className={audioIconStyle}
                      size={27}
                    />
                  )}
                  {!!isAudioPlayed && (
                    <IoStopSharp
                      onClick={() => handleStopAudio(audio)}
                      className={audioIconStyle}
                      size={27}
                    />
                  )}
                </div>
              ))}
          </div>
          <div className="mt-7">
            <p
              className={`font-bold relative after:absolute after:right-0 after:top-[50%] after:bg-light-purple after:w-[80%] after:h-[0.9px] after:block md:after:w-[90%] ${fontColor}`}
            >
              noun
            </p>
          </div>
          <div className="mt-8">
            <p className="text-gray">Meaning</p>
            <ul className=" ml-8 list-disc mt-5 text-[1rem]">
              {val?.meanings
                .filter(({ partOfSpeech }) => partOfSpeech === "noun")
                .map(({ definitions }) =>
                  definitions?.map(({ definition }, index) => (
                    <div key={index}>
                      {definition?.length === 0 ? (
                        <p className="text-purple">N/A</p>
                      ) : (
                        <>
                          <li className="text-purple font-light mt-3">
                            <span className={fontColor}>{definition}</span>
                          </li>
                        </>
                      )}
                    </div>
                  ))
                )}
            </ul>
            <div className="flex mt-10 mb-3 text-md">
              <p className="text-gray mr-4">Synonyms</p>
              <div>
                {val?.meanings
                  .filter(({ partOfSpeech }) => partOfSpeech === "noun")
                  .map(({ synonyms }, index) => (
                    <p key={index} className="text-purple font-semibold">
                      {synonyms?.length == 0 ? "N/A" : synonyms?.join(", ")}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <div className="mt-7">
            <p
              className={`font-bold relative after:absolute after:place-content-start after:right-0 after:top-[50%] after:bg-light-purple after:w-[80%] after:h-[0.9px] after:block md:after:w-[90%] ${fontColor}`}
            >
              verb
            </p>
          </div>
          <div className="mt-8">
            <p className="text-gray">Meaning</p>
            <ul className=" ml-8 mt-5 text-[1rem]">
              {val?.meanings
                .filter(({ partOfSpeech }) => partOfSpeech === "verb")
                .map(({ definitions }) =>
                  definitions?.map(({ definition, example }, index) => (
                    <div key={index}>
                      <>
                        <li className="list-disc text-purple font-light mt-3">
                          <span className={fontColor}>{definition}</span>
                        </li>
                        {example?.length > 1 && (
                          <p className="text-gray mt-2">"{example}"</p>
                        )}
                        {example?.length == 0 && (
                          <p className="text-purple">N/A</p>
                        )}
                      </>
                    </div>
                  ))
                )}
            </ul>
            <hr className="text-light-purple mt-8 h-[0.6px]" />
            <div className="flex justify-start items-center mt-5">
              <p className="text-gray mr-5 text-sm">Source</p>
              <a
                href={val?.sourceUrls[0]}
                target="_blank"
                className={`text-xs flex justify-center items-center gap-1 cursor-pointer underline ${fontColor}`}
              >
                {val?.sourceUrls[0]}
                <TbExternalLink className={fontColor} size={16} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dictionary;
