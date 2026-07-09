"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

const BASE = "/demo-03";

export default function AboutUsPage() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="About Us" subtitle="in business since 1970" bgImage="images/home/slider-3.jpg" />

      <div className="page-holder custom-page-template page-full fullscreen-page clearfix">
        {/* SECTION 1 */}
        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 margin-bm54">
                <img className="img-fluid" src={`${BASE}/assets/images/home/about-1.jpg`} alt="" />
              </div>
              <div className="col-lg-7">
                <span className="heading-subtitle">30 Years of Experience</span>
                <h2 className="section-heading-title margin-b16">We provide solutions to your legal problems</h2>
                <p>Lorem ipsum dolor sit amet, ut eius periculis eos, eu mea suscipit intellegam. Tota consequuntur cu pro, congue efficiantur eos id. Ius in percipit recusabo. Has ex agam audire, id dicat dolores.</p>
                <p>Vix in erat erant ubique, cum et dicant soluta, postulant mediocrem at mel. Appetere inciderint eloquentiam ne sed. In veri illud erroribus vel, vel ad graeci theophrastus, libris timeam sapientem ex mel. Sed sodales, odio eget adipiscing mattis, sapien purus dapibus felis, sit amet mollis velit dolor eu lorem. Vivamus condimentum nunc a quam lobortis tempus.</p>
                <img className="img-fluid" src={`${BASE}/assets/images/about/founder-sign.jpg`} alt="" width="250" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="section-holder" style={{ background: "#f9f9f9", padding: "80px 0" }}>
          <div className="container">
            <div className="row">
              {[
                { title: "Our Mission", desc: "Vix in erat erant ubique, cum et dicant soluta, postulant mediocrem at mel. Appetere inciderint eloquentiam ne sed. In veri illud erroribus vel, vel ad graeci theophrastus." },
                { title: "Our Strategy", desc: "Vix in erat erant ubique, cum et dicant soluta, postulant mediocrem at mel. Appetere inciderint eloquentiam ne sed. In veri illud erroribus vel, vel ad graeci theophrastus." },
                { title: "Our Vision", desc: "Vix in erat erant ubique, cum et dicant soluta, postulant mediocrem at mel. Appetere inciderint eloquentiam ne sed. In veri illud erroribus vel, vel ad graeci theophrastus." }
              ].map((item, i) => (
                <div key={i} className="col-lg-4 mb-30">
                  <div className="p-30 bg-white border rounded">
                    <h3 className="mb-15" style={{ fontSize: "20px" }}>{item.title}</h3>
                    <p className="text-muted">{item.desc}</p>
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
