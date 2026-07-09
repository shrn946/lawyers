"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

const BASE = "/demo-03";

export default function AboutMePage() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="About Me" subtitle="Creative, efficient and passionate" bgImage="images/top-bkgs/about.jpg" />

      <div className="page-holder custom-page-template page-full fullscreen-page clearfix">
        {/* SECTION 1 */}
        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 margin-bm54">
                <img className="img-fluid" src={`${BASE}/assets/images/team/team-4.jpg`} alt="" />
              </div>
              <div className="col-lg-7">
                <span className="heading-subtitle">Bio</span>
                <h2 className="section-heading-title margin-b16">Hi there, I’m Sarah Barrett, passionate injury lawyer, located in New York City</h2>
                <p>Vim possit eleifend forensibus ea, cibo antiopam pri ea, elit discere percipitur ad nec. At erant voluptatibus cum, vim vivendum expetenda erroribus ad. Mel at numquam delicata, ut ius veri molestie. Et pro amet unum.</p>
                <ul className="about-social d-flex list-unstyled">
                  <li className="mr-15"><a className="social-facebook" href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                  <li className="mr-15"><a className="social-twitter" href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                  <li><a className="social-linkedin" href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 alignc">
                <span className="heading-subtitle">Legal Help</span>
                <h2 className="section-heading-title">Practice Areas</h2>
              </div>
            </div>
            <div className="row practice-items-holder-v2">
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
                <div key={i} className="col-lg-3 col-md-6 mb-30">
                  <div className="practice-item-v2 text-center" style={{ border: "1px solid #eee", padding: "30px 20px", background: "#fff" }}>
                    <Link href={`${BASE}/practice-single-page`}>
                      <div className="practice-circle d-inline-flex align-items-center justify-content-center rounded-circlemb-15" style={{ width: "80px", height: "80px", border: "1px solid #bfa15f", fontSize: "28px", color: "#bfa15f", marginBottom: "15px" }}>
                        <i className={item.icon}></i>
                      </div>
                    </Link>
                    <h5 className="practice-title-v2"><Link href={`${BASE}/practice-single-page`}>{item.title}</Link></h5>
                    <div className="practice-excerpt text-muted mb-15" style={{ fontSize: "14px" }}>Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum.</div>
                    <Link className="read-more" href={`${BASE}/practice-single-page`} style={{ color: "#bfa15f", fontWeight: "600" }}>Learn More</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="section-holder" style={{ background: "#f9f9f9", padding: "80px 0" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 alignc text-center">
                <span className="heading-subtitle">Testimonials</span>
                <h2 className="section-heading-title">What Clients Say</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <div className="testimonials-container">
                  <div className="testimonial-item">
                    <div className="testimonial-desc mb-20">
                      <i className="fas fa-quote-left" style={{ fontSize: "36px", color: "#bfa15f", display: "block", marginBottom: "15px" }}></i>
                      <h5>Curabitur sit amet ligula vitae lorem consequat condimentum id in mauris. Vivamus pretium aliquet sapien, ut commodo risus. Fusce erat orci, tempus vitae mi ac, interdum sollicitudin felis.</h5>
                    </div>
                    <div className="testimonial-client mb-10"><img src={`${BASE}/assets/images/testimonials/client-1.jpg`} className="rounded-circle" style={{ width: "80px", height: "80px" }} alt="" /></div>
                    <div className="client-name" style={{ fontWeight: "bold" }}>John Doe</div>
                    <div className="client-company text-muted">Company Name</div>
                  </div>
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
