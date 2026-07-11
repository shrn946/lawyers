"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LawmasterHeader } from "@/components/demo05/LawmasterHeader";
import { LawmasterFooter } from "@/components/demo05/LawmasterFooter";
import { LawmasterPageBanner } from "@/components/demo05/LawmasterPageBanner";

export default function LawmasterServicesPage() {
  const [activeTab, setActiveTab] = useState("divorce-law");

  const tabs = [
    { id: "insurance-claim-issue", label: "Insurance Claim Issue" },
    { id: "divorce-law", label: "Divorce Law" },
    { id: "bail-assistance", label: "Bail Assistance" },
    { id: "adoption-guidance", label: "Adoption Guidance" },
    { id: "legal-support", label: "Legal Support" },
    { id: "property-assesment", label: "Property Assesment" },
    { id: "guidance-of-our-attorney", label: "Guidance of Our Attorney" },
  ];

  const tabContents: Record<string, { title: string; leftText: string[]; bullets: string[] }> = {
    "insurance-claim-issue": {
      title: "Our guidance on Insurance Claim Issue",
      leftText: [
        "It's time to meet the Muppets on the Muppet Show tonight. No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as",
        "The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless crew the Minnow would",
      ],
      bullets: [
        "Straight ahead and on the track back",
        "The weather started getting rough",
        "Their house is a museum where came",
        "Maybe you and me were never to be",
        "Flipper lives in a world full of wonder",
        "I never thought I could feel so free",
      ],
    },
    "divorce-law": {
      title: "Our guidance on divorce law",
      leftText: [
        "It's time to meet the Muppets on the Muppet Show tonight. No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as",
        "The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless crew the Minnow would",
      ],
      bullets: [
        "Straight ahead and on the track back",
        "The weather started getting rough",
        "Their house is a museum where came",
        "Maybe you and me were never to be",
        "Flipper lives in a world full of wonder",
        "I never thought I could feel so free",
      ],
    },
    "bail-assistance": {
      title: "Our guidance on Bail Assistance",
      leftText: [
        "It's time to meet the Muppets on the Muppet Show tonight. No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as",
        "The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless crew the Minnow would",
      ],
      bullets: [
        "Straight ahead and on the track back",
        "The weather started getting rough",
        "Their house is a museum where came",
        "Maybe you and me were never to be",
        "Flipper lives in a world full of wonder",
        "I never thought I could feel so free",
      ],
    },
    "adoption-guidance": {
      title: "Our guidance on Adoption Guidance",
      leftText: [
        "It's time to meet the Muppets on the Muppet Show tonight. No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as",
        "The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless crew the Minnow would",
      ],
      bullets: [
        "Straight ahead and on the track back",
        "The weather started getting rough",
        "Their house is a museum where came",
        "Maybe you and me were never to be",
        "Flipper lives in a world full of wonder",
        "I never thought I could feel so free",
      ],
    },
    "legal-support": {
      title: "Our guidance on Legal Support",
      leftText: [
        "It's time to meet the Muppets on the Muppet Show tonight. No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as",
        "The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless crew the Minnow would",
      ],
      bullets: [
        "Straight ahead and on the track back",
        "The weather started getting rough",
        "Their house is a museum where came",
        "Maybe you and me were never to be",
        "Flipper lives in a world full of wonder",
        "I never thought I could feel so free",
      ],
    },
    "property-assesment": {
      title: "Our guidance on Property Assesment",
      leftText: [
        "It's time to meet the Muppets on the Muppet Show tonight. No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as",
        "The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless crew the Minnow would",
      ],
      bullets: [
        "Straight ahead and on the track back",
        "The weather started getting rough",
        "Their house is a museum where came",
        "Maybe you and me were never to be",
        "Flipper lives in a world full of wonder",
        "I never thought I could feel so free",
      ],
    },
    "guidance-of-our-attorney": {
      title: "Our guidance on Guidance Of our Attorney",
      leftText: [
        "It's time to meet the Muppets on the Muppet Show tonight. No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as",
        "The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless crew the Minnow would",
      ],
      bullets: [
        "Straight ahead and on the track back",
        "The weather started getting rough",
        "Their house is a museum where came",
        "Maybe you and me were never to be",
        "Flipper lives in a world full of wonder",
        "I never thought I could feel so free",
      ],
    },
  };

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
          title="Our Services"
          description="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question."
          bannerClass="service-banner"
          breadcrumbs={[
            { label: "home", url: "/demo-05" },
            { label: "Services" },
          ]}
        />

        {/* Service Section */}
        <div id="service-section" className="service-section service-center container-fluid no-padding">
          <div className="section-padding"></div>
          <div className="row">
            <div className="container">
              <div className="section-header">
                <h5>We give the best</h5>
                <h3>We offer many services regarding your legal needs</h3>
              </div>
            </div>
            <div className="container">
              <div className="col-md-4 col-sm-4 service-block">
                <img src="/demo-05/images/icon/service-ic-1.png" alt="service-icon" />
                <h3>Corporate Law</h3>
                <p>The new common language will be more simple and regular than the existing European uages. It will be</p>
              </div>
              <div className="col-md-4 col-sm-4 service-block">
                <img src="/demo-05/images/icon/service-ic-2.png" alt="service-icon" />
                <h3>Family Law</h3>
                <p>The new common language will be more simple and regular than the existing European uages. It will be</p>
              </div>
              <div className="col-md-4 col-sm-4 service-block">
                <img src="/demo-05/images/icon/service-ic-3.png" alt="service-icon" />
                <h3>investment Law</h3>
                <p>The new common language will be more simple and regular than the existing European uages. It will be</p>
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

        {/* Guidance Section */}
        <div id="guidance-section" className="container-fluid no-padding guidance-section">
          <div className="section-padding"></div>
          <div className="container">
            <div className="section-header">
              <h3>We have a lot of experience and don't have to do a bucket of research</h3>
            </div>
            <div className="guidance-tabpanel">
              {/* Nav tabs */}
              <ul className="nav nav-tabs" role="tablist">
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    role="presentation"
                    className={activeTab === tab.id ? "active" : ""}
                  >
                    <a
                      href={`#${tab.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(tab.id);
                      }}
                    >
                      {tab.label}
                    </a>
                  </li>
                ))}
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id={activeTab}>
                  <div className="col-md-5 tab-left no-padding">
                    <h3>{tabContents[activeTab]?.title}</h3>
                    {tabContents[activeTab]?.leftText.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                  <div className="col-md-7 tab-right no-padding">
                    <ul>
                      {tabContents[activeTab]?.bullets.map((bullet, idx) => (
                        <li key={idx}>
                          <a href="#" onClick={(e) => e.preventDefault()}>{bullet}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-padding"></div>
        </div>

        {/* Achievement Section */}
        <div id="achivement-section" className="container-fluid no-padding achivement-section counter-section achivements-bg">
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

        <LawmasterFooter />

        {/* Back To Top */}
        <a id="back-to-top" href="#" className="back-to-top" style={{ display: "none" }}>
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </>
  );
}
