"use client";
import Link from "next/link";
import LawgneHeader from "@/components/demo02/LawgneHeader";
import LawgneFooter from "@/components/demo02/LawgneFooter";
import PageBanner from "@/components/demo02/PageBanner";

const BASE = "/demo-02";

const services = [
  { img: "service/service-1.jpg", icon: "flaticon-gavel", title: "Dui Defense" },
  { img: "service/service-1.jpg", icon: "flaticon-marijuana", title: "Drug Offenses" },
  { img: "service/service-1.jpg", icon: "flaticon-bail", title: "Domestic Violence" },
  { img: "service/service-1.jpg", icon: "flaticon-insurance", title: "Insurance Law" },
  { img: "service/service-1.jpg", icon: "flaticon-building", title: "Real Estate Law" },
  { img: "service/service-1.jpg", icon: "flaticon-libra", title: "Family Crimes" },
  { img: "service/service-1.jpg", icon: "flaticon-traffic-lights", title: "Traffic Violence" },
  { img: "service/service-1.jpg", icon: "flaticon-power-plug", title: "Power & Energy" },
  { img: "service/service-1.jpg", icon: "flaticon-darts", title: "Corporate Law" },
];

export default function Practice2Page() {
  return (
    <>
      <div className="preloader"><div className="loader"><img src={`${BASE}/assets/images/loader.png`} alt="loader" /></div></div>
      <LawgneHeader activeMenu="practice" />
      <PageBanner title="Practice Areas" breadcrumbs={[{ label: "Home", href: `${BASE}` }, { label: "Practice Areas 02" }]} />

      {/* Service Section */}
      <section className="service-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            {services.map((svc, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="service-item service-item-four mb-30">
                  <div className="service-img">
                    <img src={`${BASE}/assets/images/${svc.img}`} alt="service" />
                    <div className="service-icon"><i className={svc.icon}></i></div>
                  </div>
                  <div className="service-content">
                    <h3><Link href={`${BASE}/practice-details`}>{svc.title}</Link></h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit volup</p>
                    <Link href={`${BASE}/practice-details`} className="icon-btn"><i className="fas fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            ))}
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

      {/* Blog Section */}
      <section className="blog-area pt-120 pb-90">
        <div className="container">
          <div className="row"><div className="col-lg-8">
            <div className="section-title section-title-left mb-75">
              <span className="sub-title">Our News &amp; Blog</span>
              <h2>Every Single Updates</h2>
            </div>
          </div></div>
          <div className="row">
            {[
              { img: "blog-4.jpg", title: "Friendl Frictionles Practices Enterprise Messaging" },
              { img: "blog-5.jpg", title: "Mobile First Is Just Not Good Enough Meet Journey Design" },
              { img: "blog-6.jpg", title: "Reaching Millennial Mobile Marketing Rends Tecn" },
            ].map((post, i) => (
              <div key={i} className="col-lg-4">
                <div className="blog-post-item blog-post-item-three mb-30">
                  <div className="post-thumbnail">
                    <img src={`${BASE}/assets/images/blog/${post.img}`} alt="blog" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <ul>
                        <li><span><i className="fal fa-calendar-alt"></i><a href="#">25 June 2021</a></span></li>
                        <li><span><i className="fal fa-comments"></i><a href="#">Com (05)</a></span></li>
                      </ul>
                    </div>
                    <h3 className="title"><Link href={`${BASE}/blog-details`}>{post.title}</Link></h3>
                    <Link href={`${BASE}/blog-details`} className="btn-link arrow-btn">read more</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="sponsor-area light-bg pt-70 pb-70">
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

      <LawgneFooter />
      <a href="#" className="back-to-top"><i className="fas fa-angle-up"></i></a>
    </>
  );
}
