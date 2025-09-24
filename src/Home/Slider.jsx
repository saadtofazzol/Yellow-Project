import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>

            <img src="https://www.yellowclothing.net/cdn/shop/files/WEB_SLIDER_2_be71103e-e34d-4da8-b673-773468dcf615.png?v=1755799129&width=1780" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>

            <img className='w-full h-screen' src="https://www.yellowclothing.net/cdn/shop/files/WEB_SLIDER_2_1bef0541-a5f6-436b-b9cb-857355b3eff1.png?v=1756968072&width=1780" alt="" srcset="" />
        </SwiperSlide>
  
      </Swiper>
    </>
  );
}


export default Slider
