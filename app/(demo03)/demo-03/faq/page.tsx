"use client";

import React, { useState } from "react";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

const BASE = "/demo-03";

const faqs = [
  {
    q: "Why our lawyers firm?",
    a: "Lorem ipsum dolor sit amet, mea in tacimates electram. Diam facilis cum ei, ei novum accusamus scribentur per. Ei agam necessitatibus ius. Ius ei dolorem constituto. Vel sale repudiandae no, harum putent vivendum ne ius. Quo ex unum iisque."
  },
  {
    q: "How does it work?",
    a: "Sale vivendum senserit an eum, ubique noster ex pro, at vel accommodare ullamcorper. Cu duo minim vocibus menandri, at omittam voluptatum usu. Fabulas docendi iracundia ex cum, viris putant dissentiunt ex cum. Id vim tale mutat, eu vide velit oporteat pri. Mollis vidisse saperet."
  },
  {
    q: "Is first consultation free?",
    a: "Eam ei suscipit partiendo, nam modus vocibus cotidieque eu, semper apeirian laboramus sit ne. Qui apeirian tacimates at, has errem possim an, eligendi pericula delicatissimi per ad. At pro essent aliquip qualisque, vis splendide posidonium ex. Nec et error quodsi deleniti. Dicit nobis latine qui an, per duis summo impetus an, eam ne perfecto intellegat persequeris."
  },
  {
    q: "How can we help?",
    a: "In cibo aperiri evertitur vis, sit autem facete cotidieque cu, omnesque voluptua voluptatibus mea ut. Cum ea omnes percipitur cotidieque, propriae suavitate te qui, laudem voluptatibus ne ius. Ut eam lorem consul. Eam bonorum percipit explicari in, efficiendi scripserit ex sed. Usu soluta integre fastidii eu. Et mei ipsum sensibus delicata, ius eu choro solet denique. Populo facilisi."
  }
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="FAQ" subtitle="Common Questions" />

      <div className="page-holder custom-page-template page-full fullscreen-page clearfix">
        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 margin-bm54">
                <span className="heading-subtitle">FAQ</span>
                <h2 className="section-heading-title margin-b16">Our job is helping our clients with legal issues</h2>
                <p>Lorem ipsum dolor sit amet, ut eius periculis eos, eu mea suscipit intellegam. Tota consequuntur cu pro, congue efficiantur eos id. Ius in percipit recusabo. Has ex agam audire, id dicat dolores.</p>
                <ul className="faq-list list-unstyled">
                  {faqs.map((faq, i) => (
                    <li key={i} className="mb-20">
                      <h5 className="faq-title" style={{ cursor: "pointer" }} onClick={() => toggleFaq(i)}>
                        <a
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className={activeIndex === i ? "active" : ""}
                          style={{ color: activeIndex === i ? "#bfa15f" : "#333", textDecoration: "none", display: "block", fontWeight: "600" }}
                        >
                          {faq.q}
                        </a>
                      </h5>
                      {activeIndex === i && (
                        <div className="faq-section mt-10" style={{ display: "block" }}>
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <img className="img-fluid margin-b16" src={`${BASE}/assets/images/cases/case-2.jpg`} alt="" />
                <img className="img-fluid" src={`${BASE}/assets/images/cases/case-5.jpg`} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 alignc">
                <span className="heading-subtitle">Have a Question?</span>
                <h2 className="section-heading-title">Get in Touch with Our Experts</h2>
              </div>
              <div className="col-lg-12">
                <div className="contact-form-holder">
                  <form>
                    <div className="row">
                      <div className="col-lg-4 margin-b32">
                        <input type="text" name="name" className="form-control comm-field" placeholder="Name" required />
                      </div>
                      <div className="col-lg-4 margin-b32">
                        <input type="email" name="email" className="form-control comm-field" placeholder="Email" required />
                      </div>
                      <div className="col-lg-4 margin-b32">
                        <input type="text" name="subject" className="form-control comm-field" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="margin-b32">
                      <textarea name="message" id="msg-contact" className="form-control" rows={5} placeholder="Message" required></textarea>
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
