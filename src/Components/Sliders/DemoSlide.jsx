import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../../Styles/Swiper/Swiper_General.module.css";

import ScaleLoader from "react-spinners/ScaleLoader";

import useAxios from "../../Hooks/useAxios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

const DemoSlide = () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const { data, error, loading } = useAxios(url);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className={Styles.Slide_Container}>
      {loading && (
        <ScaleLoader
          color={"red"}
          loading={loading}
          cssOverride={override}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}

      {error && <h3>Something went wrong..</h3>}

      <Swiper
        speed={1000}
        // spaceBetween={10}
        modules={[Navigation, FreeMode, Mousewheel, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        loop
        pagination={{
          dynamicBullets: true,
        }}
        mousewheel={true}
        className={Styles.Swiper}
        breakpoints={{
          360: {
            width: 360,
            slidesPerView: 1,
            spaceBetween: 50,
          },
          380: {
            width: 380,
            slidesPerView: 1,
            spaceBetween: 50,
          },
          480: {
            width: 480,
            slidesPerView: 1,
            spaceBetween: 50,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1920: {
            width: 1920,
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {data &&
          data.map((value) => {
            return (
              <SwiperSlide key={value?.id}>
                <Link to={"/Details/" + value.id}>
                  <div className={Styles.Card}>
                    <img src={""} alt="" className={Styles.Card_Image} />
                    <div className={Styles.Diffuser}></div>
                    <p className={Styles.Card_Title}>Title</p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default DemoSlide;
