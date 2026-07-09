"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

const BASE = "/demo-03";

export default function PricingPage() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="Pricing" subtitle="Dedicated legal support specialist" bgImage="images/home/slider-2.jpg" />

      <div className="page-holder custom-page-template page-full fullscreen-page clearfix">
        {/* SECTION 1 */}
        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <span className="heading-subtitle">Pricing Plans</span>
                <h2 className="section-heading-title margin-b16">You can count on us</h2>
                <p>Lorem ipsum dolor sit amet, ut eius periculis eos, eu mea suscipit intellegam. Tota consequuntur cu pro, congue efficiantur eos id. Ius in percipit recusabo. Has ex agam audire, id dicat dolores.</p>
                <p>Vix in erat erant ubique, cum et dicant soluta, postulant mediocrem at mel. Appetere inciderint eloquentiam ne sed. In veri illud erroribus vel, vel ad graeci theophrastus, libris timeam sapientem ex mel. Sed sodales, odio eget adipiscing mattis, sapien purus dapibus felis, sit amet mollis. </p>
                <img className="img-fluid" src={`${BASE}/assets/images/about/founder-sign.jpg`} alt="" width="250" />
              </div>
              <div className="col-lg-5 margin-bm54">
                <img className="img-fluid" src={`${BASE}/assets/images/practice/practice-12.jpg`} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="section-holder">
          <div className="container">
            <div className="row">
              {[
                { name: "Basic", price: "$20" },
                { name: "Standard", price: "$40" },
                { name: "Premium", price: "$60" }
              ].map((plan, i) => (
                <div key={i} className="col-md-4 margin-bm32">
                  <div className="pricing-col text-center" style={{ border: "1px solid #eee", padding: "40px 30px", background: "#fff" }}>
                    <h3 className="margin-b32">{plan.name}</h3>
                    <h2 className="price-title" style={{ fontSize: "42px", color: "#bfa15f", fontWeight: "700" }}>
                      {plan.price}<sup style={{ fontSize: "16px", fontWeight: "normal" }}>/monthly</sup>
                    </h2>
                    <ul className="price-features list-unstyled mt-30 mb-30" style={{ lineHeight: "2.2" }}>
                      <li>Auto Accidents</li>
                      <li>Business Litigation</li>
                      <li>Family Law</li>
                      <li>Tax Disputes</li>
                    </ul>
                    <div className="view-more"><Link href={`${BASE}/contact`}>Learn More</Link></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <LawyersFooter />
      <div className="scrollup"> <a className="scrolltop" href="#"> <i className="fa fa-chevron-up"></i> </a></div>
    </>
  );
}
