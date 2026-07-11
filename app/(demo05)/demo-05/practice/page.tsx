"use client";

import React, { useState } from "react";
import { LawmasterHeader } from "@/components/demo05/LawmasterHeader";
import { LawmasterFooter } from "@/components/demo05/LawmasterFooter";
import { LawmasterPageBanner } from "@/components/demo05/LawmasterPageBanner";

export default function LawmasterPracticePage() {
  const [filter, setFilter] = useState("*");

  const items = [
    {
      id: 1,
      category: "criminal-law",
      title: "Industry",
      subtitle: "Copyrights Assistance",
      image: "/demo-05/images/practice-img1.jpg",
    },
    {
      id: 2,
      category: "civil-law legal-counselling",
      title: "Industry",
      subtitle: "Copyrights Assistance",
      image: "/demo-05/images/practice-img2.jpg",
    },
    {
      id: 3,
      category: "insurance-claim",
      title: "Industry",
      subtitle: "Copyrights Assistance",
      image: "/demo-05/images/practice-img3.jpg",
    },
    {
      id: 4,
      category: "criminal-law legal-counselling",
      title: "Industry",
      subtitle: "Copyrights Assistance",
      image: "/demo-05/images/practice-img4.jpg",
    },
    {
      id: 5,
      category: "civil-law",
      title: "Industry",
      subtitle: "Copyrights Assistance",
      image: "/demo-05/images/practice-img5.jpg",
    },
    {
      id: 6,
      category: "insurance-claim legal-counselling",
      title: "Industry",
      subtitle: "Copyrights Assistance",
      image: "/demo-05/images/practice-img6.jpg",
    },
    {
      id: 7,
      category: "criminal-law",
      title: "Industry",
      subtitle: "Copyrights Assistance",
      image: "/demo-05/images/practice-img7.jpg",
    },
    {
      id: 8,
      category: "civil-law",
      title: "Industry",
      subtitle: "Copyrights Assistance",
      image: "/demo-05/images/practice-img8.jpg",
    },
    {
      id: 9,
      category: "insurance-claim legal-counselling",
      title: "Industry",
      subtitle: "Copyrights Assistance",
      image: "/demo-05/images/practice-img9.jpg",
    },
  ];

  const filteredItems = items.filter((item) => {
    if (filter === "*") return true;
    return item.category.includes(filter);
  });

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
          title="Gallery"
          description="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question."
          bannerClass="about-banner"
          breadcrumbs={[
            { label: "home", url: "/demo-05" },
            { label: "Gallery" },
          ]}
        />

        {/* Practice Section */}
        <div id="gallery-section" className="practice-section container-fluid no-padding">
          <div className="section-padding"></div>
          <div className="container">
            <div className="row">
              {/* Portfolio Filters */}
              <ul id="filters" className="portfolio-categories col-md-12 col-sm-12 col-xs-12 no-padding">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter("*");
                    }}
                    className={filter === "*" ? "active" : ""}
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter("criminal-law");
                    }}
                    className={filter === "criminal-law" ? "active" : ""}
                  >
                    Criminal Law
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter("civil-law");
                    }}
                    className={filter === "civil-law" ? "active" : ""}
                  >
                    Civil Law
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter("insurance-claim");
                    }}
                    className={filter === "insurance-claim" ? "active" : ""}
                  >
                    Insurance Claim
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter("legal-counselling");
                    }}
                    className={filter === "legal-counselling" ? "active" : ""}
                  >
                    Legal Counselling
                  </a>
                </li>
              </ul>
              {/* / Portfolio Filters */}

              <div className="col-md-12 col-sm-12 col-xs-12 no-padding">
                <div id="portfolio" style={{ display: "flex", flexWrap: "wrap" }}>
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className={`portfolio-item col-md-4 col-sm-6 col-xs-12`}
                      style={{ transition: "all 0.5s ease", marginBottom: "30px" }}
                    >
                      <div style={{ position: "relative", overflow: "hidden" }}>
                        <img
                          src={item.image}
                          alt={item.subtitle}
                          className="img-responsive"
                          style={{ width: "100%", height: "auto" }}
                        />
                        <div className="portfolio-item-hover">
                          <h3>{item.title}</h3>
                          <h4>{item.subtitle}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
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
