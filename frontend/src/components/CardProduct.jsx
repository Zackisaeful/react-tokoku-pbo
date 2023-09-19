import React, { useState, useEffect } from "react";
import { Card } from "antd";
import {AiOutlineShoppingCart } from "react-icons/ai"

function TruncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + "....";
  }
}

const CardProduct = (props) => {
  const [length, setLength] = useState(60);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 1225 && windowWidth <= 1000) {
        setLength(50);
      } else if (windowWidth >= 1141 && windowWidth <= 1224) {
        setLength(44);
      } else if (windowWidth >= 1001 && windowWidth <= 1140) {
        setLength(35);
      } else if (windowWidth >= 941 && windowWidth <= 1000) {
        setLength(60);
      } 
       else if (windowWidth >= 640 && windowWidth <= 940) {
        setLength(35);
      } 
      else if (windowWidth < 640) {
        setLength(50);
      } else {
        setLength(60);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const truncatedDeskripsi = TruncateText(props.deskripsi || "", length);

  return (
    <Card
      hoverable
      // sm:w-[100%]
      className="w-52  p-[9px] "
      cover={<img alt={props.alt} src={props.img} />}
    >
      <div className="flex justify-end  w-full   text-2xl">
          <button className="">
          <AiOutlineShoppingCart className="scale-x-[-1] active:text-cyan-600" />
          </button>
      </div>
      <div className="m-[-20px] text-left">
        <p className="font-bold ">{props.judul}</p>
        <p className="font-bold ">{props.harga}</p>
        <p className="">{truncatedDeskripsi}</p>
      </div>
    </Card>
  );
};

export default CardProduct;
