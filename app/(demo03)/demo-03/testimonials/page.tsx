"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

const BASE = "/demo-03";

const clientTestimonials = [
  { text: "Vocent utamur appareat ad his, eum volumus denique consectetuer id. Iusto affert mucius vix ei. Nec veritus epicurei tractatos at. Mel id posse nostrum, id ubique graece nostro mei.", img: "client-2.jpg", name: "Jean Carlson", comp: "Leaf Inc." },
  { text: "Sed sodales, odio eget adipiscing mattis, sapien purus dapibus felis, sit amet mollis velit dolor eu lorem. Vivamus condimentum nunc a quam lobortis tempus.", img: "client-1.jpg", name: "Louis Rios", comp: "Medical Co." },
  { text: "Eros sale has id, usu solet primis cetero in. Vel ex qualisque argumentum dissentiet, iusto omnes ornatus nec at. Vim definiebas neglegentur mediocritatem in, est expetendis incorrupte scripserit an.", img: "client-3.jpg", name: "Michael Jonson", comp: "Jfirm" },
  { text: "Donec porttitor tincidunt lorem id semper. Praesent consequat volutpat molestie. Suspendisse sagittis velit et lacus lacinia, vitae dignissim urna feugiat. Nam suscipit sagittis.", img: "client-4.jpg", name: "Angela Ray", comp: "Rays" },
  { text: "Utinam maiestatis quo cu. Id libris patrioque eos, pro soluta dignissim splendide ei, vim in iudico facilis. Usu te liber repudiare. Mea option apeirian periculis et, ex vis graece intellegam, option omittam id quo.", img: "client-4.jpg", name: "Angela Ray", comp: "Rays" },
  { text: "His alii nibh id, mel in dolorem sensibus. Te sea meis decore. Dicunt eligendi id his. In labores oportere splendide cum, pro in altera detracto tacimates. Ne has solum nominati delicata, ea habeo viris quo.", img: "client-2.jpg", name: "Jean Carlson", comp: "Leaf Inc." }
];

export default function TestimonialsPage() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="Testimonials" subtitle="Dictum ultricies magna ultricies" bgImage="images/top-bkgs/about.jpg" />

      <div className="page-holder custom-page-template page-full fullscreen-page clearfix">
        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h4 className="margin-b108 alignc text-center">Client satisfaction is our number one goal. What our clients are saying about their experience with our firm.</h4>
              </div>
            </div>
            <div className="row">
              {clientTestimonials.map((t, i) => (
                <div key={i} className="col-lg-6 mb-30">
                  <div className="testimonial-wrapper" style={{ padding: "30px", background: "#f9f9f9", borderRadius: "4px" }}>
                    <div className="testimonial-content">
                      <h6 style={{ fontStyle: "italic", fontWeight: "normal", color: "#666" }}>&quot;{t.text}&quot;</h6>
                    </div>
                    <div className="icon-box-wrapper d-flex align-items-center mt-20">
                      <div className="icon-box-icon testimonial-client mr-15">
                        <img src={`${BASE}/assets/images/testimonials/${t.img}`} className="rounded-circle" alt="" style={{ width: "60px", height: "60px" }} />
                      </div>
                      <div className="icon-box-content">
                        <div className="client-name" style={{ fontWeight: "bold" }}>{t.name}</div>
                        <p className="client-company mb-0 text-muted">{t.comp}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 alignc">
                <span className="heading-subtitle">Contact Us</span>
                <h2 className="section-heading-title">Get in Touch</h2>
              </div>
              <div className="col-lg-12">
                <div className="contact-form-holder">
                  <form>
                    <div className="row">
                      <div className="col-lg-4 margin-b32">
                        <input type="text" className="form-control comm-field" placeholder="Name" required />
                      </div>
                      <div className="col-lg-4 margin-b32">
                        <input type="email" className="form-control comm-field" placeholder="Email" required />
                      </div>
                      <div className="col-lg-4 margin-b32">
                        <input type="text" className="form-control comm-field" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="margin-b32">
                      <textarea className="form-control" rows={5} placeholder="Message" required></textarea>
                    </div>
                    <button type="submit" className="main-btn">Send message</button>
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
