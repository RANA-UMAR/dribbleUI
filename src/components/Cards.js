import React, { useState } from "react";
import personData from "./personData";
import { IoMdHeart } from "react-icons/io";
import { TbEyeFilled } from "react-icons/tb";

const Cards = () => {
  const [cards, setCards] = useState(personData);

  return (
    <div className="mx-auto max-w-screen-xl">
      <div>
        <h1 className="text-center py-16 text-5xl mt-3">
          Explore inspiring designs
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((element, k) => (
          <div key={k} className="mx-auto ">
            <img
              src={element.image}
              className="w-[348px] h-[263px] rounded-xl"
              alt=""
            />
            <div className="py-2 flex justify-between w-[340px]">
              <img
                src={element.smallImage}
                className="w-[28px] rounded-full ml-3"
                alt=""
              />
              <div className="flex">
                <h2 className="mr-3 font-semibold">{element.title}</h2>
                <span className="inline-flex items-center rounded-md bg-gray-300 px-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                  {element.tag}
                </span>
              </div>
              <div className="flex">
                <h2 className="mr-3 ">
                  <IoMdHeart className="inline-flex items-center text-xl" />
                  {element.like}
                </h2>
                <h2>
                  <TbEyeFilled className="inline-flex items-center text-xl" />
                  {element.views}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mb-10">
        <button className="px-7 py-4 text-[15px] rounded-full font-semibold text-black hover:text-[#565564] border solid border-black border-2 mt-10 mb-20 ">
          Browse more inspiration
        </button>
      </div>
    </div>
  );
};

export default Cards;
