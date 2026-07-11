"use client";

import Link from "next/link";
import React from "react";
import { LawmasterHeader } from "@/components/demo05/LawmasterHeader";
import { LawmasterFooter } from "@/components/demo05/LawmasterFooter";
import { LawmasterPageBanner } from "@/components/demo05/LawmasterPageBanner";

export default function LawmasterAboutPage() {
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

        <LawmasterPageBanner
          title="About Us"
          description="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question."
          bannerClass="about-banner"
          breadcrumbs={[
            { label: "home", url: "/demo-05" },
            { label: "About Us" },
          ]}
        />

        {/* About One Section */}
        <div id="aboutone-section" className="aboutone-section container-fluid no-padding blog-page-content skill-section">
          <div className="section-padding"></div>
          <div className="container">
            <div className="section-header">
              <h5>Know Who we are</h5>
              <h3>A genuine people of attorney Lawyers working for the society</h3>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 aboutone-left">
                <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                <p>Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="skill-progress-box">
                  <h3 className="block-title">
                    Civil Law<span data-skill_percent="62" id="skill_type1_count-1">0</span>
                  </h3>
                  <div className="progress">
                    <div className="progress-bar progress-bar-danger" role="progressbar" id="skill_bar1_count-1"></div>
                  </div>
                </div>
                <div className="skill-progress-box">
                  <h3 className="block-title">
                    Criminal law<span data-skill_percent="90" id="skill_type1_count-2">0</span>
                  </h3>
                  <div className="progress">
                    <div className="progress-bar progress-bar-danger" role="progressbar" id="skill_bar1_count-2"></div>
                  </div>
                </div>
                <div className="skill-progress-box">
                  <h3 className="block-title">
                    Industrial Law<span data-skill_percent="75" id="skill_type1_count-3">0</span>
                  </h3>
                  <div className="progress">
                    <div className="progress-bar progress-bar-danger" role="progressbar" id="skill_bar1_count-3"></div>
                  </div>
                </div>
                <div className="skill-progress-box">
                  <h3 className="block-title">
                    Government Issues<span data-skill_percent="50" id="skill_type1_count-4">0</span>
                  </h3>
                  <div className="progress">
                    <div className="progress-bar progress-bar-danger" role="progressbar" id="skill_bar1_count-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-padding"></div>
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

        {/* Partner Section */}
        <div className="container-fluid no-padding partner-section">
          <div className="container">
            <div className="row">
              <div className="client-carousel owl-carousel">
                <div className="client-box">
                  <img src="/demo-05/images/client-logo1.png" alt="client-logo" />
                </div>
                <div className="client-box">
                  <img src="/demo-05/images/client-logo2.png" alt="client-logo" />
                </div>
                <div className="client-box">
                  <img src="/demo-05/images/client-logo3.png" alt="client-logo" />
                </div>
                <div className="client-box">
                  <img src="/demo-05/images/client-logo4.png" alt="client-logo" />
                </div>
                <div className="client-box">
                  <img src="/demo-05/images/client-logo5.png" alt="client-logo" />
                </div>
              </div>
            </div>
          </div>
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
