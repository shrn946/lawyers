"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LawfinityHeader() {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleDropdownToggle = (dropdown: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isLinkActive = (path: string) => {
    if (path === "/demo-04") {
      return pathname === "/demo-04";
    }
    return pathname?.startsWith(path);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".dropdown")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <Link className="navbar-brand" href="/demo-04">
            <figure className="logo mb-0">
              <img src="/demo-04/assets/images/logo.png" alt="logo" className="img-fluid" />
            </figure>
          </Link>
          <button
            className={`navbar-toggler ${isNavOpen ? "" : "collapsed"}`}
            type="button"
            onClick={toggleNav}
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              {/* Home Dropdown */}
              <li className={`nav-item dropdown ${activeDropdown === "home" ? "show" : ""} ${isLinkActive("/demo-04/index1") || isLinkActive("/demo-04/index2") || pathname === "/demo-04" || pathname === "/demo-04/index04b9" ? "active" : ""}`}>
                <a
                  className="nav-link dropdown-toggle dropdown-color navbar-text-color"
                  href="#"
                  onClick={(e) => handleDropdownToggle("home", e)}
                >
                  Home
                </a>
                <div className={`dropdown-menu drop-down-content ${activeDropdown === "home" ? "show" : ""}`}>
                  <ul className="list-unstyled drop-down-pages">
                    <li className={`nav-item ${pathname === "/demo-04" ? "active" : ""}`}>
                      <Link className="dropdown-item nav-link" href="/demo-04" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>
                        Law and Order (Demo 4)
                      </Link>
                    </li>
                    <li className={`nav-item ${pathname === "/demo-04/index1" ? "active" : ""}`}>
                      <Link className="dropdown-item nav-link" href="/demo-04/index1" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>
                        Legal Situations (Demo 4)
                      </Link>
                    </li>
                    <li className={`nav-item ${pathname === "/demo-04/index2" ? "active" : ""}`}>
                      <Link className="dropdown-item nav-link" href="/demo-04/index2" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>
                        Legal Matters (Demo 4)
                      </Link>
                    </li>
                    <li className="dropdown-divider" style={{ borderTop: "1px solid #495057", margin: "5px 0" }}></li>
                    <li className="dropdown-header text-muted px-3" style={{ fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", color: "#888", listStyleType: "none", marginBottom: "5px" }}>Other Demo Sites</li>
                    <li className="nav-item">
                      <Link className="dropdown-item nav-link" href="/demo-01" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>
                        Demo 1 - Lawia
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="dropdown-item nav-link" href="/demo-02" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>
                        Demo 2 - Lawgne
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="dropdown-item nav-link" href="/demo-03" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>
                        Demo 3 - Lawyers
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* About */}
              <li className={`nav-item ${isLinkActive("/demo-04/about") ? "active" : ""}`}>
                <Link className="nav-link" href="/demo-04/about" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>
                  About
                </Link>
              </li>

              {/* Pages Dropdown */}
              <li className={`nav-item dropdown ${activeDropdown === "pages" ? "show" : ""} ${
                isLinkActive("/demo-04/practice-area") ||
                isLinkActive("/demo-04/faq") ||
                isLinkActive("/demo-04/team") ||
                isLinkActive("/demo-04/review")
                  ? "active"
                  : ""
              }`}>
                <a
                  className="nav-link dropdown-toggle dropdown-color navbar-text-color"
                  href="#"
                  onClick={(e) => handleDropdownToggle("pages", e)}
                >
                  Pages
                </a>
                <div className={`dropdown-menu drop-down-content ${activeDropdown === "pages" ? "show" : ""}`}>
                  <ul className="list-unstyled drop-down-pages">
                    <li className={`nav-item ${pathname === "/demo-04/practice-area" ? "active" : ""}`}>
                      <Link className="dropdown-item nav-link" href="/demo-04/practice-area" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>
                        Practice Areas
                      </Link>
                    </li>
                    <li className={`nav-item ${pathname === "/demo-04/faq" ? "active" : ""}`}>
                      <Link className="dropdown-item nav-link" href="/demo-04/faq" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>
                        Faq’s
                      </Link>
                    </li>
                    <li className={`nav-item ${pathname === "/demo-04/team" ? "active" : ""}`}>
                      <Link className="dropdown-item nav-link" href="/demo-04/team" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>
                        Team
                      </Link>
                    </li>
                    <li className={`nav-item ${pathname === "/demo-04/review" ? "active" : ""}`}>
                      <Link className="dropdown-item nav-link" href="/demo-04/review" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>
                        Review
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Cases */}
              <li className={`nav-item ${isLinkActive("/demo-04/case-studies") ? "active" : ""}`}>
                <Link className="nav-link" href="/demo-04/case-studies" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>
                  Cases
                </Link>
              </li>

              {/* Blog Dropdown */}
              <li className={`nav-item dropdown ${activeDropdown === "blog" ? "show" : ""} ${
                isLinkActive("/demo-04/blog") ||
                isLinkActive("/demo-04/single-blog") ||
                isLinkActive("/demo-04/load-more") ||
                isLinkActive("/demo-04/one-column") ||
                isLinkActive("/demo-04/two-column") ||
                isLinkActive("/demo-04/three-column") ||
                isLinkActive("/demo-04/three-colum-sidbar") ||
                isLinkActive("/demo-04/four-column") ||
                isLinkActive("/demo-04/six-colum-full-wide")
                  ? "active"
                  : ""
              }`}>
                <a
                  className="nav-link dropdown-toggle dropdown-color navbar-text-color"
                  href="#"
                  onClick={(e) => handleDropdownToggle("blog", e)}
                >
                  Blog
                </a>
                <div className={`dropdown-menu drop-down-content ${activeDropdown === "blog" ? "show" : ""}`}>
                  <ul className="list-unstyled drop-down-pages">
                    <li className={`nav-item ${pathname === "/demo-04/blog" ? "active" : ""}`}><Link className="dropdown-item nav-link" href="/demo-04/blog" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>Blog</Link></li>
                    <li className={`nav-item ${pathname === "/demo-04/single-blog" ? "active" : ""}`}><Link className="dropdown-item nav-link" href="/demo-04/single-blog" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>Single Blog</Link></li>
                    <li className={`nav-item ${pathname === "/demo-04/load-more" ? "active" : ""}`}><Link className="dropdown-item nav-link" href="/demo-04/load-more" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>Load More</Link></li>
                    <li className={`nav-item ${pathname === "/demo-04/one-column" ? "active" : ""}`}><Link className="dropdown-item nav-link" href="/demo-04/one-column" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>One Column</Link></li>
                    <li className={`nav-item ${pathname === "/demo-04/two-column" ? "active" : ""}`}><Link className="dropdown-item nav-link" href="/demo-04/two-column" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>Two Column</Link></li>
                    <li className={`nav-item ${pathname === "/demo-04/three-column" ? "active" : ""}`}><Link className="dropdown-item nav-link" href="/demo-04/three-column" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>Three Column</Link></li>
                    <li className={`nav-item ${pathname === "/demo-04/three-colum-sidbar" ? "active" : ""}`}><Link className="dropdown-item nav-link" href="/demo-04/three-colum-sidbar" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>Three Column Sidebar</Link></li>
                    <li className={`nav-item ${pathname === "/demo-04/four-column" ? "active" : ""}`}><Link className="dropdown-item nav-link" href="/demo-04/four-column" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>Four Column</Link></li>
                    <li className={`nav-item ${pathname === "/demo-04/six-colum-full-wide" ? "active" : ""}`}><Link className="dropdown-item nav-link" href="/demo-04/six-colum-full-wide" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>Six Column</Link></li>
                  </ul>
                </div>
              </li>

              {/* Contact */}
              <li className={`nav-item ${isLinkActive("/demo-04/contact") ? "active" : ""}`}>
                <Link className="nav-link" href="/demo-04/contact" onClick={() => { setIsNavOpen(false); setActiveDropdown(null); }}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="last_list">
              <figure className="nav-phoneicon mb-0">
                <img className="img-fluid" src="/demo-04/assets/images/nav-phoneicon.png" alt="phone icon" />
              </figure>
              <a className="text-decoration-none last_list_atag" href="tel:+568925896325">
                +5689 2589 6325
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default LawfinityHeader;
