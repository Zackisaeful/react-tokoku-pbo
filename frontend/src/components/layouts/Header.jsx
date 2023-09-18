import React, { useState, useEffect } from "react";
import SearchBar from "../input/SearchBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { dataHistory } from "../../assets/data";
import { MdSearch } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 640) {
        setSearch(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="w-full bg-[#6CADFF] shadow text-white fixed top-0 z-[999]">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8  ">
        <div>
          <div
            className={`flex items-center justify-between py-3 md:py-5 md:block `}
          >
            <Link
              href="javascript:void(0) "
              className={` ${search ? "hidden" : "block"} sm:block`}
            >
              <img src="./logo.png" alt="" className="w-[130px]" />
            </Link>
            <div className="md:hidden flex ">
              <button
                className={`bg-white h-7 px-2 my-auto rounded sm:hidden mx-5 
                ${search ? "mx-0" : "mx-5"}  
                ${search ? "mt-1" : "mx-auto"}  
                ${search ? "block" : "hidden"}  

                `}
                onClick={() => setSearch(false)}
              >
                <FiArrowLeft className="w-6 h-6 text-gray-500 " />
              </button>

              <button
                className={`bg-white h-7 px-2 my-auto rounded sm:hidden mx-5 
                ${search ? "mx-0" : "mx-5"}  
                ${search ? "mt-1" : "mx-auto"}  
                ${search ? "hidden" : "bg-white"}  
                `}
                onClick={() => setSearch(true)}
              >
                <MdSearch className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </button>

              <button
                className={`p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border  ${
                  search ? "hidden" : "block"
                }`}
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* <div className="mx-[auto]   hidden sm:block  sm:w-[70%]   md:w-[40%]  lg:w-[40%] xl:w-[40%]  "> */}
        {/* <div className="mx-[auto]   hidden md:block  sm:w-[70%]   md:w-[40%]  lg:w-[40%] xl:w-[40%]  "> */}

        <div
          className={`mx-[auto] w-[70%]  h-[53px] sm:block sm:mt-[-50px] sm:h-[55px]  md:mt-auto sm:mt-auto sm:mx-auto md:w-[40%] sm:w-[50%] lg:w-[40%] xl:w-[40%] 
          ${search ? "block" : "hidden"}
          ${search ? "mt-[-45px]" : "hidden"}
          `}
        >
          <SearchBar />
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className=" hover:text-blue-600 ">
                <Link to={"/shopping-cart"}  className="text-3xl " >
                  <AiOutlineShoppingCart className="scale-x-[-1]" />
                </Link>
              </li>
              <li className=" font-semibold  ">
                <Link to={"/login"} className="hover:text-blue-600">
                  LOGIN
                </Link>{" "}
              </li>
              <li className=" font-semibold  hover:text-blue-600  ">
                <Link to={"/account"} className="hidden">
                  <img
                    src={"./default-profile-.jpg"}
                    className="w-[40px] rounded-full"
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
