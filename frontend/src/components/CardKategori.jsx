import React, { useState, useEffect } from "react";
import { Card } from "antd";

function TruncateText(text, maxLength) {
  if (text.length <= maxLength) {
    // Jika panjang teks kurang dari atau sama dengan maxLength, tidak perlu dipotong
    return text;
  } else {
    // Jika panjang teks melebihi maxLength, potong dan tambahkan "..."
    return text.slice(0, maxLength) + "....";
  }
}

const CardKategori = (props) => {
  const [length, setLength] = useState(60);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 1225 && windowWidth <= 1000) {
        // Layar berada dalam rentang antara 768 dan 1000
        setLength(50);
      } else if (windowWidth >= 1141 && windowWidth <= 1224) {
        setLength(44);
      } else if (windowWidth >= 1001 && windowWidth <= 1140) {
        setLength(35);
      } else if (windowWidth >= 941 && windowWidth <= 1000) {
        // Layar sm
        setLength(60);
      } 
       else if (windowWidth >= 640 && windowWidth <= 940) {
        // Layar sm
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

  const truncatedDeskripsi = TruncateText(props.deskripsi || "", length); // Ganti 50 dengan jumlah karakter maksimum yang Anda inginkan

  return (
    <Card
      hoverable
      // sm:w-[100%]
      className={`w-40 p-[9px]`}
      cover={<img alt={props.alt} src={props.img} />}
    >
      <div className="m-[-20px] text-left">
        <p className="font-bold ">{props.judul}</p>
        <p className="font-bold ">{props.harga}</p>
        <p className="">{truncatedDeskripsi}</p>
      </div>
    </Card>
  );
};

export default CardKategori;
