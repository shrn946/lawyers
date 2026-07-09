"use client";
import Link from "next/link";
import LawgneHeader from "@/components/demo02/LawgneHeader";
import LawgneFooter from "@/components/demo02/LawgneFooter";
import PageBanner from "@/components/demo02/PageBanner";

const BASE = "/demo-02";

export default function AboutPage() {
  return (
    <>
      <div className="preloader"><div className="loader"><img src={`${BASE}/assets/images/loader.png`} alt="loader" /></div></div>
      <LawgneHeader activeMenu="pages" />
      <PageBanner title="About us" breadcrumbs={[{ label: "Home", href: `${BASE}` }, { label: "About Us" }]} />

      {/* About Section */}
      <section className="about-area pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="about-content-box about-content-box-one mb-50">
                <div className="section-title section-title-left mb-30">
                  <span className="sub-title">Who We Are</span>
                  <h2>About lawgne</h2>
                </div>
                <h6>25 Years Of Experience In Law Solutions</h6>
                <p>Sed ut perspiciatis unde omnis iste natus errltate accusantium doloremque laudantium totam remam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.</p>
                <h5>We have COVID-19 protections at our office which include wearing masks and temperature checks so worry to contact us.</h5>
                <Link href={`${BASE}/about-us`} className="main-btn arrow-btn">Learn more</Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-img-box about-img-box-one mb-50">
                <div className="about-img-one">
                  <img src={`${BASE}/assets/images/about/about-1.jpg`} alt="about" />
                </div>
                <div className="about-img-two">
                  <img src={`${BASE}/assets/images/about/about-2.jpg`} alt="about" />
                </div>
                <div className="about-img-three">
                  <img src={`${BASE}/assets/images/about/about-3.jpg`} alt="about" />
                </div>
                <div className="about-logo">
                  <img src={`${BASE}/assets/images/about/about-logo.png`} alt="about-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Section */}
      <section className="skill-area skills-area-bg pb-90">
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
          {/* Counter Area */}
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
      </section>

      {/* Service Section */}
      <section className="service-area service-bg-image bg_cover pt-120 pb-100" style={{ backgroundImage: `url(${BASE}/assets/images/bg/service-bg-1.jpg)` }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center section-title-white mb-75">
                <span className="sub-title">What We Do</span>
                <h2>Legal Practice Areas</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              { icon: "flaticon-judge", title: "Litigation & Arbitration" },
              { icon: "flaticon-civil-right", title: "Immigration Laws" },
              { icon: "flaticon-contract", title: "Contractual and Commercial Law" },
              { icon: "flaticon-stethoscope", title: "Defective Medical Devices" },
            ].map((item, i) => (
              <div key={i} className="col-lg-6">
                <div className="service-item service-item-three mb-30 d-flex">
                  <div className="icon"><i className={item.icon}></i></div>
                  <div className="content">
                    <h3 className="title"><Link href={`${BASE}/practice-details`}>{item.title}</Link></h3>
                    <p>Quis autem vel eum iure reprehenderit voluptate velit esse quam molestiae consequatur</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="sponsor-area border-bottom pt-70 pb-70">
        <div className="container">
          <div className="row"><div className="col-lg-12">
            <div className="sponsor-slider-one d-flex justify-content-between align-items-center">
              {[1, 2, 3, 4, 5].map((n, i) => (
                <div key={i} className="single-sponsor">
                  <img src={`${BASE}/assets/images/sponsors/${n}.png`} alt="sponsors" />
                </div>
              ))}
            </div>
          </div></div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-area pt-120 pb-90">
        <div className="container">
          <div className="row"><div className="col-lg-8">
            <div className="section-title section-title-left mb-40">
              <span className="sub-title">Meet Our Teams</span>
              <h2>Partners at Attorna</h2>
            </div>
          </div></div>
          <div className="row">
            {[
              { img: "team-1.jpg", name: "Steven E. Hames", pos: "Real State Lawyer" },
              { img: "team-2.jpg", name: "Brian M. Crouch", pos: "Family Lawyer" },
              { img: "team-3.jpg", name: "Michael L. Blum", pos: "Real State Lawyer" },
              { img: "team-4.jpg", name: "Drug Lawyer", pos: "Real State Lawyer" },
            ].map((m, i) => (
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

      {/* CTA Section */}
      <section className="cta-area">
        <div className="container">
          <div className="cta-wrapper-two cta-bottom-minus bg_cover" style={{ backgroundImage: `url(${BASE}/assets/images/bg/cta-bg-1.png)` }}>
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="cta-content-box">
                  <h3>Choose Your Law Firm, Choose The Best Care For Yourself</h3>
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
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-area testimonial-bg-map pt-210 pb-150">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75">
                <span className="sub-title">Our Testimonials</span>
                <h2>Clients Say About Us</h2>
              </div>
            </div>
          </div>
          <div className="row testimonial-wraper-two justify-content-center">
            <div className="col-lg-8">
              <div className="testimonial-slider-two">
                {[
                  { thumb: "thumb-2.jpg" }
                ].map((t, i) => (
                  <div key={i} className="testimonial-item" data-thumb={`${BASE}/assets/images/testimonial/${t.thumb}`}>
                    <div className="wt-content">
                      <h3>&quot; On the other hand denounce with righteousy indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the Sed ut perspiciatis unde moment &quot;</h3>
                    </div>
                    <div className="wt-title-thumb">
                      <div className="wt-thumb">
                        <img src={`${BASE}/assets/images/testimonial/${t.thumb}`} alt="Author thumb" />
                      </div>
                      <div className="wt-title">
                        <h4>Louis H. Sanders</h4>
                        <span className="position">CEO &amp; Founder</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="testimonial-dots-images"></div>
          </div>
        </div>
      </section>

      <LawgneFooter />
      <a href="#" className="back-to-top"><i className="fas fa-angle-up"></i></a>
    </>
  );
}
