"use client";

import Link from "next/link";
import React from "react";
import { LawmasterHeader } from "@/components/demo05/LawmasterHeader";
import { LawmasterFooter } from "@/components/demo05/LawmasterFooter";
import { LawmasterPageBanner } from "@/components/demo05/LawmasterPageBanner";

export default function LawmasterAttorneyPage() {
  const attorneys = [
    {
      id: 1,
      name: "Stephen Smith LLB.,",
      role: "Senior Attorney",
      image: "/demo-05/images/attorney1.jpg",
      desc: "The European languages are members of the same family their separate.",
      skills: [
        { name: "Civil Law", percent: 62 },
        { name: "Criminal law", percent: 90 },
        { name: "Industrial Law", percent: 75 },
        { name: "Government Issues", percent: 50 },
      ],
    },
    {
      id: 2,
      name: "Robert Steve LLB.,",
      role: "Defence Attorney",
      image: "/demo-05/images/attorney2.jpg",
      desc: "The European languages are members of the same family their separate.",
      skills: [
        { name: "Civil Law", percent: 78 },
        { name: "Criminal law", percent: 95 },
        { name: "Industrial Law", percent: 70 },
        { name: "Government Issues", percent: 80 },
      ],
    },
    {
      id: 3,
      name: "Alwin Stark LLB.,",
      role: "Legal Advisor",
      image: "/demo-05/images/attorney3.jpg",
      desc: "The European languages are members of the same family their separate.",
      skills: [
        { name: "Civil Law", percent: 70 },
        { name: "Criminal law", percent: 80 },
        { name: "Industrial Law", percent: 65 },
        { name: "Government Issues", percent: 85 },
      ],
    },
    {
      id: 4,
      name: "Larson Flintop LLB.,",
      role: "Health Division Attorney",
      image: "/demo-05/images/attorney4.jpg",
      desc: "The European languages are members of the same family their separate.",
      skills: [
        { name: "Civil Law", percent: 82 },
        { name: "Criminal law", percent: 70 },
        { name: "Industrial Law", percent: 90 },
        { name: "Government Issues", percent: 50 },
      ],
    },
    {
      id: 5,
      name: "Clen Marcus LLB.,",
      role: "Civil Law",
      image: "/demo-05/images/attorney5.jpg",
      desc: "The European languages are members of the same family their separate.",
      skills: [
        { name: "Civil Law", percent: 90 },
        { name: "Criminal law", percent: 65 },
        { name: "Industrial Law", percent: 82 },
        { name: "Government Issues", percent: 80 },
      ],
    },
    {
      id: 6,
      name: "Andrew Smith LLB.,",
      role: "General Law",
      image: "/demo-05/images/attorney6.jpg",
      desc: "The European languages are members of the same family their separate.",
      skills: [
        { name: "Civil Law", percent: 62 },
        { name: "Criminal law", percent: 80 },
        { name: "Industrial Law", percent: 90 },
        { name: "Government Issues", percent: 76 },
      ],
    },
  ];

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
          title="Attorney’s Team"
          description="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question."
          bannerClass="attorney-banner"
          breadcrumbs={[
            { label: "home", url: "/demo-05" },
            { label: "Our Team" },
          ]}
        />

        {/* Attorney Section */}
        <div id="attorney-section" className="container-fluid no-padding attorney-section blog-page-content">
          <div className="section-padding"></div>
          <div className="container">
            <div className="section-header">
              <h5>Our skilled Attorneys</h5>
              <h3>Briefly Speaking, We’re the Best</h3>
            </div>
            <div className="row">
              {attorneys.map((attorney, attIdx) => {
                const baseIdx = attIdx * 4;
                return (
                  <div key={attorney.id} className="attorney-block">
                    <div className="col-md-6 col-sm-6 col-xs-12 attorney-left">
                      <div className="col-md-6 col-sm-6 col-xs-6 attorney-team-photo no-padding">
                        <img src={attorney.image} alt={attorney.name} />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6 attorney-team-details">
                        <h3>{attorney.name}</h3>
                        <span>{attorney.role}</span>
                        <p>{attorney.desc}</p>
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
                        </ul>
                        <Link href="/demo-05/attorney-details" title="Contact Now">
                          Contact Now
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 attorney-right skill-section">
                      {attorney.skills.map((skill, sIdx) => {
                        const countId = baseIdx + sIdx + 1;
                        return (
                          <div key={sIdx} className="skill-progress-box">
                            <h3 className="block-title">
                              {skill.name}
                              <span
                                data-skill_percent={skill.percent}
                                id={`skill_type1_count-${countId}`}
                              >
                                0
                              </span>
                            </h3>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-danger"
                                role="progressbar"
                                id={`skill_bar1_count-${countId}`}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Partner Section */}
            <div className="container-fluid no-padding partner-section" style={{ marginTop: "40px" }}>
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
