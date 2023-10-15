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
import Modal from "../components/Modal";

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

  // Fetch data
  const [kategoris, setKategoris] = useState([]);
  const [dataProduk, setDataProduk] = useState({});


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data/dataProduk.json");
        if (!response.ok) {
          throw new Error("Data tidak tersedia");
        }
        const jsonData = await response.json();

        if (jsonData && jsonData.kategoris && Array.isArray(jsonData.kategoris)) {
          // Mengacak urutan kategori
          const shuffledKategoris = jsonData.kategoris.sort(() => Math.random() - 0.5);

          // Mengacak urutan produk di setiap kategori
          const shuffledProdukKategoris = shuffledKategoris.map((kategori) => {
            const shuffledProduk = kategori.produk.sort(() => Math.random() - 0.5);
            return { ...kategori, produk: shuffledProduk };
          });

          setKategoris(shuffledProdukKategoris);
        } else {
          throw new Error("Struktur data tidak valid");
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // normal 
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("/data/dataProduk.json");
  //       if (!response.ok) {
  //         throw new Error("Data tidak tersedia");
  //       }
  //       const jsonData = await response.json();

  //       setKategoris(jsonData.kategoris);

  //       // if (jsonData && jsonData.kategoris && Array.isArray(jsonData.kategoris)) {
  //       // } else {
  //       //   setKategoris(jsonData.kategoris);
  //       //   throw new Error("Struktur data tidak valid");
  //       // }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // format rupiah
  const formatSaldo = (rupiah) => {
    if (rupiah) {
      return rupiah.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFrantionDigits: 0, // kalo pakek 0 nol dibelakangnya ilang
      });
    }
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
          {/* produk */}
          <div>
            {kategoris.map((kategori) => (
              <div key={kategori.id}>
                <hr className="border-t-2 t-0 border-gray-300 w-4/5 mx-auto my-4" />
                <h2 className="bg-gray-300 h-[30px] w-[100px] mx-[100px] text-center rounded">
                  {kategori.nama_kategori}
                </h2>
                <div className="container-card m-auto w-[80%] my-10 bg-blue h-[20rem] flex justify-between">
                  <button
                    className={`my-custom-prev-button-${kategori.nama_kategori}`}
                  >
                    <SlArrowLeft />
                  </button>
                  <Swiper
                    slidesPerView={slidesPerView}
                    navigation={{
                      prevEl: `.my-custom-prev-button-${kategori.nama_kategori}`,
                      nextEl: `.my-custom-next-button-${kategori.nama_kategori}`,
                    }}
                    spaceBetween={30}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {kategori.produk.map((produk, index) => (
                      <SwiperSlide key={index}>
                        <CardProduct
                          alt={produk.nama_produk}
                          img={produk.img_url}
                          judul={produk.nama_produk}
                          harga={formatSaldo(produk.harga)}
                          deskripsi={produk.deskripsi}
                          stock={produk.stock}
                          showModal={setIsModalOpen}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <button
                    className={`my-custom-next-button-${kategori.nama_kategori}`}
                  >
                    <SlArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {isModalOpen && <Modal toggleModal={toggleModal} />}
      </div>
    </MainLayout>
  );
};

export default Home;
