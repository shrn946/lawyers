"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AlegadaHeader } from "@/components/demo06/AlegadaHeader";
import { AlegadaFooter } from "@/components/demo06/AlegadaFooter";
import { AlegadaPageBanner } from "@/components/demo06/AlegadaPageBanner";

export default function AlegadaPracticeSinglePage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <div id="page-preloader">
        <span className="spinner border-t_second_b border-t_prim_a"></span>
      </div>

      <AlegadaHeader />

      <AlegadaPageBanner title="Practice Single" subtitle="Licensed & Certified to Practice Law" />

      {/* Article Wrap */}
      <section className="article-wrap">
        <div className="container">
          <div className="row">
            {/* Left content */}
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="content-wrap practice-single">
                <img src="/demo-06/assets/media/img/pr1.jpg" alt="practice-main" className="img-fluid mb-20" />
                <div className="content-text">
                  <h4 className="font-head">Practice Areas</h4>
                  <div className="line-red-2 pr-line"></div>
                  <h3 className="font-head-it">We’re committed to success &amp; genuine provider of legal Services.</h3>
                  <p className="par">
                    Without gosh gazelle blankly smug broada the jaguar far jeepers wow the darn lokak that and then before froze ullac laboris nisi ut aliquip aute irure dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedo eiusmod tempor incididunt utm labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comd consequat. Duis aute irure dolor in reprehenderit in voluptate.
                    <br />
                    <br />
                    Ese cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt culpa qui officia deserut mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium totm rem aperiam, eaque ipsa quae ab illo inventore veritatiset quasi architecto beatae vitae dicta sunt explicab. Nemo enim ipsac voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
                  </p>
                  <div className="row mt-30 mb-30" style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                    <div className="col-md-6">
                      <img className="par-img img-fluid" src="/demo-06/assets/media/img/pr2.png" alt="includes" />
                    </div>
                    <div className="col-md-6">
                      <h4 className="par-head-h4">This Service Includes</h4>
                      <p className="par-p">
                        Parrot and gosh withdrew less a darn overheard foolish ran forward some drink. Atm less more past.
                      </p>
                      <div className="par-list">
                        <ul className="list-left">
                          <li>Innovative Law Solutions with Legal Notices</li>
                          <li>Fair Business Climate &amp; Protection of Properties</li>
                          <li>Experienced Advisors &amp; Law Assessments</li>
                          <li>Smarter Global Service with Discounted Prices</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="par-p2">
                    Eos qui ratione voluptatem sequi nesciunt neque porro quisquam estaz, qui dolorem ipsum quia dolor sit amet dolore conset adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.
                  </p>

                  <h4 className="par-head-h4 mt-40">Solutions We Provide</h4>
                  <div className="accordion-wrap">
                    <div className="accordion" id="accordionExample">
                      {/* Card 1 */}
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <button
                              className={`btn btn-link ${activeAccordion === 1 ? "" : "collapsed"}`}
                              type="button"
                              onClick={() => toggleAccordion(1)}
                            >
                              Best resolution is achieved
                            </button>
                          </h5>
                        </div>
                        <div id="collapseOne" className={`collapse ${activeAccordion === 1 ? "show" : ""}`}>
                          <div className="card-body">
                            Fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit anim id labor Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque.
                          </div>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <h5 className="mb-0">
                            <button
                              className={`btn btn-link ${activeAccordion === 2 ? "" : "collapsed"}`}
                              type="button"
                              onClick={() => toggleAccordion(2)}
                            >
                              Collapsible Group Item #2
                            </button>
                          </h5>
                        </div>
                        <div id="collapseTwo" className={`collapse ${activeAccordion === 2 ? "show" : ""}`}>
                          <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                          </div>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <h5 className="mb-0">
                            <button
                              className={`btn btn-link ${activeAccordion === 3 ? "" : "collapsed"}`}
                              type="button"
                              onClick={() => toggleAccordion(3)}
                            >
                              Collapsible Group Item #3
                            </button>
                          </h5>
                        </div>
                        <div id="collapseThree" className={`collapse ${activeAccordion === 3 ? "show" : ""}`}>
                          <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team */}
                <h4 className="par-head-h4 space-team">Solutions We Provide</h4>
                <div className="team-right pr2 justify-content-center d-flex">
                  <div className="team-wrap d-flex flex-wrap justify-content-around w-100" style={{ gap: "20px" }}>
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

            {/* Right sidebar */}
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="blog-wrap-right">
                <div className="category blog-social">
                  <h4 className="font-head">Practice Areas</h4>
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
                  <h4 className="font-head">Related Cases</h4>
                  <div className="line-red-2 normal-line"></div>
                  <div className="latest-posts-item d-flex mb-20">
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
                <div className="blog-social space-60">
                  <h4 className="font-head">Share This</h4>
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
