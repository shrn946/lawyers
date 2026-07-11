"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AlegadaHeader } from "@/components/demo06/AlegadaHeader";
import { AlegadaFooter } from "@/components/demo06/AlegadaFooter";
import { AlegadaPageBanner } from "@/components/demo06/AlegadaPageBanner";

export default function AlegadaPracticeAreas2Page() {
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

  const practiceItems = [
    { id: 1, title: "Insurance Matters", img: "/demo-06/assets/media/img/p-s-9.png" },
    { id: 2, title: "Real Estate Law", img: "/demo-06/assets/media/img/p-s-8.png" },
    { id: 3, title: "Dispute Resolution", img: "/demo-06/assets/media/img/p-s-7.png" },
    { id: 4, title: "Domestic Violence", img: "/demo-06/assets/media/img/p-s-6.png" },
    { id: 5, title: "Employment Law", img: "/demo-06/assets/media/img/p-s-5.png" },
    { id: 6, title: "Medical Negligence", img: "/demo-06/assets/media/img/p-s-4.png" },
    { id: 7, title: "Private Wealth", img: "/demo-06/assets/media/img/p-s-3.png" },
    { id: 8, title: "Drug Offences", img: "/demo-06/assets/media/img/p-s-2.png" },
    { id: 9, title: "Executors & Trustees", img: "/demo-06/assets/media/img/p-s-1.png" },
  ];

  return (
    <>
      <div id="page-preloader">
        <span className="spinner border-t_second_b border-t_prim_a"></span>
      </div>

      <AlegadaHeader />

      <AlegadaPageBanner title="Practice Areas 2" subtitle="Licensed & Certified to Practice Law" />

      {/* Section 2 */}
      <section className="section-2 pb-0">
        <div className="container">
          <div className="row" style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
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
            <div className="col-md-4 text-section-2">
              <span>A</span>
              <p>
                legada but broadcast the jaguar far jeepers wow darn kookaburra before that thus and then before parrot and gosh withdrew less a darn overheard foolish ran forward some drink. Atm less more past this free henc ecru immodest less husky iguana unselfish.
              </p>
            </div>
            <div className="col-md-5 text-section-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit eiusmod tempor incididunt utm labore et dolore magna enim ad minim veniam, quis nostrud exercitation ullam nisi ut aliquip duis aute irure dolys comprehensive fero usly returned much oyster fixedly less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Section 3 */}
      <section className="practice-section-3">
        <div className="container">
          <div className="row">
            {practiceItems.slice(0, 3).map((item) => (
              <div key={item.id} className="col-lg-4 col-md-12 col-sm-12">
                <div className="p-block-3">
                  <img src={item.img} alt={item.title} className="img-fluid" />
                  <div className="p-block-text d-flex align-items-center justify-content-center flex-column">
                    <h5>{item.title}</h5>
                    <span>
                      <Link href="/demo-06/practice-single">Read More</Link>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row space-30">
            {practiceItems.slice(3, 6).map((item) => (
              <div key={item.id} className="col-lg-4 col-md-12 col-sm-12">
                <div className="p-block-3">
                  <img src={item.img} alt={item.title} className="img-fluid" />
                  <div className="p-block-text d-flex align-items-center justify-content-center flex-column">
                    <h5>{item.title}</h5>
                    <span>
                      <Link href="/demo-06/practice-single">Read More</Link>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row space-30">
            {practiceItems.slice(6, 9).map((item) => (
              <div key={item.id} className="col-lg-4 col-md-12 col-sm-12">
                <div className="p-block-3">
                  <img src={item.img} alt={item.title} className="img-fluid" />
                  <div className="p-block-text d-flex align-items-center justify-content-center flex-column">
                    <h5>{item.title}</h5>
                    <span>
                      <Link href="/demo-06/practice-single">Read More</Link>
                    </span>
                  </div>
                </div>
              </div>
            ))}
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
