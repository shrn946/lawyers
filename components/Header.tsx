"use client";

import { useEffect, useState } from "react";
import { useUI } from "@/context/UIContext";
import Link from "next/link";

interface HeaderProps {
  variant?: string;
}

export default function Header({ variant }: HeaderProps) {
  const { setSidebarOpen, setSearchOpen, setMobileMenuOpen } = useUI();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== DESKTOP HEADER STARTS ===== */}
      <header className="header about-bg d-none d-lg-block">
        <div className={`header-area header homepage1 header-sticky ${isSticky ? "sticky" : ""}`} id="header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-elements">
                  <div className="site-logo">
                    <Link href="/">
                      <img src="/assets/img/logo/logo5.png" alt="logo" />
                    </Link>
                  </div>
                  <div className="main-menu-ex homepage3">
                    <ul>
                      <li className="dropdown">
                        <Link href="/" className="mainhome">
                          Home <span><i className="fa-solid fa-angle-down"></i></span>
                        </Link>
                        <ul className="dropdown-padding">
                          <li><Link href="/">Home One</Link></li>
                          <li><Link href="/index1">Home Two</Link></li>
                          <li><Link href="/index2">Home Three</Link></li>
                          <li><Link href="/index3">Home Four</Link></li>
                          <li><Link href="/index4">Home Five</Link></li>
                          <li><Link href="/index5">Home Six</Link></li>
                          <li><Link href="/index6">Home Seven</Link></li>
                          <li><Link href="/index-rtl-1">RTL</Link></li>
                        </ul>
                      </li>
                      <li><Link href="/about">About Us</Link></li>
                      <li className="dropdown">
                        <a href="#">
                          Practice Areas <span><i className="fa-solid fa-angle-down"></i></span>
                        </a>
                        <ul className="dropdown-padding">
                          <li><Link href="/service1">Service One</Link></li>
                          <li><Link href="/service2">Service Two</Link></li>
                          <li><Link href="/service-left">Service Left Side</Link></li>
                          <li><Link href="/service-right">Service Right Side</Link></li>
                          <li><Link href="/service-single">Service Single</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">
                          Blogs <span><i className="fa-solid fa-angle-down"></i></span>
                        </a>
                        <ul className="dropdown-padding">
                          <li><Link href="/blog1">Blog One</Link></li>
                          <li><Link href="/blog2">Blog Two</Link></li>
                          <li><Link href="/blog3">Blog Three</Link></li>
                          <li><Link href="/blog4">Blog Four</Link></li>
                          <li><Link href="/blog-left">Blog Left Side</Link></li>
                          <li><Link href="/blog-left-details">Blog Details Left</Link></li>
                          <li><Link href="/blog-right">Blog Right Side</Link></li>
                          <li><Link href="/blog-right-details">Blog Details Right</Link></li>
                          <li><Link href="/blog-single">Blog Single</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">
                          Pages <span><i className="fa-solid fa-angle-down"></i></span>
                        </a>
                        <ul className="dropdown-padding">
                          <li><Link href="/team1">Our Team 01</Link></li>
                          <li><Link href="/team2">Our Team 02</Link></li>
                          <li><Link href="/testimonial1">Testimonial 01</Link></li>
                          <li><Link href="/testimonial2">Testimonial 02</Link></li>
                          <li><Link href="/testimonial3">Testimonial 03</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">
                          Contact <span><i className="fa-solid fa-angle-down"></i></span>
                        </a>
                        <ul className="dropdown-padding">
                          <li><Link href="/contact1">Contact 01</Link></li>
                          <li><Link href="/contact2">Contact 02</Link></li>
                          <li><Link href="/contact3">Contact 03</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="contact-3 d-lg-block d-none">
                    <div className="consulting2">
                      <div
                        className="search-icon header__search header-search-btn"
                        onClick={() => setSearchOpen(true)}
                        style={{ cursor: "pointer" }}
                      >
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                      </div>
                      <div className="marginsp1"></div>
                      <a
                        className="header__bar hamburger_menu header__bar-icon"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setSidebarOpen(true);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fa-solid fa-bars"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ===== DESKTOP HEADER ENDS ===== */}

      {/* ===== MOBILE HEADER STARTS ===== */}
      <div className="mobile-header mobile-header-4 d-block d-lg-none">
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <Link href="/">
                  <img src="/assets/img/logo/logo5.png" alt="logo" />
                </Link>
              </div>
              <div
                className="mobile-nav-icon dots-menu"
                onClick={() => setMobileMenuOpen(true)}
                style={{ cursor: "pointer" }}
              >
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===== MOBILE HEADER ENDS ===== */}
    </>
  );
}
