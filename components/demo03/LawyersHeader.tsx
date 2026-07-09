"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BASE = "/demo-03";

interface HeaderProps {
  headerType?: "header-1" | "header-2" | "header-3";
}

export default function LawyersHeader({ headerType = "header-1" }: HeaderProps) {
  const pathname = usePathname();

  const isHomeActive = pathname === BASE || pathname === `${BASE}/index-2` || pathname === `${BASE}/home-2` || pathname === `${BASE}/home-3` || pathname === `${BASE}/home-4` || pathname === `${BASE}/home-video` || pathname === `${BASE}/top-header-2` || pathname === `${BASE}/top-header-3`;

  return (
    <>
      <div className="menu-mask"></div>
      
      {/* MOBILE MENU HOLDER */}
      <div className="mobile-menu-holder">
        <div className="modal-menu-container">
          <div className="exit-mobile"> 
            <span className="icon-bar1"></span> 
            <span className="icon-bar2"></span>
          </div>
          <ul className="menu-mobile">
            <li className={`menu-item menu-item-has-children${isHomeActive ? " current-menu-item" : ""}`}>
              <Link href={`${BASE}`}>Home</Link>
              <ul className="sub-menu">
                <li><Link href={`${BASE}`}>Home 1</Link></li>
                <li><Link href={`${BASE}/home-2`}>Home 2</Link></li>
                <li><Link href={`${BASE}/home-3`}>Home 3</Link></li>
                <li><Link href={`${BASE}/home-4`}>Home 4</Link></li>
                <li><Link href={`${BASE}/home-video`}>Home Video</Link></li>
                <li><Link href={`${BASE}/top-header-2`}>Top Header 2</Link></li>
                <li><Link href={`${BASE}/top-header-3`}>Top Header 3</Link></li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#">Pages</a>
              <ul className="sub-menu">
                <li><Link href={`${BASE}/about-me`}>About Me</Link></li>
                <li><Link href={`${BASE}/about-us`}>About Us</Link></li>
                <li><Link href={`${BASE}/about-us-2`}>About Us 2</Link></li>
                <li><Link href={`${BASE}/pricing`}>Pricing</Link></li>
                <li><Link href={`${BASE}/gallery-1`}>Gallery</Link></li>
                <li><Link href={`${BASE}/faq`}>FAQ</Link></li>
                <li><Link href={`${BASE}/testimonials`}>Testimonials</Link></li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children">
              <Link href={`${BASE}/practice-areas`}>Practice Areas</Link>
              <ul className="sub-menu">
                <li className="menu-item menu-item-has-children">
                  <Link href={`${BASE}/practice-areas`}>Practice v1</Link>
                  <ul className="sub-menu">
                    <li><Link href={`${BASE}/practice-areas-2-cols`}>Practice v1 2 Cols</Link></li>
                    <li><Link href={`${BASE}/practice-areas-3-cols`}>Practice v1 3 Cols</Link></li>
                    <li><Link href={`${BASE}/practice-areas`}>Practice v1 4 Cols</Link></li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <Link href={`${BASE}/practice-areas-v2-3-cols`}>Practice v2</Link>
                  <ul className="sub-menu">
                    <li><Link href={`${BASE}/practice-areas-v2-3-cols`}>Practice v2 3 Cols</Link></li>
                    <li><Link href={`${BASE}/practice-areas-v2-4-cols`}>Practice v2 4 Cols</Link></li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <Link href={`${BASE}/practice-image-3-cols`}>Practice Image</Link>
                  <ul className="sub-menu">
                    <li><Link href={`${BASE}/practice-image-3-cols`}>Practice Image 3 Cols</Link></li>
                    <li><Link href={`${BASE}/practice-image-4-cols`}>Practice Image 4 Cols</Link></li>
                  </ul>
                </li>
                <li><Link href={`${BASE}/practice-single-page`}>Single Practice</Link></li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children">
              <Link href={`${BASE}/attorneys`}>Attorneys</Link>
              <ul className="sub-menu">
                <li><Link href={`${BASE}/attorneys-2-cols`}>Attorneys 2 Cols</Link></li>
                <li><Link href={`${BASE}/attorneys`}>Attorneys 3 Cols</Link></li>
                <li><Link href={`${BASE}/attorneys-4-cols`}>Attorneys 4 Cols</Link></li>
                <li><Link href={`${BASE}/attorneys-single-page`}>Single Attorney</Link></li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children">
              <Link href={`${BASE}/case-studies`}>Case Studies</Link>
              <ul className="sub-menu">
                <li><Link href={`${BASE}/case-studies-2-cols`}>Case Studies 2 Cols</Link></li>
                <li><Link href={`${BASE}/case-studies-3-cols`}>Case Studies 3 Cols</Link></li>
                <li><Link href={`${BASE}/case-studies`}>Case Studies 4 Cols</Link></li>
                <li><Link href={`${BASE}/cases-single-page`}>Single Case</Link></li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children">
              <Link href={`${BASE}/blog`}>Blog</Link>
              <ul className="sub-menu">
                <li><Link href={`${BASE}/blog-list`}>Blog List</Link></li>
                <li><Link href={`${BASE}/blog-classic`}>Blog Classic</Link></li>
                <li><Link href={`${BASE}/blog`}>Blog Grid 2 Cols</Link></li>
                <li><Link href={`${BASE}/blog-grid-3-cols`}>Blog Grid 3 Cols</Link></li>
                <li><Link href={`${BASE}/blog-full-width`}>Blog Full Width</Link></li>
                <li><Link href={`${BASE}/blog-single-post`}>Blog Single Post</Link></li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children">
              <Link href={`${BASE}/contact`}>Contact</Link>
              <ul className="sub-menu">
                <li><Link href={`${BASE}/contact`}>Contact 1</Link></li>
                <li><Link href={`${BASE}/contact-2`}>Contact 2</Link></li>
                <li><Link href={`${BASE}/contact-3`}>Contact 3</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="menu-contact">
          <ul>
            <li><i className="fa fa-map-marker-alt"></i><span>40 Park Ave, Brooklyn, New York</span></li>
            <li><i className="fa fa-mobile-alt"></i><span>1-800-111-2222</span></li>
            <li><i className="fa fa-envelope"></i><span>office@lawyers.com</span></li>
          </ul>
          <ul className="social-media">
            <li><a className="social-facebook" href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
            <li><a className="social-twitter" href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
            <li><a className="social-linkedin" href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
      {/* /MOBILE MENU HOLDER */}

      {/* HEADER */}
      <header id="header-bar" className={headerType}>
        <div className="container">
          <div className={`header-wrap header-wrap1${headerType === 'header-2' ? ' d-none' : ''}`}>
            <div className="logo logo-1">
              <Link href={`${BASE}`}>
                <img className="img-fluid" src={`${BASE}/assets/images/logo.png`} alt="Lawyers" />
              </Link>
            </div>
            <div className="header-contact">
              <div className="header-info"><span className="info-circle"><i className="fa fa-phone"></i></span> 1-800-000-111</div>
              <div className="header-info"><span className="info-circle"><i className="fa fa-envelope"></i></span> office@lawyers.com</div>
            </div>
            <div className="nav-button-holder"> 
              <button type="button" className="nav-button"> 
                <span className="icon-bar"></span> 
              </button>
            </div>
          </div>
          <div className="nav-holder nav-holder-1">
            <ul className="menu-nav menu-nav-1">
              <li className={`menu-item menu-item-has-children${isHomeActive ? " current-menu-item" : ""}`}>
                <Link href={`${BASE}`}>Home</Link>
                <ul className="sub-menu">
                  <li><Link href={`${BASE}`}>Home 1</Link></li>
                  <li><Link href={`${BASE}/home-2`}>Home 2</Link></li>
                  <li><Link href={`${BASE}/home-3`}>Home 3</Link></li>
                  <li><Link href={`${BASE}/home-4`}>Home 4</Link></li>
                  <li><Link href={`${BASE}/home-video`}>Home Video</Link></li>
                  <li><Link href={`${BASE}/top-header-2`}>Top Header 2</Link></li>
                  <li><Link href={`${BASE}/top-header-3`}>Top Header 3</Link></li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li><Link href={`${BASE}/about-me`}>About Me</Link></li>
                  <li><Link href={`${BASE}/about-us`}>About Us</Link></li>
                  <li><Link href={`${BASE}/about-us-2`}>About Us 2</Link></li>
                  <li><Link href={`${BASE}/pricing`}>Pricing</Link></li>
                  <li><Link href={`${BASE}/gallery-1`}>Gallery</Link></li>
                  <li><Link href={`${BASE}/faq`}>FAQ</Link></li>
                  <li><Link href={`${BASE}/testimonials`}>Testimonials</Link></li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <Link href={`${BASE}/practice-areas`}>Practice Areas</Link>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-has-children">
                    <Link href={`${BASE}/practice-areas`}>Practice v1</Link>
                    <ul className="sub-menu">
                      <li><Link href={`${BASE}/practice-areas-2-cols`}>Practice v1 2 Cols</Link></li>
                      <li><Link href={`${BASE}/practice-areas-3-cols`}>Practice v1 3 Cols</Link></li>
                      <li><Link href={`${BASE}/practice-areas`}>Practice v1 4 Cols</Link></li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <Link href={`${BASE}/practice-areas-v2-3-cols`}>Practice v2</Link>
                    <ul className="sub-menu">
                      <li><Link href={`${BASE}/practice-areas-v2-3-cols`}>Practice v2 3 Cols</Link></li>
                      <li><Link href={`${BASE}/practice-areas-v2-4-cols`}>Practice v2 4 Cols</Link></li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <Link href={`${BASE}/practice-image-3-cols`}>Practice Image</Link>
                    <ul className="sub-menu">
                      <li><Link href={`${BASE}/practice-image-3-cols`}>Practice Image 3 Cols</Link></li>
                      <li><Link href={`${BASE}/practice-image-4-cols`}>Practice Image 4 Cols</Link></li>
                    </ul>
                  </li>
                  <li><Link href={`${BASE}/practice-single-page`}>Single Practice</Link></li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <Link href={`${BASE}/attorneys`}>Attorneys</Link>
                <ul className="sub-menu">
                  <li><Link href={`${BASE}/attorneys-2-cols`}>Attorneys 2 Cols</Link></li>
                  <li><Link href={`${BASE}/attorneys`}>Attorneys 3 Cols</Link></li>
                  <li><Link href={`${BASE}/attorneys-4-cols`}>Attorneys 4 Cols</Link></li>
                  <li><Link href={`${BASE}/attorneys-single-page`}>Single Attorney</Link></li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <Link href={`${BASE}/case-studies`}>Case Studies</Link>
                <ul className="sub-menu">
                  <li><Link href={`${BASE}/case-studies-2-cols`}>Case Studies 2 Cols</Link></li>
                  <li><Link href={`${BASE}/case-studies-3-cols`}>Case Studies 3 Cols</Link></li>
                  <li><Link href={`${BASE}/case-studies`}>Case Studies 4 Cols</Link></li>
                  <li><Link href={`${BASE}/cases-single-page`}>Single Case</Link></li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <Link href={`${BASE}/blog`}>Blog</Link>
                <ul className="sub-menu">
                  <li><Link href={`${BASE}/blog-list`}>Blog List</Link></li>
                  <li><Link href={`${BASE}/blog-classic`}>Blog Classic</Link></li>
                  <li><Link href={`${BASE}/blog`}>Blog Grid 2 Cols</Link></li>
                  <li><Link href={`${BASE}/blog-grid-3-cols`}>Blog Grid 3 Cols</Link></li>
                  <li><Link href={`${BASE}/blog-full-width`}>Blog Full Width</Link></li>
                  <li><Link href={`${BASE}/blog-single-post`}>Blog Single Post</Link></li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <Link href={`${BASE}/contact`}>Contact</Link>
                <ul className="sub-menu">
                  <li><Link href={`${BASE}/contact`}>Contact 1</Link></li>
                  <li><Link href={`${BASE}/contact-2`}>Contact 2</Link></li>
                  <li><Link href={`${BASE}/contact-3`}>Contact 3</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
