"use client";
import Link from "next/link";
import LawgneHeader from "@/components/demo02/LawgneHeader";
import LawgneFooter from "@/components/demo02/LawgneFooter";
import PageBanner from "@/components/demo02/PageBanner";

const BASE = "/demo-02";

export default function CaseDetailsPage() {
  return (
    <>
      <div className="preloader"><div className="loader"><img src={`${BASE}/assets/images/loader.png`} alt="loader" /></div></div>
      <LawgneHeader activeMenu="pages" />
      <PageBanner title="Case Details" breadcrumbs={[{ label: "Home", href: `${BASE}` }, { label: "Case Details" }]} />

      <section className="case-details-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="case-details-content mb-50">
                <img src={`${BASE}/assets/images/case/case-1.jpg`} alt="case" className="mb-30" />
                <h3>Family &amp; Child Law Service</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>

                {/* Features Grid */}
                <div className="row mt-40 mb-40">
                  {[
                    { icon: "flaticon-judge", title: "Litigation", desc: "Quis autem veleuure repe henderit voltate velit" },
                    { icon: "flaticon-balance", title: "Immigration Law", desc: "Quis autem veleuure repe henderit voltate velit" },
                    { icon: "flaticon-contract", title: "Commercial Law", desc: "Quis autem veleuure repe henderit voltate velit" },
                    { icon: "flaticon-stethoscope", title: "Medical Devices", desc: "Quis autem veleuure repe henderit voltate velit" },
                  ].map((feat, i) => (
                    <div key={i} className="col-md-6">
                      <div className="features-item features-item-three mb-30 d-flex align-items-start">
                        <div className="icon mr-20" style={{ fontSize: "40px", color: "#b89e58" }}><i className={feat.icon}></i></div>
                        <div className="content">
                          <h4>{feat.title}</h4>
                          <p>{feat.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <img src={`${BASE}/assets/images/case/case-2.jpg`} alt="case" className="mb-30" />
                <h3>Get Your Cases Result</h3>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qulorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
                <ul className="list">
                  <li><i className="fas fa-check"></i> Estate Planning</li>
                  <li><i className="fas fa-check"></i> Business and Corporate Law</li>
                  <li><i className="fas fa-check"></i> Contract Law</li>
                  <li><i className="fas fa-check"></i> Real Estate Law</li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                {/* Practice List */}
                <div className="widget practice-nav-widget mb-40">
                  <h4 className="widget-title">Practice List</h4>
                  <ul>
                    <li className="active"><Link href={`${BASE}/practice-details`}>Family Law</Link></li>
                    <li><Link href={`${BASE}/practice-details`}>Corporate Security</Link></li>
                    <li><Link href={`${BASE}/practice-details`}>Bankruptcy Law</Link></li>
                    <li><Link href={`${BASE}/practice-details`}>Real Estate Law</Link></li>
                    <li><Link href={`${BASE}/practice-details`}>Criminal Law</Link></li>
                    <li><Link href={`${BASE}/practice-details`}>Power &amp; Energy</Link></li>
                    <li><Link href={`${BASE}/practice-details`}>Traffic Law</Link></li>
                  </ul>
                </div>

                {/* Banner Widget */}
                <div className="widget banner-widget bg_cover mb-40" style={{ backgroundImage: `url(${BASE}/assets/images/widget/banner-1.jpg)` }}>
                  <div className="banner-content text-center">
                    <span>Get a Quote</span>
                    <h3>Ready to Get Free Consultation For Cases</h3>
                    <Link href={`${BASE}/contact`} className="main-btn">contact us</Link>
                  </div>
                </div>

                {/* User Widget */}
                <div className="widget user-widget mb-40">
                  <img src={`${BASE}/assets/images/team/team-1.jpg`} alt="user" className="mb-20" />
                  <p>Consectetur adipiscing elit sed do eiusmod tempor incididunt utes labore et dolore magna aliqua. Quis ipsum suspendisse ultrices</p>
                  <h5>Marvin J. Mullins</h5>
                  <span className="position">CEO &amp; Founder</span>
                  <div className="social-link mt-15">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-area pt-120 pb-120" style={{ backgroundImage: `url(${BASE}/assets/images/bg/cta-bg-2.jpg)` }}>
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
                <Link href={`${BASE}/contact`} className="main-btn filled-btn">Contact us</Link>
                <Link href={`${BASE}/case-1`} className="main-btn filled-btn">Our Project</Link>
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
