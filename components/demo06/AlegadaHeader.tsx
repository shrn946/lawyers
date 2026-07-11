"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export function AlegadaHeader() {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isActive = (path: string) => {
    if (path === "/demo-06") {
      return pathname === "/demo-06";
    }
    return pathname === path;
  };

  const handleDropdownToggle = (dropdown: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Hidden Search Block */}
      <div className="search-block-hidden" style={{ display: isSearchOpen ? "block" : "none" }}>
        <form className="search-global" onSubmit={(e) => e.preventDefault()}>
          <input
            className="search-global__input"
            type="text"
            placeholder="Type to search"
            autoComplete="off"
            name="s"
          />
          <button className="search-global__btn" type="submit">
            <i className="icon stroke icon-Search"></i>
          </button>
          <div className="search-global__note">Begin typing your search above and press return to search.</div>
        </form>
        <div className="close-search" onClick={() => setIsSearchOpen(false)}>
          <i className="fas fa-times"></i>
        </div>
      </div>

      <header className="header-top-absolute">
        <nav className="me-auto navbar navbar-expand-lg navbar-dark justify-content-between">
          <Link className="navbar-brand d-flex" href="/demo-06">
            <img src="/demo-06/assets/media/img/logo.svg" alt="logo" />
            <span>Alegada</span>
          </Link>
          <div className="d-flex">
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsNavOpen(true)}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="nav" style={{ display: isNavOpen ? "flex" : "" }}>
              <li className="close-nav" onClick={() => setIsNavOpen(false)}>
                <i className="fas fa-times"></i>
              </li>
              <li className={`nav-item ${isActive("/demo-06") ? "active" : ""}`}>
                <Link className="nav-link" href="/demo-06" onClick={() => setIsNavOpen(false)}>
                  Home
                </Link>
              </li>
              <li className={`nav-item ${isActive("/demo-06/about") ? "active" : ""}`}>
                <Link className="nav-link" href="/demo-06/about" onClick={() => setIsNavOpen(false)}>
                  About
                </Link>
              </li>
              <li className={`nav-item dropdown ${activeDropdown === "practice" ? "show" : ""} ${pathname?.includes("/practice") ? "active" : ""}`}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  onClick={(e) => handleDropdownToggle("practice", e)}
                >
                  Practice Areas
                </a>
                <div className={`dropdown-menu ${activeDropdown === "practice" ? "show" : ""}`}>
                  <Link
                    className="dropdown-item"
                    href="/demo-06/practice-areas-1"
                    onClick={() => {
                      setIsNavOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    Practice areas 1
                  </Link>
                  <Link
                    className="dropdown-item"
                    href="/demo-06/practice-areas-2"
                    onClick={() => {
                      setIsNavOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    Practice areas 2
                  </Link>
                  <Link
                    className="dropdown-item"
                    href="/demo-06/practice-single"
                    onClick={() => {
                      setIsNavOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    Practice single
                  </Link>
                </div>
              </li>
              <li className={`nav-item dropdown ${activeDropdown === "news" ? "show" : ""} ${pathname === "/demo-06/blog" || pathname === "/demo-06/post" ? "active" : ""}`}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  onClick={(e) => handleDropdownToggle("news", e)}
                >
                  News
                </a>
                <div className={`dropdown-menu ${activeDropdown === "news" ? "show" : ""}`}>
                  <Link
                    className="dropdown-item"
                    href="/demo-06/blog"
                    onClick={() => {
                      setIsNavOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    News page
                  </Link>
                  <Link
                    className="dropdown-item"
                    href="/demo-06/post"
                    onClick={() => {
                      setIsNavOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    Post page
                  </Link>
                </div>
              </li>
              <li className={`nav-item ${isActive("/demo-06/contacts") ? "active" : ""}`}>
                <Link className="nav-link" href="/demo-06/contacts" onClick={() => setIsNavOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="search" onClick={() => setIsSearchOpen(true)}>
              <i className="fas fa-search"></i>
            </div>
            <div className="nav-text d-inline-flex align-items-center">
              Free Consultation!<span>1-780-624-9821</span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
