import Navbar from "@/app/components/Navbar";
import { books } from "@/lib/books";
import Link from "next/link";
import "./book.css";

export default async function BookDetail({ params }) {

  const { id } = await params;
  const book = books.find((b) => b.id === Number(id));
  
  if (!book) {
    return (
      <div className="book-notfound">
        Buku tidak ditemukan
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="book-container">

        <div className="book-back">
          <Link href="/" className="btn-back">
            <i className="fa-solid fa-arrow-left"></i> Kembali
          </Link>
        </div>

        <div className="book-detail">

          <div className="book-left">

            <div className="book-cover">
              <img src={book.cover} alt={book.title} />
            </div>

            <div className="book-spec">
              <p><b>ISBN:</b> {book.isbn}</p>
              <p><b>Berat:</b> {book.weight}</p>
              <p><b>Ukuran:</b> {book.size}</p>
              <p><b>Halaman:</b> {book.pages}</p>
              <p><b>Harga:</b> Rp {book.price.toLocaleString("id-ID")}</p>
              <p><b>Stok:</b> {book.stock}</p>
            </div>

          </div>

          <div className="book-info">

            <h1 className="book-title">
              {book.title}
            </h1>

            <p className="book-author">
              {book.author}
            </p>

            <p className="book-description">
              {book.description}
            </p>

            <a
              href={`https://wa.me/6282245403807?text=Saya ingin membeli buku ${book.title}`}
              target="_blank"
              className="btn-buy"
            >
              <i className="fa-brands fa-whatsapp"></i> Beli via WhatsApp
            </a>

          </div>

        </div>
      </div>
    </>
  );
}