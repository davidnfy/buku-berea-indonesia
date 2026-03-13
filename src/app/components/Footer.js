export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">
          <h3>Buku Berea Indonesia</h3>
          <p>
            Menyediakan buku rohani karya Dr. Kim Ki Dong
            untuk membantu jemaat mengenal firman Tuhan
            dengan lebih dalam.
          </p>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: info@berea.id</p>
          <p>WhatsApp: +62 812-3456-7890</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Buku Berea Indonesia. All Rights Reserved.
      </div>

    </footer>
  );
}