"use client";

import Link from "next/link";
import Image from "next/image";

const BASE = "/demo-02";

export default function LawgneFooter() {
  return (
    <footer className="footer-area">
      <div className="footer-wrapper-one position-relative bg_cover pb-30" style={{ backgroundImage: `url(${BASE}/assets/images/bg/footer-bg-1.jpg)` }}>
        <div className="container">
          {/* Footer Newsletter */}
          <div className="footer-newsletter wow fadeInUp">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-title section-title-left section-title-white mb-20">
                  <span className="sub-title">Get More Updates</span>
                  <h2>Subscribe Newsletters</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="newsletter-form mb-20">
                  <form>
                    <div className="row">
                      <div className="col-md-7">
                        <div className="form-group">
                          <input type="email" className="form_control" placeholder="Enter Email Address" name="email" required />
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="form_group">
                          <button className="main-btn">subscribe now</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Widgets */}
          <div className="footer-widget pt-80 pb-20">
            <div className="row">
              {/* About Widget */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget about-widget mb-55 wow fadeInUp" data-wow-delay=".2s">
                  <div className="footer-logo">
                    <Link href={`${BASE}`}>
                      <Image src={`${BASE}/assets/images/logo/logo-2.png`} alt="Logo" width={160} height={60} />
                    </Link>
                  </div>
                  <p>Sed ut perspiciatis unde omnis ste natus error voluptate santium doloremque laudantium totames aperiam eaquepsa quae.</p>
                  <div className="share">
                    <h4>Follow Us</h4>
                    <ul className="social-link">
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-behance"></i></a></li>
                      <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Popular Cases Widget */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget footer-nav-widget mb-55 wow fadeInUp" data-wow-delay=".3s">
                  <h4 className="widget-title">Popular Cases</h4>
                  <ul className="widget-link">
                    <li><Link href={`${BASE}/practice-details`}>Domestic Violence</Link></li>
                    <li><Link href={`${BASE}/practice-details`}>Corporate Law</Link></li>
                    <li><Link href={`${BASE}/practice-details`}>Prenuptial Agreements</Link></li>
                    <li><Link href={`${BASE}/practice-details`}>Court Settlements</Link></li>
                    <li><Link href={`${BASE}/practice-details`}>Car Accident Law</Link></li>
                    <li><Link href={`${BASE}/practice-details`}>Personal Injury</Link></li>
                  </ul>
                </div>
              </div>
              {/* Recent News Widget */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget recent-post-widget mb-55 wow fadeInUp" data-wow-delay=".4s">
                  <h4 className="widget-title">Recent News</h4>
                  <ul className="post-widget-list">
                    <li className="post-thumbnail-content">
                      <Image src={`${BASE}/assets/images/widget/thumb-1.jpg`} className="img-fluid" alt="" width={70} height={70} />
                      <div className="post-title-date">
                        <h6><Link href={`${BASE}/blog-details`}>Seamless Spreadshet Import Expere</Link></h6>
                        <span className="posted-on"><i className="far fa-calendar-alt"></i><a href="#">25 May 2021</a></span>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <Image src={`${BASE}/assets/images/widget/thumb-2.jpg`} className="img-fluid" alt="" width={70} height={70} />
                      <div className="post-title-date">
                        <h6><Link href={`${BASE}/blog-details`}>Online Environme Work Older</Link></h6>
                        <span className="posted-on"><i className="far fa-calendar-alt"></i><a href="#">25 May 2021</a></span>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <Image src={`${BASE}/assets/images/widget/thumb-3.jpg`} className="img-fluid" alt="" width={70} height={70} />
                      <div className="post-title-date">
                        <h6><Link href={`${BASE}/blog-details`}>Website Feels More Haunted House</Link></h6>
                        <span className="posted-on"><i className="far fa-calendar-alt"></i><a href="#">25 May 2021</a></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Contact Info Widget */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget contact-info-widget mb-55 wow fadeInUp" data-wow-delay=".5s">
                  <h4 className="widget-title">Contact Us</h4>
                  <div className="info-widget-content mb-10">
                    <p><i className="fal fa-phone"></i><a href="tel:+01234556998">+012 (345) 56 998</a></p>
                    <p><i className="fal fa-envelope"></i><a href="mailto:info@lawgne.com">info@lawgne.com</a></p>
                    <p><i className="fal fa-map-marker-alt"></i>59 Main Street, USA</p>
                  </div>
                  <div className="info-widget-content">
                    <h4>Opening Hour</h4>
                    <p><i className="fal fa-clock"></i>Sun - Friday, 09 am - 08 pm</p>
                    <h5>Satarday Closed</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Copyright */}
          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-text text-center">
                  <p>&copy;2021 <span>Lawgne.</span> All Rights Reserved, Design By Webtend</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
