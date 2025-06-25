import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

const Carousel = ({ data, renderComponent }) => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
  modules={[Navigation]}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  spaceBetween={20}
  breakpoints={{
    300: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  }}
>
  {data.map((item) => (
    <SwiperSlide key={item.id}>{renderComponent(item)}</SwiperSlide>
  ))}
</Swiper>

    </div>
  );
};

export default Carousel;
