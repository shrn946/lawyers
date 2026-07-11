"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AlegadaHeader } from "@/components/demo06/AlegadaHeader";
import { AlegadaFooter } from "@/components/demo06/AlegadaFooter";
import { AlegadaPageBanner } from "@/components/demo06/AlegadaPageBanner";

export default function AlegadaBlogPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <>
      <div id="page-preloader">
        <span className="spinner border-t_second_b border-t_prim_a"></span>
      </div>

      <AlegadaHeader />

      <AlegadaPageBanner title="News Standard" subtitle="Licensed & Certified to Practice Law" />

      {/* Article Wrap */}
      <section className="article-wrap">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-md-9">
              {/* Post 1 */}
              <div className="article-item">
                <img src="/demo-06/assets/media/img/article-1.jpg" alt="art1" className="img-fluid mb-20" />
                <div className="artical-blog">
                  <div className="d-flex justify-content-start space-50 mb-15">
                    <div className="author d-flex line-right-data mr-3">
                      By <span className="ml-1 font-weight-bold"> Admin </span> Sep 25
                    </div>
                    <div className="legal line-right-data mr-3">Legal Solutions</div>
                    <div className="comment">
                      <i className="far fa-comment mr-1"></i>36 Comments
                    </div>
                  </div>
                  <h4>
                    <Link href="/demo-06/post">Court seeks to help with documents</Link>
                  </h4>
                  <p>
                    Without gosh gazelle blankly smug broada the jaguar far jeepers wow the darn lokak that and then before froze ulla laboris nisi ut aliquip aute irure dolor lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="article-buttons d-flex justify-content-between align-items-center">
                    <Link href="/demo-06/post" className="article-read-more">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="line-break"></div>
              </div>

              {/* Carousel Post 2 */}
              <div className="article-carousel mb-20">
                <div id="carouselExampleControls" className="carousel slide" style={{ position: "relative" }}>
                  <div className="carousel-inner">
                    <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`} style={{ display: activeSlide === 0 ? "block" : "none" }}>
                      <img className="d-block w-100 img-fluid" src="/demo-06/assets/media/img/ar-2.jpg" alt="First slide" />
                    </div>
                    <div className={`carousel-item ${activeSlide === 1 ? "active" : ""}`} style={{ display: activeSlide === 1 ? "block" : "none" }}>
                      <img className="d-block w-100 img-fluid" src="/demo-06/assets/media/img/ar-2.jpg" alt="Second slide" />
                    </div>
                  </div>
                  <div className="control-img d-flex justify-content-end" style={{ position: "absolute", bottom: "10px", right: "10px", zIndex: 10 }}>
                    <button
                      className="carousel-control-prev"
                      style={{ background: "transparent", border: "none", cursor: "pointer" }}
                      onClick={() => setActiveSlide((prev) => (prev === 0 ? 1 : prev - 1))}
                    >
                      <span>
                        <img src="/demo-06/assets/media/img/arrow-l.svg" alt="prev" />
                      </span>
                    </button>
                    <button
                      className="carousel-control-next"
                      style={{ background: "transparent", border: "none", cursor: "pointer" }}
                      onClick={() => setActiveSlide((prev) => (prev + 1) % 2)}
                    >
                      <span>
                        <img src="/demo-06/assets/media/img/arrow-r.svg" alt="next" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="artical-blog">
                <div className="d-flex justify-content-start space-50 mb-15">
                  <div className="author d-flex line-right-data mr-3">
                    By <span className="ml-1 font-weight-bold"> Admin </span> Sep 25
                  </div>
                  <div className="legal line-right-data mr-3">Legal Solutions</div>
                  <div className="comment">
                    <i className="far fa-comment mr-1"></i>36 Comments
                  </div>
                </div>
                <h4>
                  <Link href="/demo-06/post">Lawyers to protect supreme court</Link>
                </h4>
                <p>
                  Without gosh gazelle blankly smug broada the jaguar far jeepers wow the darn lokak that and then before froze ulla laboris nisi ut aliquip aute irure dolor lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className="article-buttons d-flex justify-content-between align-items-center">
                  <Link href="/demo-06/post" className="article-read-more">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="line-break"></div>

              {/* Text Link Post 3 */}
              <div className="artical-blog article-select">
                <div className="d-flex justify-content-start space-50 mb-15">
                  <div className="author d-flex line-right-data mr-3">
                    By <span className="ml-1 font-weight-bold"> Admin </span> Sep 25
                  </div>
                  <div className="legal line-right-data mr-3">Legal Solutions</div>
                  <div className="comment">
                    <i className="far fa-comment mr-1"></i>36 Comments
                  </div>
                </div>
                <h4>
                  <Link href="/demo-06/post">Court seeks to help documents</Link>
                </h4>
                <p>
                  Without gosh gazelle blankly smug broada the jaguar far jeepers wow the darn lokak that and then before froze ulla laboris nisi ut aliquip aute irure dolor lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className="article-buttons d-flex justify-content-between align-items-center">
                  <Link href="/demo-06/post" className="article-read-more back-color">
                    Read More
                  </Link>
                </div>
                <div className="line-break"></div>
              </div>

              {/* Video Post 4 */}
              <div className="article-item space-50">
                <div className="img-wrap" style={{ position: "relative" }}>
                  <img src="/demo-06/assets/media/img/art-3.jpg" alt="video-post" className="img-fluid" />
                  <div className="video-button-wrap d-flex justify-content-center align-items-center">
                    <a
                      href="https://www.youtube.com/watch?v=WQ8megIN768"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="video-button d-flex justify-content-center align-items-center"
                    >
                      <i className="fas fa-caret-right" style={{ fontSize: "24px", color: "#d12a2a" }}></i>
                    </a>
                  </div>
                </div>
                <div className="artical-blog">
                  <div className="d-flex justify-content-start space-50 mb-15">
                    <div className="author d-flex line-right-data mr-3">
                      By <span className="ml-1 font-weight-bold"> Admin </span> Sep 25
                    </div>
                    <div className="legal line-right-data mr-3">Legal Solutions</div>
                    <div className="comment">
                      <i className="far fa-comment mr-1"></i>36 Comments
                    </div>
                  </div>
                  <h4>
                    <Link href="/demo-06/post">How to choose best lawyers for case</Link>
                  </h4>
                  <p>
                    Without gosh gazelle blankly smug broada the jaguar far jeepers wow the darn lokak that and then before froze ulla laboris nisi ut aliquip aute irure dolor lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="article-buttons d-flex justify-content-between align-items-center">
                    <Link href="/demo-06/post" className="article-read-more">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="line-break"></div>
              </div>

              {/* Quote block post 5 */}
              <div className="artical-blog article-select">
                <div className="d-flex justify-content-start space-50 mb-15">
                  <div className="author d-flex line-right-data mr-3">
                    By <span className="ml-1 font-weight-bold"> Admin </span> Sep 25
                  </div>
                  <div className="legal line-right-data mr-3">Legal Solutions</div>
                  <div className="comment">
                    <i className="far fa-comment mr-1"></i>36 Comments
                  </div>
                </div>
                <div className="quote d-flex justify-content-between">
                  <i className="fas fa-quote-left mr-3"></i>
                  <h4>
                    We’re committed to success &amp; genuine provider of legal Services exercitation ullamco laboris nisi ut aliquip dolor sed ipsum in reprehenderit velit.
                  </h4>
                </div>
                <div className="article-buttons d-flex justify-content-between align-items-center">
                  <div className="article-buttons-line">
                    <span>Matts Hazard</span>
                    <span className="new-line ml-1 font-weight-normal text-muted">senior lawyer</span>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="pagination justify-content-center mt-50">
                <ul>
                  <li className="active">1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>
                    <i className="fas fa-angle-right"></i>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="blog-wrap-right">
                <div className="article-search d-flex">
                  <input type="text" placeholder="Search" id="search-text" />
                  <input type="submit" id="image-button" value="" />
                </div>
                <div className="blog-about">
                  <h4 class="font-head">About Alegada</h4>
                  <div className="line-red-2"></div>
                  <img src="/demo-06/assets/media/img/men-2.jpg" alt="about-men" className="img-fluid mb-15" />
                  <p>
                    One some ouch winke far playful that you showed yellow recipr locating pend at without gosh gazelle blankly for this esimoud sed ipsum.
                  </p>
                </div>
                <div className="blog-social">
                  <h4 class="font-head">We Are Social</h4>
                  <div className="line-red-2"></div>
                  <div className="footer-social">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div className="category blog-social">
                  <h4 class="font-head">Practice Areas</h4>
                  <div className="line-red-2"></div>
                  <ul>
                    <li>
                      <Link href="/demo-06/practice-single">Domestic Violence</Link>
                    </li>
                    <li>
                      <Link href="/demo-06/practice-single">Fraud Protection</Link>
                    </li>
                    <li>
                      <Link href="/demo-06/practice-single">Dispute Resolution</Link>
                    </li>
                    <li>
                      <Link href="/demo-06/practice-single">Executors &amp; Trustees</Link>
                    </li>
                    <li>
                      <Link href="/demo-06/practice-single">Insurance Matters</Link>
                    </li>
                    <li>
                      <Link href="/demo-06/practice-single">Drug Crimes &amp; Laws</Link>
                    </li>
                    <li>
                      <Link href="/demo-06/practice-single">Medical Negligence</Link>
                    </li>
                  </ul>
                </div>
                <div className="banner">
                  <h4>Wealth of knowledge &amp; experience</h4>
                  <Link href="/demo-06/contacts">Get a Consultation</Link>
                  <h5>Call us for support</h5>
                  <h3>1-780-624-9821</h3>
                </div>
                <div className="latest-posts space-60">
                  <h4 class="font-head">Latest Posts</h4>
                  <div className="line-red-2 normal-line"></div>
                  <div className="latest-posts-item d-flex">
                    <img src="/demo-06/assets/media/img/post1.jpg" alt="post1" style={{ marginRight: "10px" }} />
                    <div className="latest-post-text">
                      <h5>
                        <Link href="/demo-06/post">Lawyer shares for grant is to starting the practice</Link>
                      </h5>
                      <h6>
                        By <span>Admin</span> Sep 25, 2018
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="latest-posts">
                  <div className="latest-posts-item d-flex">
                    <img src="/demo-06/assets/media/img/post2.jpg" alt="post2" style={{ marginRight: "10px" }} />
                    <div className="latest-post-text">
                      <h5>
                        <Link href="/demo-06/post">Seeking to keep 125,000 docs from prosecuters</Link>
                      </h5>
                      <h6>
                        By <span>Admin</span> Sep 25, 2018
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13 */}
      <section className="section-13 logo-back">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="text-block-section d-flex align-items-center">
                <h5>
                  Stay updated with news
                  <br />
                  Subscribe to our Newsletter
                </h5>
              </div>
            </div>
            <div className="col-md-7">
              <form onSubmit={handleSubscribe}>
                <div className="subscribe d-flex align-items-center">
                  <input
                    type="email"
                    placeholder="Email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <input type="submit" value="Subscribe" />
                </div>
              </form>
              {subscribed && (
                <p style={{ color: "#d12a2a", marginTop: "10px" }}>Subscribed successfully!</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <AlegadaFooter />
    </>
  );
}
