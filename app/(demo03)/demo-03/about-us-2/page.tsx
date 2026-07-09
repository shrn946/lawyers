"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

const BASE = "/demo-03";

export default function AboutUs2Page() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="About Us 2" subtitle="We offer the best legal services" bgImage="images/home/slider-3.jpg" />

      <div className="page-holder custom-page-template page-full fullscreen-page clearfix">
        {/* SECTION 1 */}
        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 alignc text-center">
                <span className="heading-subtitle">Legal Services</span>
                <h2 className="section-heading-title">Our Promise to You</h2>
              </div>
            </div>
            <div className="row alignc text-center">
              {[
                { img: "about-feature1.jpg", name: "Excellence" },
                { img: "about-feature3.jpg", name: "Commitment" },
                { img: "about-feature2.jpg", name: "Professionalism" }
              ].map((feat, i) => (
                <div key={i} className="col-md-4 margin-bm32">
                  <img className="img-fluid margin-b32" src={`${BASE}/assets/images/home/${feat.img}`} alt="" style={{ marginBottom: "20px" }} />
                  <h4 className="margin-b16">{feat.name}</h4>
                  <p className="text-muted">Sea ex ipsum dictas pertinacia, luptatum verterem sit ut. No sea noster dissentias. Nostro minimum ius te. No mea eros mutat saperet, vix te fastidii scribentur.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="section-holder section-about22">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <span className="heading-subtitle">30 Years of Experience</span>
                <h2 className="section-heading-title margin-b16">We provide solutions to your legal problems</h2>
                <p>Lorem ipsum dolor sit amet, ut eius periculis eos, eu mea suscipit intellegam. Tota consequuntur cu pro, congue efficiantur eos id. Ius in percipit recusabo. Has ex agam audire, id dicat dolores.</p>
                <p>Vix in erat erant ubique, cum et dicant soluta, postulant mediocrem at mel. Appetere inciderint eloquentiam ne sed. In veri illud erroribus vel, vel ad graeci theophrastus, libris timeam sapientem ex mel. Sed sodales, odio eget adipiscing mattis, sapien purus dapibus felis, sit amet mollis velit dolor eu lorem.</p>
              </div>
              <div className="col-lg-5 margin-bm54">
                <img className="img-fluid" src={`${BASE}/assets/images/home/about-1.jpg`} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 alignc text-center">
                <span className="heading-subtitle">Our Attorneys</span>
                <h2 className="section-heading-title">Professional Team</h2>
              </div>
            </div>
            <div className="row">
              {[
                { img: "team-4.jpg", name: "Sarah Barrett", pos: "Founder" },
                { img: "team-6.jpg", name: "Mike Holmes", pos: "Senior Partner" },
                { img: "team-1.jpg", name: "Teresa Perkins", pos: "Lawyer" },
              ].map((m, i) => (
                <div key={i} className="col-lg-4">
                  <div className="lawyer-holder lawyer-3col text-center">
                    <Link href={`${BASE}/attorneys-single-page`}><img src={`${BASE}/assets/images/team/${m.img}`} className="img-fluid" alt="" /></Link>
                    <div className="lawyer-position" style={{ marginTop: "15px", color: "#bfa15f" }}>{m.pos}</div>
                    <h2 className="lawyer-title" style={{ fontSize: "22px", margin: "10px 0" }}><Link href={`${BASE}/attorneys-single-page`}>{m.name}</Link></h2>
                    <div className="lawyer-excerpt text-muted mb-15">Integer imperdiet purus urna, a volutpat turpis feugiat vitae. Proin molestie in metus eu volutpat.</div>
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
