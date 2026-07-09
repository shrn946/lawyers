"use client";

import Link from "next/link";
import Image from "next/image";

const BASE = "/demo-02";

interface HeaderProps {
  activeMenu?: string; // e.g. 'home', 'pages', 'attorneys', 'practice', 'blog', 'contact'
}

export default function LawgneHeader({ activeMenu }: HeaderProps) {
  return (
    <>
      {/* Search Modal */}
      <div className="modal fade" id="search-modal">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <form>
              <div className="form_group">
                <input type="text" className="form_control" placeholder="Search here..." />
                <button className="search_btn"><i className="fa fa-search"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Offcanvas Panel */}
      <div className="offcanvas-panel">
        <div className="offcanvas-panel-inner">
          <div className="panel-logo">
            <Link href={`${BASE}`}>
              <Image src={`${BASE}/assets/images/logo/logo-1.png`} alt="Lawgne" width={160} height={60} />
            </Link>
          </div>
          <div className="about-us">
            <h5 className="panel-widget-title">About Us</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam alias quae cupiditate quas, neque eum magni impedit asperiores ad id sint repudiandae quaerat, omnis commodi consequatur dolore rerum deleniti!</p>
          </div>
          <div className="contact-us">
            <h5 className="panel-widget-title">Contact Us</h5>
            <ul>
              <li><i className="fal fa-map-marker-alt"></i>121 King St, Melbourne VIC 3000, Australia.</li>
              <li>
                <i className="fal fa-envelope-open"></i>
                <a href="mailto:info@lawgne.com">info@lawgne.com</a>
                <a href="mailto:support@lawgne.com">support@lawgne.com</a>
              </li>
              <li>
                <i className="fal fa-phone"></i>
                <a href="tel:(312)-895-9800">(312) 895-9800</a>
                <a href="tel:(312)-895-9888">(312) 895-9888</a>
              </li>
            </ul>
          </div>
          <a href="#" className="panel-close"><i className="fal fa-times"></i></a>
        </div>
      </div>

      {/* Header */}
      <header className="header-area-one">
        {/* Header Top Bar */}
        <div className="header-top-bar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-block text-center">
                  <p>Happy To Discuss About Your Requirement <Link href={`${BASE}/contact`}>Get a Quote</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header Logo Area */}
        <div className="header-logo-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-3">
                <div className="site-branding">
                  <Link href={`${BASE}`} className="brand-logo">
                    <Image src={`${BASE}/assets/images/logo/logo-1.png`} alt="Lawgne" width={160} height={60} />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-9">
                <div className="site-info">
                  <ul className="info-list">
                    <li>
                      <div className="icon">
                        <a href="tel:+01234556899"><i className="flaticon-call"></i></a>
                      </div>
                      <div className="info">
                        <span className="title">Phone Number</span>
                        <h5><a href="tel:+01234556899">+012 (345) 56 899</a></h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <a href="mailto:info@lawgne.com"><i className="flaticon-open"></i></a>
                      </div>
                      <div className="info">
                        <span className="title">Email address</span>
                        <h5><a href="mailto:info@lawgne.com">info@lawgne.com</a></h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header Navigation */}
        <div className="header-navigation">
          <div className="container">
            <div className="navigation-wrapper">
              <div className="row align-items-center">
                <div className="col-lg-8 col-4">
                  {/* Primary Menu */}
                  <div className="primary-menu">
                    <div className="nav-menu">
                      <div className="navbar-close"><i className="far fa-times"></i></div>
                      <nav className="main-menu">
                        <ul>
                          <li className={`menu-item has-children${activeMenu === 'home' ? ' active' : ''}`}>
                            <Link href={`${BASE}`} className={activeMenu === 'home' ? 'active' : ''}>Home</Link>
                            <ul className="sub-menu">
                              <li className="menu-item"><Link href={`${BASE}`}>Home One</Link></li>
                              <li className="menu-item"><Link href={`${BASE}/index-2`}>Home Two</Link></li>
                            </ul>
                          </li>
                          <li className={`menu-item has-children${activeMenu === 'pages' ? ' active' : ''}`}>
                            <a href="#" className={activeMenu === 'pages' ? 'active' : ''}>Pages</a>
                            <ul className="sub-menu">
                              <li className="menu-item"><Link href={`${BASE}/about-us`}>About us</Link></li>
                              <li className="menu-item has-children">
                                <a href="#">Our Case</a>
                                <ul className="sub-menu">
                                  <li><Link href={`${BASE}/case-1`}>Case One</Link></li>
                                  <li><Link href={`${BASE}/case-2`}>Case Two</Link></li>
                                  <li><Link href={`${BASE}/case-details`}>Case Details</Link></li>
                                </ul>
                              </li>
                              <li className="menu-item"><Link href={`${BASE}/gallery`}>Our Gallery</Link></li>
                              <li className="menu-item"><Link href={`${BASE}/faq`}>FAQ</Link></li>
                              <li className="menu-item"><Link href={`${BASE}/contact`}>Contact</Link></li>
                            </ul>
                          </li>
                          <li className={`menu-item has-children${activeMenu === 'attorneys' ? ' active' : ''}`}>
                            <a href="#" className={activeMenu === 'attorneys' ? 'active' : ''}>Attorneys</a>
                            <ul className="sub-menu">
                              <li className="menu-item"><Link href={`${BASE}/attorney`}>Our Attorneys</Link></li>
                              <li className="menu-item"><Link href={`${BASE}/attorney-details`}>Attorneys Details</Link></li>
                            </ul>
                          </li>
                          <li className={`menu-item has-children${activeMenu === 'practice' ? ' active' : ''}`}>
                            <a href="#" className={activeMenu === 'practice' ? 'active' : ''}>Practice Areas</a>
                            <ul className="sub-menu">
                              <li className="menu-item"><Link href={`${BASE}/practice-1`}>Practice One</Link></li>
                              <li className="menu-item"><Link href={`${BASE}/practice-2`}>Practice Two</Link></li>
                              <li className="menu-item"><Link href={`${BASE}/practice-details`}>Practice Details</Link></li>
                            </ul>
                          </li>
                          <li className={`menu-item has-children${activeMenu === 'blog' ? ' active' : ''}`}>
                            <a href="#" className={activeMenu === 'blog' ? 'active' : ''}>Blog</a>
                            <ul className="sub-menu">
                              <li className="menu-item"><Link href={`${BASE}/blog-standard`}>Blog Standard</Link></li>
                              <li className="menu-item"><Link href={`${BASE}/blog-grid`}>Blog Grid</Link></li>
                              <li className="menu-item"><Link href={`${BASE}/blog-details`}>Blog Details</Link></li>
                            </ul>
                          </li>
                          <li className={`menu-item${activeMenu === 'contact' ? ' active' : ''}`}>
                            <Link href={`${BASE}/contact`} className={activeMenu === 'contact' ? 'active' : ''}>Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="navbar-toggler">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-8">
                  {/* Header Nav */}
                  <div className="header-right-nav d-flex align-items-center">
                    <ul>
                      <li>
                        <a href="#" className="search-btn" data-toggle="modal" data-target="#search-modal">
                          <i className="far fa-search"></i>
                        </a>
                      </li>
                      <li><Link href={`${BASE}/contact`} className="main-btn arrow-btn">Free Quote</Link></li>
                      <li className="off-nav-btn">
                        <div className="off-menu">
                          <span></span><span></span><span></span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
