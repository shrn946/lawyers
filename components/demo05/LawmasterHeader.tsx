"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LawmasterHeader() {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleBlogDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsBlogDropdownOpen(!isBlogDropdownOpen);
  };

  const isActive = (path: string) => {
    if (path === "/demo-05") {
      return pathname === "/demo-05";
    }
    return pathname === path;
  };

  return (
    <header className="header-main">
      <div id="slidepanel" style={{ display: "block" }}>
        {/* Top Header */}
        <div className="top-header container-fluid no-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <p>The Right Response at the Right Time Law Support</p>
              </div>
              <div className="col-md-6 col-sm-6 text-right">
                <ul>
                  <li>
                    <a href="#" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Google+">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Linkedin">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Tumblr">
                      <i className="fa fa-tumblr"></i>
                    </a>
                  </li>
                </ul>
                <Link href="/demo-05/contact-us" title="Request a free consultation">
                  <img src="/demo-05/images/icon/icon-1.png" alt="appointment" />
                  Request a free consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Block */}
        <div className="middle-header container-fluid no-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 text-left col-xs-6">
                <div className="location">
                  <h3>
                    <img src="/demo-05/images/icon/location-ic.png" alt="Location" />
                    Our Location
                  </h3>
                  <p>Web Street, Melbourne - 18</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 logo-block mobile-hide text-center">
                <Link href="/demo-05" className="image-logo" title="Logo">
                  <img src="/demo-05/images/logo.png" alt="Logo" />
                </Link>
                <h4>Master Law</h4>
                <span>Law Firm Group</span>
              </div>
              <div className="col-md-4 col-sm-6 text-right col-xs-6">
                <div className="phone">
                  <h3>
                    <img src="/demo-05/images/icon/consultation-ic.png" alt="consultation" />
                    <span>Consultation</span>
                  </h3>
                  <p>Call Us - (+1) 800 456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar ow-navigation">
        <div className="container">
          <div className="row">
            <div id="loginpanel" className="desktop-hide">
              <div className="right" id="toggle">
                <a id="slideit" href="#slidepanel" style={{ display: "inline" }}>
                  <i className="fo-icons fa fa-inbox"></i>
                </a>
                <a id="closeit" href="#slidepanel" style={{ display: "none" }}>
                  <i className="fo-icons fa fa-close"></i>
                </a>
              </div>
            </div>
            <div className="navbar-header">
              <button
                type="button"
                className={`navbar-toggle ${isNavOpen ? "" : "collapsed"}`}
                onClick={toggleNav}
                aria-expanded={isNavOpen}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand text-logo desktop-hide" href="/demo-05">
                Master Law
              </Link>
            </div>
            <div
              id="navbar"
              className={`navbar-collapse collapse ${isNavOpen ? "in show" : ""}`}
              style={{ display: isNavOpen ? "block" : "" }}
            >
              <ul className="nav navbar-nav">
                <li className={isActive("/demo-05") ? "active" : ""}>
                  <Link href="/demo-05" onClick={() => setIsNavOpen(false)}>Home</Link>
                </li>
                <li className={isActive("/demo-05/about") ? "active" : ""}>
                  <Link href="/demo-05/about" onClick={() => setIsNavOpen(false)}>About Us</Link>
                </li>
                <li className={isActive("/demo-05/services") ? "active" : ""}>
                  <Link href="/demo-05/services" onClick={() => setIsNavOpen(false)}>Services</Link>
                </li>
                <li className={isActive("/demo-05/attorney") ? "active" : ""}>
                  <Link href="/demo-05/attorney" onClick={() => setIsNavOpen(false)}>Our Team</Link>
                </li>
                <li className={isActive("/demo-05/attorney-details") ? "active" : ""}>
                  <Link href="/demo-05/attorney-details" onClick={() => setIsNavOpen(false)}>departments</Link>
                </li>
                <li className={isActive("/demo-05/practice") ? "active" : ""}>
                  <Link href="/demo-05/practice" onClick={() => setIsNavOpen(false)}>Gallery</Link>
                </li>
                <li className={`dropdown ${isBlogDropdownOpen ? "open show ddl-active" : ""} ${pathname?.includes("/blog") ? "active" : ""}`}>
                  <a
                    href="#"
                    className="dropdown-toggle"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={isBlogDropdownOpen}
                    onClick={toggleBlogDropdown}
                  >
                    Blog
                  </a>
                  <i className="ddl-switch fa fa-angle-down" onClick={toggleBlogDropdown}></i>
                  <ul className="dropdown-menu" style={{ display: isBlogDropdownOpen ? "block" : "" }}>
                    <li className={isActive("/demo-05/blog") ? "active" : ""}>
                      <Link href="/demo-05/blog" onClick={() => { setIsNavOpen(false); setIsBlogDropdownOpen(false); }}>
                        Blog List
                      </Link>
                    </li>
                    <li className={isActive("/demo-05/blog-post") ? "active" : ""}>
                      <Link href="/demo-05/blog-post" onClick={() => { setIsNavOpen(false); setIsBlogDropdownOpen(false); }}>
                        Blog Post
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={isActive("/demo-05/contact-us") ? "active" : ""}>
                  <Link href="/demo-05/contact-us" onClick={() => setIsNavOpen(false)}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
