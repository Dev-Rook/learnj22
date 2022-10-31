import React, { useState } from "react";
import axios from "axios";
import Styles from "../../Styles/Swiper/Swiper_General.module.css"

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
  return (
    <div className={Styles.Slide_Container}>DemoSlide</div>
  )
}

export default DemoSlide