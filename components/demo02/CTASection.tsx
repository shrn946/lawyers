import Link from "next/link";

const BASE = "/demo-02";

interface CTASectionProps {
  variant?: "one" | "two"; // one = bg-with-overlay, two = bg-with-overlay-two
}

export default function CTASection({ variant = "two" }: CTASectionProps) {
  const overlayClass = variant === "one" ? "bg-with-overlay" : "bg-with-overlay bg-with-overlay-two";
  return (
    <section className={`cta-area ${overlayClass} pt-120 pb-120`} style={{ backgroundImage: `url(${BASE}/assets/images/bg/cta-bg-2.jpg)` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="cta-content-box wow fadeInLeft" data-wow-delay=".2s">
              <span className="sub-title">Get Free Consultations</span>
              <h2>Choose Your Law Firm, Choose The Best Care For Yourself</h2>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="button float-lg-right wow fadeInRight" data-wow-delay=".3s">
              <Link href={`${BASE}/contact`} className="main-btn filled-btn">Contact Us</Link>
              <Link href={`${BASE}/case-1`} className="main-btn filled-btn">Our project</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
