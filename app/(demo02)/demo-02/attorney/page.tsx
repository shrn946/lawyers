"use client";
import Link from "next/link";
import LawgneHeader from "@/components/demo02/LawgneHeader";
import LawgneFooter from "@/components/demo02/LawgneFooter";
import PageBanner from "@/components/demo02/PageBanner";

const BASE = "/demo-02";

const attorneys = [
  { img: "team-1.jpg", name: "Steven E. Hames", pos: "Real State Lawyer" },
  { img: "team-2.jpg", name: "Brian M. Crouch", pos: "Family Lawyer" },
  { img: "team-3.jpg", name: "Michael L. Blum", pos: "Drug Lawyer" },
  { img: "team-4.jpg", name: "Steven E. Hames", pos: "Real State Lawyer" },
  { img: "team-1.jpg", name: "Bruce J. Johnson", pos: "Real State Lawyer" },
  { img: "team-2.jpg", name: "Brian M. Crouch", pos: "Family Lawyer" },
  { img: "team-3.jpg", name: "Gary I. Dunaway", pos: "Drug Lawyer" },
  { img: "team-4.jpg", name: "Todd S. Matthew", pos: "Real State Lawyer" },
];

export default function AttorneyPage() {
  return (
    <>
      <div className="preloader"><div className="loader"><img src={`${BASE}/assets/images/loader.png`} alt="loader" /></div></div>
      <LawgneHeader activeMenu="attorneys" />
      <PageBanner title="Attorney" breadcrumbs={[{ label: "Home", href: `${BASE}` }, { label: "Attorney" }]} />

      {/* Team Section */}
      <section className="team-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            {attorneys.map((m, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-sm-12">
                <div className="team-item team-item-one mb-40">
                  <div className="team-img">
                    <img src={`${BASE}/assets/images/team/${m.img}`} alt="Team" />
                    <div className="team-overlay">
                      <div className="team-social">
                        <ul className="social-link">
                          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                          <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="title"><Link href={`${BASE}/attorney-details`}>{m.name}</Link></h3>
                    <span className="position">{m.pos}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <div className="counter-area blue-bg pt-130 pb-90">
        <div className="container">
          <div className="row">
            {[
              { icon: "fal fa-users", count: 315, label: "Project Done" },
              { icon: "fal fa-briefcase-medical", count: 1452, label: "Successful Cases" },
              { icon: "fal fa-diploma", count: 952, label: "Expert Lawyers" },
              { icon: "fal fa-trophy-alt", count: 415, label: "Awards Wining" },
            ].map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-sm-12">
                <div className="counter-item counter-item-four d-flex mb-40">
                  <div className="icon"><i className={item.icon}></i></div>
                  <div className="content">
                    <h2><span className="count">{item.count}</span></h2>
                    <p>{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skill Section */}
      <section className="skill-area skills-area-bg pt-130 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="skill-img pr-25 mb-80">
                <img src={`${BASE}/assets/images/features/skill-1.jpg`} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="skill-content-box skill-content-box-one mb-90">
                <div className="section-title section-title-left mb-25">
                  <span className="sub-title">Who We Are</span>
                  <h2>Popular Skills</h2>
                </div>
                <p>Perspiciatis unde omnis natus errltate accusa ntiumey doemque laudantium totam remam eaque epsaqaeabillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo emo enimpsam.</p>
                <div className="skill-list">
                  {[
                    { label: "Dedicated Lawyer", percent: 67 },
                    { label: "Dedicated Lawyer", percent: 87 },
                    { label: "Experience Cases", percent: 76 },
                    { label: "Professional Team", percent: 69 },
                  ].map((skill, i) => (
                    <div key={i} className="single-skill">
                      <div className="progress-title">
                        <h5>{skill.label} <span className="float-right">{skill.percent}%</span></h5>
                      </div>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: `${skill.percent}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-area bg-with-overlay bg-with-overlay-two pt-120 pb-120" style={{ backgroundImage: `url(${BASE}/assets/images/bg/cta-bg-2.jpg)` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cta-content-box">
                <span className="sub-title">Get Free Consultations</span>
                <h2>Choose Your Law Firm, Choose The Best Care For Yourself</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="button float-lg-right">
                <Link href={`${BASE}/contact`} className="main-btn filled-btn">Contact Us</Link>
                <Link href={`${BASE}/case-1`} className="main-btn filled-btn">Our project</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LawgneFooter />
      <a href="#" className="back-to-top"><i className="fas fa-angle-up"></i></a>
    </>
  );
}
