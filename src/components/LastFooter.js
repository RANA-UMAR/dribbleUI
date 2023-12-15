import React from "react";

const LastFooter = () => {
  return (
    <div className="flex justify-between items-center font-normal mx-6">
      <div>
        <ul className="flex space-x-8 ">
          <li>
            <a href="/" className="hover:text-[#565564]">
              © 2023 Dribbble
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-[#565564]">
              Terms
            </a>
          </li>

          <li>
            <a href="/" className="hover:text-[#565564]">
              Privacy
            </a>
          </li>

          <li className="mb-16">
            <a href="/" className="hover:text-[#565564]">
              Cookies
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="flex space-x-8 ">
          <li>
            <a href="/" className="hover:text-[#565564]">
              Jobs
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-[#565564]">
              Designers
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-[#565564]">
              Freelancers
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-[#565564]">
              Tags
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-[#565564]">
              Places
            </a>
          </li>{" "}
          <li className="mb-16">
            <a href="/" className="hover:text-[#565564]">
              Resources
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LastFooter;
