import React from "react";
import "../App.css";

const Main = () => {
  return (
    <div className="flex flex-col items-center min-h-screen ">
      <div className="flex items-center justify-center bg-color-animation rounded-full py-[7px] mt-16">
        <h1 className="text-base font-semibold">
          Over 3 million ready-to-work creatives!
        </h1>
      </div>
      <h1 className="text-7xl text-center mt-10 font-serif">Work with the world’s top<br/>creative talent.</h1>
      <h1 className="text-2xl text-center">
        Connect with millions of top-rated designers & agencies around the
        world.
      </h1>
      <button className="bg-[#0D0C22] text-white px-7 py-4 text-[15px] rounded-full font-semibold hover:bg-[#565564] mt-10 mb-20 ">
        Start hiring today
      </button>
    </div>
  );
};

export default Main;
