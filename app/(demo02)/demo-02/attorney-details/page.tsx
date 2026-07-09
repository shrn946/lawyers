"use client";
import Link from "next/link";
import LawgneHeader from "@/components/demo02/LawgneHeader";
import LawgneFooter from "@/components/demo02/LawgneFooter";
import PageBanner from "@/components/demo02/PageBanner";

const BASE = "/demo-02";

export default function AttorneyDetailsPage() {
  return (
    <>
      <div className="preloader"><div className="loader"><img src={`${BASE}/assets/images/loader.png`} alt="loader" /></div></div>
      <LawgneHeader activeMenu="attorneys" />
      <PageBanner title="Attorney" breadcrumbs={[{ label: "Home", href: `${BASE}` }, { label: "Attorney" }]} />

      {/* Team Details */}
      <section className="team-details-section pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="team-details-img mb-50">
                <img src={`${BASE}/assets/images/team/team-1.jpg`} alt="Attorney" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="team-details-content mb-50">
                <h3>Lawrence S. Perez</h3>
                <span className="position">Family Lawyer</span>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <Link href={`${BASE}/contact`} className="main-btn arrow-btn">Appointment now</Link>
                <div className="team-social mt-30">
                  <ul className="social-link">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <div className="intro-area intro-area-one">
        <div className="container">
          <div className="intro-wrapper bg-with-overlay bg_cover" style={{ backgroundImage: `url(${BASE}/assets/images/bg/video-bg-1.jpg)` }}>
            <div className="video-play">
              <a href="https://www.youtube.com/watch?v=wbnaHgSttVo&t=5s" className="video-popup">
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skill Section */}
      <section className="skill-area skills-area-bg skills-padding-top-one pb-90 light-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
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
            <div className="col-lg-7">
              <div className="skill-img-box pl-50 mb-90">
                <div className="law-icon"><i className="flaticon-auction"></i></div>
                <img src={`${BASE}/assets/images/features/skill-1.jpg`} alt="skill" />
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
