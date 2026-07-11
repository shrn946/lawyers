"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AlegadaHeader } from "@/components/demo06/AlegadaHeader";
import { AlegadaFooter } from "@/components/demo06/AlegadaFooter";
import { AlegadaPageBanner } from "@/components/demo06/AlegadaPageBanner";

export default function AlegadaAboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [evaluationForm, setEvaluationForm] = useState({ name: "", email: "", phone: "", description: "" });
  const [evalSubmitted, setEvalSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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

  return (
    <>
      {/* Loader */}
      <div id="page-preloader">
        <span className="spinner border-t_second_b border-t_prim_a"></span>
      </div>

      <AlegadaHeader />

      <AlegadaPageBanner title="About Alegada" subtitle="Licensed & Certified to Practice Law" />

      {/* Section about s1 */}
      <section className="section-about-s1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="text-block-section">
                <h5>Advanced Legal Expertise Firm</h5>
                <p>
                  Aglada Law Firm is aluted wow bad and sharp but fish direly the raging salam worm but wow ape dear in dear like and Rebuilt melodious in took the loving crud in interbred less gorilla therefore ouch impotently far impala inclusive far as ouch that more wow and unscrupulously much.
                  <br />
                  <br />
                  Chromatic paid some hence in goodness this tonally elephant sor unobtrusie that avaricious that confessed preparatory spontaneous.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-r-2">
                <h5>
                  The principle of Law is lies in the accurate idea manipulation of subtle throughout the series of lawyer cases all around.
                </h5>
                <img src="/demo-06/assets/media/img/kester-harrington.png" alt="kester-harrington" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="block-box">
            <div className="box-1 box-1-2 d-flex flex-md-column flex-lg-row">
              <div className="box-span d-flex box-shadow">
                <div className="box-icon-1">
                  <img src="/demo-06/assets/media/img/icon1.svg" alt="payment" />
                </div>
                <div className="box-text">
                  <div className="box-text-first">Easy &amp; 100% Secure Payment System</div>
                  <div className="box-text-second">Book Your Appointment</div>
                </div>
              </div>
              <div className="box-span d-flex box-shadow">
                <div className="box-icon-2">
                  <img src="/demo-06/assets/media/img/icon2.svg" alt="advice" />
                </div>
                <div className="box-text">
                  <div className="box-text-first">Complete Legal services Firm</div>
                  <div className="box-text-second">Get Free Experts Advice</div>
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
            Agelada Law Agency
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
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
            className="popup-youtube"
          >
            <i className="fas fa-caret-right" style={{ fontSize: "40px", color: "#d12a2a" }}></i>
          </a>
          <h6 className="text-white mt-10">intro video</h6>
        </div>

        {/* Dynamic Video Modal */}
        {isModalOpen && (
          <div className="popup-show" style={{ display: "block" }}>
            <div className="popup-div">
              <div className="close" onClick={() => setIsModalOpen(false)}>
                x
              </div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WQ8megIN768"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
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

      {/* About S2 */}
      <section className="about-s-2">
        <div className="container">
          <div className="img-box d-flex flex-wrap justify-content-between">
            <div className="img-box-item">
              <img src="/demo-06/assets/media/img/in1.jpg" alt="innovative" />
              <h4>Innovative Solutions</h4>
            </div>
            <div className="img-box-item">
              <img src="/demo-06/assets/media/img/in2.jpg" alt="advisors" />
              <h4>Experienced Advisors</h4>
            </div>
            <div className="img-box-item">
              <img src="/demo-06/assets/media/img/in3.jpg" alt="global" />
              <h4>Smarter &amp; Global</h4>
            </div>
          </div>
        </div>
      </section>

      {/* About S3 */}
      <section>
        <div className="container">
          <div className="number-box">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="number-box-item line-right">
                  <h4>99.9%</h4>
                  <h5>Avg. Cases Won</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="number-box-item line-right">
                  <h4>24/7</h4>
                  <h5>Support Available</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="number-box-item line-right">
                  <h4>35,000</h4>
                  <h5>Cases Solved in 2018</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="number-box-item">
                  <h4>60+</h4>
                  <h5>Dedicated Lawyers</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                          id="description"
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
