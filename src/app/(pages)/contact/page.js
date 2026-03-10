import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "./contact.css";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="contact-page">
        <div className="contact-container">

          <h1 className="contact-title">Contact Us</h1>

          <div className="contact-info">

            <div className="contact-item">
              <h3>Gereja</h3>
              <p>Gereja Berea Sungrak Indonesia (GBSI)</p>
            </div>

            <div className="contact-item">
              <h3>Alamat</h3>
              <p>
                Karawaci Office Park Blok H-52 <br />
                Jl. Imam Bonjol, Panunggangan Barat <br />
                Kec. Cibodas, Kota Tangerang <br />
                Banten 15139
              </p>
            </div>

            <div className="contact-item">
              <h3>Telepon</h3>
              <p>(021) 5579-4149</p>
            </div>

            <div className="contact-item">
              <h3>Email</h3>
              <p>info@bereaindonesia.org</p>
            </div>

          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=Gereja%20Berea%20Sungrak%20Indonesia%20GBSI%20Karawaci&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>
    </>
  );
}
