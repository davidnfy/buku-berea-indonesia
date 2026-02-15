"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        setShowNavbar(true);
        return;
      }

      if (currentScroll > lastScroll) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? "" : "hide"}`}>
      <div className="container nav-container">

        <Link href="/" className="logo">
          <Image
            src="/assets/logo-berea.png"
            alt="Logo Berea"
            width={40}
            height={40}
            priority
          />
        </Link>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link href="/category" onClick={() => setMenuOpen(false)}>Book Category</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>

        <div 
          className={`hamburger ${menuOpen ? "active" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
}
