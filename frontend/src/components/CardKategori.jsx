import React, { useState, useEffect } from "react";

function TruncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + "....";
  }
}

const CardKategori = (props) => {
  const [length, setLength] = useState(9);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 1225 && windowWidth <= 1000) {
        setLength(15);
      } else if (windowWidth >= 1141 && windowWidth <= 1224) {
        setLength(10);
      } else if (windowWidth >= 1001 && windowWidth <= 1140) {
        setLength(10);
      } else if (windowWidth >= 941 && windowWidth <= 1000) {
        setLength(10);
      } else if (windowWidth >= 640 && windowWidth <= 940) {
        setLength(10);
      } else if (windowWidth < 640) {
        setLength(9);
      } else {
        setLength(10);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const truncatedDeskripsi = TruncateText(props.judul || "", length);

  return (
    <div className="bg-white border w-30 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={props.img}
          alt=""
        />
      </a>
      <div className="p-2 sm:p-5">
        <a href="#">
          <p className="mb-2 text-[8px] sm:text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            {truncatedDeskripsi}
          </p>
        </a>
      </div>
    </div>
  );
};

export default CardKategori;
