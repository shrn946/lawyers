"use client";
import { LawfinityPageBanner } from "@/components/demo04/LawfinityPageBanner";
import { LawfinityContactForm } from "@/components/demo04/LawfinityContactForm";
import React from "react";

import { LawfinityFooter } from "@/components/demo04/LawfinityFooter";
import { LawfinityConsultationForm } from "@/components/demo04/LawfinityConsultationForm";
import { LawfinityPreloader } from "@/components/demo04/LawfinityPreloader";
import { LawfinityBackToTop } from "@/components/demo04/LawfinityBackToTop";

export default function LawfinityContactPage() {
  return (
    <>
      <LawfinityPreloader />
      <LawfinityBackToTop />
      <LawfinityConsultationForm />
      <LawfinityPageBanner title="Contact Us" currentPageName="Contact" />
<section className="contact-con position-relative">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="contact_content text-center" data-aos="fade-up">
                    <h6>Contact info</h6>
                    <h2>Our Contact Information</h2>
                    <p className="col-xl-8 col-lg-10 mx-auto mb-0 text-size-16">Nucimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ruas molestias excepturi
                        sint occaecati cupiditate non provident.
                    </p>
                </div>
            </div>
        </div>
        <div className="row" data-aos="fade-up">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="contact-box">
                    <figure className="contact-icon">
                        <img src="/demo-04/assets/images/contact-icon1.png" alt="image" className="img-fluid" />
                    </figure>
                    <h5>Our Location:</h5>
                    <div className="text">
                        <p className="mb-0 text-size-14">121 King Street, Melbourne Victoria 3000 Australia</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="contact-box">
                    <figure className="contact-icon">
                        <img src="/demo-04/assets/images/contact-icon2.png" alt="image" className="img-fluid" />
                    </figure>
                    <h5>Phone Number</h5>
                    <div className="text">
                        <a href="tel:+61383766284" className="mb-0 text-decoration-none text-size-14">(+61 3 8376 6284)</a><br />
                        <a href="tel:+80023456789" className="mb-0 text-decoration-none text-size-14">(+800 2345 6789)</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="contact-box mb-0">
                    <figure className="contact-icon">
                        <img src="/demo-04/assets/images/contact-icon3.png" alt="image" className="img-fluid" />
                    </figure>
                    <h5>Email us at:</h5>
                    <div className="text">
                        <a href="mailto:info@lawfinity.com" className="mb-0 text-decoration-none text-size-14">info@lawfinity.com</a><br />
                        <a href="mailto:lawfinity@gmail.com" className="mb-0 text-decoration-none text-size-14">lawfinity@gmail.com</a>
                    </div>
                </div>
            </div>           
        </div>
    </div>
</section>
<section className="consultation-con position-relative">
    <figure className="consultation-sideimage mb-0">
        <img src="/demo-04/assets/images/consultation-sideimage.png" alt="image" className="image-fluid" />
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="consultation_wrapper position-relative">
                    <figure className="consultation-image mb-0">
                        <img src="/demo-04/assets/images/contact-image.jpg" alt="image" className="image-fluid" />
                    </figure>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="consultation_content" data-aos="fade-up">
                    <h6>Get in touch</h6>
                    <h2 className="text-white">Send us a Message</h2>
                    <LawfinityContactForm type="message" />
                </div>
            </div>
        </div>
    </div>
</section>
<div className="contact_map_con position-relative" data-aos="fade-up">
    <div className="container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.3329737833114!2d144.96011341590386!3d-37.80566904135444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2s!4v1669200882885!5m2!1sen!2s" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>
      <LawfinityFooter />
    </>
  );
}
