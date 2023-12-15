import React, { useState } from "react";
import FooterAnimation from "./FooterAnimation";

const FooterCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [footercard, setFooterCard] = useState(FooterAnimation);

  return (
    <div className="overflow-hidden py-20">
      <div className="footer-container flex">
        {footercard.map((element, index) => (
          <div
            key={index}
            className={`footerAnimate ${hoveredIndex === index ? "paused hovered" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="">
              <img
                className="w-[196px] h-[150px] rounded-lg "
                src={element.image}
                alt=""
              />
              <div>
              <h1>{element.title}</h1>
              </div>
            </div>
          </div>
        ))}
        {footercard.map((element, index) => (
          <div
            key={index}
            className={`footerAnimate ${hoveredIndex === index ? "paused hovered" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="">
              <img
                className="w-[196px] h-[150px] rounded-lg "
                src={element.image}
                alt=""
              />
              <div>
              <h1>{element.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterCard;
