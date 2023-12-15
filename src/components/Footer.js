import React from "react";
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-between items-center mx-4 mb-10">
      <div>
        <img
          src="./images/logo.png"
          alt="logo"
          width={96}
          height={37}
          className="m-10  "
        />
      </div>

      <div>
        <ul className="flex space-x-8 font-semibold ">
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

      <div className="flex text-2xl space-x-4">
        <FaTwitter className="" />
        <AiFillFacebook />
        <FaInstagram />
        <FaPinterest />
      </div>
    </div>
  );
};

export default Footer;
