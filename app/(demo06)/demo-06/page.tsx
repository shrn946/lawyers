"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AlegadaHeader } from "@/components/demo06/AlegadaHeader";
import { AlegadaFooter } from "@/components/demo06/AlegadaFooter";

export default function AlegadaHomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [filter, setFilter] = useState("*");
  const [evaluationForm, setEvaluationForm] = useState({ name: "", email: "", phone: "", description: "" });
  const [evalSubmitted, setEvalSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Auto-slide for Home Banner
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Auto-slide for Testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleEvaluationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (evaluationForm.name && evaluationForm.email && evaluationForm.phone) {
      setEvalSubmitted(true);
      setEvaluationForm({ name: "", email: "", phone: "", description: "" });
      setTimeout(() => setEvalSubmitted(false), 5000);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const cases = [
    { id: 1, category: "real", title: "Law Advisory", subtitle: "Real Estate", img: "/demo-06/assets/media/img/iso-1.jpg" },
    { id: 2, category: "family", title: "Law Advisory", subtitle: "Real Estate", img: "/demo-06/assets/media/img/iso-2.jpg" },
    { id: 3, category: "business", title: "Law Advisory", subtitle: "Real Estate", img: "/demo-06/assets/media/img/iso-3.jpg" },
    { id: 4, category: "family", title: "Law Advisory", subtitle: "Real Estate", img: "/demo-06/assets/media/img/iso-4.jpg" },
    { id: 5, category: "patent", title: "Law Advisory", subtitle: "Real Estate", img: "/demo-06/assets/media/img/iso-5.jpg" },
  ];

  const filteredCases = cases.filter((c) => {
    if (filter === "*") return true;
    return c.category === filter;
  });

  return (
    <>
      {/* Loader */}
      <div id="page-preloader">
        <span className="spinner border-t_second_b border-t_prim_a"></span>
      </div>

      <AlegadaHeader />

      {/* Slider main */}
      <section className="slider">
        <div className="b-main-slider" id="main-slider" style={{ position: "relative", height: "900px", overflow: "hidden" }}>
          {/* Slide 1 */}
          <div
            className={`sp-slide ${activeSlide === 0 ? "active" : ""}`}
            style={{
              display: activeSlide === 0 ? "block" : "none",
              position: "absolute",
              width: "100%",
              height: "100%",
              transition: "opacity 1s ease",
            }}
          >
            <div className="b-main-slider__item b-main-slider__item_2" style={{ height: "100%" }}>
              <img className="sp-image" src="/demo-06/assets/media/img/background_1.jpg" alt="slider" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              <div className="carousel-text" style={{ position: "absolute", zIndex: 10, top: "35%", width: "100%" }}>
                <div className="container">
                  <div className="slide-info-left text-white">
                    <h5>Founded by Expert Attorneys</h5>
                    <h2>With Superior Value<br />Providing Legal Services</h2>
                    <h4>Excepteur sint occaecat cupidatat non proident sunt in culpa qui<br />officia deserunt mollit anim idsum est laborum.</h4>
                    <div className="carousel-text-button slider-button">
                      <Link className="carousel-text-button-red" href="/demo-06/about">Learn More</Link>
                      <Link className="carousel-text-button-white" href="/demo-06/about">Our History</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className={`sp-slide ${activeSlide === 1 ? "active" : ""}`}
            style={{
              display: activeSlide === 1 ? "block" : "none",
              position: "absolute",
              width: "100%",
              height: "100%",
              transition: "opacity 1s ease",
            }}
          >
            <div className="b-main-slider__item b-main-slider__item_2" style={{ height: "100%" }}>
              <img className="sp-image" src="/demo-06/assets/media/img/background_2.jpg" alt="slider" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              <div className="carousel-text" style={{ position: "absolute", zIndex: 10, top: "35%", width: "100%" }}>
                <div className="container">
                  <div className="slide-info-right text-white">
                    <h5>Founded by Expert Attorneys</h5>
                    <h2>A Team of Effective &amp;<br />Experienced Attorneys</h2>
                    <div className="carousel-text-button slider-button">
                      <Link className="carousel-text-button-red" href="/demo-06/about">Learn More</Link>
                      <Link className="carousel-text-button-white" href="/demo-06/about">Our History</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className={`sp-slide ${activeSlide === 2 ? "active" : ""}`}
            style={{
              display: activeSlide === 2 ? "block" : "none",
              position: "absolute",
              width: "100%",
              height: "100%",
              transition: "opacity 1s ease",
            }}
          >
            <div className="b-main-slider__item b-main-slider__item_2" style={{ height: "100%" }}>
              <img className="sp-image" src="/demo-06/assets/media/img/background_3.jpg" alt="slider" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              <div className="carousel-text" style={{ position: "absolute", zIndex: 10, top: "35%", width: "100%" }}>
                <div className="container">
                  <div className="slide-info-center text-white text-center">
                    <h5>Founded by Expert Attorneys</h5>
                    <h2>The Trusted Law Firm<br />With 95% Case Winning Rate</h2>
                    <div className="carousel-text-button slider-button justify-content-center">
                      <Link className="carousel-text-button-white" href="/demo-06/about">Our History</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Pro custom arrows */}
          <div className="sp-arrows" style={{ position: "absolute", top: "50%", width: "100%", zIndex: 20, display: "flex", justifyContent: "space-between", padding: "0 40px" }}>
            <div className="sp-previous-arrow" style={{ cursor: "pointer", color: "#fff", fontSize: "30px" }} onClick={() => setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1))}>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="sp-next-arrow" style={{ cursor: "pointer", color: "#fff", fontSize: "30px" }} onClick={() => setActiveSlide((prev) => (prev + 1) % 3)}>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Block-box */}
      <div className="block-box d-flex flex-md-column justify-content-between flex-lg-row flex-sm-column">
        <div className="box-1 d-flex flex-lg-row flex-sm-column flex-md-column">
          <div className="box-span d-flex box-shadow">
            <div className="box-icon-1">
              <img src="/demo-06/assets/media/img/icon1.svg" alt="pay" />
            </div>
            <div className="box-text">
              <div className="box-text-first">Easy &amp; 100% Secure Payment System</div>
              <div className="box-text-second">Book Your Appointment</div>
            </div>
          </div>
          <div className="box-span d-flex box-shadow">
            <div className="box-icon-1">
              <img src="/demo-06/assets/media/img/icon2.svg" alt="advice" />
            </div>
            <div className="box-text">
              <div className="box-text-first">Complete Legal services Firm</div>
              <div className="box-text-second">Get Free Experts Advice</div>
            </div>
          </div>
        </div>
        <div className="box-2 d-flex">
          <div className="d-flex box-2-span align-items-center">
            <div className="box-text-left">25</div>
            <div className="box-text-right">
              Years of Expertise &amp;
              <br />
              Legal Experience
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <section className="section-2">
        <div className="container">
          <div className="row">
            <div className="col-md-4 img-section-2">
              <img src="/demo-06/assets/media/img/578203911.jpg" alt="attorney" />
            </div>
            <div className="col-md-5 text-section-2">
              <span>A</span>
              <p>
                legada but broadcast the jaguar far jeepers wow darn kookaburra before that thus and then before parrot and gosh withdrew less a darn overheard foolish ran forward some drink. Atm less more past this free henc ecru immodest less husky iguana unselfish comprehensive fero usly returned much oyster fixedly less.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco lab nisi ut aliquip ex ea comodo consequat. Duis aute irure doly reprehenderit in voluptate velit esse.
              </p>
            </div>
            <div className="col-md-3 quote-section-2">
              <div className="line-5-dark"></div>
              <h3>
                We’re committed
                <br />
                to success &amp; genuine
                <br />
                provider of all types
                <br />
                of legal Services.
              </h3>
              <div className="line-5-dark"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="box-1">
                <h3>
                  Featured
                  <br />
                  Practice Areas
                </h3>
                <div className="line-2-white"></div>
                <p>
                  Without gosh gazelle blankly smug broada the jaguar far jeepers wow the darn lokak that and then before froze ullamco laboris nisi ut aliquip aute irure dolor.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="box-2">
                <img src="/demo-06/assets/media/img/icon4.svg" alt="criminal" />
                <h4>Criminal Cases</h4>
                <p>
                  Aorem ipsum dolor sit amet adipe elit, sed do eiusmod tempor incids exercitation ullamco laboris nisi ut aliquip ex eala comodo consequa irure dolor reprehend.
                </p>
                <Link href="/demo-06/practice-single">Read More</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="box-2">
                <img src="/demo-06/assets/media/img/icon5.svg" alt="patent" />
                <h4>All Patent Laws</h4>
                <p>
                  Aorem ipsum dolor sit amet adipe elit, sed do eiusmod tempor incids exercitation ullamco laboris nisi ut aliquip ex eala comodo consequa irure dolor reprehend.
                </p>
                <Link href="/demo-06/practice-single">Read More</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="box-2">
                <img src="/demo-06/assets/media/img/icon6.svg" alt="real estate" />
                <h4>Real Estate Laws</h4>
                <p>
                  Aorem ipsum dolor sit amet adipe elit, sed do eiusmod tempor incids exercitation ullamco laboris nisi ut aliquip ex eala comodo consequa irure dolor reprehend.
                </p>
                <Link href="/demo-06/practice-single">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="section-4">
        <div className="container">
          <div className="section-head">
            <h5>Discover Some More Areas</h5>
            <h2>Areas of Expertise</h2>
            <div className="line-2-red"></div>
          </div>
          <div className="row space-top-section-4">
            <div className="col-lg-4 col-md-12">
              <div className="item-section-4 d-flex">
                <i className="fas fa-file-invoice-dollar"></i>
                <div className="item-text">
                  <h5>Insurance Matters</h5>
                  <p>One some ouch winked far sed playfully that showed yellow reciprocating laorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="item-section-4 d-flex">
                <i className="fas fa-heart"></i>
                <div className="item-text">
                  <h5>Medical Negligence</h5>
                  <p>One some ouch winked far sed playfully that showed yellow reciprocating laorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="item-section-4 d-flex">
                <i className="fas fa-home"></i>
                <div className="item-text">
                  <h5>Domestic Violence</h5>
                  <p>One some ouch winked far sed playfully that showed yellow reciprocating laorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row space-top-section-4">
            <div className="col-lg-4 col-md-12">
              <div className="item-section-4 d-flex">
                <i className="fas fa-users"></i>
                <div className="item-text">
                  <h5>Executors &amp; Trustees</h5>
                  <p>One some ouch winked far sed playfully that showed yellow reciprocating laorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="item-section-4 d-flex">
                <i className="fas fa-user-secret"></i>
                <div className="item-text">
                  <h5>Theft Laws</h5>
                  <p>One some ouch winked far sed playfully that showed yellow reciprocating laorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="item-section-4 d-flex">
                <i className="fas fa-user-shield"></i>
                <div className="item-text">
                  <h5>Fraud Protection</h5>
                  <p>One some ouch winked far sed playfully that showed yellow reciprocating laorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="section-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="block-section">
                <div className="sub-block-section d-flex">
                  <img src="/demo-06/assets/media/img/logo-white.svg" alt="logo" />
                  <h3>
                    Alegada
                    <br />
                    Law Firm
                  </h3>
                </div>
                <div className="text-block-section">
                  <h5>
                    Helping The Injured People &amp; Get Your
                    <br />
                    Desired Results Since 2000
                  </h5>
                  <Link href="/demo-06/contacts">Get Started With Your Case Today!</Link>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="number-block-wrap d-flex flex-row justify-content-around">
                <div className="number-item d-flex flex-column">
                  <h3>782</h3>
                  <div className="line-2-white"></div>
                  <h6>Case Studies</h6>
                </div>
                <div className="number-item d-flex flex-column">
                  <h3>140</h3>
                  <div className="line-2-white"></div>
                  <h6>Trusted Clients</h6>
                </div>
              </div>
              <div className="number-block-wrap-2 d-flex flex-row justify-content-around">
                <div className="number-item d-flex flex-column">
                  <h3>97%</h3>
                  <div className="line-2-white"></div>
                  <h6>Won Our Cases</h6>
                </div>
                <div className="number-item d-flex flex-column">
                  <h3>65+</h3>
                  <div className="line-2-white"></div>
                  <h6>Dedicated Lawyers</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="section-6">
        <div className="section-head">
          <h5>Discover Our Best Works</h5>
          <h2>Recent Case Studies</h2>
          <div className="line-2-red"></div>
        </div>
        <div className="isotop-menu button-group filter-button-group d-flex justify-content-center">
          <button className={filter === "*" ? "current" : ""} onClick={() => setFilter("*")}>
            All Cases
          </button>
          <button className={filter === "real" ? "current" : ""} onClick={() => setFilter("real")}>
            Real Estate
          </button>
          <button className={filter === "family" ? "current" : ""} onClick={() => setFilter("family")}>
            Family Matters
          </button>
          <button className={filter === "business" ? "current" : ""} onClick={() => setFilter("business")}>
            Business &amp; Corporate
          </button>
          <button className={filter === "patent" ? "current" : ""} onClick={() => setFilter("patent")}>
            Patent Laws
          </button>
        </div>
        <div className="grid container d-flex flex-wrap justify-content-center" style={{ gap: "30px", padding: "40px 0" }}>
          {filteredCases.map((c) => (
            <div
              key={c.id}
              className={`grid-item`}
              style={{
                position: "relative",
                width: "350px",
                overflow: "hidden",
                transition: "all 0.5s ease",
              }}
            >
              <img src={c.img} alt={c.subtitle} style={{ width: "100%", height: "auto" }} />
              <div className="filter-grid d-flex flex-column justify-content-center">
                <h4>{c.title}</h4>
                <h5>{c.subtitle}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7 */}
      <section className="section-7">
        <h2>Call Now For Immediate Assistance &amp; Free Consultations</h2>
        <i className="fas fa-phone-volume">
          <span>1-780-624-9821</span>
        </i>
        <h6>
          Aorem ipsum dolor sit amet adipe elit sed you eiusmod tempor incids exercitation ullamco laboris
          <br />
          nisi ut aliquip ex eala comodo consequa irure dolor reprehends.
        </h6>
        <Link href="/demo-06/contacts">Book An Appointment</Link>
      </section>

      {/* Section 8 */}
      <section className="section-8">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="team-left">
                <h2>
                  Meet Our
                  <br />
                  Best Attorneys
                </h2>
                <div className="team-line-red"></div>
                <p>
                  Without gosh gazelle blankly smug broada the jaguar far jeepers wow the darn lokak that and then before froze ullamco laboris isi ut aliquip aute irure dolor.
                </p>
                <p>
                  Aorem ipsum dolor sit amet adipe elit sed you eiusmod tempor incids exercitation ullamco laboris
                  <br /> nisi ut aliquip ex eala comodo consequa irure dolor reprehends.
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="team-right">
                <div className="team-wrap d-flex flex-wrap" style={{ gap: "20px" }}>
                  <div className="team-item">
                    <div className="team-item-img">
                      <img src="/demo-06/assets/media/img/team-1.jpg" alt="team1" />
                      <div className="team-item-hover d-flex justify-content-center align-items-center">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                    <div className="team-item-text">
                      <h4>Christian Hill</h4>
                      <h5>Founder</h5>
                      <i className="fas fa-phone">
                        <span>1.234.800.951</span>
                      </i>
                    </div>
                  </div>
                  <div className="team-item">
                    <div className="team-item-img">
                      <img src="/demo-06/assets/media/img/team-2.jpg" alt="team2" />
                      <div className="team-item-hover d-flex justify-content-center align-items-center">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                    <div className="team-item-text">
                      <h4>Sophia Warren</h4>
                      <h5>associate lawyer</h5>
                      <i className="fas fa-phone">
                        <span>1.234.800.951</span>
                      </i>
                    </div>
                  </div>
                  <div className="team-item">
                    <div className="team-item-img">
                      <img src="/demo-06/assets/media/img/team-3.jpg" alt="team3" />
                      <div className="team-item-hover d-flex justify-content-center align-items-center">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                    <div className="team-item-text">
                      <h4>Matts Hazard</h4>
                      <h5>associate lawyer</h5>
                      <i className="fas fa-phone">
                        <span>1.234.800.951</span>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 */}
      <section className="section-9 d-flex flex-lg-row flex-sm-column flex-md-column">
        <div className="left-block">
          <h2>
            Alegada Law Agency
            <br />
            serves all institutions with
            <br />
            best legal solutions
          </h2>
          <div className="line-2-white"></div>
          <p>
            Eiusmod tempor incididunt ut labore et dolore magna aliqua. Utas sed enim ad minim veniam, quis nostrud exercitation ipsum ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure.
          </p>
          <ul className="list-left text-white">
            <li>Innovative Law Solutions with Legal Notices</li>
            <li>Fair Business Climate &amp; Protection of Properties</li>
            <li>Experienced Advisors &amp; Law Assessments</li>
            <li>Smarter Global Service with Discounted Prices</li>
          </ul>
        </div>
        <div className="right-block d-flex flex-column justify-content-center align-items-center" style={{ position: "relative" }}>
          <a
            href="https://www.youtube.com/watch?v=WQ8megIN768"
            target="_blank"
            rel="noopener noreferrer"
            className="popup-youtube"
          >
            <i className="fas fa-caret-right" style={{ fontSize: "40px", color: "#d12a2a" }}></i>
          </a>
          <h6 className="text-white mt-10">intro video</h6>
        </div>
      </section>

      {/* Section 10 */}
      <section className="section-10">
        <div className="section-head">
          <h5>What People Say About Us</h5>
          <h2>Clients Testimonials</h2>
          <div className="line-2-red"></div>
        </div>
        <div className="container">
          <div id="demo" className="carousel slide d-flex flex-column align-items-center">
            {/* The slideshow */}
            <div className="carousel-inner" style={{ textAlign: "center", minHeight: "220px" }}>
              {/* Slide 1 */}
              <div className={`carousel-item ${activeTestimonial === 0 ? "active" : ""}`} style={{ display: activeTestimonial === 0 ? "block" : "none" }}>
                <p>
                  Irrespectiv the fleet food of house oh that in lopsidedly well forlornly abortively as bluntly apart prideful boat excluding goldfish that locked gorgeously abstruse to yikes away for luxury swept hey crud more well. Some caterpillar much jeez certain far held raccoon a much much masterful ruefully.
                </p>
                <div className="item-wrap-footer d-flex justify-content-center">
                  <img src="/demo-06/assets/media/img/face.jpg" alt="Matts" />
                  <div className="item-text d-flex flex-column text-left">
                    <h5>Matts Hazard</h5>
                    <h6>associate lawyer</h6>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className={`carousel-item ${activeTestimonial === 1 ? "active" : ""}`} style={{ display: activeTestimonial === 1 ? "block" : "none" }}>
                <p>
                  Irrespectiv the fleet food of house oh that in lopsidedly well forlornly abortively as bluntly apart prideful boat excluding goldfish that locked gorgeously abstruse to yikes away for luxury swept hey crud more well. Some caterpillar much jeez certain far held raccoon a much much masterful ruefully.
                </p>
                <div className="item-wrap-footer d-flex justify-content-center">
                  <img src="/demo-06/assets/media/img/face.jpg" alt="Sophia" />
                  <div className="item-text d-flex flex-column text-left">
                    <h5>Sophia Warren</h5>
                    <h6>associate lawyer</h6>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className={`carousel-item ${activeTestimonial === 2 ? "active" : ""}`} style={{ display: activeTestimonial === 2 ? "block" : "none" }}>
                <p>
                  Irrespectiv the fleet food of house oh that in lopsidedly well forlornly abortively as bluntly apart prideful boat excluding goldfish that locked gorgeously abstruse to yikes away for luxury swept hey crud more well. Some caterpillar much jeez certain far held raccoon a much much masterful ruefully.
                </p>
                <div className="item-wrap-footer d-flex justify-content-center">
                  <img src="/demo-06/assets/media/img/face.jpg" alt="Christian" />
                  <div className="item-text d-flex flex-column text-left">
                    <h5>Christian Hill</h5>
                    <h6>Founder</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicators */}
            <ul className="carousel-indicators" style={{ position: "relative", marginTop: "20px" }}>
              <li className={activeTestimonial === 0 ? "active" : ""} onClick={() => setActiveTestimonial(0)}></li>
              <li className={activeTestimonial === 1 ? "active" : ""} onClick={() => setActiveTestimonial(1)}></li>
              <li className={activeTestimonial === 2 ? "active" : ""} onClick={() => setActiveTestimonial(2)}></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 11 */}
      <section className="section-11">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="block-l line-vertical">
                <h3>
                  Our lawyers are diverse &amp; give good insights to client’s cases, Also providing personal care &amp; keeping your best interests in their minds.
                </h3>
                <img src="/demo-06/assets/media/img/kester.png" alt="kester" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="block-r">
                <h3>Free Case Evaluation</h3>
                <div className="line-2-white"></div>
                <p>
                  Without law firm gazelle blankly smug broada the jaguar far jeepers wow the darn lokak that and
                  <br />
                  then before froze ullamco laboris nisi ut aliquip aute irure dolor.
                </p>
                <div className="form">
                  <form onSubmit={handleEvaluationSubmit}>
                    <div className="row">
                      <div className="col-md-4">
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={evaluationForm.name}
                          onChange={(e) => setEvaluationForm({ ...evaluationForm, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <input
                          type="email"
                          placeholder="Email"
                          value={evaluationForm.email}
                          onChange={(e) => setEvaluationForm({ ...evaluationForm, email: e.target.value })}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          placeholder="Phone"
                          value={evaluationForm.phone}
                          onChange={(e) => setEvaluationForm({ ...evaluationForm, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div className="col-md-12 mt-20">
                        <textarea
                          name="description"
                          id="txdescription"
                          cols={80}
                          rows={10}
                          placeholder="Brief description about your case"
                          value={evaluationForm.description}
                          onChange={(e) => setEvaluationForm({ ...evaluationForm, description: e.target.value })}
                        ></textarea>
                        <input type="submit" value="Send Message" />
                      </div>
                    </div>
                  </form>
                  {evalSubmitted && (
                    <p style={{ color: "#d12a2a", marginTop: "15px" }}>Evaluation request sent successfully! We will contact you soon.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12 */}
      <section className="section-12">
        <div className="section-head">
          <h5>What People Say About Us</h5>
          <h2>Latest Agelada News</h2>
          <div className="line-2-red"></div>
          <div className="container space">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="artical">
                  <img src="/demo-06/assets/media/img/artical1.jpg" alt="article1" />
                  <div className="artical-text">
                    <h4>Court seeks to help with secret documents</h4>
                    <p>One some ouch winke far playful that you showed yellow recipr locating pendings at without gosh gazelle blankly.</p>
                    <div className="line-3"></div>
                    <div className="article-footer d-flex justify-content-between">
                      <div className="author">
                        By <span>Admin</span> Sep 25, 2018
                      </div>
                      <div className="comment">
                        <i className="far fa-comment"></i>36 Comments
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="artical">
                  <img src="/demo-06/assets/media/img/artical2.jpg" alt="article2" />
                  <div className="artical-text">
                    <h4>Lawyers saw two men at supreme court</h4>
                    <p>One some ouch winke far playful that you showed yellow recipr locating pendings at without gosh gazelle blankly.</p>
                    <div className="line-3"></div>
                    <div className="article-footer d-flex justify-content-between">
                      <div className="author">
                        By <span>Admin</span> Sep 25, 2018
                      </div>
                      <div className="comment">
                        <i className="far fa-comment"></i>36 Comments
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="artical">
                  <img src="/demo-06/assets/media/img/artical3.jpg" alt="article3" />
                  <div className="artical-text">
                    <h4>The shareholder’s grant is starting practise</h4>
                    <p>One some ouch winke far playful that you showed yellow recipr locating pendings at without gosh gazelle blankly.</p>
                    <div className="line-3"></div>
                    <div className="article-footer d-flex justify-content-between">
                      <div className="author">
                        By <span>Admin</span> Sep 25, 2018
                      </div>
                      <div className="comment">
                        <i className="far fa-comment"></i>36 Comments
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <Link className="read-button" href="/demo-06/blog">
                  Read More News
                </Link>
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
