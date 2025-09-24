import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


export default function TitltSlider() {
  return (
    <>
      <Swiper className="mySwiper"    >
        <SwiperSlide className="text-center">Free Shopping Country wide </SwiperSlide>
        <SwiperSlide  className="text-center" >Free and flexibale 15-days exchange </SwiperSlide>
        <SwiperSlide  className="text-center">Estimate 5-8 days </SwiperSlide>
   
    
      </Swiper>
    </>
  );
}
