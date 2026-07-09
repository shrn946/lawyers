"use client";

import Link from "next/link";
import LawgneHeader from "@/components/demo02/LawgneHeader";
import LawgneFooter from "@/components/demo02/LawgneFooter";

const BASE = "/demo-02";

export default function HomePage() {
  return (
    <>
      {/* Preloader */}
      <div className="preloader">
        <div className="loader">
          <img src={`${BASE}/assets/images/loader.png`} alt="loader" />
        </div>
      </div>

      <LawgneHeader activeMenu="home" />

      {/* Hero Section */}
      <section className="hero-area">
        <div className="hero-wrapper-one">
          <div className="hero-slider-one">
            <div className="single-slider bg-with-overlay bg_cover" style={{ backgroundImage: `url(${BASE}/assets/images/hero/hero-one-slider_one.jpg)` }}>
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-7">
                    <div className="hero-content hero-content-left">
                      <span className="span">Welcome to Lawgne</span>
                      <h1>Corporate Law Firms</h1>
                      <h4>25 Years Of Experience In Law Solutions</h4>
                      <ul className="button">
                        <li><Link href={`${BASE}/contact`} className="main-btn arrow-btn">appointment now</Link></li>
                        <li><Link href={`${BASE}/about-us`} className="main-btn arrow-btn filled-btn">Read more</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-area features-area-one">
        <div className="container-fluid">
          <div className="row features-wrapper-one no-gutters">
            {[
              { icon: "flaticon-gavel", title: "Dui Defense", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque" },
              { icon: "flaticon-marijuana", title: "Drug Offenses", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque" },
              { icon: "flaticon-bail", title: "Domestic Violence", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque" },
              { icon: "flaticon-traffic-lights", title: "Traffic Violence", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque" },
              { icon: "flaticon-libra", title: "Family Crimes", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque" },
            ].map((item, i) => (
              <div key={i} className="col-lg-3 features-column">
                <div className="features-item features-item-one text-center">
                  <div className="item-bg bg_cover" style={{ backgroundImage: `url(${BASE}/assets/images/features/features-1.jpg)` }}></div>
                  <div className="icon"><i className={item.icon}></i></div>
                  <div className="content">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                    <Link href={`${BASE}/practice-details`} className="icon-btn"><i className="fas fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="about-content-box about-content-box-one mb-50">
                <div className="section-title section-title-left mb-40">
                  <span className="sub-title">Who We Are</span>
                  <h2>About lawgne</h2>
                </div>
                <h6>25 Years Of Experience In Law Solutions</h6>
                <p>Sed ut perspiciatis unde omnis iste natus error site voluaccusantium doloremque laudantium totam rem aperiam eaque quae ab illo inventore veritatis et quas architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aute sed quia consequuntur magne</p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="counter-item counter-item-two mb-60">
                      <div className="content">
                        <h2><span className="count">315</span></h2>
                        <span className="sm-title">Project Done</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="counter-item counter-item-two mb-60">
                      <div className="content">
                        <h2><span className="count">952</span></h2>
                        <span className="sm-title">Awards Wining</span>
                      </div>
                    </div>
                  </div>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="service-area position-relative light-bg pt-120 pb-130">
        <div className="object-shape-one">
          <img src={`${BASE}/assets/images/object/object-1.png`} className="object object-1" alt="object" />
          <img src={`${BASE}/assets/images/object/object-2.png`} className="object object-2" alt="object" />
        </div>
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
            <div className="col-lg-6">
              {[
                { icon: "flaticon-judge", title: "Litigation & Arbitration" },
                { icon: "flaticon-civil-right", title: "Immigration Laws" },
                { icon: "flaticon-contract", title: "Contractual and Commercial Law" },
                { icon: "flaticon-stethoscope", title: "Defective Medical Devices" },
              ].map((item, i) => (
                <div key={i} className="service-item service-item-one">
                  <div className="icon"><i className={item.icon}></i></div>
                  <div className="content">
                    <h3 className="title"><Link href={`${BASE}/practice-details`}>{item.title}</Link></h3>
                    <p>Quis autem vel eum iure reprehenderit voluptate velit esse quam molestiae consequatur</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <div className="service-img pl-70">
                <img src={`${BASE}/assets/images/service/service-1.jpg`} alt="service" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title section-title-left mb-65">
                <span className="sub-title">Meet Our Teams</span>
                <h2>Partners At Attorna</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              { img: "team-1.jpg", name: "Steven E. Hames", pos: "Real State Lawyer" },
              { img: "team-2.jpg", name: "Brian M. Crouch", pos: "Family Lawyer" },
              { img: "team-3.jpg", name: "Michael L. Blum", pos: "Real State Lawyer" },
              { img: "team-4.jpg", name: "Drug Lawyer", pos: "Real State Lawyer" },
            ].map((member, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-sm-12">
                <div className="team-item team-item-one mb-40">
                  <div className="team-img">
                    <img src={`${BASE}/assets/images/team/${member.img}`} alt="Team" />
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
                    <h3 className="title"><Link href={`${BASE}/attorney-details`}>{member.name}</Link></h3>
                    <span className="position">{member.pos}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="cta-area cta-area-one">
        <div className="container">
          <div className="row cta-wrapper-one">
            <div className="col-lg-6">
              <div className="cta-item text-center">
                <div className="cta-overlay bg_cover" style={{ backgroundImage: `url(${BASE}/assets/images/bg/counter-bg-1.jpg)` }}></div>
                <div className="cta-content">
                  <span className="sub-title">Need Any Help</span>
                  <h2>I Have a Law company</h2>
                  <p>Sed ut perspicia unde omnis iste natus error sitevoluac santium doloremque laudantium totam rem aperiam eaque quae inventore veritatis</p>
                  <Link href={`${BASE}/contact`} className="main-btn arrow-btn">Submit inquiry</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cta-item text-center">
                <div className="cta-overlay bg_cover" style={{ backgroundImage: `url(${BASE}/assets/images/cta/cta-card-1.jpg)` }}></div>
                <div className="cta-content">
                  <span className="sub-title">Need Any Help</span>
                  <h2>I Have a Law company</h2>
                  <p>Sed ut perspicia unde omnis iste natus error sitevoluac santium doloremque laudantium totam rem aperiam eaque quae inventore veritatis</p>
                  <Link href={`${BASE}/contact`} className="main-btn arrow-btn">Submit inquiry</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="counter-area counter-area-one bg-with-overlay bg_cover pb-85" style={{ backgroundImage: `url(${BASE}/assets/images/bg/counter-bg-1.jpg)` }}>
        <div className="container">
          <div className="row">
            {[
              { icon: "fal fa-users", count: 356, label: "Satisfied Clients" },
              { icon: "fal fa-briefcase-medical", count: 734, label: "Successful Case" },
              { icon: "fal fa-diploma", count: 356, label: "Awards Winning" },
              { icon: "fal fa-trophy-alt", count: 850, label: "Experts Attorneys" },
            ].map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-sm-12">
                <div className="counter-item counter-item-one mb-40">
                  <div className="icon"><i className={item.icon}></i></div>
                  <div className="content">
                    <h2><span className="counter">{item.count}</span></h2>
                    <span className="sm-title">{item.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <section className="testimonial-area pt-120 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75">
                <span className="sub-title">Our Testimonials</span>
                <h2>Clients Say About Us</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center testimonial-wrapper-one">
            <div className="col-lg-5">
              <div className="testimonial-img mb-50">
                <img src={`${BASE}/assets/images/testimonial/testimonial-1.jpg`} alt="testimonial" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testimonial-slider-one mb-50">
                {[1].map((i) => (
                  <div key={i} className="testimonial-item">
                    <div className="wt-content">
                      <h3>&quot; On the other hand denounce with righteousy indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs &quot;</h3>
                    </div>
                    <div className="wt-title-thumb">
                      <div className="wt-thumb">
                        <img src={`${BASE}/assets/images/testimonial/thumb-1.jpg`} alt="Author thumb" />
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
          </div>
        </div>
      </section>

      {/* Case Section */}
      <section className="case-area pt-70 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title section-title-left mb-65">
                <span className="sub-title">Recent Cases</span>
                <h2>Popular Cases</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="case-arrows"></div>
            </div>
          </div>
          <div className="row case-slider-one">
            {[
              { img: "case-1.jpg", title: "Family Cases" },
              { img: "case-2.jpg", title: "Car Insurances" },
              { img: "case-3.jpg", title: "Business Cases" },
              { img: "case-4.jpg", title: "Drug Violence" },
            ].map((c, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="case-item case-item-one">
                  <div className="case-img">
                    <img src={`${BASE}/assets/images/case/${c.img}`} alt="case" />
                    <div className="case-overlay">
                      <div className="case-content">
                        <h3 className="title"><Link href={`${BASE}/case-details`}>{c.title}</Link></h3>
                        <span className="tag">Law &amp; Attorney</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-area pt-130">
        <div className="container">
          <div className="newsletter-wrapper-one pt-70 pb-80">
            <div className="map text-center">
              <img src={`${BASE}/assets/images/map-1.png`} alt="" />
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title section-title-white text-center mb-45">
                  <span className="sub-title">Get More Updates</span>
                  <h2>Subscribe Newsletters</h2>
                </div>
                <div className="newsletter-form">
                  <form>
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="form_group">
                          <input type="email" className="form_control" placeholder="Enter Email Address" name="email" required />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form_group">
                          <button className="main-btn arrow-btn">subscribe now</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-area pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title section-title-left mb-75">
                <span className="sub-title">Our News &amp; Blog</span>
                <h2>Every Single Updates</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              {[
                { img: "blog-1.jpg", title: "Friendly Frictionless Best Practices By Enterprise Messaging" },
                { img: "blog-2.jpg", title: "Friendly Frictionless Best Practices By Enterprise Messaging" },
              ].map((post, i) => (
                <div key={i} className="blog-post-item blog-post-item-one mb-30">
                  <div className="post-thumbnail">
                    <img src={`${BASE}/assets/images/blog/${post.img}`} alt="blog" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <ul>
                        <li><span><i className="fal fa-calendar-alt"></i><a href="#">25 June 2021</a></span></li>
                        <li><span><i className="fal fa-comments"></i><a href="#">Comments (05)</a></span></li>
                      </ul>
                    </div>
                    <h3 className="title"><Link href={`${BASE}/blog-details`}>{post.title}</Link></h3>
                    <Link href={`${BASE}/blog-details`} className="btn-link arrow-btn">read more</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              <div className="blog-post-item blog-post-item-two mb-30">
                <div className="post-thumbnail">
                  <img src={`${BASE}/assets/images/blog/blog-3.jpg`} alt="" />
                  <div className="post-overlay">
                    <div className="entry-content">
                      <div className="post-meta">
                        <ul>
                          <li><span><i className="fal fa-calendar-alt"></i><a href="#">25 June 2021</a></span></li>
                          <li><span><i className="fal fa-comments"></i><a href="#">Comments (05)</a></span></li>
                        </ul>
                      </div>
                      <h3 className="title"><Link href={`${BASE}/blog-details`}>Keep In Mind When Design Transportation Map</Link></h3>
                      <Link href={`${BASE}/blog-details`} className="btn-link arrow-btn">read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="sponsor-area light-bg pt-70 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sponsor-slider-one d-flex justify-content-between align-items-center">
                {[1, 2, 3, 4, 5].map((n, i) => (
                  <div key={i} className="single-sponsor">
                    <img src={`${BASE}/assets/images/sponsors/${n}.png`} alt="sponsors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LawgneFooter />

      {/* Back to top */}
      <a href="#" className="back-to-top"><i className="fas fa-angle-up"></i></a>
    </>
  );
}
