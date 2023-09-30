import React, { useRef, useState, useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import CardProduct from "../components/CardProduct";
import CardKategori from "../components/CardKategori";
import { dataBanner, dataKategori, dataProduct } from "../assets/data";
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

//
// import Modal from '../components/Modal'

const Home = () => {
  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [PerViewKategori, setPerViewKategori] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 801 && windowWidth <= 1000) {
        setSlidesPerView(3);
        setPerViewKategori(4);
      } else if (windowWidth >= 640 && windowWidth <= 800) {
        // Layar sm
        setSlidesPerView(2);
        setPerViewKategori(3);
      } else if (windowWidth > 470 && windowWidth < 640) {
        setSlidesPerView(1);
        setPerViewKategori(5);
      } else if (windowWidth <= 470) {
        setSlidesPerView(1);
        setPerViewKategori(4);
      } else {
        setSlidesPerView(4);
        setPerViewKategori(6);
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

  // modal shopping cart
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <MainLayout>
      <div className="select-none">
        <section className="section-home w-full  ">
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
              {dataBanner.map((data) => (
                <SwiperSlide key={data.id}>
                  <img src={data.image_url} className="rounded-md" />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="my-custom-next">
              <SlArrowRight />
            </button>
          </div>
          {/* kategori */}
          <div className="container-card  mx-auto w-[90%] sm:w-[85%] my-[20px] sm:h-[20rem]  flex  justify-between  ">
            <div className=" flex justify-center items-center">
              <button
                ref={prevButton}
                className="kategori-button-prev opacity-0 bg-white drop-shadow-xl rounded-[100%] p-[10px]  sm:p-[17px]   "
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
            <div className=" flex justify-center items-center ">
              <button
                ref={nextButton}
                className="kategori-button-next bg-white drop-shadow-xl rounded-[100%] p-[10px]  sm:p-[17px]  "
              >
                <SlArrowRight className="w-3 h-3 " />
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
                    showModal={setIsModalOpen}
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
   
        {/* {isModalOpen && <Modal toggleModal={toggleModal} /> } */}
        
      </div>
    </MainLayout>
  );
};

export default Home;
