import React, { useState } from "react";
import { IoPlaySharp, IoStopSharp } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";
import useFetchWord from "../../hooks/useFetchWord";

const Dictionary = () => {
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);
  const { data, isLoading, error } = useFetchWord();

  const handlePlayAudio = () => {
    setIsAudioPlayed((prev) => !prev);
  };
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data?.map((val) => (
        <div key={val?.id}>
          <div className="flex justify-between items-center mt-10">
            <div className="flex flex-col gap-1">
              <p className=" text-black font-bold text-4xl">{val?.word}</p>
              <p className="text-purple">{val?.phonetic}</p>
            </div>
            <div
              onClick={handlePlayAudio}
              className="bg-light-purple p-3 rounded-full cursor-pointer"
            >
              {!isAudioPlayed && (
                <IoPlaySharp className="text-purple  pl-1" size={25} />
              )}
              {!!isAudioPlayed && (
                <IoStopSharp className="text-purple pl-1" size={25} />
              )}
            </div>
          </div>
          <div className="mt-7">
            <p className="font-bold relative after:absolute after:place-content-start after:right-0 after:top-[50%] after:bg-light-purple after:w-[90%] after:h-[0.9px] after:block">
              noun
            </p>
          </div>
          <div className="mt-8">
            <p className="text-gray">Meaning</p>
            <ul className=" ml-8 list-disc mt-5 text-[1rem]">
              {val?.meanings[0]?.definitions.map(({ definition }) => (
                <li key={definition.id} className="text-purple font-light mt-3">
                  <span className="text-black">{definition}</span>
                </li>
              ))}
            </ul>
            <div className="flex mt-10 mb-3">
              <p className="text-gray mr-4">Synonyms</p>
              <p className="text-purple font-semibold">
                {val?.meanings[0]?.synonyms.join(", ")}
              </p>
            </div>
          </div>
          <div className="mt-7">
            <p className="font-bold relative after:absolute after:place-content-start after:right-0 after:top-[50%] after:bg-light-purple after:w-[90%] after:h-[0.9px] after:block">
              verb
            </p>
          </div>
          <div className="mt-8">
            <p className="text-gray">Meaning</p>
            <ul className=" ml-8 mt-5 text-[1rem]">
              {val?.meanings[1]?.definitions.map(({ definition, example }) => (
                <div key={definition.id}>
                  <li className="list-disc text-purple font-light mt-3">
                    <span className="text-black">{definition}</span>
                  </li>
                  <p className="text-gray mt-2">{example}</p>
                </div>
              ))}
            </ul>
            <hr className="text-light-purple mt-8 h-[0.6px]" />
            <div className="flex justify-start items-center mt-5">
              <p className="text-gray mr-6 text-sm">Source</p>
              <a
                href={val?.sourceUrls[0]}
                target="_blank"
                className="text-black text-xs flex justify-center items-center gap-1 cursor-pointer underline"
              >
                {val?.sourceUrls[0]}
                <TbExternalLink className="text-gray" size={16} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dictionary;
