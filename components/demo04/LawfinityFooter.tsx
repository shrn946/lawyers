"use client";

import React from "react";
import Link from "next/link";

export function LawfinityFooter() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Subscribed to newsletter successfully!");
  };

  return (
    <section className="footer-con position-relative" id="footer">
      <div className="container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="upper_portion" data-aos="fade-up">
              <div className="heading">
                <h6 className="text-white">Subscription</h6>
                <h3 className="text-white mb-0">
                  Subscribe to our <span className="span_borderbootom">newsletter</span>
                </h3>
              </div>
              <form onSubmit={handleSubscribe}>
                <div className="form-group position-relative mb-0">
                  <input
                    type="email"
                    className="form_style"
                    placeholder="Your email address"
                    name="email"
                    required
                  />
                  <button type="submit">
                    Subscribe<i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="middle_portion">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="logo-content">
                <Link href="/demo-04" className="footer-logo">
                  <figure className="mb-0">
                    <img src="/demo-04/assets/images/logo.png" alt="logo" />
                  </figure>
                </Link>
                <p className="text-size-14">
                  Nemo enim ipsam voluptatem quia voluptas sit asperna tur aut odit
                  aut fugit, sed quia conseuntur magni dolor es eos rui ratione...
                </p>
                <ul className="list-unstyled mb-0 social-icons">
                  <li>
                    <a href="https://www.facebook.com/login/" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f social-networks"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/i/flow/login" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-x-twitter social-networks"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/login" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin social-networks"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-2 col-md-4 col-sm-4 col-6">
              <div className="links">
                <h4 className="heading">Useful Links</h4>
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fa-solid fa-arrow-right"></i>
                    <Link href="/demo-04" className="text-size-14 text text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right"></i>
                    <Link href="/demo-04/about" className="text-size-14 text text-decoration-none">
                      About
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right"></i>
                    <Link href="/demo-04/practice-area" className="text-size-14 text text-decoration-none">
                      Practice Areas
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right"></i>
                    <Link href="/demo-04/case-studies" className="text-size-14 text text-decoration-none">
                      Cases
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right"></i>
                    <Link href="/demo-04/blog" className="text-size-14 text text-decoration-none">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right"></i>
                    <Link href="/demo-04/contact" className="text-size-14 text text-decoration-none">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
              <div className="timing">
                <h4 className="heading">Office Hours</h4>
                <ul className="list-unstyled mb-0">
                  <li>
                    <p>Monday – Saturday</p>
                  </li>
                  <li>
                    <span>12:00 – 14:45</span>
                  </li>
                  <li>
                    <p>Sunday – Thursday</p>
                  </li>
                  <li>
                    <span>17.30 – 21.45</span>
                  </li>
                  <li>
                    <p>Friday – Saturday</p>
                  </li>
                  <li>
                    <span className="mb-0">13.00 – 19.45</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-12">
              <div className="icon">
                <h4 className="heading">Contact Us</h4>
                <ul className="list-unstyled mb-0">
                  <li className="text">
                    <i className="fa-solid fa-phone"></i>
                    <a href="tel:+568925896325" className="text-decoration-none">
                      +5689 2589 6325
                    </a>
                  </li>
                  <li className="text">
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:info@lawfinity.com" className="text-decoration-none">
                      Info@lawfinity.com
                    </a>
                  </li>
                  <li className="text">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="address mb-0">21 King Street Melbourne, 3000, Australia</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figure className="footer-sideimage mb-0">
        <img src="/demo-04/assets/images/footer-sideimage.png" alt="footer graphic" className="img-fluid" />
      </figure>
      <div className="copyright">
        <p className="mb-0">Copyright © lawfinity.com, All Rights Reserved 2024</p>
      </div>
    </section>
  );
}
export default LawfinityFooter;
