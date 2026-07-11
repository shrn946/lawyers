"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LawmasterHeader } from "@/components/demo05/LawmasterHeader";
import { LawmasterFooter } from "@/components/demo05/LawmasterFooter";
import { LawmasterPageBanner } from "@/components/demo05/LawmasterPageBanner";

export default function LawmasterContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; msg: string }>({
    type: "",
    msg: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.subject.trim()
    ) {
      setStatus({
        type: "success",
        msg: "Your message has been sent successfully! We will contact you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus({
        type: "error",
        msg: "Please fill out all the fields correctly.",
      });
    }
  };

  return (
    <>
      {/* Site Loader */}
      <div id="site-loader" className="load-complete">
        <div className="loader-inner ball-clip-rotate">
          <div></div>
        </div>
      </div>

      <div className="main-container">
        <LawmasterHeader />

        <LawmasterPageBanner
          title="Contact Us"
          description="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question."
          bannerClass="contact-banner"
          breadcrumbs={[
            { label: "home", url: "/demo-05" },
            { label: "Contact Us" },
          ]}
        />

        {/* Contact Us Details */}
        <div className="contact-us container-fluid no-padding">
          <div className="container">
            <div className="section-padding"></div>
            <div className="col-md-4 col-sm-4">
              <div className="contact-content">
                <img src="/demo-05/images/icon/contact-ic-1.png" alt="contact-ic-1" />
                <h3>Our Location</h3>
                <p>
                  189 Design Street, Web Corner<span>Melbourne - 18, Australia</span>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="contact-content">
                <img src="/demo-05/images/icon/contact-ic-2.png" alt="contact-ic-2" />
                <h3>Contact Us Anytime</h3>
                <p>
                  Mobile: (+1) 800 433 633<span>Toll Free: (+1) 800 123 456</span>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="contact-content">
                <img src="/demo-05/images/icon/contact-ic-3.png" alt="contact-ic-3" />
                <h3>Write some words</h3>
                <a href="mailto:Info@Masterlawgroup.com">Info@Masterlawgroup.com</a>
                <a href="mailto:Support@Masterlawgroup.com">Support@Masterlawgroup.com</a>
              </div>
            </div>
          </div>
          <div className="section-padding"></div>
        </div>

        {/* Map Section */}
        <div className="map container-fluid no-padding">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572237!2d144.9537353153403!3d-37.81585627975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4e793770d3%3A0x9ec4d9d300073c14!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625625625625!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form container-fluid no-padding">
          <div className="container">
            <div className="section-header">
              <h5>our skilled Attorneys</h5>
              <h3>Briefly Speaking, We're the Best</h3>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="input_name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="input_email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="input_phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="input_subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <textarea
                  className="form-control"
                  rows={6}
                  id="input_message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <input type="submit" id="btn_submit" value="Send Now" />
              </div>
              {status.type && (
                <div
                  id="alert-msg"
                  className={`alert-msg ${
                    status.type === "success" ? "alert-msg-success" : "alert-msg-failure"
                  }`}
                  style={{ display: "block", marginTop: "20px" }}
                >
                  {status.msg}
                </div>
              )}
            </form>
          </div>
          <div className="section-padding"></div>
        </div>

        <LawmasterFooter />

        {/* Back To Top */}
        <a id="back-to-top" href="#" className="back-to-top" style={{ display: "none" }}>
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </>
  );
}
