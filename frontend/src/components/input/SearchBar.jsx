import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { dataHistory } from "../../assets/data";
import { MdSearch } from "react-icons/md";

function TruncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + "....";
  }
}

const Searchbar = (props) => {
  const [history, setHistory] = useState(false);
  const [length, setlength] = useState(62);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 640) {
        setlength(40);
      } else {
        setlength(62);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFocus = () => {
    setHistory(true);
  };

  const handleBlur = () => {
    setHistory(false);
  };

  return (
    <>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <MdSearch className="w-5 h-5 text-gray-500 dark:text-gray-400 " />
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full h-[40px] p-4 pl-10 text-xs  sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
        placeholder="Cari barang..."
        required
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button
        type="submit"
        className="text-white  absolute right-2.5 bottom-2.5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-xs sm:text-sm text-center h-[30px] top-[5px] px-[11px] "
      >
        {" "}
        Cari
      </button>
    </div>
          <div
          className={`no-scrollbar bg-white rounded-lg border-2 min-w-[21rem] max-w-[100%] text-xs sm:text-sm overflow-y-scroll  min-h-[15rem] max-h-[20rem] font-semibold absolute text-black ${
            history ? "block" : "hidden"
          }`}
        >
          <ul>
            {dataHistory.map((data) => (
              <li
                className="flex justify-between hover:bg-slate-300 "
                key={data.id}
              >
                <MdSearch className="w-5 h-5 text-gray-500 dark:text-gray-400 m-3" />
                <span className="my-3 w-[100%] text-left">
                  {TruncateText(data.history, length)}
                </span>
                <Link className="place-items-end my-3 mx-3 text-[blue]">
                  Hapus
                </Link>
              </li>
            ))}
          </ul>
        </div>
        </>
  );
};

export default Searchbar;
