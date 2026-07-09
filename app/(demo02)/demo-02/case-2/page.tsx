"use client";
import Link from "next/link";
import LawgneHeader from "@/components/demo02/LawgneHeader";
import LawgneFooter from "@/components/demo02/LawgneFooter";
import PageBanner from "@/components/demo02/PageBanner";

const BASE = "/demo-02";

const familyCases = [
  { img: "case-1.jpg", title: "Corporate & Business Cases" },
  { img: "case-2.jpg", title: "Industrial Area Cases" },
  { img: "case-3.jpg", title: "Corporate & Business Cases" },
  { img: "case-4.jpg", title: "Corporate & Business Cases" },
  { img: "case-1.jpg", title: "Industrial Area Cases" },
  { img: "case-2.jpg", title: "Corporate & Business Cases" },
  { img: "case-3.jpg", title: "Corporate & Business Cases" },
  { img: "case-4.jpg", title: "Industrial Area Cases" },
  { img: "case-1.jpg", title: "Corporate & Business Cases" },
];

const insuranceCases = [
  { img: "case-3.jpg", title: "Corporate & Business Cases" },
  { img: "case-4.jpg", title: "Industrial Area Cases" },
  { img: "case-1.jpg", title: "Corporate & Business Cases" },
  { img: "case-2.jpg", title: "Corporate & Business Cases" },
  { img: "case-3.jpg", title: "Industrial Area Cases" },
  { img: "case-4.jpg", title: "Corporate & Business Cases" },
];

const trafficCases = [
  { img: "case-1.jpg", title: "Corporate & Business Cases" },
  { img: "case-2.jpg", title: "Industrial Area Cases" },
  { img: "case-3.jpg", title: "Corporate & Business Cases" },
  { img: "case-4.jpg", title: "Industrial Area Cases" },
  { img: "case-1.jpg", title: "Corporate & Business Cases" },
  { img: "case-2.jpg", title: "Corporate & Business Cases" },
];

const corporateCases = [
  { img: "case-1.jpg", title: "Corporate & Business Cases" },
  { img: "case-2.jpg", title: "Industrial Area Cases" },
  { img: "case-3.jpg", title: "Corporate & Business Cases" },
  { img: "case-4.jpg", title: "Corporate & Business Cases" },
  { img: "case-1.jpg", title: "Industrial Area Cases" },
  { img: "case-2.jpg", title: "Corporate & Business Cases" },
];

function CaseGrid3({ cases }: { cases: { img: string; title: string }[] }) {
  return (
    <div className="row">
      {cases.map((c, i) => (
        <div key={i} className="col-lg-4 col-md-6">
          <div className="case-item case-item-three mb-30">
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
  );
}

export default function Case2Page() {
  return (
    <>
      <div className="preloader"><div className="loader"><img src={`${BASE}/assets/images/loader.png`} alt="loader" /></div></div>
      <LawgneHeader activeMenu="pages" />
      <PageBanner title="Our cases" breadcrumbs={[{ label: "Home", href: `${BASE}` }, { label: "Our cases" }]} />

      <section className="case-area pt-130 pb-80">
        <div className="container">
          <div className="case-filter-nav mb-40">
            <ul className="nav nav-tabs justify-content-center" id="caseTab" role="tablist">
              <li role="presentation" className="nav-item"><a className="nav-link active" data-toggle="tab" href="#cat1">Family Case</a></li>
              <li role="presentation" className="nav-item"><a className="nav-link" data-toggle="tab" href="#cat2">Insurance Case</a></li>
              <li role="presentation" className="nav-item"><a className="nav-link" data-toggle="tab" href="#cat3">Traffic &amp; Road</a></li>
              <li role="presentation" className="nav-item"><a className="nav-link" data-toggle="tab" href="#cat4">Corporate Case</a></li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="cat1" role="tabpanel"><CaseGrid3 cases={familyCases} /></div>
            <div className="tab-pane fade" id="cat2" role="tabpanel"><CaseGrid3 cases={insuranceCases} /></div>
            <div className="tab-pane fade" id="cat3" role="tabpanel"><CaseGrid3 cases={trafficCases} /></div>
            <div className="tab-pane fade" id="cat4" role="tabpanel"><CaseGrid3 cases={corporateCases} /></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-area pt-120 pb-120 bg_cover" style={{ backgroundImage: `url(${BASE}/assets/images/bg/cta-bg-2.jpg)` }}>
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
