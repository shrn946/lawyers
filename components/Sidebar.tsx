"use client";

import { useUI } from "@/context/UIContext";
import Link from "next/link";

export default function Sidebar() {
  const { isSidebarOpen, setSidebarOpen } = useUI();

  const handleClose = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <aside className={`slide-bar slide-bar3 ${isSidebarOpen ? "show" : ""}`}>
        <div className="close-mobile-menu">
          <a className="tx-close" onClick={handleClose} style={{ cursor: "pointer" }} />
        </div>
        <div className="sidebar-info sidebar-info3">
          <div className="sidebar-logo mb-30">
            <Link href="/">
              <img src="/assets/img/logo/logo5.png" alt="logo" />
            </Link>
          </div>
          <div className="sidebar-content">
            <p>
              Revolutionize Your Future: Harness the Power of Technology for Unparalleled Growth and Success!
            </p>
          </div>
          <ul className="sidebar-menu list-unstyled">
            <li>
              <Link href="/about" onClick={handleClose}>About</Link>
            </li>
            <li>
              <Link href="/service1" onClick={handleClose}>Services</Link>
            </li>
            <li>
              <Link href="/team1" onClick={handleClose}>Team</Link>
            </li>
            <li>
              <Link href="/blog1" onClick={handleClose}>Blog</Link>
            </li>
            <li>
              <Link href="/contact1" onClick={handleClose}>Contact</Link>
            </li>
          </ul>
          <div className="sidebar-contact-header">
            <h3>Contact Info</h3>
            <div className="sidebar-footer-area">
              <div className="sidebar-author-area">
                <div className="phone-side">
                  <img src="/assets/img/icons/phone1.svg" alt="" />
                </div>
                <div className="phone-side">
                  <a href="tel:123-456-7890">123-456-7890</a> <br />
                  <a href="tel:123-456-7890">123-456-7890</a>
                </div>
              </div>
              <div className="sidebar-author-area">
                <div className="phone-side">
                  <img src="/assets/img/icons/email1.svg" alt="" />
                </div>
                <div className="phone-side">
                  <a href="mailto:demolawsy@gmail.com">demolawsy@gmail.com</a> <br />
                  <a href="mailto:demolawsy@gmail.com">demolawsy@gmail.com</a>
                </div>
              </div>
              <div className="sidebar-author-area">
                <div className="phone-side">
                  <img src="/assets/img/icons/loctaion1.svg" alt="" />
                </div>
                <div className="phone-side">
                  <span className="text-white">
                    8708 Technology Forest Pl Suite <br /> 125 -G, The Woodlands, TX 77381
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      {isSidebarOpen && (
        <div
          className="body-overlay active"
          onClick={handleClose}
          style={{ cursor: "pointer" }}
        />
      )}
    </>
  );
}
