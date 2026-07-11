"use client";

import React, { useState } from "react";
import { AlegadaHeader } from "@/components/demo06/AlegadaHeader";
import { AlegadaFooter } from "@/components/demo06/AlegadaFooter";
import { AlegadaPageBanner } from "@/components/demo06/AlegadaPageBanner";

export default function AlegadaContactsPage() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", telephone: "", comments: "" });
  const [submitted, setSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.telephone) {
      setSubmitted(true);
      setContactForm({ name: "", email: "", telephone: "", comments: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <>
      <div id="page-preloader">
        <span className="spinner border-t_second_b border-t_prim_a"></span>
      </div>

      <AlegadaHeader />

      <AlegadaPageBanner title="Contact Us" subtitle="Licensed & Certified to Practice Law" />

      {/* Contact Section 2 */}
      <section className="contact-section-2 about-s-1">
        <div className="container">
          <div className="row">
            {/* Quick Contact Form */}
            <div className="col-md-6">
              <div className="text-block-section">
                <h5 className="contact-subtitle">Quick Contact Form</h5>
                <p>
                  Aglada Law Firm is dedicated to provide its clients fair and easy legal services always. Get in touch with us if you think we can help you better.
                </p>
              </div>

              <section className="contact-form mt-20">
                <form onSubmit={handleContactSubmit}>
                  <div className="row">
                    <div className="col-md-12 mb-15">
                      <input
                        className="form-input w-100"
                        placeholder="Your name"
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-md-12 mb-15">
                      <input
                        className="form-input w-100"
                        placeholder="Email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-md-12 mb-15">
                      <input
                        className="form-input w-100"
                        placeholder="Telephone"
                        type="text"
                        value={contactForm.telephone}
                        onChange={(e) => setContactForm({ ...contactForm, telephone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-md-12 mb-15">
                      <textarea
                        name="contact-text"
                        id="contact-text23"
                        cols={90}
                        rows={7}
                        placeholder="Comments"
                        value={contactForm.comments}
                        onChange={(e) => setContactForm({ ...contactForm, comments: e.target.value })}
                        className="w-100"
                      ></textarea>
                      <input className="comment-button" value="Send Message" type="submit" />
                    </div>
                  </div>
                </form>
                {submitted && (
                  <p style={{ color: "#d12a2a", marginTop: "15px" }}>Message sent successfully! We will get back to you shortly.</p>
                )}
              </section>
            </div>

            {/* Info Right Column */}
            <div className="col-md-6">
              <div className="contact-left">
                <h5 className="contact-subtitle">Get In Touch</h5>
                <h4 className="contact-heading-section">Alegada Law Firm</h4>
                <div className="contact-table-wrap d-flex">
                  <div className="table-item">Head Office</div>
                  <div className="table-item-right">4328 Whity Avenue, Suite # 865, Sacramento CA 95817</div>
                </div>
                <div className="contact-table-wrap d-flex">
                  <div className="table-item">Phone / Fax</div>
                  <div className="table-item-right">1-780-624-9821 / (333) 1234 568911</div>
                </div>
                <div className="contact-table-wrap d-flex">
                  <div className="table-item">Email</div>
                  <div className="table-item-right">support@example.com</div>
                </div>
                <div className="contact-table-wrap d-flex">
                  <div className="table-item">Opening Hours</div>
                  <div className="table-item-right">Monday to Friday : 9:00am to 7:00pm</div>
                </div>
                <div className="blog-social normal-social mt-20">
                  <div className="footer-social">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" style={{ padding: 0 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.2576063467645!2d-121.46461948466107!3d38.54041187962817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad10237e199d9%3A0xe54d924ad0c14b98!2sWhite%20Ave%2C%20Sacramento%2C%20CA%2095817!5e0!3m2!1sen!2sus!4v1657800000000!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sacramento Office Location Map"
        ></iframe>
      </section>

      {/* Section 13 */}
      <section className="section-13 logo-back">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="text-block-section d-flex align-items-center">
                <h5>
                  Stay updated with news
                  <br />
                  Subscribe to our Newsletter
                </h5>
              </div>
            </div>
            <div className="col-md-7">
              <form onSubmit={handleSubscribe}>
                <div className="subscribe d-flex align-items-center">
                  <input
                    type="email"
                    placeholder="Email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <input type="submit" value="Subscribe" />
                </div>
              </form>
              {subscribed && (
                <p style={{ color: "#d12a2a", marginTop: "10px" }}>Subscribed successfully!</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <AlegadaFooter />
    </>
  );
}
