"use client";
import Link from "next/link";
import LawgneHeader from "@/components/demo02/LawgneHeader";
import LawgneFooter from "@/components/demo02/LawgneFooter";
import PageBanner from "@/components/demo02/PageBanner";

const BASE = "/demo-02";

export default function PracticeDetailsPage() {
  return (
    <>
      <div className="preloader"><div className="loader"><img src={`${BASE}/assets/images/loader.png`} alt="loader" /></div></div>
      <LawgneHeader activeMenu="practice" />
      <PageBanner title="Practice Details" breadcrumbs={[{ label: "Home", href: `${BASE}` }, { label: "Practice Areas Details" }]} />

      {/* Service Details */}
      <section className="service-details-page pt-130 pb-90">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="service-details-content mb-50">
                <div className="service-item mb-40">
                  <img src={`${BASE}/assets/images/service/service-1.jpg`} alt="service" className="mb-30" />
                  <h3>We Support Your Family For Any kind of Cases</h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                  <blockquote>
                    <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque la dantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archite beatae vitae dicta sunt explicaboemo enim voluptatem</p>
                  </blockquote>
                </div>
                <div className="service-item">
                  <img src={`${BASE}/assets/images/service/service-1.jpg`} alt="service" className="mb-30" />
                  <h3>Best Manager Attorneys</h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magne</p>
                  <ul className="list">
                    <li><i className="fas fa-check"></i> How to Get an Annulment</li>
                    <li><i className="fas fa-check"></i> Economic Aspects Of Family Law</li>
                    <li><i className="fas fa-check"></i> An Introduction To Figma Interactive Components</li>
                    <li><i className="fas fa-check"></i> Making A Strong Case For Accessibility</li>
                  </ul>
                </div>
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
