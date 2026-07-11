"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AlegadaHeader } from "@/components/demo06/AlegadaHeader";
import { AlegadaFooter } from "@/components/demo06/AlegadaFooter";
import { AlegadaPageBanner } from "@/components/demo06/AlegadaPageBanner";

export default function AlegadaPracticeAreas1Page() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
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

  const expertiseItems = [
    { id: 1, title: "Insurance Matters", img: "/demo-06/assets/media/img/r-e-1.jpg" },
    { id: 2, title: "Tax Related Law", img: "/demo-06/assets/media/img/r-e-2.jpg" },
    { id: 3, title: "Dispute Resolution", img: "/demo-06/assets/media/img/r-e-3.jpg" },
    { id: 4, title: "Dispute Resolution", img: "/demo-06/assets/media/img/r-e-4.jpg" },
    { id: 5, title: "Domestic Violence", img: "/demo-06/assets/media/img/r-e-5.jpg" },
    { id: 6, title: "Private Wealth", img: "/demo-06/assets/media/img/r-e-6.jpg" },
    { id: 7, title: "Employment Law", img: "/demo-06/assets/media/img/r-e-7.jpg" },
    { id: 8, title: "Executors & Trustees", img: "/demo-06/assets/media/img/r-e-8.jpg" },
  ];

  return (
    <>
      <div id="page-preloader">
        <span className="spinner border-t_second_b border-t_prim_a"></span>
      </div>

      <AlegadaHeader />

      <AlegadaPageBanner title="Practice Areas 1" subtitle="Licensed & Certified to Practice Law" />

      {/* Section 2 */}
      <section className="section-2 area">
        <div className="container">
          <div className="row" style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
            <div className="col-md-5">
              <img className="area-img img-fluid" src="/demo-06/assets/media/img/women.jpg" alt="women" />
            </div>
            <div className="col-md-7">
              <img className="img-align" src="/demo-06/assets/media/img/logo-p.svg" alt="logo" />
              <div className="line-dashed"></div>
              <div className="section-title">
                International law firm that serves
                <br />
                companies, governments and
                <br />
                financial institutions.
              </div>
              <div className="line-red"></div>
              <p className="section-paragraph space-20">
                Excepting far jeepers exited irrespectiv the fleet food of house oh that in lopsidedly well or ornly abortively as bluntly apart prideful boat excluding goldfish that locked gorgeously abstruse to yikes away for luxury swept hey crud more well some caterpillar much jeez cer tain far held raccoon a much much masterful.
              </p>
              <Link href="/demo-06/contacts" className="read-button get-button">
                Get Started Now
              </Link>
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

      {/* Areas of Expertise */}
      <section className="practice-section-4">
        <div className="section-title-center d-flex justify-content-center flex-column align-items-center">
          <img src="/demo-06/assets/media/img/logo-p.svg" alt="logo-p" />
          <div className="line-dashed"></div>
          <div className="section-title text-center">
            <h2>Areas Of Expertise</h2>
            <h5 className="sub-title">Dedicated &amp; professional team of lawyers</h5>
          </div>
        </div>

        <div className="articles-block">
          <div className="container">
            <div className="row">
              {expertiseItems.slice(0, 4).map((item) => (
                <div key={item.id} className="col-md-3 col-sm-6 col-xs-12">
                  <div className="article-b">
                    <img src={item.img} alt={item.title} className="img-fluid" />
                    <h4>{item.title}</h4>
                    <p>Oversaw but underneath far much luc tively je wail dyna gazelle one wrung a unsads lawyers in cases.</p>
                    <div className="article-a-block d-flex">
                      <span>
                        <Link href="/demo-06/practice-single">Read More</Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="articles-block">
          <div className="container">
            <div className="row">
              {expertiseItems.slice(4, 8).map((item) => (
                <div key={item.id} className="col-md-3 col-sm-6 col-xs-12">
                  <div className="article-b">
                    <img src={item.img} alt={item.title} className="img-fluid" />
                    <h4>{item.title}</h4>
                    <p>Oversaw but underneath far much luc tively je wail dyna gazelle one wrung a unsads lawyers in cases.</p>
                    <div className="article-a-block d-flex">
                      <span>
                        <Link href="/demo-06/practice-single">Read More</Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Section 5 (Callout/Background) */}
      <section className="practice-section-5 animate" style={{ backgroundAttachment: "fixed" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-5 text-white">
              <div className="section-title">
                We solve problems
                <br />
                that are often complex.
              </div>
              <div className="line-red"></div>
              <p className="section-paragraph space-20 text-white-50">
                Without gosh gazelle blankly smug broada the jaguar far jeepers wow the darn okak that and then before froze ullamco laboris nisiut.
              </p>
            </div>
          </div>
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
            <div className="carousel-inner" style={{ textAlign: "center", minHeight: "220px" }}>
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
            <ul className="carousel-indicators" style={{ position: "relative", marginTop: "20px" }}>
              <li className={activeTestimonial === 0 ? "active" : ""} onClick={() => setActiveTestimonial(0)}></li>
              <li className={activeTestimonial === 1 ? "active" : ""} onClick={() => setActiveTestimonial(1)}></li>
              <li className={activeTestimonial === 2 ? "active" : ""} onClick={() => setActiveTestimonial(2)}></li>
            </ul>
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
