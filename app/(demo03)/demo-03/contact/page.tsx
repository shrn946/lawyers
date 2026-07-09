"use client";

import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

export default function Contact1Page() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="Contact" subtitle="Call Us Today 1-800-000-111" bgImage="images/top-bkgs/contact.jpg" />

      <div className="page-holder custom-page-template page-full fullscreen-page clearfix">
        <section className="section-holder">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <h3 className="margin-b16">Address:</h3>
                <p>40 Park Ave, Brooklyn, New York</p>
                <hr />
                <h3 className="margin-b16">Phone:</h3>
                <p>1-800-000-111</p>
                <hr />
                <h3 className="margin-b16">Office Hours:</h3>
                <p>Monday - Friday: 9AM - 5PM</p>
              </div>
              <div className="col-lg-7">
                <h2 className="section-heading-title margin-b16">Get in Touch with Us</h2>
                <p>At has mollis audire inermis, vim ex alia equidem platonem, pri eius mutat interesset ei. In minim affert eam, cetero legimus moderatius has at. Te has utroque patrioque vituperata, case eligendi</p>
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

        <section>
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
      </div>

      <LawyersFooter />
      <div className="scrollup"> <a className="scrolltop" href="#"> <i className="fa fa-chevron-up"></i> </a></div>
    </>
  );
}
