import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex justify-between items-center mx-2 relative z-10">
      <nav className={`flex justify-center items-center ${showMenu ? 'hidden' : 'block'} hidden lg:flex`}>

        <img
          src="./images/logo.png"
          alt="logo"
          width={96}
          height={37}
          className="m-10"
        />
        <ul className="flex gap-5 font-semibold ">
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
      <div className="menu lg:hidden flex justify-center items-center" >
        <HiMenuAlt2 onClick={toggleMenu}/>
      <img
          src="./images/logo.png"
          alt="logo"
          width={96}
          height={37}
          className="p-2 "
        />
      </div>
      <div className="flex items-center ">
        <div className="relative flex justify-center items-center">
          <IoSearchOutline className="text-xl absolute left-8 text-[#6E6D7A]" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className=" rounded-full ml-3 pl-12 py-3 outline-none w-44"
          />
        </div>

        <div className="hidden md:flex justify-center items-center space-x-5 ml-7">
          <a
            href="/"
            className="font-semibold text-[15px] hover:text-[#565564] "
          >
            Log in
          </a>
          <a
            href="/"
            className="bg-[#0D0C22] text-white px-7 py-4 text-[15px] rounded-full font-semibold hover:bg-[#565564]"
          >
            Sign up
          </a>
        </div>
      </div>

      {/* Responsive Menu */}
      {showMenu && (
        <div className="lg:hidden absolute top-20 right-2 bg-white rounded-md border p-4 z-20">
          <ul className="flex flex-col space-y-4">
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
            <li>
              <a href="/" className="hover:text-[#565564]">
                Learn design
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#565564]">
                Jobs
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#565564]">
                Go Pro
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
