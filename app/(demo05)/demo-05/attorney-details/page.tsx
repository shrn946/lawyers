"use client";

import Link from "next/link";
import React from "react";
import { LawmasterHeader } from "@/components/demo05/LawmasterHeader";
import { LawmasterFooter } from "@/components/demo05/LawmasterFooter";
import { LawmasterPageBanner } from "@/components/demo05/LawmasterPageBanner";

export default function LawmasterAttorneyDetailsPage() {
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
          title="Team Member"
          description="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question."
          bannerClass="attorney-details-banner"
          breadcrumbs={[
            { label: "home", url: "/demo-05" },
            { label: "Our Team", url: "/demo-05/attorney" },
            { label: "Team Member" },
          ]}
        />

        {/* Attorney Details Section */}
        <div id="attorney-details-section" className="container-fluid no-padding attorney-details-section">
          <div className="container">
            <div className="row" style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
              <div className="col-md-7 col-sm-7 col-xs-12">
                <div className="attorney-team-details">
                  <h3>Stephen Smith LLB.,</h3>
                  <span>Senior Attorney</span>
                  <p>Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Come and dance on our floor. Take a step that is new. We've a loveable space that needs your face threes company too.</p>
                  <p>A man is born he's a man of means. Then along come two they got nothin' but their jeans. Wouldn't you like to get away.</p>
                  <div className="attorny-socials">
                    <ul>
                      <li>
                        <a href="#" title="Facebook">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Twitter">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Google+">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Linkedin">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Tumblr">
                          <i className="fa fa-tumblr"></i>
                        </a>
                      </li>
                    </ul>
                    <Link href="/demo-05/contact-us" title="consult now!">
                      Consult now!
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-5 col-xs-12 attorney-team-photo">
                <img src="/demo-05/images/attorney-detail1.png" alt="team" className="img-responsive" />
              </div>
            </div>
          </div>

          {/* Practice Section */}
          <div id="practice-section" className="container-fluid no-padding practice-section">
            <div className="section-padding"></div>
            <div className="container">
              <div className="section-header">
                <h5>Attorney’s Practice Area</h5>
                <h3>Quality. Responsiveness. Results.</h3>
              </div>
              <div className="row service-block-section">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6 service-block">
                      <img src="/demo-05/images/icon/service-ic-1.png" alt="service-icon" />
                      <h3>Corporate Law</h3>
                      <p>The new common language will be more simple and regular than the existing European uages. It will be</p>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6 service-block">
                      <img src="/demo-05/images/icon/service-ic-2.png" alt="service-icon" />
                      <h3>Family Law</h3>
                      <p>The new common language will be more simple and regular than the existing European uages. It will be</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6 service-block">
                      <img src="/demo-05/images/icon/service-ic-3.png" alt="service-icon" />
                      <h3>investment Law</h3>
                      <p>The new common language will be more simple and regular than the existing European uages. It will be</p>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6 service-block">
                      <img src="/demo-05/images/icon/service-ic-4.png" alt="service-icon" />
                      <h3>Corporate Law</h3>
                      <p>The new common language will be more simple and regular than the existing European uages. It will be</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 skill-section">
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
                      Government Issues<span data-skill_percent="80" id="skill_type1_count-4">0</span>
                    </h3>
                    <div className="progress">
                      <div className="progress-bar progress-bar-danger" role="progressbar" id="skill_bar1_count-4"></div>
                    </div>
                  </div>
                  <div className="skill-progress-box">
                    <h3 className="block-title">
                      Legal Advisory<span data-skill_percent="70" id="skill_type1_count-5">0</span>
                    </h3>
                    <div className="progress">
                      <div className="progress-bar progress-bar-danger" role="progressbar" id="skill_bar1_count-5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-padding"></div>

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
