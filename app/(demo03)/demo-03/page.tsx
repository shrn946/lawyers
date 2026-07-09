"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";

const BASE = "/demo-03";

export default function HomeOnePage() {
  return (
    <>
      <LawyersHeader headerType="header-1" />

      {/* HOME SLIDER */}
      <div className="slider-container">
        <div className="owl-carousel owl-theme home-slider">
          <div className="slider-post slider-item-box">
            <img className="img-fluid" src={`${BASE}/assets/images/home/slider-1.jpg`} alt="" />
            <div className="slider-caption">
              <div className="slider-text">
                <h2>We provide legal<br />help for</h2>
                <h4>Auto Accidents</h4>
                <Link className="btn-white" href={`${BASE}/practice-image-3-cols`}>Find More</Link>
              </div>
            </div>
          </div>
          <div className="slider-post slider-item-box">
            <img className="img-fluid" src={`${BASE}/assets/images/home/slider-2.jpg`} alt="" />
            <div className="slider-caption">
              <div className="slider-text">
                <h2>We provide legal<br />help for</h2>
                <h4>Tax Disputes</h4>
                <Link className="btn-white" href={`${BASE}/practice-image-3-cols`}>Find More</Link>
              </div>
            </div>
          </div>
          <div className="slider-post slider-item-box">
            <img className="img-fluid" src={`${BASE}/assets/images/home/slider-3.jpg`} alt="" />
            <div className="slider-caption">
              <div className="slider-text">
                <h2>We provide legal<br />help for</h2>
                <h4>Work Injury</h4>
                <Link className="btn-white" href={`${BASE}/practice-image-3-cols`}>Find More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-holder custom-page-template page-full fullscreen-page home-page-content clearfix">
        {/* SECTION 1 */}
        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="intro-msg margin-b108 text-center">
                  <div className="intro-normal">Our firm recovered</div>
                  <div className="intro-2"><span className="intro-small-italic">over</span> <span className="intro-big-italic" style={{ color: "#bfa15f" }}>$100.000.000</span></div>
                  <div className="intro-year">Since 1970</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 margin-bm32">
                <p><span className="dropcap">W</span>e are passionate advocates for victims of serious accidents. Donec suscipit lobortis ornare. Aenean vel varius odio. Cras ligula odio, congue vel adipiscing non, congue vitae neque. Pellentesque adipiscing ultricies risus, auctor ullamcorper.</p>
              </div>
              <div className="col-lg-4 margin-bm32">
                <p>Sed elit nulla, varius vitae lacus hendrerit, pulvinar tincidunt lacus. Suspendisse quis purus ultrices, convallis felis ac, pulvinar tortor. Etiam adipiscing enim diam, vitae lacinia ipsum volutpat id. Sed varius nisl quis justo feugiat, a tempor enim pellentesque.</p>
              </div>
              <div className="col-lg-4">
                <p>Nullam at ligula at velit adipiscing malesuada et venenatis enim. Praesent lacinia volutpat imperdiet. Integer ultricies aliquam auctor. Etiam gravida sagittis ipsum nec dictum. Nunc pretium est quis placerat congue. Nam dui lectus, pretium get elit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="section-holder">
          <div className="row no-gutters">
            <div className="col-md-6">
              <img className="img-fluid w-100" src={`${BASE}/assets/images/home/office-1-1.jpg`} alt="" />
            </div>
            <div className="col-md-6">
              <img className="img-fluid w-100" src={`${BASE}/assets/images/home/office-2-1.jpg`} alt="" />
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 alignc">
                <span className="heading-subtitle">Legal Help</span>
                <h2 className="section-heading-title">Practice Areas</h2>
              </div>
            </div>
            <div className="row practice-items-holder">
              {[
                { icon: "fas fa-truck", title: "Auto Accidents" },
                { icon: "fas fa-hard-hat", title: "Construction Loans" },
                { icon: "far fa-building", title: "Real Estate" },
                { icon: "far fa-chart-bar", title: "Finance Law" },
                { icon: "far fa-money-bill-alt", title: "Tax Disputes" },
                { icon: "far fa-meh", title: "Child Abuse" },
                { icon: "fas fa-medkit", title: "Health Care" },
                { icon: "fas fa-heart-broken", title: "Divorce" },
              ].map((item, i) => (
                <div key={i} className="col-md-6 col-lg-3 practice-item-4cols">
                  <Link href={`${BASE}/practice-single-page`}>
                    <div className="practice-item text-center">
                      <div className="practice-icon" style={{ fontSize: "36px", color: "#bfa15f", marginBottom: "15px" }}><i className={item.icon}></i></div>
                      <h3 className="practice-title">{item.title}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="view-more alignc margin-t72"><Link href={`${BASE}/practice-areas`}>View More</Link></div>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="parallax section-holder bg_cover" style={{ backgroundImage: `url('${BASE}/assets/images/home/home-bkg-1.jpg')`, padding: "100px 0" }}>
          <div className="container parallax-content text-white">
            <div className="row">
              <div className="col-lg-8">
                <span className="heading-subtitle white text-white">Legal Help</span>
                <h2 className="section-heading-title text-white">Why Choose Us?</h2>
              </div>
            </div>
            <div className="row margin-b72">
              <div className="col-lg-6 margin-bm32">
                <p className="text-white">Lorem ipsum dolor sit amet, debet dolore consectetuer eum eu, has no dicta munere gloriatur. Ea ubique atomorum nec. At eam phaedrum oportere. Mei brute primis omnium at, ius odio suscipit honestatis ut, dissentias dissentiet et usu. Sed errem noluisse comprehensam ei, eum no eripuit deserunt laboramus, te sea mentitum. </p>
              </div>
              <div className="col-lg-6">
                <p className="text-white">Harum saperet, ius paulo noluisse dignissim eu. Inimicus scripserit accommodare has ei, cum ut aliquam delicata. Ipsum etiam sit ad, salutatus tincidunt signiferumque in has, an mea vocent delicata. Eos enim dictas invenire ex. Amet eius cu vim, admodum mandamus imperdiet pro an, ei lorem tincidunt.</p>
              </div>
            </div>
            <div className="row alignc">
              {[
                { num: "10k", label: "Global Customers" },
                { num: "30", label: "Years of Experience" },
                { num: "24", label: "Team Experts" },
                { num: "17", label: "Awards & Honors" },
              ].map((fact, i) => (
                <div key={i} className="col-sm-6 col-lg-3 margin-bm32">
                  <div className="facts-title text-white" style={{ fontSize: "48px", fontWeight: "bold" }}>{fact.num}</div>
                  <p className="pcolor text-white">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 */}
        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 alignc">
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
                <div key={i} className="col-lg-4 col-md-6">
                  <div className="lawyer-holder lawyer-3col text-center">
                    <Link href={`${BASE}/attorneys-single-page`}><img src={`${BASE}/assets/images/team/${m.img}`} className="img-fluid" alt="" /></Link>
                    <div className="lawyer-position" style={{ marginTop: "15px", color: "#bfa15f" }}>{m.pos}</div>
                    <h2 className="lawyer-title" style={{ fontSize: "22px", margin: "10px 0" }}><Link href={`${BASE}/attorneys-single-page`}>{m.name}</Link></h2>
                    <div className="lawyer-excerpt mb-15">Integer imperdiet purus urna, a volutpat turpis feugiat vitae. Proin molestie in metus eu volutpat. Vestibulum vitae orci sit amet.</div>
                    <ul className="lawyer-social d-flex justify-content-center list-unstyled">
                      <li className="mx-2"><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li className="mx-2"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li className="mx-2"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="view-more alignc"><Link href={`${BASE}/about-us`}>View More</Link></div>
          </div>
        </section>

        {/* SECTION 6 */}
        <section className="no-parallax section-holder section-home16" style={{ padding: "80px 0", backgroundColor: "#f9f9f9" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="testimonials-container text-center">
                  <div className="testimonial-item">
                    <div className="testimonial-desc mb-25">
                      <i className="fas fa-quote-left" style={{ fontSize: "36px", color: "#bfa15f", display: "block", marginBottom: "15px" }}></i>
                      <h5>Curabitur sit amet ligula vitae lorem consequat condimentum id in mauris. Vivamus pretium aliquet sapien, ut commodo risus. Fusce erat orci, tempus vitae mi ac, interdum sollicitudin felis. Suspendisse elementum turpis vitae libero lobortis laoreet raesent lacinia volutpat.</h5>
                    </div>
                    <div className="testimonial-client mb-15">
                      <img src={`${BASE}/assets/images/testimonials/client-1.jpg`} alt="" className="rounded-circle" style={{ width: "80px", height: "80px" }} />
                    </div>
                    <div className="client-name" style={{ fontWeight: "bold" }}>John Doe</div>
                    <div className="client-company text-muted">Company Name</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 */}
        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 alignc">
                <span className="heading-subtitle">Legal Help</span>
                <h2 className="section-heading-title">Latest News</h2>
              </div>
            </div>
            <div className="row section-home-blog">
              {[
                { img: "blog-1.jpg", cat: "Car Accidents", title: "Thinking Out Of The Box After A Simple Car Accident" },
                { img: "blog-2.jpg", cat: "Divorce", title: "Understanding Domestic Violence Defense" },
                { img: "blog-9.jpg", cat: "News", title: "How to Make a Claim Against an Airline" },
              ].map((blog, i) => (
                <div key={i} className="col-md-4">
                  <article className="blog-item blog-item-2col-grid blog-item-3col-grid">
                    <Link href={`${BASE}/blog-single-post`}>
                      <div className="post-image"><img src={`${BASE}/assets/images/blog/${blog.img}`} className="img-fluid w-100" alt="" /></div>
                    </Link>
                    <ul className="blog-date d-flex list-unstyled mt-15 mb-10">
                      <li className="meta-date text-muted mr-15">October 10, 2019</li>
                      <li className="meta-categ"><Link href="#" style={{ color: "#bfa15f" }}>{blog.cat}</Link></li>
                    </ul>
                    <div className="post-holder">
                      <h2 className="blog-title" style={{ fontSize: "20px", marginBottom: "10px" }}><Link href={`${BASE}/blog-single-post`}>{blog.title}</Link></h2>
                      <div className="article-excerpt">Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra.</div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8 */}
        <section className="parallax section-holder bg_cover" style={{ backgroundImage: `url('${BASE}/assets/images/blog/blog-7.jpg')`, padding: "100px 0" }}>
          <div className="container parallax-content text-white text-center">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 alignc">
                <span className="heading-subtitle white text-white">Legal Services</span>
                <h2 className="margin-b16 text-white">Did we mention first consultation is free?</h2>
                <p className="text-white">Appareat reformidans his te. Mundi erroribus ad eum, mea ut dicam nostro copiosae. Eligendi accusamus nec ex. Et usu ludus vitae tritani, suas deleniti pertinacia et quo. Duo veritus mediocrem ex, vidit fabellas vis ea.</p>
                <div className="view-more view-more-white margin-t54 alignc"><Link href={`${BASE}/contact`}>Make an Appointment</Link></div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 */}
        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 margin-bm54">
                <span className="heading-subtitle">Contact Us</span>
                <h2 className="section-heading-title margin-b16">Free Case Evaluation</h2>
                <p>Aenean facilisis, neque a varius porttitor, risus dui tempus libero, dictum aliquet justo enim vitae lorem. Aliquam lacinia lacinia mi ac convallis. Nulla et lacus et risus laoreet consectetur.</p>
                <div className="icon-box-wrapper d-flex align-items-center mb-20">
                  <div className="icon-box-icon mr-15" style={{ fontSize: "28px", color: "#bfa15f" }}><i className="fas fa-map-marker-alt"></i></div>
                  <div className="icon-box-content">
                    <div className="icon-box-title" style={{ fontWeight: "bold" }}>OFFICE</div>
                    <p className="icon-box-description mb-0">40 Park Ave, Brooklyn, New York</p>
                  </div>
                </div>
                <div className="icon-box-wrapper d-flex align-items-center mb-20">
                  <div className="icon-box-icon mr-15" style={{ fontSize: "28px", color: "#bfa15f" }}><i className="fa fa-envelope"></i></div>
                  <div className="icon-box-content">
                    <div className="icon-box-title" style={{ fontWeight: "bold" }}>EMAIL</div>
                    <p className="icon-box-description mb-0">office@lawyers.com</p>
                  </div>
                </div>
                <div className="icon-box-wrapper d-flex align-items-center">
                  <div className="icon-box-icon mr-15" style={{ fontSize: "28px", color: "#bfa15f" }}><i className="fa fa-mobile-alt"></i></div>
                  <div className="icon-box-content">
                    <div className="icon-box-title" style={{ fontWeight: "bold" }}>PHONE</div>
                    <p className="icon-box-description mb-0">1-800-111-2222</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-form-holder">
                  <form>
                    <div className="form-group mb-15">
                      <input type="text" className="form-control" placeholder="Name" required />
                    </div>
                    <div className="form-group mb-15">
                      <input type="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="form-group mb-15">
                      <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="form-group mb-20">
                      <textarea className="form-control" placeholder="Message" rows={5} required></textarea>
                    </div>
                    <button type="submit" className="main-btn">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <LawyersFooter />
      <div className="scrollup"> <a className="scrolltop" href="#"> <i className="fa fa-chevron-up"></i> </a></div>
    </>
  );
}
