import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex justify-between mx-2">
      <nav className="flex items-center">
        <img
          src="./images/logo.png"
          alt="logo"
          width={96}
          height={37}
          className="m-10  "
        />
        <ul className="flex space-x-8 font-semibold ">
          <li>
            <a href="/" className="hover:text-[#565564]">
              Find talent
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-[#565564]">
              Inspiration
            </a>
          </li>
          <li className="relative group">
            <a
              href="/"
              className="flex justify-center items-center hover:text-[#565564]"
            >
              Learn design&nbsp; <IoIosArrowDown />
            </a>
            <ul className="absolute hidden space-y-2 bg-white border rounded-md w-[285px] h-[165px] group-hover:block p-8">
              <li>
                <a href="/" className="text-lg text-[#565564c6]">
                  UX Diploma{" "}
                  <h1 className="text-[#565564c6] font-medium text-sm">
                    in partnership with UX Design institute
                  </h1>
                </a>
              </li>
              <li>
                <a href="/" className="text-lg text-[#565564c6]">
                  Live interactive workshops{" "}
                  <h1 className="text-[#565564c6] font-medium text-sm">
                    with design professionals
                  </h1>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/" className="hover:text-[#565564]">
              Jobs
            </a>
          </li>
          <li className="">
            <a href="/" className="hover:text-[#565564]">
              Go Pro
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center ">
        <div className="relative flex justify-center items-center">
          <IoSearchOutline className="text-xl absolute left-8 text-[#6E6D7A]" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className=" rounded-full ml-3 pl-12 py-3 outline-none"
          />
        </div>

        <div className="">
          <ul className="flex justify-center items-center space-x-8 ml-7">
            <li>
              <a
                href="/"
                className="font-semibold text-[15px] hover:text-[#565564] "
              >
                Log in
              </a>
            </li>
            <li>
              <a
                href="/"
                className="bg-[#0D0C22] text-white px-7 py-4 text-[15px] rounded-full font-semibold hover:bg-[#565564]"
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
