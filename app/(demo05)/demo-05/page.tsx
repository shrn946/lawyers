"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LawmasterHeader } from "@/components/demo05/LawmasterHeader";
import { LawmasterFooter } from "@/components/demo05/LawmasterFooter";

export default function LawmasterHomePage() {
  const [activeBanner, setActiveBanner] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-play for Banner Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-play for About Testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Site Loader */}
      <div id="site-loader" className="load-complete">
        <div className="loader-inner ball-clip-rotate">
          <div></div>
        </div>
      </div>

      <div className="main-container">
        <LawmasterHeader />

        {/* Banner Section */}
        <div id="banner-slider" className="banner-section">
          <div id="banner-carousel" className="carousel slide banner-slider">
            <ol className="carousel-indicators">
              <li
                onClick={() => setActiveBanner(0)}
                className={activeBanner === 0 ? "active" : ""}
              ></li>
              <li
                onClick={() => setActiveBanner(1)}
                className={activeBanner === 1 ? "active" : ""}
              ></li>
              <li
                onClick={() => setActiveBanner(2)}
                className={activeBanner === 2 ? "active" : ""}
              ></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              {/* Slide 1 */}
              <div className={`item ${activeBanner === 0 ? "active" : ""}`} style={{ display: activeBanner === 0 ? "block" : "none" }}>
                <div id="dark-1" className="dark-shape" style={{ clipPath: "polygon(0 0, 48% 0, 100% 100%, 0 100%)" }}>
                  <div id="triangle-1" className="triangle-shape" style={{ clipPath: "polygon(45% 0, 100% 0, 100% 100%, 0 100%)" }}></div>
                </div>
                <img src="/demo-05/images/slider1.jpg" alt="banner-img" style={{ width: "100%", height: "auto" }} />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="col-md-5 col-sm-5 banner-content">
                      <h3>Redefining Your investment law</h3>
                      <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question.</p>
                      <Link href="/demo-05/services" title="Read More">
                        Read More<i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className={`item ${activeBanner === 1 ? "active" : ""}`} style={{ display: activeBanner === 1 ? "block" : "none" }}>
                <div id="dark-2" className="dark-shape" style={{ clipPath: "polygon(0 0, 48% 0, 100% 100%, 0 100%)" }}>
                  <div id="triangle-2" className="triangle-shape" style={{ clipPath: "polygon(45% 0, 100% 0, 100% 100%, 0 100%)" }}></div>
                </div>
                <img src="/demo-05/images/slider1.jpg" alt="banner-img" style={{ width: "100%", height: "auto" }} />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="col-md-5 col-sm-5 banner-content">
                      <h3>Redefining Your investment law</h3>
                      <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question.</p>
                      <Link href="/demo-05/services" title="Read More">
                        Read More<i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className={`item ${activeBanner === 2 ? "active" : ""}`} style={{ display: activeBanner === 2 ? "block" : "none" }}>
                <div id="dark-3" className="dark-shape" style={{ clipPath: "polygon(0 0, 48% 0, 100% 100%, 0 100%)" }}>
                  <div id="triangle-3" className="triangle-shape" style={{ clipPath: "polygon(45% 0, 100% 0, 100% 100%, 0 100%)" }}></div>
                </div>
                <img src="/demo-05/images/slider1.jpg" alt="banner-img" style={{ width: "100%", height: "auto" }} />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="col-md-5 col-sm-5 banner-content">
                      <h3>Redefining Your investment law</h3>
                      <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question.</p>
                      <Link href="/demo-05/services" title="Read More">
                        Read More<i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about-section" className="about-section container-fluid no-padding">
          <div className="section-padding"></div>
          <div className="container">
            <div className="row">
              <div className="section-header">
                <h5>Master law firm group</h5>
                <h3>Knowing what the client wants Creates an efficient relationship</h3>
              </div>
              <div className="col-md-6 col-sm-6 about-testimonial-section">
                <div id="about-testimonial-carousel" className="carousel slide">
                  <div className="carousel-inner" role="listbox">
                    {/* Slide 1 */}
                    <div className={`item ${activeTestimonial === 0 ? "active" : ""}`} style={{ display: activeTestimonial === 0 ? "block" : "none" }}>
                      <div className="testimonial-right">
                        <i className="fa fa-quote-right"></i>
                      </div>
                      <div className="testimonial-left">
                        <div className="testimonial-content">
                          <p>Master Firm has provided excellent advice, communication and follow through. I would highly recommend the Master Law Firm.</p>
                          <span>Katy Esterline, Former Principal</span>
                          <div style={{ marginTop: "15px" }}>
                            <Link href="/demo-05/about" style={{ marginRight: "15px", display: "inline-block" }}>Master law vision</Link>
                            <Link href="/demo-05/about" style={{ display: "inline-block" }}>Firm Group mission</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Slide 2 */}
                    <div className={`item ${activeTestimonial === 1 ? "active" : ""}`} style={{ display: activeTestimonial === 1 ? "block" : "none" }}>
                      <div className="testimonial-right">
                        <i className="fa fa-quote-right"></i>
                      </div>
                      <div className="testimonial-left">
                        <div className="testimonial-content">
                          <p>Master Firm has provided excellent advice, communication and follow through. I would highly recommend the Master Law Firm.</p>
                          <span>Katy Esterline, Former Principal</span>
                          <div style={{ marginTop: "15px" }}>
                            <Link href="/demo-05/about" style={{ marginRight: "15px", display: "inline-block" }}>Master law visioN</Link>
                            <Link href="/demo-05/about" style={{ display: "inline-block" }}>Firm Group mission</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 about-right">
                <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                <p>Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Section */}
        <div id="service-section" className="service-section container-fluid no-padding">
          <img src="/demo-05/images/icon/service-bg.png" alt="service-bg" />
          <div className="section-padding"></div>
          <div className="row">
            <div className="container">
              <div className="service-heading">
                <div className="col-md-8">
                  <div className="section-header">
                    <h5>We have a lot of experience and don't have to do a bucket of research</h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <img className="pull-right" src="/demo-05/images/icon/service-ic.png" alt="service" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="col-md-4 col-sm-4 col-xs-6 service-block">
                <img src="/demo-05/images/icon/service-ic-1.png" alt="service-icon" />
                <h3>Corporate Law</h3>
                <p>The new common language will be more simple and regular than the existing European uages. It will be as simple as Occidental.</p>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 service-block">
                <img src="/demo-05/images/icon/service-ic-2.png" alt="service-icon" />
                <h3>Family Law</h3>
                <p>The new common language will be more simple and regular than the existing European uages. It will be as simple as Occidental.</p>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 service-block">
                <img src="/demo-05/images/icon/service-ic-3.png" alt="service-icon" />
                <h3>investment Law</h3>
                <p>The new common language will be more simple and regular than the existing European uages. It will be as simple as Occidental.</p>
              </div>
            </div>
          </div>
          <div className="section-padding"></div>
        </div>

        {/* Achievement Section */}
        <div id="achivement-section" className="container-fluid no-padding achivement-section counter-section">
          <div className="section-padding"></div>
          <div className="row">
            <div className="container">
              <div className="section-header">
                <h5>Master law firm achievements</h5>
              </div>
              <div className="counter-block counter-box-one">
                <div className="col-md-6 col-sm-6 col-xs-6 statistics-box statistics-boxone">
                  <p>Number of Trusted Clients</p>
                  <div className="statistics-content">
                    <span data-statistics_percent="815" id="statistics_count-1">0</span>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6 statistics-box">
                  <p>Number of global Partners</p>
                  <div className="statistics-content">
                    <span data-statistics_percent="458" id="statistics_count-2">0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="counter-block counter-box-two">
                <div className="col-md-4 col-sm-4">
                  <div className="statistics-box">
                    <div className="statistics-content">
                      <p>Money paids</p>
                      <div className="statistics-perameter">$</div>
                      <span data-statistics_percent="56" id="statistics_count-3">0</span>
                      <div className="statistics-perameter">M</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="statistics-box">
                    <div className="statistics-content">
                      <p>Case Closed</p>
                      <span data-statistics_percent="8562" id="statistics_count-4">0</span>
                      <div className="statistics-perameter">+</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="statistics-box">
                    <div className="statistics-content">
                      <p>Successful</p>
                      <span data-statistics_percent="98" id="statistics_count-5">0</span>
                      <div className="statistics-perameter">%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-padding"></div>
          </div>
        </div>

        {/* Team Section */}
        <div id="team-section" className="container-fluid no-padding team-section">
          <div className="section-padding"></div>
          <div className="container">
            <div className="section-header">
              <h5>Our skilled Attorneys</h5>
              <h3>Briefly Speaking, We’re the Best</h3>
            </div>
            <div className="team-carousel owl-carousel">
              <div className="team-type">
                <img src="/demo-05/images/team1.jpg" alt="team-1" />
                <div className="member-content">
                  <div className="member-name">
                    <h6>Stephen Smith LLB.,</h6>
                    <p>Senior Attorney</p>
                  </div>
                  <Link href="/demo-05/attorney-details">
                    <i className="icon_plus"></i>
                  </Link>
                </div>
              </div>
              <div className="team-type">
                <img src="/demo-05/images/team2.jpg" alt="team-2" />
                <div className="member-content">
                  <div className="member-name">
                    <h6>Stephen Smith LLB.,</h6>
                    <p>Senior Attorney</p>
                  </div>
                  <Link href="/demo-05/attorney-details">
                    <i className="icon_plus"></i>
                  </Link>
                </div>
              </div>
              <div className="team-type">
                <img src="/demo-05/images/team3.jpg" alt="team-3" />
                <div className="member-content">
                  <div className="member-name">
                    <h6>Stephen Smith LLB.,</h6>
                    <p>Senior Attorney</p>
                  </div>
                  <Link href="/demo-05/attorney-details">
                    <i className="icon_plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="section-padding"></div>
        </div>

        {/* Call Out */}
        <div id="call-out" className="container-fluid no-padding call-out">
          <div className="container">
            <div className="call-out-content">
              <div className="col-md-10 col-sm-9 col-xs-12 no-padding">
                <h3>Need some legal assistance? <span>Let’s have a chat!</span></h3>
                <p>Blanditiis praesentium voluptatum deleniti atque soluta nobis est eligendi optio cumque nihil.</p>
              </div>
              <div className="col-md-2 col-sm-3 col-xs-12 contsult-now">
                <Link href="/demo-05/contact-us" title="Consult now!">
                  consult now!
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section container-fluid no-padding">
          <div className="section-padding"></div>
          <div className="container">
            <div className="section-header">
              <h5>Clienys says about us</h5>
              <h3>Quality. Responsiveness. Results.</h3>
            </div>
            <div className="testimonial-carousel owl-carousel">
              <div className="testimonial-box">
                <div className="testimonial-content">
                  <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                </div>
                <div className="testimonial-author">
                  <i><img src="/demo-05/images/testimonial1.png" alt="testimonials-1" /></i>
                  <h3>Mike Stepp<span>JSK Investments Inc.,</span></h3>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="testimonial-content">
                  <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                </div>
                <div className="testimonial-author">
                  <i><img src="/demo-05/images/testimonial2.png" alt="testimonials-2" /></i>
                  <h3>Marie Thomas<span>University of Commerce</span></h3>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="testimonial-content">
                  <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                </div>
                <div className="testimonial-author">
                  <i><img src="/demo-05/images/testimonial3.png" alt="testimonials-3" /></i>
                  <h3>John LukAS<span>Conferderation of SME</span></h3>
                </div>
              </div>
            </div>
          </div>
          <div className="section-padding"></div>
        </div>

        {/* Latest Blog Section */}
        <div className="container-fluid no-padding latest-blog-section">
          <div className="section-padding"></div>
          <div className="container">
            <div className="row">
              <div className="section-header">
                <h5>latest firm news</h5>
                <h3>Critical matters. Critical thinking.</h3>
              </div>
              <div className="latest-block-box">
                <article className="type-post blog-twocolumn format-image col-md-6 col-sm-6 col-xs-6">
                  <div className="gridinner container-fluid no-padding">
                    <div className="col-md-5 col-sm-5 col-xs-12 no-padding">
                      <div className="entry-cover">
                        <Link href="/demo-05/blog-post">
                          <img src="/demo-05/images/blog-2-column1.jpg" alt="blog-2-column1" />
                        </Link>
                        <div className="post-date">
                          <p>Nov<span>15</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-7 col-xs-12 blog-content no-padding">
                      <div className="post-date">
                        <p>Nov<span>15</span></p>
                      </div>
                      <div className="entry-title">
                        <h3>
                          <Link href="/demo-05/blog-post" title="Five Tips For Winning Ratio of the Case">
                            Five Tips For Winning Ratio of the Case
                          </Link>
                        </h3>
                      </div>
                      <div className="entry-content">
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                      </div>
                      <Link href="/demo-05/blog-post" className="entry-footer">
                        Read More<i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </article>
                <article className="type-post blog-twocolumn format-image col-md-6 col-sm-6 col-xs-6">
                  <div className="gridinner container-fluid no-padding">
                    <div className="col-md-5 col-sm-5 col-xs-12 no-padding">
                      <div className="entry-cover">
                        <Link href="/demo-05/blog-post">
                          <img src="/demo-05/images/blog-2-column2.jpg" alt="blog-2-column2" />
                        </Link>
                        <div className="post-date">
                          <p>Nov<span>15</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-7 col-xs-12 blog-content no-padding">
                      <div className="post-date">
                        <p>Dec<span>23</span></p>
                      </div>
                      <div className="entry-title">
                        <h3>
                          <Link href="/demo-05/blog-post" title="Judgment day of Industrial Case">
                            Judgment day of Industrial Case
                          </Link>
                        </h3>
                      </div>
                      <div className="entry-content">
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                      </div>
                      <Link href="/demo-05/blog-post" className="entry-footer">
                        Read More<i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="section-padding"></div>
        </div>

        <LawmasterFooter />
        
        {/* Back To Top */}
        <a id="back-to-top" href="#" className="back-to-top" style={{ display: "none" }}>
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </>
  );
}
