import React, { useRef, useState, useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import CardProduct from "../components/CardProduct";
// import {dataProduct }from "../assets/data";
import { dataProduct } from "../assets/data";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const ShoppingCart = () => {
  return (
    <MainLayout>
      {/* tambah class pada button next dan prev otomatis untuk pembeda */}
      <section className=" w-full h-full mt-[100px] mx-auto ">
        <div className="bg-gray-300 h-[30px] w-[100px] mx-[100px] py[10px] text-center rounded  ">
          makanan
        </div>
        <hr className="border-t-2 t-0 border-gray-300 w-4/5 mx-auto my-4" />
        <div className="w-[80%] flex mx-auto">
          <div className="container-card  w-[50%] my-10 flex h-full  flex-wrap">
            {dataProduct.map((data) => (
              <CardProduct
                key={data.id}
                alt={"indomie"}
                img={data.img_url}
                judul={"indomie goreng"}
                deskripsi={
                  "Lorem ipsum dolor sit amet consectetur adipisicing...."
                }
              />
            ))}
          </div>
          <div className="w-[50%]">
            {dataProduct.map((data) => (
              <CardProduct
                key={data.id}
                alt={"indomie"}
                img={data.img_url}
                judul={"indomie goreng"}
                deskripsi={
                  "Lorem ipsum dolor sit amet consectetur adipisicing...."
                }
              />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ShoppingCart;
