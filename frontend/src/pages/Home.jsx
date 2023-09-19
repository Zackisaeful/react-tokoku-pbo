import React, { useRef, useState, useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import CardProduct from "../components/CardProduct";
import CardKategori from "../components/CardKategori";
import { dataKategori, dataProduct } from "../assets/data";
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

const Home = () => {
  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [PerViewKategori, setPerViewKategori] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 801 && windowWidth <= 1000) {
        setSlidesPerView(3);
        setPerViewKategori(4);
      } else if (windowWidth >= 640 && windowWidth <= 800) {
        // Layar sm
        setSlidesPerView(2);
        setPerViewKategori(2);
      } else if (windowWidth < 640) {
        setSlidesPerView(1);
        setPerViewKategori(2);
      } else {
        setSlidesPerView(4);
        setPerViewKategori(5);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const prevButton = useRef();
  const nextButton = useRef();

  const handleSlideChange = (swiper) => {
    setSwiper(swiper);

    if (swiper.isBeginning) {
      // Slide berada di posisi awal (kiri)
      prevButton.current.style.opacity = "0";
    } else {
      prevButton.current.style.opacity = "1";
    }

    if (swiper.isEnd) {
      // Slide berada di posisi akhir (kanan)
      nextButton.current.style.opacity = "0";
    } else {
      nextButton.current.style.opacity = "1";
    }
  };

  return (
    <MainLayout>
      <section className="section-home w-full">
        {/* bg-slate-200 */}
        <div className="md:h-[16rem] md:w-[85%] mx-auto mt-[100px]  flex justify-between ">
          <button className="my-custom-prev">
            <SlArrowLeft />
          </button>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={{
              prevEl: ".my-custom-prev",
              nextEl: ".my-custom-next",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://www.static-src.com/siva/asset/09_2023/iPhone18Prosept2000x500.jpg"
                className="rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://icms-image.slatic.net/images/ims-web/632957a3-2d7d-4a2a-bad7-adcae1f79e5a.jpg"
                className="rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.static-src.com/siva/asset/09_2023/desktop-11sep-sanken-car9.jpg?w=1440"
                className="rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.static-src.com/siva/asset/09_2023/Polytron-BBD-Sept-HP-2000x500.jpg?w=1440"
                className="rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.static-src.com/siva/asset/09_2023/desktop-11sep-realme-car8.jpg?w=1440"
                className="rounded-md"
              />
            </SwiperSlide>
          </Swiper>
          <button className="my-custom-next">
            <SlArrowRight />
          </button>
        </div>

        <div className="container-card m-auto w-[70%] h-[20rem] flex  justify-between  ">
          <div className=" flex justify-center items-center">
            <button
              ref={prevButton}
              className="kategori-button-prev opacity-5  bg-white drop-shadow-xl rounded-[100%] h-[50px]  px-[17px]  "
            >
              <SlArrowLeft />
            </button>
          </div>
          <Swiper
            slidesPerView={PerViewKategori}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            navigation={{
              prevEl: ".kategori-button-prev",
              nextEl: ".kategori-button-next",
            }}
            spaceBetween={30}
            modules={[Navigation]}
            className="mySwiper"
          >
            {dataKategori.map((data) => (
              <SwiperSlide key={data.id}>
                <CardKategori
                  alt={data.kategori}
                  img={data.img_url}
                  judul={data.kategori}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className=" flex justify-center items-center">
            <button
              ref={nextButton}
              className="kategori-button-next bg-white drop-shadow-xl rounded-[100%] h-[50px]  px-[17px]  my-[12%]"
            >
              <SlArrowRight />
            </button>
          </div>
        </div>
      </section>
      {/* tambah class pada button next dan prev otomatis untuk pembeda */}
      <section className="section-home w-full bg-blue ">
        <hr className="border-t-2 t-0 border-gray-300 w-4/5 mx-auto my-4" />
        <div className="bg-gray-300 h-[30px] w-[100px] mx-[100px] py[10px] text-center rounded  ">
          makanan
        </div>
        <div className="container-card m-auto w-[80%] my-10 bg-blue h-[20rem] flex  justify-between ">
          <button className="my-custom-prev-button ">
            <SlArrowLeft />
          </button>

          <Swiper
            slidesPerView={slidesPerView}
            navigation={{
              prevEl: ".my-custom-prev-button",
              nextEl: ".my-custom-next-button",
            }}
            spaceBetween={30}
            modules={[Navigation]}
            className="mySwiper"
          >
            {dataProduct.map((data) => (
              <SwiperSlide key={data.id}>
                <CardProduct
                  alt={"indomie"}
                  img={data.img_url}
                  judul={data.nama_product}
                  harga={data.harga}
                  deskripsi={
                    "Lorem ipsum dolor sit amet consectetur adipisicing...."
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="my-custom-next-button">
            <SlArrowRight />
          </button>
        </div>
        <hr className="border-t-2 t-0 border-gray-300 w-4/5 mx-auto my-4" />
        <div className="bg-gray-300 h-[30px] w-[100px] mx-[100px] py[10px] text-center rounded ">
          minuman
        </div>
        <div className="container-card m-auto w-[80%] my-10 bg-blue h-[20rem] flex  justify-between ">
          <button className="my-custom-prev-button ">
            <SlArrowLeft />
          </button>
          <Swiper
            slidesPerView={slidesPerView}
            navigation={{
              prevEl: ".my-custom-prev-button",
              nextEl: ".my-custom-next-button",
            }}
            spaceBetween={30}
            modules={[Navigation]}
            className="mySwiper"
          >
            {dataProduct.map((data) => (
              <SwiperSlide key={data.id}>
                <CardProduct
                  alt={"indomie"}
                  img={data.img_url}
                  judul={data.nama_product}
                  harga={data.harga}
                  deskripsi={
                    "Lorem ipsum dolor sit amet consectetur adipisicing...."
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="my-custom-next-button">
            <SlArrowRight />
          </button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
