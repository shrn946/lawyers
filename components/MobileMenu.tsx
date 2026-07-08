"use client";

import { useUI } from "@/context/UIContext";
import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const { isMobileMenuOpen, setMobileMenuOpen } = useUI();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleClose = () => {
    setMobileMenuOpen(false);
  };

  const toggleDropdown = (key: string) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(key);
    }
  };

  return (
    <>
      <div className={`mobile-sidebar sidebar3 ${isMobileMenuOpen ? "show" : ""}`}>
        <div className="logosicon-area">
          <div className="logos">
            <img src="/assets/img/logo/logo5.png" alt="logo" />
          </div>
          <div
            className="menu-close"
            onClick={handleClose}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="mobile-nav">
          <ul className="mobile-nav-list">
            <li className={activeDropdown === "home" ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("home");
                }}
              >
                Home <i className="fa-solid fa-angle-down float-end mt-1"></i>
              </a>
              <ul
                className="sub-menu"
                style={{ display: activeDropdown === "home" ? "block" : "none" }}
              >
                <li>
                  <Link href="/" onClick={handleClose}>Home One</Link>
                </li>
                <li>
                  <Link href="/index1" onClick={handleClose}>Home Two</Link>
                </li>
                <li>
                  <Link href="/index2" onClick={handleClose}>Home Three</Link>
                </li>
                <li>
                  <Link href="/index3" onClick={handleClose}>Home Four</Link>
                </li>
                <li>
                  <Link href="/index4" onClick={handleClose}>Home Five</Link>
                </li>
                <li>
                  <Link href="/index5" onClick={handleClose}>Home Six</Link>
                </li>
                <li>
                  <Link href="/index6" onClick={handleClose}>Home Seven</Link>
                </li>
                <li>
                  <Link href="/index-rtl-1" onClick={handleClose}>RTL</Link>
                </li>
              </ul>
            </li>

            <li className={activeDropdown === "pages" ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("pages");
                }}
              >
                Pages <i className="fa-solid fa-angle-down float-end mt-1"></i>
              </a>
              <ul
                className="sub-menu"
                style={{ display: activeDropdown === "pages" ? "block" : "none" }}
              >
                <li>
                  <Link href="/team1" onClick={handleClose}>Our Team 01</Link>
                </li>
                <li>
                  <Link href="/team2" onClick={handleClose}>Our Team 02</Link>
                </li>
                <li>
                  <Link href="/testimonial1" onClick={handleClose}>Testimonial 01</Link>
                </li>
                <li>
                  <Link href="/testimonial2" onClick={handleClose}>Testimonial 02</Link>
                </li>
                <li>
                  <Link href="/testimonial3" onClick={handleClose}>Testimonial 03</Link>
                </li>
              </ul>
            </li>

            <li className={activeDropdown === "services" ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("services");
                }}
              >
                Practice Areas <i className="fa-solid fa-angle-down float-end mt-1"></i>
              </a>
              <ul
                className="sub-menu"
                style={{ display: activeDropdown === "services" ? "block" : "none" }}
              >
                <li>
                  <Link href="/service1" onClick={handleClose}>Service One</Link>
                </li>
                <li>
                  <Link href="/service2" onClick={handleClose}>Service Two</Link>
                </li>
                <li>
                  <Link href="/service-left" onClick={handleClose}>Service Left Side</Link>
                </li>
                <li>
                  <Link href="/service-right" onClick={handleClose}>Service Right Side</Link>
                </li>
                <li>
                  <Link href="/service-single" onClick={handleClose}>Service Single</Link>
                </li>
              </ul>
            </li>

            <li className={activeDropdown === "blogs" ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("blogs");
                }}
              >
                Blogs <i className="fa-solid fa-angle-down float-end mt-1"></i>
              </a>
              <ul
                className="sub-menu"
                style={{ display: activeDropdown === "blogs" ? "block" : "none" }}
              >
                <li>
                  <Link href="/blog1" onClick={handleClose}>Blog One</Link>
                </li>
                <li>
                  <Link href="/blog2" onClick={handleClose}>Blog Two</Link>
                </li>
                <li>
                  <Link href="/blog3" onClick={handleClose}>Blog Three</Link>
                </li>
                <li>
                  <Link href="/blog4" onClick={handleClose}>Blog Four</Link>
                </li>
                <li>
                  <Link href="/blog-left" onClick={handleClose}>Blog Left Side</Link>
                </li>
                <li>
                  <Link href="/blog-left-details" onClick={handleClose}>Blog Details Left</Link>
                </li>
                <li>
                  <Link href="/blog-right" onClick={handleClose}>Blog Right Side</Link>
                </li>
                <li>
                  <Link href="/blog-right-details" onClick={handleClose}>Blog Details Right</Link>
                </li>
                <li>
                  <Link href="/blog-single" onClick={handleClose}>Blog Single</Link>
                </li>
              </ul>
            </li>

            <li className={activeDropdown === "contact" ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("contact");
                }}
              >
                Contact <i className="fa-solid fa-angle-down float-end mt-1"></i>
              </a>
              <ul
                className="sub-menu"
                style={{ display: activeDropdown === "contact" ? "block" : "none" }}
              >
                <li>
                  <Link href="/contact1" onClick={handleClose}>Contact 01</Link>
                </li>
                <li>
                  <Link href="/contact2" onClick={handleClose}>Contact 02</Link>
                </li>
                <li>
                  <Link href="/contact3" onClick={handleClose}>Contact 03</Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="allmobilesection text-center mt-4">
            <Link href="/contact1" className="casebtn1" onClick={handleClose}>
              Get Started
            </Link>
            <div className="single-footer single-footer-menu single-footer4 text-start mt-4">
              <h3>Contact Info</h3>
              <div className="footer4-contact-info">
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <img src="/assets/img/icons/footer-phn.svg" alt="" />
                  </div>
                  <div className="contact-info-text">
                    <a href="tel:123-456-7890">123-456-7890</a>
                  </div>
                </div>

                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <img src="/assets/img/icons/footer-email2.svg" alt="" />
                  </div>
                  <div className="contact-info-text">
                    <a href="mailto:demolawsy@gmail.com">demolawsy@gmail.com</a>
                  </div>
                </div>

                <div className="single-footer single-footer-menu single-footer4 mt-4">
                  <h3>Our Location</h3>
                  <div className="contact-info-single">
                    <div className="contact-info-icon">
                      <img src="/assets/img/icons/footer-location1.svg" alt="" />
                    </div>
                    <div className="contact-info-text">
                      <span className="text-white">
                        8708 Technology Forest Pl Suite 125 -G, The Woodlands, TX 77381
                      </span>
                    </div>
                  </div>
                </div>

                <div className="single-footer mt-4">
                  <h3>Social Links</h3>
                  <div className="social-links-mobile-menu2">
                    <ul>
                      <li>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="body-overlay active"
          onClick={handleClose}
          style={{ cursor: "pointer" }}
        />
      )}
    </>
  );
}
