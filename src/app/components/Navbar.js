"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const pathname = usePathname();

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${showNavbar ? "" : "hide"}`}>
      <div className="container nav-container">

        {}
        <Link href="/" className="logo" onClick={handleCloseMenu}>
          <Image
            src="/assets/logo-berea.webp"
            alt="Logo Berea"
            width={40}
            height={40}
            priority
          />
        </Link>

        {}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <Link
              href="/"
              className={pathname === "/" ? "active" : ""}
              onClick={handleCloseMenu}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : ""}
              onClick={handleCloseMenu}
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/#book-category"
              onClick={handleCloseMenu}
            >
              Book Category
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "active" : ""}
              onClick={handleCloseMenu}
            >
              Contact Us
            </Link>
          </li>

        </ul>

        {}
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