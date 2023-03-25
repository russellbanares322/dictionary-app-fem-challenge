import React from "react";
import { IoPlaySharp } from "react-icons/io5";

const Dictionary = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <div className="flex flex-col gap-1">
          <p className="text-3xl text-black font-bold">keyboard</p>
          <p className="text-purple">/ki:bo:d/</p>
        </div>
        <div className="bg-light-purple p-3 rounded-full cursor-pointer cursor-pointer">
          <IoPlaySharp className="text-purple " size={20} />
        </div>
      </div>
      <div className="mt-7">
        <p className="font-bold relative after:absolute after:place-content-start after:right-0 after:top-[50%] after:bg-light-purple after:w-[90%] after:h-[0.9px] after:block">
          noun
        </p>
      </div>
      <div className="mt-8">
        <p className="text-gray">Meaning</p>
        <ul className=" ml-8 mt-5 list-disc">
          <li className="text-black font-light">Lorem</li>
        </ul>
      </div>
    </div>
  );
};

export default Dictionary;
