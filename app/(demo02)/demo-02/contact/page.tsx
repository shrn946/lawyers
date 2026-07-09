"use client";
import Link from "next/link";
import LawgneHeader from "@/components/demo02/LawgneHeader";
import LawgneFooter from "@/components/demo02/LawgneFooter";
import PageBanner from "@/components/demo02/PageBanner";

const BASE = "/demo-02";

export default function ContactPage() {
  return (
    <>
      <div className="preloader"><div className="loader"><img src={`${BASE}/assets/images/loader.png`} alt="loader" /></div></div>
      <LawgneHeader activeMenu="contact" />
      <PageBanner title="Contact Us" breadcrumbs={[{ label: "Home", href: `${BASE}` }, { label: "Contact" }]} />

      {/* Contact Section */}
      <section className="contact-area pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-info-list mb-50">
                {[
                  { img: "info-1.jpg", city: "New York", sub: "(Main)", phone: "+012 (345) 56 998", email: "info@lawgne.com", addr: "59 Main Street, USA", delay: ".5s" },
                  { img: "info-2.jpg", city: "Australia", sub: "(Main)", phone: "+012 (345) 56 998", email: "info@lawgne.com", addr: "59 Main Street, USA", delay: ".7s" },
                  { img: "info-3.jpg", city: "California", sub: "(Main)", phone: "+012 (345) 56 998", email: "info@lawgne.com", addr: "59 Main Street, USA", delay: ".8s" },
                ].map((item, i) => (
                  <div key={i} className="info-item wow fadeInDown" data-wow-delay={item.delay}>
                    <div className="thumb">
                      <img src={`${BASE}/assets/images/contact/${item.img}`} alt="Info Thumb" />
                    </div>
                    <div className="content">
                      <h3>{item.city} <span className="sm-title">{item.sub}</span></h3>
                      <p><i className="far fa-phone"></i><a href={`tel:${item.phone.replace(/\s+/g, '')}`}>{item.phone}</a></p>
                      <p><i className="far fa-envelope"></i><a href={`mailto:${item.email}`}>{item.email}</a></p>
                      <p><i className="far fa-map-marker-alt"></i>{item.addr}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-wrapper-three mb-50">
                <div className="section-title section-title-left mb-30">
                  <h2>Leave a Message</h2>
                  <p>We&apos;re Ready To Help You</p>
                </div>
                <form>
                  <div className="form_group mb-20">
                    <input type="text" className="form_control" placeholder="Full Name" name="name" required />
                  </div>
                  <div className="form_group mb-20">
                    <input type="email" className="form_control" placeholder="Email Address" name="email" required />
                  </div>
                  <div className="form_group mb-20">
                    <textarea className="form_control" placeholder="Write Message" name="message" rows={5}></textarea>
                  </div>
                  <div className="form_group">
                    <button className="main-btn arrow-btn">Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="map-area pb-130">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1613200534009!5m2!1sen!2sbd"
            width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
            title="Office Location Map"
          ></iframe>
        </div>
      </div>

      <LawgneFooter />
      <a href="#" className="back-to-top"><i className="fas fa-angle-up"></i></a>
    </>
  );
}
