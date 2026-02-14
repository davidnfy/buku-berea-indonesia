"use client";
import Navbar from "@/app/components/Navbar";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./book.css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

export default function BookPage() {
  const handleSwiperInit = () => {};

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const books = [
    { id: 1, title: "Gambar Kehendak Allah", author: "Dr. Kim Ki Dong", cover: "/buku/GKA.jpg", oldPrice: 100000, price: 80000 },
    { id: 2, title: "Allah Yang Tidak Melampaui", author: "Dr. Kim Ki Dong", cover: "/buku/ALLAHTDK-MELAMPAUI.jpg", oldPrice: 120000, price: 80000 },
    { id: 3, title: "Anak Manusia Datang", author: "Dr. Kim Ki Dong", cover: "/buku/ANAK-MANUSIA-DATANG.jpg", oldPrice: 100000, price: 80000 },
    { id: 4, title: "Berdoalah Seperti Ini", author: "Dr. Kim Ki Dong", cover: "/buku/Berdoalah.jpg", oldPrice: 120000, price: 80000 },
    { id: 5, title: "Faktor Faktor Yang Membayangi Roh JIwa", author: "Dr. Kim Ki Dong", cover: "/buku/Faktor2.jpg", oldPrice: 105000, price: 60000 },
    { id: 6, title: "Hubungan Yang Kekal", author: "Dr. Kim Ki Dong", cover: "/buku/HubunganKekal.jpg", oldPrice: 110000, price: 100000 },
    { id: 7, title: "Jalan Bagi Pemimpin Besar", author: "Dr. Kim Ki Dong", cover: "/buku/Jalan-Besar.jpg", oldPrice: 150000, price: 100000 },
    { id: 8, title: "Kemah Suci", author: "Dr. Kim Ki Dong", cover: "/buku/Kemah-Suci.jpg", oldPrice: 90000, price: 80000 },
    { id: 9, title: "Marilah Kita Mengenal Allah", author: "Dr. Kim Ki Dong", cover: "/buku/Mengenal-Allah.jpg", oldPrice: 100000, price: 60000 },
    { id: 10, title: "Marilah Kita Kembali Pada Alkitab", author: "Dr. Kim Ki Dong", cover: "/buku/MkembAlkitab.jpg", oldPrice: 120000, price: 60000 },
    { id: 11, title: "Marilah kita Mengenal Alkitab", author: "Dr. Kim Ki Dong", cover: "/buku/MMAlkitab.jpg", oldPrice: 160000, price: 150000 },
    { id: 12, title: "Nama Allah", author: "Dr. Kim Ki Dong", cover: "/buku/Nama-Allah.jpg", oldPrice: 120000, price: 100000 },
    { id: 13, title: "Roh Jiwa dan Tubuh", author: "Dr. Kim Ki Dong", cover: "/buku/RohJiwaTubuh.jpg", oldPrice: 130000, price: 90000 },
    { id: 14, title: "Roh Kudus", author: "Dr. Kim Ki Dong", cover: "/buku/RohKudus.jpg", oldPrice: 140000, price: 80000 },
    { id: 15, title: "Shee Mu Awn", author: "Dr. Kim Ki Dong", cover: "/buku/SheeMuAwn.jpg", oldPrice: 110000, price: 70000 },
    { id: 16, title: "Siapa Iblis Itu", author: "Dr. Kim Ki Dong", cover: "/buku/SiapaIblis.jpg", oldPrice: 90000, price: 60000 },
    { id: 17, title: "Siapa Roh Najis Itu", author: "Dr. Kim Ki Dong", cover: "/buku/SiapaRohNajis.jpg", oldPrice: 95000, price: 70000 },
    { id: 18, title: "Siapa Roh Penyesat Itu", author: "Dr. Kim Ki Dong", cover: "/buku/SiaparohPenyesat.jpg", oldPrice: 85000, price: 60000 },
  ];

  const swiperImages = books.map((b) => b.cover);
  
  return (
    <>
    <Navbar />
      <section className="slider-section">
        <div className="container">
          <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView="auto"
  loop={true}
  coverflowEffect={{
    rotate: 0,
    stretch: -20,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  }}
  modules={[EffectCoverflow]}
  className="mySwiper"
>

            {swiperImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} alt={`slide-${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="books-section">
        <div className="container py-5">
          <div className="books-header">
      <h2>Book Category</h2>
      <div className="books-header-line"></div>
    </div>
          <div className="books-grid">
            {books.map((b) => (
              <div key={b.id} className="book-card">
                <div className="book-card-row">
                  <div className="book-card-cover">
                    <div className="cover-wrap">
                      <img
                        src={b.cover}
                        alt={b.title}
                        onError={(e) => {
                          e.target.src = "/buku/default.jpg";
                        }}
                      />
                      <div className="cover-overlay">
                        <button className="view-btn">View Book</button>
                      </div>
                    </div>
                  </div>

                  <div className="book-card-body">
                    <h3 className="book-card-title">{b.title}</h3>
                    <div className="book-card-author">{b.author}</div>

                    <div className="book-card-price">
                      <div className="book-card-price-old">
                        {formatRupiah(b.oldPrice)}
                      </div>
                      <div className="book-card-price-new">
                        {formatRupiah(b.price)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
