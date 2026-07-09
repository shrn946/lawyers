"use client";
import Link from "next/link";
import LawgneHeader from "@/components/demo02/LawgneHeader";
import LawgneFooter from "@/components/demo02/LawgneFooter";
import PageBanner from "@/components/demo02/PageBanner";

const BASE = "/demo-02";

const services = [
  { icon: "flaticon-gavel", title: "Dui Defense" },
  { icon: "flaticon-marijuana", title: "Drug Offenses" },
  { icon: "flaticon-bail", title: "Domestic Violence" },
  { icon: "flaticon-traffic-lights", title: "Traffic Violence" },
  { icon: "flaticon-libra", title: "Family Crimes" },
  { icon: "flaticon-building", title: "Real Estate Law" },
  { icon: "flaticon-insurance", title: "Insurance Law" },
  { icon: "flaticon-power-plug", title: "Power & Energy" },
  { icon: "flaticon-darts", title: "Corporate Law" },
];

export default function Practice1Page() {
  return (
    <>
      <div className="preloader"><div className="loader"><img src={`${BASE}/assets/images/loader.png`} alt="loader" /></div></div>
      <LawgneHeader activeMenu="practice" />
      <PageBanner title="Practice Areas" breadcrumbs={[{ label: "Home", href: `${BASE}` }, { label: "Practice Areas 01" }]} />

      {/* About Section */}
      <section className="about-area pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-box about-content-box-one mb-50">
                <div className="section-title section-title-left mb-30">
                  <span className="sub-title">Who We Are</span>
                  <h2>We&apos;ve 25 Years Of Experienced &amp; Provide Professional Solutions</h2>
                </div>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <h5>We have COVID-19 protections at our office which include wearing masks and temperature checks.</h5>
                <Link href={`${BASE}/about-us`} className="main-btn arrow-btn">Learn more</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img-box about-img-box-two mb-50">
                <div className="about-video">
                  <img src={`${BASE}/assets/images/about/about-4.jpg`} alt="about" />
                  <div className="video-play text-center">
                    <a href="https://www.youtube.com/watch?v=wbnaHgSttVo&t=5s" className="video-popup">
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="service-area service-bg-map pb-130 pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75">
                <span className="sub-title">What We Do</span>
                <h2>Legal Practice Areas</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((svc, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="service-item service-item-two text-center mb-30">
                  <div className="item-bg bg_cover" style={{ backgroundImage: `url(${BASE}/assets/images/features/features-1.jpg)` }}></div>
                  <div className="icon"><i className={svc.icon}></i></div>
                  <div className="content">
                    <h4>{svc.title}</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
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
                    <div className="post-meta-cat"><span>Lawyers</span></div>
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
