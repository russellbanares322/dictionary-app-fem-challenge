import React from "react";
import { IoPlaySharp } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";

const Dictionary = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <div className="flex flex-col gap-1">
          <p className=" text-black font-bold text-4xl">keyboard</p>
          <p className="text-purple">/ki:bo:d/</p>
        </div>
        <div className="bg-light-purple p-3 rounded-full cursor-pointer">
          <IoPlaySharp className="text-purple" size={20} />
        </div>
      </div>
      <div className="mt-7">
        <p className="font-bold relative after:absolute after:place-content-start after:right-0 after:top-[50%] after:bg-light-purple after:w-[90%] after:h-[0.9px] after:block">
          noun
        </p>
      </div>
      <div className="mt-8">
        <p className="text-gray">Meaning</p>
        <ul className=" ml-8 mt-5 list-disc  text-[0.9rem]">
          <li className="text-purple font-light">
            <span className="text-black">Lorem</span>
          </li>
        </ul>
        <div className="flex mt-10 mb-3">
          <p className="text-gray mr-6">Synonyms</p>
          <p className="text-purple font-semibold">electronic keyboard</p>
        </div>
      </div>
      <div className="mt-7">
        <p className="font-bold relative after:absolute after:place-content-start after:right-0 after:top-[50%] after:bg-light-purple after:w-[90%] after:h-[0.9px] after:block">
          verb
        </p>
      </div>
      <div className="mt-8">
        <p className="text-gray">Meaning</p>
        <ul className=" ml-8 mt-5 text-[0.9rem] ">
          <li className="text-purple font-light list-disc mb-2">
            <span className="text-black">To type on a computer keyboard.</span>
          </li>
          <li className="text-gray">
            "Keyboarding is the part of this job I hate the most."
          </li>
        </ul>
        <hr className="text-light-purple mt-8 h-[0.6px]" />
        <div className="flex justify-start items-center mt-5">
          <p className="text-gray mr-6 text-xs">Source</p>
          <p className="text-black text-xs underline flex justify-center items-center gap-1">
            https://www.google.com
            <TbExternalLink className="text-gray" size={16} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
