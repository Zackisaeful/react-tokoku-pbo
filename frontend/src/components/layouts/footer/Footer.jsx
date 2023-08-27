import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full h-40 bg-[#D3E7FF] text-black p-4 h-400 ">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-center mb-4">
          <ul className="flex space-x-4 font-bold">
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Help
              </a>
            </li>
          </ul>
        </div>
        <p className="text-black">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

