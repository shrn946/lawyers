"use client";
import Link from "next/link";
import LawgneHeader from "@/components/demo02/LawgneHeader";
import LawgneFooter from "@/components/demo02/LawgneFooter";
import PageBanner from "@/components/demo02/PageBanner";

const BASE = "/demo-02";

const faqItems = [
  {
    id: "One",
    q: "Tools And Practices To Speed Up The Vue.js Development Process",
    a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur."
  },
  {
    id: "Two",
    q: "An Introduction To Figma Interactive Components",
    a: "Boluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    id: "Three",
    q: "It&apos;s A (Front-End Testing) Trap! Six Common Testing Pitfalls And How To Solve Them",
    a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
  },
  {
    id: "Four",
    q: "Breaking Down Bulky Builds With Netlify And Next.js",
    a: "Boluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto."
  },
  {
    id: "Five",
    q: "Many Shades Of July (2021 Desktop Wallpapers Edition)",
    a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
  },
  {
    id: "Six",
    q: "Smashing Podcast Episode 40 With Mike Cavaliere: What Is Chakra UI For React?",
    a: "Boluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
  },
];

const tabs = [
  { id: "cat1", label: "Family Case", accordionId: "accordionOne" },
  { id: "cat2", label: "Insurance Case", accordionId: "accordionTwo" },
  { id: "cat3", label: "Traffic & Road", accordionId: "accordionThree" },
  { id: "cat4", label: "Corporate Case", accordionId: "accordionFour" },
];

function FaqAccordion({ accordionId, items, defaultOpenIndex = 0 }: { accordionId: string; items: typeof faqItems; defaultOpenIndex?: number }) {
  return (
    <div className="accordion" id={accordionId}>
      {items.map((item, i) => (
        <div key={i} className="accordion-item mb-20 border">
          <h2 className="accordion-header" id={`heading${accordionId}${i}`}>
            <button
              className="btn btn-link w-100 text-left d-flex justify-content-between align-items-center"
              type="button"
              data-toggle="collapse"
              data-target={`#collapse${accordionId}${i}`}
              aria-expanded={i === defaultOpenIndex ? 'true' : 'false'}
              aria-controls={`collapse${accordionId}${i}`}
              style={{ textDecoration: "none", color: "#333", fontWeight: "600", padding: "15px 20px" }}
            >
              {item.q}
              <i className="fas fa-plus ml-10"></i>
            </button>
          </h2>
          <div
            id={`collapse${accordionId}${i}`}
            className={`collapse${i === defaultOpenIndex ? ' show' : ''}`}
            aria-labelledby={`heading${accordionId}${i}`}
            data-parent={`#${accordionId}`}
          >
            <div className="card-body border-top" style={{ padding: "20px" }}>
              <p>{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <div className="preloader"><div className="loader"><img src={`${BASE}/assets/images/loader.png`} alt="loader" /></div></div>
      <LawgneHeader activeMenu="pages" />
      <PageBanner title="FAQ" breadcrumbs={[{ label: "Home", href: `${BASE}` }, { label: "FAQ" }]} />

      {/* FAQ Search Section */}
      <section className="faq-area light-bg pt-120 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="faq-search-area text-center">
                <h2>Frequently Asked Questions</h2>
                <p>Find your best topic to asked with us</p>
                <form className="mt-40">
                  <div className="form_group" style={{ position: "relative" }}>
                    <input type="text" className="form_control" placeholder="Find Keywords" style={{ width: "100%", paddingRight: "150px" }} />
                    <button className="main-btn" style={{ position: "absolute", right: 0, top: 0, height: "100%" }}>search now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordions with Tabs */}
      <section className="faq-area pt-130 pb-110">
        <div className="container">
          {/* Tab Nav */}
          <div className="faq-filter-nav mb-50">
            <ul className="nav nav-tabs justify-content-center" id="faqTab" role="tablist">
              {tabs.map((tab, i) => (
                <li key={i} role="presentation" className="nav-item">
                  <a
                    className={`nav-link${i === 0 ? ' active' : ''}`}
                    data-toggle="tab"
                    href={`#${tab.id}`}
                    role="tab"
                  >
                    {tab.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Tab Content */}
          <div className="tab-content">
            {tabs.map((tab, i) => (
              <div
                key={i}
                className={`tab-pane fade${i === 0 ? ' show active' : ''}`}
                id={tab.id}
                role="tabpanel"
              >
                <FaqAccordion accordionId={tab.accordionId} items={faqItems} defaultOpenIndex={0} />
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
