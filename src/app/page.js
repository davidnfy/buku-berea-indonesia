"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./book.css";

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
    { id: 5, title: "Faktor Faktor Yang Membayangi Roh Jiwa", author: "Dr. Kim Ki Dong", cover: "/buku/Faktor2.webp", oldPrice: 105000, price: 60000 },
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

  const faqs = [
    {
      question: "Apa itu Buku Berea?",
      answer: "Buku Berea adalah bahan pembelajaran Alkitab yang membantu jemaat memahami Firman Tuhan secara lebih mendalam.",
    },
    {
      question: "Siapa penulis buku-buku ini?",
      answer: "Sebagian besar buku ditulis oleh Dr. Kim Ki Dong dan telah diterjemahkan ke dalam Bahasa Indonesia.",
    },
    {
      question: "Bagaimana cara membeli buku?",
      answer: "Silakan buka halaman detail buku yang diinginkan lalu ikuti petunjuk pemesanan yang tersedia.",
    },
    {
      question: "Apakah tersedia pengiriman ke luar kota?",
      answer: "Ya, buku dapat dikirim ke berbagai daerah sesuai ketentuan pengiriman yang berlaku.",
    },
    {
      question: "Apakah tersedia versi digital?",
      answer: "Beberapa buku tersedia dalam format digital, sementara lainnya hanya tersedia dalam bentuk cetak.",
    },
  ];

  const readyBooks = books.filter((book) => book.price > 0);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  useEffect(() => {
    const scroll = sessionStorage.getItem("scroll-position");
    if (scroll) {
      window.scrollTo(0, parseInt(scroll));
      sessionStorage.removeItem("scroll-position");
    }
  }, []);

  const currentBook = readyBooks[index];

  return (
    <>
      <Navbar />

      <section className="slider-section">
        <div className="container">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop
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
            {books.map((book) => (
              <SwiperSlide key={book.id}>
                <Link
                  href={`/book/${book.id}`}
                  onClick={() => sessionStorage.setItem("scroll-position", window.scrollY)}
                >
                  <img src={book.cover} alt={book.title} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="books-section" className="books-section">
        <div className="container py-5">
          <div className="books-header">
            <h2>Katalog Buku</h2>
            <div className="books-header-line"></div>
          </div>

          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Cari buku berdasarkan judul.."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="books-grid">
            {filteredBooks.length === 0 && (
              <div className="no-books">Buku tidak ditemukan.</div>
            )}
            {filteredBooks.map((book) => (
              <div key={book.id} className="book-card-row">
                <div className="book-card-cover">
                  <div className="cover-wrap">
                    <img src={book.cover} alt={book.title} />
                    <div className="cover-overlay">
                      <Link
                        href={`/book/${book.id}`}
                        className="view-btn"
                        onClick={() => sessionStorage.setItem("scroll-position", window.scrollY)}
                      >
                        View Book
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="book-card-body">
                  <h3 className="book-card-title">{book.title}</h3>
                  <div className="book-card-author">{book.author}</div>
                  <div className="book-card-price">
                    <div className="book-card-price-old">{formatRupiah(book.oldPrice)}</div>
                    <div className="book-card-price-new">{formatRupiah(book.price)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <section className="ready-stock">
            <div className="ready-stock-header">
              <h2>Buku Tersedia</h2>
              <div className="books-header-line"></div>
            </div>
            {currentBook && (
              <div className="ready-book-card">
                <div className={`ready-book ${animate ? "slide-out" : "slide-in"}`}>
                  <div className="ready-book-cover">
                    <img src={currentBook.cover} alt={currentBook.title} />
                  </div>
                  <div className="ready-book-info">
                    <h3 className="ready-book-title">{currentBook.title}</h3>
                    <p className="ready-book-author">Author: {currentBook.author}</p>
                    <div className="ready-book-price">
                      <span className="ready-new">{formatRupiah(currentBook.price)}</span>
                    </div>
                    <p className="ready-book-desc">
                      Buku rohani karya Dr. Kim Ki Dong yang membahas pengajaran Alkitab secara mendalam dan praktis.
                    </p>
                    <Link
                      href={`/book/${currentBook.id}`}
                      className="ready-btn"
                      onClick={() => sessionStorage.setItem("scroll-position", window.scrollY)}
                    >
                      View Book
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section className="faq-section">
            <div className="books-header">
              <h2>Frequently Asked Questions</h2>
              <div className="books-header-line"></div>
            </div>
            <div className="faq-container">
              {faqs.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span>{faq.question}</span>
                    <span>{openFaq === idx ? "−" : "+"}</span>
                  </button>
                  {openFaq === idx && <div className="faq-answer">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}