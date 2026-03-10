import Navbar from "@/app/components/Navbar";
import "./about.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="about-page">
        <div className="about-container">
          <div className="about-image-wrap">
            <img
              src="/assets/about.png"
              alt="Buku Berea Indonesia"
              className="about-image"
            />
          </div>
          <div className="about-content">
            <h1 className="about-title">About Us</h1>
            <p className="about-text">
                Yayasan Berea Indonesia didirikan dengan Akta Pendirian Nomor 1 Tahun 2002,
                 Akta Perubahan Nomor 2 Tahun 2004 dan Surat Keputusan Menteri Kehakiman dan Hak Asasi Manusia RI Nomor: C-589.HT.01.02.TH 2004. 
                 Berkedudukan dan berkantor pusat di Kota Tangerang, Propinsi Banten, Indonesia. Adapun maksud dan tujuan Yayasan adalah di bidang sosial dan keagamaan.
            </p>
            <p className="about-text">
                Untuk mencapai maksud dan tujuan tersebut maka Yayasan menjalankan kegiatan yang meliputi mencetak/menerbitkan serta mengedarkan bahan-bahan literature seperti buku, buklet, brosur dan lain-lain.
            </p>
            <p className="about-text">
                Dengan demikian, Yayasan Berea Indonesia dibentuk dan didirikan untuk mendukung gerakan Berea di Indonesia dan akan terus bekerja seturut Kehendak Allah sehingga kehendak-Nya dapat terjadi di bumi seperti di sorga.
            </p>
            <p className="about-text">
                Penerbit Yayasan Berea Indonesia (selanjutnya disebut Penerbit Berea Indonesia) menerbitkan literature karya Dr. Ki Dong Kim dengan izin copyright Berea Press, 355-356 Shingil 3-dong, Yeongdeungpo-gu, Seoul 150-849, Korea. Tel: +82-2-831-3851~3, Fax: +82-2-831-3854 All rights reserved. Sehingga hak cipta terjemahan Indonesia dimiliki oleh Penerbit Berea Indonesia.
            </p>
            <p className="about-text">
                Buku-buku terbitan Berea Indonesia memberikan pencerahan dalam hal mengenal Allah selain dari Alkitab yang adalah firman Allah sendiri. Dengan mengenal Allah maka akan mengenal kehendak-Nya yaitu rencana yang telah ada daripada mulanya. Dalam buku-buku tersebut mengajak seluruh umat Allah untuk kembali ke Alkitab seutuhnya tanpa melihat siapa yang menulis tetapi siapa yang telah menginspirasi para penulis tersebut.
            </p>
            <p className="about-text">
                Penerbit Berea Indonesia akan terus berkembang seiring banyaknya buku-buku yang akan diterbitkan di kemudian hari. Itulah harapan dan misi kami.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}