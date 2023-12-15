import React, { useState } from "react";
import peopleArray from "./peopleArray";
import "../App.css"; // Import the CSS file for styling

const AnimateCard = () => {
  const [animate, setAnimate] = useState(peopleArray);

  return (
    <div className="overflow-hidden  main">
      <div className="marquee-container flex">
        {animate.map((element, k) => (
          <div key={k} className="marquee-item">
            <div className="relative rounded">
              <img
                className="w-[310px] h-[380px] rounded-3xl"
                src={element.image}
                alt="Sunset in the mountains"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end">
                <div className="px-6 py-2 text-white">
                  <div className="font-bold">{element.title}</div>
                  <p className="text-white text-base font-medium">
                    {element.designation}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 bg-opacity-0 rounded-full px-3 py-1 text-sm font-semibold text-white border-solid border-white border-[0.05px] mr-2 mb-2">
                    {element.skill_1}
                  </span>
                  <span className="inline-block bg-gray-200 bg-opacity-0 rounded-full px-3 py-1 text-sm font-semibold text-white border-solid border-white border-[0.05px] mr-2 mb-2">
                    {element.skill_2}
                  </span>
                  <span className="inline-block bg-gray-200 bg-opacity-0 rounded-full px-3 py-1 text-sm font-semibold text-white border-solid border-white border-[0.05px] mr-2 mb-2">
                    {element.skill_3}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        {animate.map((element, k) => (
          <div key={k} className="marquee-item">
            <div className="relative rounded ">
              <img
                className="w-[310px] h-[380px] rounded-3xl"
                src={element.image}
                alt="Sunset in the mountains"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end">
                <div className="px-6 py-2 text-white">
                  <div className="font-bold">{element.title}</div>
                  <p className="text-white text-base font-medium">
                    {element.designation}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white border-solid mr-2 mb-2">
                    {element.skill_1}
                  </span>
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white border-solid mr-2 mb-2">
                    {element.skill_2}
                  </span>
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white border-solid mr-2 mb-2">
                    {element.skill_3}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimateCard;
