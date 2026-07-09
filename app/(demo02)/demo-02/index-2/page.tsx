"use client";
import Link from "next/link";
import LawgneFooter from "@/components/demo02/LawgneFooter";

const BASE = "/demo-02";

export default function Index2Page() {
  return (
    <>
      <div className="preloader"><div className="loader"><img src={`${BASE}/assets/images/loader.png`} alt="loader" /></div></div>

      {/* Search Modal */}
      <div className="modal fade" id="search-modal">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <form>
              <div className="form_group">
                <input type="text" className="form_control" placeholder="Search here..." />
                <button className="search_btn"><i className="fa fa-search"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Offcanvas Panel */}
      <div className="offcanvas-panel">
        <div className="offcanvas-panel-inner">
          <div className="panel-logo">
            <Link href={`${BASE}`}>
              <img src={`${BASE}/assets/images/logo/logo-1.png`} alt="Lawgne" />
            </Link>
          </div>
          <div className="about-us">
            <h5 className="panel-widget-title">About Us</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam alias quae cupiditate quas, neque eum magni impedit asperiores ad id sint repudiandae quaerat, omnis commodi consequatur dolore rerum deleniti!</p>
          </div>
          <div className="contact-us">
            <h5 className="panel-widget-title">Contact Us</h5>
            <ul>
              <li><i className="fal fa-map-marker-alt"></i>121 King St, Melbourne VIC 3000, Australia.</li>
              <li>
                <i className="fal fa-envelope-open"></i>
                <a href="mailto:info@lawgne.com">info@lawgne.com</a>
              </li>
              <li>
                <i className="fal fa-phone"></i>
                <a href="tel:(312)-895-9800">(312) 895-9800</a>
              </li>
            </ul>
          </div>
          <a href="#" className="panel-close"><i className="fal fa-times"></i></a>
        </div>
      </div>

      {/* Header Two - Single row transparent */}
      <header className="header-area-two transparent-header">
        <div className="header-navigation">
          <div className="container">
            <div className="navigation-wrapper">
              <div className="row align-items-center">
                <div className="col-lg-2 col-4">
                  <div className="site-branding">
                    <Link href={`${BASE}`} className="brand-logo">
                      <img src={`${BASE}/assets/images/logo/logo-2.png`} alt="Lawgne" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-7 col-4">
                  <div className="primary-menu">
                    <div className="nav-menu">
                      <div className="navbar-close"><i className="far fa-times"></i></div>
                      <nav className="main-menu">
                        <ul>
                          <li className="menu-item has-children active">
                            <Link href={`${BASE}`} className="active">Home</Link>
                            <ul className="sub-menu">
                              <li><Link href={`${BASE}`}>Home One</Link></li>
                              <li><Link href={`${BASE}/index-2`}>Home Two</Link></li>
                            </ul>
                          </li>
                          <li className="menu-item has-children"><a href="#">Pages</a>
                            <ul className="sub-menu">
                              <li><Link href={`${BASE}/about-us`}>About us</Link></li>
                              <li className="has-children"><a href="#">Our Case</a>
                                <ul className="sub-menu">
                                  <li><Link href={`${BASE}/case-1`}>Case One</Link></li>
                                  <li><Link href={`${BASE}/case-2`}>Case Two</Link></li>
                                  <li><Link href={`${BASE}/case-details`}>Case Details</Link></li>
                                </ul>
                              </li>
                              <li><Link href={`${BASE}/gallery`}>Our Gallery</Link></li>
                              <li><Link href={`${BASE}/faq`}>FAQ</Link></li>
                              <li><Link href={`${BASE}/contact`}>Contact</Link></li>
                            </ul>
                          </li>
                          <li className="menu-item has-children"><a href="#">Attorneys</a>
                            <ul className="sub-menu">
                              <li><Link href={`${BASE}/attorney`}>Our Attorneys</Link></li>
                              <li><Link href={`${BASE}/attorney-details`}>Attorneys Details</Link></li>
                            </ul>
                          </li>
                          <li className="menu-item has-children"><a href="#">Practice Areas</a>
                            <ul className="sub-menu">
                              <li><Link href={`${BASE}/practice-1`}>Practice One</Link></li>
                              <li><Link href={`${BASE}/practice-2`}>Practice Two</Link></li>
                              <li><Link href={`${BASE}/practice-details`}>Practice Details</Link></li>
                            </ul>
                          </li>
                          <li className="menu-item has-children"><a href="#">Blog</a>
                            <ul className="sub-menu">
                              <li><Link href={`${BASE}/blog-standard`}>Blog Standard</Link></li>
                              <li><Link href={`${BASE}/blog-grid`}>Blog Grid</Link></li>
                              <li><Link href={`${BASE}/blog-details`}>Blog Details</Link></li>
                            </ul>
                          </li>
                          <li><Link href={`${BASE}/contact`}>Contact</Link></li>
                        </ul>
                      </nav>
                    </div>
                    <div className="navbar-toggler"><span></span><span></span><span></span></div>
                  </div>
                </div>
                <div className="col-lg-3 col-4">
                  <div className="header-right-nav d-flex align-items-center">
                    <ul>
                      <li><Link href={`${BASE}/contact`} className="main-btn arrow-btn">Free Quote</Link></li>
                      <li><a href="#" className="search-btn" data-toggle="modal" data-target="#search-modal"><i className="far fa-search"></i></a></li>
                      <li className="off-nav-btn"><div className="off-menu"><span></span><span></span><span></span></div></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-area hero-area-two bg_cover" style={{ backgroundImage: `url(${BASE}/assets/images/hero/hero-two-bg-1.jpg)` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <span>Welcome to Lawgne</span>
                <h1>Experienced Lawyers Are Ready to Help</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error site voluaccusantium dolore laudantium totam aperiam eaque quae abillo inventore veritatis</p>
                <form className="hero-lawyers-search">
                  <div className="form_group">
                    <input type="text" className="form_control" placeholder="Find a Lawyers" />
                    <button className="main-btn">Search now</button>
                  </div>
                </form>
                <p className="experience">★ 25 Years Of Experience In Law Solutions</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img">
                <img src={`${BASE}/assets/images/hero/hero-two-img-1.png`} alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-area pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="features-img mb-50">
                <img src={`${BASE}/assets/images/features/features-2.jpg`} alt="features" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-content-box mb-50">
                <div className="section-title section-title-left mb-40">
                  <span className="sub-title">What We Offer</span>
                  <h2>On-Demand, Ongoing Care That Saves Lives</h2>
                </div>
                {[
                  { icon: "flaticon-judge", title: "Litigation & Arbitration" },
                  { icon: "flaticon-civil-right", title: "Immigration Laws" },
                  { icon: "flaticon-contract", title: "Contractual & Commercial Law" },
                ].map((feat, i) => (
                  <div key={i} className="features-item features-item-two mb-20">
                    <div className="icon"><i className={feat.icon}></i></div>
                    <div className="content">
                      <h4><Link href={`${BASE}/practice-details`}>{feat.title}</Link></h4>
                      <p>Quis autem eum reprehenderit voluptate</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-box mb-50">
                <div className="section-title section-title-left mb-30">
                  <span className="sub-title">Who We Are</span>
                  <h2>We&apos;ve 25 Years Of Experienced &amp; Provide Professional Solutions</h2>
                </div>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque spsa quae ab illo inventore veritatis architecto</p>
                <h5>We have COVID-19 protections at our office which include wearing masks and temperature checks.</h5>
                <Link href={`${BASE}/about-us`} className="main-btn arrow-btn">Learn more</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img-box mb-50">
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
      <section className="service-area service-bg-map pt-120">
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
            {[
              { icon: "flaticon-gavel", title: "Dui Defense" },
              { icon: "flaticon-marijuana", title: "Drug Offenses" },
              { icon: "flaticon-bail", title: "Domestic Violence" },
              { icon: "flaticon-traffic-lights", title: "Traffic Violence" },
              { icon: "flaticon-libra", title: "Family Crimes" },
              { icon: "flaticon-building", title: "Real Estate Law" },
            ].map((svc, i) => (
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

      {/* Popular Cases Slider */}
      <section className="case-area pt-120">
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
          <div className="row">
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

      {/* Contact Section with Counters */}
      <section className="contact-area pt-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="counter-area mb-50">
                {[
                  { icon: "fal fa-users", count: 356, label: "Satisfied Clients" },
                  { icon: "fal fa-briefcase-medical", count: 754, label: "Successful Cases" },
                  { icon: "fal fa-diploma", count: 962, label: "Professional Lawyer" },
                  { icon: "fal fa-trophy-alt", count: 287, label: "Awards Winning" },
                ].map((item, i) => (
                  <div key={i} className="counter-item counter-item-three d-flex mb-30">
                    <div className="icon"><i className={item.icon}></i></div>
                    <div className="content">
                      <h2><span className="counter">{item.count}</span></h2>
                      <p>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-wrapper mb-50">
                <h2>Free Consultations</h2>
                <p>Sed perspiciatis unde omnis iste natus error sitevoluaccusantium doloremque laudantium totarem aperiam eaque</p>
                <form>
                  <div className="form_group mb-20">
                    <input type="text" className="form_control" placeholder="Your Name" name="name" required />
                  </div>
                  <div className="form_group mb-20">
                    <input type="tel" className="form_control" placeholder="Phone Number" name="phone" />
                  </div>
                  <div className="form_group mb-20">
                    <input type="email" className="form_control" placeholder="Email Address" name="email" required />
                  </div>
                  <div className="form_group mb-20">
                    <select className="form_control">
                      <option>Practice Areas</option>
                      <option>Corporate Law</option>
                      <option>Real Estate Law</option>
                      <option>Insurance Law</option>
                    </select>
                  </div>
                  <div className="form_group mb-20">
                    <textarea className="form_control" placeholder="Write Message" name="message" rows={4}></textarea>
                  </div>
                  <button className="main-btn arrow-btn">Send message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-area bg_cover pt-200 pb-180" style={{ backgroundImage: `url(${BASE}/assets/images/bg/team-bg-1.jpg)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title section-title-left mb-65">
                <span className="sub-title">Meet Our Teams</span>
                <h2>Meet Lawyers</h2>
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
          <div className="text-center mt-20">
            <Link href={`${BASE}/attorney`} className="main-btn arrow-btn">View all lawyers</Link>
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

      {/* Testimonials Section */}
      <section className="testimonial-area pt-120 pb-150">
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

      {/* Blog Section */}
      <section className="blog-area pt-120 pb-90">
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
