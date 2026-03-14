"use client";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./book.css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

export default function BookPage() {

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const books = [
    { id: 1, title: "Gambar Kehendak Allah", author: "Dr. Kim Ki Dong", cover: "/buku/GKA.webp", oldPrice: 100000, price: 80000 },
    { id: 2, title: "Allah Yang Tidak Melampaui", author: "Dr. Kim Ki Dong", cover: "/buku/ALLAHTDK-MELAMPAUI.webp", oldPrice: 120000, price: 80000 },
    { id: 3, title: "Anak Manusia Datang", author: "Dr. Kim Ki Dong", cover: "/buku/ANAK-MANUSIA-DATANG.webp", oldPrice: 100000, price: 60000 },
    { id: 4, title: "Berdoalah Seperti Ini", author: "Dr. Kim Ki Dong", cover: "/buku/Berdoalah.webp", oldPrice: 120000, price: 60000 },
    { id: 5, title: "Faktor Faktor Yang Membayangi Roh JIwa", author: "Dr. Kim Ki Dong", cover: "/buku/Faktor2.webp", oldPrice: 105000, price: 60000 },
    { id: 6, title: "Hubungan Yang Kekal", author: "Dr. Kim Ki Dong", cover: "/buku/HubunganKekal.webp", oldPrice: 110000, price: 100000 },
    { id: 7, title: "Jalan Bagi Pemimpin Besar", author: "Dr. Kim Ki Dong", cover: "/buku/Jalan-Besar.webp", oldPrice: 150000, price: 100000 },
    { id: 8, title: "Kemah Suci", author: "Dr. Kim Ki Dong", cover: "/buku/Kemah-Suci.webp", oldPrice: 90000, price: 60000 },
    { id: 9, title: "Marilah Kita Mengenal Allah", author: "Dr. Kim Ki Dong", cover: "/buku/Mengenal-Allah.webp", oldPrice: 100000, price: 60000 },
    { id: 10, title: "Marilah Kita Kembali Pada Alkitab", author: "Dr. Kim Ki Dong", cover: "/buku/MkembAlkitab.webp", oldPrice: 120000, price: 60000 },
    { id: 11, title: "Marilah kita Mengenal Alkitab", author: "Dr. Kim Ki Dong", cover: "/buku/MMAlkitab.webp", oldPrice: 160000, price: 150000 },
    { id: 12, title: "Nama Allah", author: "Dr. Kim Ki Dong", cover: "/buku/Nama-Allah.webp", oldPrice: 120000, price: 100000 },
    { id: 13, title: "Roh Jiwa dan Tubuh", author: "Dr. Kim Ki Dong", cover: "/buku/RohJiwaTubuh.webp", oldPrice: 130000, price: 100000 },
    { id: 14, title: "Marilah Kita Mengenal Roh Kudus", author: "Dr. Kim Ki Dong", cover: "/buku/RohKudus.webp", oldPrice: 140000, price: 80000 },
    { id: 15, title: "Shee Mu Awn", author: "Dr. Kim Ki Dong", cover: "/buku/SheeMuAwn.webp", oldPrice: 110000, price: 60000 },
    { id: 16, title: "Siapa Iblis Itu", author: "Dr. Kim Ki Dong", cover: "/buku/SiapaIblis.webp", oldPrice: 0, price: 0 },
    { id: 17, title: "Siapa Roh Najis Itu", author: "Dr. Kim Ki Dong", cover: "/buku/SiapaRohNajis.webp", oldPrice: 200000, price: 150000 },
    { id: 18, title: "Siapa Roh Penyesat Itu", author: "Dr. Kim Ki Dong", cover: "/buku/SiaparohPenyesat.webp", oldPrice: 85000, price: 60000 },
  ];

  const readyBooks = books.filter((b) => b.price > 0);

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {

      setAnimate(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % readyBooks.length);
        setAnimate(false);
      }, 400);

    }, 5000);

    return () => clearInterval(interval);
  }, [readyBooks.length]);

  const currentBook = readyBooks[index];

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
              stretch: -10,
              depth: 150,
              modifier: 2,
              slideShadows: true,
            }}
            modules={[EffectCoverflow]}
            className="mySwiper"
          >
            {books.map((b) => (
              <SwiperSlide key={b.id}>
                <Link href={`/book/${b.id}`}>
                  <img src={b.cover} alt={b.title} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="books-section" className="books-section">
        <div className="container py-5">
          <div className="books-header">
            <h2>Buku Katalog</h2>
            <div className="books-header-line"></div>
          </div>
          <div className="books-grid">
            {books.map((b) => (
              <div key={b.id} className="book-card-row">

                <div className="book-card-cover">
                  <div className="cover-wrap">
                    <img src={b.cover} alt={b.title}/>
                    <div className="cover-overlay">
                      <Link href={`/book/${b.id}`} className="view-btn">
                        View Book
                      </Link>
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
            ))}
          </div>

          <section className="ready-stock">
            <div className="ready-stock-header">
              <h2>Ready Stock</h2>
              <div className="books-header-line"></div>
            </div>

            {currentBook && (
              <div className="ready-book-card">
                <div className={`ready-book ${animate ? "slide-out" : "slide-in"}`}>
                  <div className="ready-book-cover">
                    <img src={currentBook.cover} alt={currentBook.title}/>
                  </div>

                  <div className="ready-book-info">
                    <h3 className="ready-book-title">
                      {currentBook.title}
                    </h3>
                    <p className="ready-book-author">
                      Author: {currentBook.author}
                    </p>

                    <div className="ready-book-price">
                      <span className="ready-new">
                        {formatRupiah(currentBook.price)}
                      </span>
                    </div>
                    <p className="ready-book-desc">
                      Buku rohani karya Dr. Kim Ki Dong yang membahas pengajaran Alkitab secara mendalam dan praktis.
                    </p>
                    <Link
                      href={`/book/${currentBook.id}`}
                      className="ready-btn"
                    >
                      View Book
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </section>
    </>
  );
}