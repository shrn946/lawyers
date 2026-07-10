"use client";

import React from "react";
import Link from "next/link";
import { LawfinityHeader } from "./LawfinityHeader";

interface LawfinityPageBannerProps {
  title: string;
  description?: string;
  currentPageName: string;
}

export function LawfinityPageBanner({
  title,
  description = "Dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur sint occaecat non sunt in mollit anim laborum.",
  currentPageName,
}: LawfinityPageBannerProps) {
  return (
    <div className="sub_banner position-relative">
      <figure className="banner-rightimage image mb-0">
        <img
          src="/demo-04/assets/images/banner-rightimage.png"
          alt="right banner graphic"
          className="img-fluid"
        />
      </figure>
      <figure className="banner-leftimage image mb-0">
        <img
          src="/demo-04/assets/images/banner-leftimage.png"
          alt="left banner graphic"
          className="img-fluid"
        />
      </figure>
      
      <LawfinityHeader />

      {/* Sub Banner Section */}
      <section className="sub_banner_con position-relative">
        <div className="container position-relative">
          <div className="row">
            <div className="col-12">
              <div className="sub_banner_content" data-aos="fade-up">
                <h1 className="text-white">{title}</h1>
                <p className="col-xl-7 col-lg-9 mx-auto text-white text-size-16">
                  {description}
                </p>
                <div className="box">
                  <Link href="/demo-04" className="text-decoration-none">
                    <span className="mb-0">Home</span>
                  </Link>
                  <i className="arrow fa-solid fa-arrow-right"></i>
                  <span className="mb-0 box_span">{currentPageName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LawfinityPageBanner;
