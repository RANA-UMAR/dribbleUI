import React from "react";
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center mx-4 mb-10 lg:mb-0">
      <div>
        <img
          src="./images/logo.png"
          alt="logo"
          width={96}
          height={37}
          className="m-10"
        />
      </div>

      <div className="lg:ml-10">
        <ul className="flex flex-wrap justify-center lg:justify-center space-x-8 lg:space-x-10 font-semibold ">
          <li>
            <a href="/" className="hover:text-[#565564]">
              For designers
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-[#565564]">
              Hire talent
            </a>
          </li>

          <li>
            <a href="/" className="hover:text-[#565564]">
              Inspirations
            </a>
          </li>

          <li>
            <a href="/" className="hover:text-[#565564]">
              Advertising
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-[#565564]">
              Blog
            </a>
          </li>
          <li className="">
            <a href="/" className="hover:text-[#565564]">
              About
            </a>
          </li>

          <li>
            <a href="/" className="hover:text-[#565564]">
              Careers
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-[#565564]">
              Support
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
        <FaTwitter className="mr-2" />
        <AiFillFacebook className="mr-2" />
        <FaInstagram className="mr-2" />
        <FaPinterest />
      </div>
    </div>
  );
};

export default Footer;
