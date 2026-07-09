"use client";

import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

export default function Contact2Page() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="Contact 2" subtitle="Contact us for a free consultation" bgImage="images/top-bkgs/contact.jpg" />

      <div className="page-holder custom-page-template page-full fullscreen-page clearfix">
        {/* SECTION 1 */}
        <section className="section-holder section-home41">
          <div className="container">
            <div className="gmaps" style={{ position: "relative", overflow: "hidden", height: "450px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.9762977047603!2d-73.96009086693977!3d40.69651965846399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bc1f922373f%3A0x398427d98fba822e!2sPark+Ave%2C+Brooklyn%2C+NY%2C+USA!5e0!3m2!1sen!2sro!4v1471514814808"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="Office location map"
              ></iframe>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="section-holder mt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-30">
                <div className="icon-box-wrapper box-contact text-center border p-30 bg-white">
                  <div className="icon-box-icon mb-15" style={{ fontSize: "36px", color: "#bfa15f" }}><i className="fas fa-map-marker-alt"></i></div>
                  <div className="icon-box-content">
                    <div className="icon-box-title" style={{ fontWeight: "bold" }}>OFFICE</div>
                    <p className="icon-box-description mb-0 text-muted">40 Park Ave, Brooklyn, New York</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-30">
                <div className="icon-box-wrapper box-contact text-center border p-30 bg-white">
                  <div className="icon-box-icon mb-15" style={{ fontSize: "36px", color: "#bfa15f" }}><i className="fas fa-phone-alt"></i></div>
                  <div className="icon-box-content">
                    <div className="icon-box-title" style={{ fontWeight: "bold" }}>PHONE</div>
                    <p className="icon-box-description mb-0 text-muted">1-800-000-111<br />1-800-000-222</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-30">
                <div className="icon-box-wrapper box-contact text-center border p-30 bg-white">
                  <div className="icon-box-icon mb-15" style={{ fontSize: "36px", color: "#bfa15f" }}><i className="far fa-envelope"></i></div>
                  <div className="icon-box-content">
                    <div className="icon-box-title" style={{ fontWeight: "bold" }}>EMAIL</div>
                    <p className="icon-box-description mb-0 text-muted">office@lawyers.com<br />support@lawyers.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 alignc text-center">
                <span className="heading-subtitle">Contact</span>
                <h2 className="section-heading-title">Get In Touch</h2>
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
                    <button type="submit" className="main-btn alignc">Send message</button>
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
