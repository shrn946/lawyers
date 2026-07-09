"use client";

import Link from "next/link";

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter submit logic
  };

  return (
    <div className="footer3-section-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-all-section-area sp5">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-last-section">
                    <div className="footer-imgage">
                      <img src="/assets/img/logo/logo5.png" alt="logo" />
                    </div>
                    <div className="footer-text-area">
                      <p>
                        Include any additional information that may be relevant or helpful for visitors, such as FAQs, pricing options.
                      </p>
                      <div className="social-list-area">
                        <ul>
                          <li>
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="about-links-area">
                    <h3>About Link</h3>
                    <ul>
                      <li><Link href="/blog1">Our Blog</Link></li>
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="/service1">Practice Areas</Link></li>
                      <li><Link href="/testimonial1">Testimonials</Link></li>
                      <li><Link href="/contact1">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="get-links-area">
                    <h3>Get In Touch</h3>
                    <ul>
                      <li>
                        <img src="/assets/img/icons/footer-email2.svg" alt="" />
                        <a href="mailto:demolawsy@gmail.com" style={{ color: "black" }}>demolawsy@gmail.com</a>
                      </li>
                      <li>
                        <img src="/assets/img/icons/footer-location1.svg" alt="" />
                        <span style={{ color: "black" }}>
                          8708 Technology Forest <br /> Pl Suite 125 -G, The <br /> Woodlands, TX 77381
                        </span>
                      </li>
                      <li>
                        <img src="/assets/img/icons/footer-phn.svg" alt="" />
                        <a href="tel:123-456-7890" style={{ color: "black" }}>123-456-7890</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="footer-contact-area">
                    <h3>Subscribe Our Newsletter</h3>
                    <div className="footer-form-area">
                      <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Enter Your Email" required />
                        <div className="footer-btn">
                          <button type="submit">
                            Subscribe <i className="fa-light fa-arrow-right"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-pera">
              <p>
                © <a href="https://unifato.com/" target="_blank" rel="noopener noreferrer">Unifato</a> 2026 Lawsy Lawyer
              </p>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
