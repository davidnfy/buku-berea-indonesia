// page.js
"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./book.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function BookPage() {
  const swiperImages = [
    "/buku/01.jpg",
    "/buku/02.jpg",
    "/buku/03.jpg",
    "/buku/04.jpg",
    "/buku/05.jpg",
    "/buku/06.jpg",
    "/buku/01.jpg",
    "/buku/02.jpg",
    "/buku/03.jpg",
    "/buku/04.jpg",
    "/buku/05.jpg",
    "/buku/06.jpg",
  ];

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-12 mb-5">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            loopedslides={swiperImages.length + 5}
            coverflowEffect={{
              rotate: 0,
              stretch: -20,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {swiperImages.map((src, index) => (
              <SwiperSlide key={index} className="rounded">
                <img src={src} alt={`slide-${index}`} className="rounded" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
