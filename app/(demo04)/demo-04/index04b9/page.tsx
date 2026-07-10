"use client";
import { LawfinityContactForm } from "@/components/demo04/LawfinityContactForm";
import React from "react";
import { LawfinityHeader } from "@/components/demo04/LawfinityHeader";
import { LawfinityFooter } from "@/components/demo04/LawfinityFooter";
import { LawfinityConsultationForm } from "@/components/demo04/LawfinityConsultationForm";
import { LawfinityPreloader } from "@/components/demo04/LawfinityPreloader";
import { LawfinityBackToTop } from "@/components/demo04/LawfinityBackToTop";

export default function LawfinityIndex04b9Page() {
  return (
    <>
      <LawfinityPreloader />
      <LawfinityBackToTop />
      <LawfinityConsultationForm />
      <div className="banner_outer position-relative">
    <LawfinityHeader />
    {/*  Banner  */}
    <section className="banner-con position-relative">
        <div className="container position-relative">
            <div className="row">
                <div className="col-12">
                    <div className="banner_content">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12">
                                        <h1 className="text-white mb-0">Defending Your Rights in the World of Law and Order</h1>
                                    </div>
                                    <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12">
                                        <div className="content">
                                            <p className="text-white text-size-18">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint
                                                occaecat cupidatat non proident, sunt in deserunt mollit anim id est laborum.
                                            </p>
                                            <a href="/demo-04/contact" className="text-decoration-none appointment">Book Appointment<i className="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12">
                                        <h1 className="text-white mb-0">Defending Your Rights in the World of Law and Order</h1>
                                    </div>
                                    <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12">
                                        <div className="content">
                                            <p className="text-white text-size-18">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint
                                                occaecat cupidatat non proident, sunt in deserunt mollit anim id est laborum.
                                            </p>
                                            <a href="/demo-04/contact" className="text-decoration-none appointment">Book Appointment<i className="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12">
                                        <h1 className="text-white mb-0">Defending Your Rights in the World of Law and Order</h1>
                                    </div>
                                    <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12">
                                        <div className="content">
                                            <p className="text-white text-size-18">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint
                                                occaecat cupidatat non proident, sunt in deserunt mollit anim id est laborum.
                                            </p>
                                            <a href="/demo-04/contact" className="text-decoration-none appointment">Book Appointment<i className="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="banner_wrapper position-relative">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <figure className="banner-image1 mb-0">
                                    <img src="/demo-04/assets/images/banner-image1.jpg" alt="image" className="img-fluid" />
                                </figure>
                            </div>
                            <div className="item">
                                <figure className="banner-image2 mb-0">
                                    <img src="/demo-04/assets/images/banner-image2.jpg" alt="image" className="img-fluid" />
                                </figure>
                            </div>
                            <div className="item">
                                <figure className="banner-image1 mb-0">
                                    <img src="/demo-04/assets/images/banner-image3.jpg" alt="image" className="img-fluid" />
                                </figure>
                            </div>                            
                            <div className="item">
                                <figure className="banner-image2 mb-0">
                                    <img src="/demo-04/assets/images/banner-image4.jpg" alt="image" className="img-fluid" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner_sideicon">
                <a href="#footer" className="scroll text-decoration-none">
                    <figure className="scroll-arrow">
                        <img src="/demo-04/assets/images/banner-scrolldownarrow.png" alt="image" className="img-fluid" />
                    </figure>
                    <span>Discover<br />More</span>
                </a>
                <ul className="list-unstyled mb-0 social-icons">
                    <li><a href="https://www.facebook.com/login/" className="text-decoration-none"><i className="fa-brands fa-facebook-f social-networks"></i></a></li>
                    <li><a href="https://twitter.com/i/flow/login" className="text-decoration-none"><i className="fa-brands fa-x-twitter social-networks"></i></a></li>
                    <li><a href="https://www.linkedin.com/login" className="text-decoration-none"><i className="fa-brands fa-linkedin social-networks"></i></a></li>
                </ul>
            </div>
        </div>
    </section>
</div>
<section className="committed-con position-relative">
    <figure className="committed-rightimage mb-0">
        <img src="/demo-04/assets/images/committed-rightimage.png" alt="image" className="img-fluid" />
    </figure>
    <figure className="committed-leftimage mb-0">
        <img src="/demo-04/assets/images/committed-leftimage.png" alt="image" className="img-fluid" />
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="committed_content" data-aos="fade-up">
                    <h6>What We Do</h6>
                    <h2 className="col-lg-10 col-md-10 col-md-12 p-0">We are committed to providing top-notch <span className="span_borderbootom">legal representation</span> to individuals,
                        families, and businesses.
                    </h2>
                    <p className="col-xl-7 col-lg-8 text-size-16 text1 p-0">Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                        excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.
                    </p>
                    <p className="col-xl-7 col-lg-8 text-size-16 text2 p-0">Repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus maiores alias soluta
                        nobis est eligendi optio cumque nihil imeit minus id quod maxime placeat facere possimus,.
                    </p>
                    <a href="/demo-04/practice-area" className="text-decoration-none read_more">Read More<i className="fa-solid fa-arrow-right"></i></a>
                    <figure className="committed-image mb-0" data-aos="zoom-in">
                        <img src="/demo-04/assets/images/committed-image.png" alt="image" className="img-fluid" />
                    </figure>
                </div>
            </div>
        </div>
        <div className="committed_wrapper" data-aos="fade-up">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="committed-box">
                        <figure className="icon">
                            <img src="/demo-04/assets/images/committed-icon1.png" alt="image" className="img-fluid" />
                        </figure>
                        <h5>Immigration Law</h5>
                        <a href="/demo-04/practice-area" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="committed-box">
                        <figure className="icon">
                            <img src="/demo-04/assets/images/committed-icon2.png" alt="image" className="img-fluid" />
                        </figure>
                        <h5>Business Law</h5>
                        <a href="/demo-04/practice-area" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="committed-box">
                        <figure className="icon">
                            <img src="/demo-04/assets/images/committed-icon3.png" alt="image" className="img-fluid" />
                        </figure>
                        <h5>Criminal Law</h5>
                        <a href="/demo-04/practice-area" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="committed-box">
                        <figure className="icon">
                            <img src="/demo-04/assets/images/committed-icon4.png" alt="image" className="img-fluid" />
                        </figure>
                        <h5>Real Estate Law</h5>
                        <a href="/demo-04/practice-area" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="committed-box">
                        <figure className="icon">
                            <img src="/demo-04/assets/images/committed-icon5.png" alt="image" className="img-fluid" />
                        </figure>
                        <h5>Traffic Violence</h5>
                        <a href="/demo-04/practice-area" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="committed-box">
                        <figure className="icon">
                            <img src="/demo-04/assets/images/committed-icon6.png" alt="image" className="img-fluid" />
                        </figure>
                        <h5>Education Law</h5>
                        <a href="/demo-04/practice-area" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="committed-box">
                        <figure className="icon">
                            <img src="/demo-04/assets/images/committed-icon7.png" alt="image" className="img-fluid" />
                        </figure>
                        <h5>Family Crimes</h5>
                        <a href="/demo-04/practice-area" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="committed-box">
                        <figure className="icon">
                            <img src="/demo-04/assets/images/committed-icon8.png" alt="image" className="img-fluid" />
                        </figure>
                        <h5>Tax Law</h5>
                        <a href="/demo-04/practice-area" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="client-con position-relative">
    <figure className="client-sideimage mb-0">
        <img src="/demo-04/assets/images/client-sideimage.png" alt="image" className="img-fluid" />
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="client_content text-center" data-aos="fade-up">
                    <h6>Who We Are</h6>
                    <h2 className="col-xl-6 col-lg-8 col-md-10 mx-auto">Committed to helping our <span className="span_borderbootom">clients</span> succeed</h2>
                    <p className="col-xl-8 col-lg-10 mx-auto text-size-16">Nucimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ruas molestias excepturi
                        sint occaecati cupiditate non provident.
                    </p>
                    <ul className="list-unstyled">
                        <li>
                            <div className="value">
                                <span className="counter number">250</span>
                                <span className="plus">+</span>
                            </div>
                            <span className="text">Business Partners</span>
                        </li>
                        <li>
                            <div className="value">
                                <span className="counter number">180</span>
                                <span className="plus">+</span>
                            </div>
                            <span className="text">Cases Done</span>
                        </li>
                        <li>
                            <div className="value">
                                <span className="counter number">370</span>
                                <span className="plus">+</span>
                            </div>
                            <span className="text">Happy Clients</span>
                        </li>
                        <li>
                            <div className="value">
                                <span className="counter number">90</span>
                                <span className="plus">+</span>
                            </div>
                            <span className="text">Awards Won</span>
                        </li>
                    </ul>
                    <div className="client_wrapper position-relative">
                        <figure className="client-image mb-0">
                            <img src="/demo-04/assets/images/client-image.jpg" alt="image" className="image-fluid" />
                        </figure>
                        <div className="video_icon">
                            <a className="popup-vimeo" href="https://video-previews.elements.envatousercontent.com/a4464fc1-719e-45da-bf4b-f3ad0e517555/watermarked_preview/watermarked_preview.mp4">
                                <figure className="mb-0">
                                    <img className="thumb img-fluid" style={{"cursor":"pointer"}} src="/demo-04/assets/images/client-videoicon.png" alt="image" />
                                </figure>
                            </a>
                        </div>
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
                        <img src="/demo-04/assets/images/consultation-image.jpg" alt="image" className="image-fluid" />
                    </figure>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="consultation_content" data-aos="fade-up">
                    <h6>Get in touch</h6>
                    <h2 className="text-white">Book a free <span className="span_borderbootom">consultation</span></h2>
                    <LawfinityContactForm type="appointment" />
                </div>
            </div>
        </div>
    </div>
</section>
<section className="case-con">
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="case_content text-center" data-aos="fade-up">
                    <h6>Our Portfolio</h6>
                    <h2>Our latest <span className="span_borderbootom">case</span> studies</h2>
                    <p className="text-size-16 mb-0">Auit zaser aut odit aut fugit sen quia conseauntur magni eos rui ratione voluptatem serui magni dolor eos rui ratione voluptatem.</p>
                </div>
            </div>
        </div>
        <div className="row" data-aos="fade-up">
            <div className="col-12">
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <div className="case-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/case-image1.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <span className="field">Car Insurance</span>
                                <span className="law">Law & Attorney</span>
                                <a href="/demo-04/case-studies" className="text-decoration-none arrow_button"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="case-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/case-image2.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <span className="field">Business & Family</span>
                                <span className="law">Law & Attorney</span>
                                <a href="/demo-04/case-studies" className="text-decoration-none arrow_button"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="case-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/case-image3.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <span className="field">Taxes & Civil</span>
                                <span className="law">Law & Attorney</span>
                                <a href="/demo-04/case-studies" className="text-decoration-none arrow_button"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="case-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/case-image4.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <span className="field">Corporate Security</span>
                                <span className="law">Law & Attorney</span>
                                <a href="/demo-04/case-studies" className="text-decoration-none arrow_button"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="case-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/case-image5.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <span className="field">Property & Real Estate</span>
                                <span className="law">Law & Attorney</span>
                                <a href="/demo-04/case-studies" className="text-decoration-none arrow_button"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="case-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/case-image1.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <span className="field">Car Insurance</span>
                                <span className="law">Law & Attorney</span>
                                <a href="/demo-04/case-studies" className="text-decoration-none arrow_button"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="case-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/case-image2.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <span className="field">Business & Family</span>
                                <span className="law">Law & Attorney</span>
                                <a href="/demo-04/case-studies" className="text-decoration-none arrow_button"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="case-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/case-image3.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <span className="field">Taxes & Civil</span>
                                <span className="law">Law & Attorney</span>
                                <a href="/demo-04/case-studies" className="text-decoration-none arrow_button"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="case-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/case-image4.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <span className="field">Corporate Security</span>
                                <span className="law">Law & Attorney</span>
                                <a href="/demo-04/case-studies" className="text-decoration-none arrow_button"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="case-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/case-image5.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <span className="field">Property & Real Estate</span>
                                <span className="law">Law & Attorney</span>
                                <a href="/demo-04/case-studies" className="text-decoration-none arrow_button"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="case-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/case-image1.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <span className="field">Car Insurance</span>
                                <span className="law">Law & Attorney</span>
                                <a href="/demo-04/case-studies" className="text-decoration-none arrow_button"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="case-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/case-image2.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <span className="field">Business & Family</span>
                                <span className="law">Law & Attorney</span>
                                <a href="/demo-04/case-studies" className="text-decoration-none arrow_button"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="case-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/case-image3.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <span className="field">Taxes & Civil</span>
                                <span className="law">Law & Attorney</span>
                                <a href="/demo-04/case-studies" className="text-decoration-none arrow_button"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="case-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/case-image4.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <span className="field">Corporate Security</span>
                                <span className="law">Law & Attorney</span>
                                <a href="/demo-04/case-studies" className="text-decoration-none arrow_button"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="case-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/case-image5.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <span className="field">Property & Real Estate</span>
                                <span className="law">Law & Attorney</span>
                                <a href="/demo-04/case-studies" className="text-decoration-none arrow_button"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="testimonial-con position-relative">
    <div className="container">
        <div className="row">
            <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12">
                <div className="testimonial_wrapper position-relative">
                    <div className="image-bg"></div>
                    <figure className="testimonial-image mb-0">
                        <img src="/demo-04/assets/images/testimonial-image.png" alt="image" className="img-fluid" />
                    </figure>
                </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12">
                <div className="owl-carousel owl-theme" data-aos="fade-up">
                    <div className="item">
                        <div className="testimonial_content">
                            <div className="content">
                                <figure className="testimonial-quote mb-0">
                                    <img src="/demo-04/assets/images/testimonial-quote.png" alt="image" className="img-fluid" />
                                </figure>
                                <h2 className="mb-0">What our <span className="span_borderbootom">clients</span> are saying</h2>
                            </div>
                            <p className="text-size-18">”Quisruam est rui dolorem ipsum ruia dolor sit consecteturexer non numa eius modi tempora incidunt ut labore et doraeria aure
                                uat volupta rem inciu nar aute irure dolor in reprehenderullaein voluptate velit esse maiores alias consequatur aut perferendis 
                                doloribus asperiores ecessitatibus eveniet.”
                            </p>
                            <div className="review-content">
                                <figure className="testimonial-personimage mb-0">
                                    <img src="/demo-04/assets/images/testimonial-personimage.jpg" alt="image" className="img-fluid" />
                                </figure>
                                <div className="detail">
                                    <span className="name">Kevin Andrew</span>
                                    <span className="position">CEO, of the company</span>
                                    <figure className="testimonial-starimage mb-0">
                                        <img src="/demo-04/assets/images/testimonial-starimage.png" alt="image" className="img-fluid" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial_content">
                            <div className="content">
                                <figure className="testimonial-quote mb-0">
                                    <img src="/demo-04/assets/images/testimonial-quote.png" alt="image" className="img-fluid" />
                                </figure>
                                <h2 className="mb-0">What our <span className="span_borderbootom">clients</span> are saying</h2>
                            </div>
                            <p className="text-size-18">”Quisruam est rui dolorem ipsum ruia dolor sit consecteturexer non numa eius modi tempora incidunt ut labore et doraeria aure
                                uat volupta rem inciu nar aute irure dolor in reprehenderullaein voluptate velit esse maiores alias consequatur aut perferendis 
                                doloribus asperiores ecessitatibus eveniet.”
                            </p>
                            <div className="review-content">
                                <figure className="testimonial-personimage mb-0">
                                    <img src="/demo-04/assets/images/testimonial-personimage.jpg" alt="image" className="img-fluid" />
                                </figure>
                                <div className="detail">
                                    <span className="name">Kevin Andrew</span>
                                    <span className="position">CEO, of the company</span>
                                    <figure className="testimonial-starimage mb-0">
                                        <img src="/demo-04/assets/images/testimonial-starimage.png" alt="image" className="img-fluid" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="violence-con position-relative">
    <div className="container">
        <div className="row">
            <div className="violence_wrapper position-relative">
                <div className="violence_content" data-aos="fade-up">
                    <h1 className="text-white">We are here to fight against any violence</h1>
                    <p className="text-white text-size-16">Repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus maiores alias soluta nobis
                        est eligendi optio cumque nihil imeit minus id quod maxime placeat facere possimus,.
                    </p>
                    <a href="/demo-04/contact" className="text-decoration-none appointment">Book Appointment<i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="lawyer-con position-relative">
    <figure className="lawyer-sideimage mb-0">
        <img src="/demo-04/assets/images/lawyer-sideimage.png" alt="image" className="img-fluid" />
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="lawyer_content text-center" data-aos="fade-up">
                    <h6>Team Members</h6>
                    <h2>Team of our expert <span className="span_borderbootom">lawyers</span></h2>
                    <p className="col-xl-8 col-lg-10 mx-auto text-size-16 mb-0">Qucimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ruas molestias excepturi
                        sint occaecati cupiditate non provident.
                    </p>
                </div>
            </div>
        </div>
        <div className="row" data-aos="fade-up">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="lawyer-box">
                    <figure className="lawyer-image">
                        <img src="/demo-04/assets/images/lawyer-image1.jpg" alt="image" className="img-fluid" />
                    </figure>
                    <div className="content">
                        <h4>Marvin Joner</h4>
                        <span className="text-size-14">Senior Lawyer</span>
                        <ul className="list-unstyled mb-0">
                            <li className="icons"><a href="https://www.facebook.com/login/"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li className="icons"><a href="https://twitter.com/i/flow/login"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li className="icons"><a href="https://www.linkedin.com/login"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="lawyer-box">
                    <figure className="lawyer-image">
                        <img src="/demo-04/assets/images/lawyer-image2.jpg" alt="image" className="img-fluid" />
                    </figure>
                    <div className="content">
                        <h4>Patricia Woodrum</h4>
                        <span className="text-size-14">Assistant Lawyer</span>
                        <ul className="list-unstyled mb-0">
                            <li className="icons"><a href="https://www.facebook.com/login/"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li className="icons"><a href="https://twitter.com/i/flow/login"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li className="icons"><a href="https://www.linkedin.com/login"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="lawyer-box mb-0">
                    <figure className="lawyer-image">
                        <img src="/demo-04/assets/images/lawyer-image3.jpg" alt="image" className="img-fluid" />
                    </figure>
                    <div className="content">
                        <h4>Hannaz Stone</h4>
                        <span className="text-size-14">Junior Lawyer</span>
                        <ul className="list-unstyled mb-0">
                            <li className="icons"><a href="https://www.facebook.com/login/"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li className="icons"><a href="https://twitter.com/i/flow/login"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li className="icons"><a href="https://www.linkedin.com/login"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="article-con">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="article_content text-center" data-aos="fade-up">
                    <h6>News & Articles</h6>
                    <h2>Latest <span className="span_borderbootom">blog</span> posts</h2>
                    <p className="col-xl-8 col-lg-10 mx-auto text-size-16 mb-0">Kucimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ruas molestias excepturi
                        sint occaecati cupiditate non provident.
                    </p>
                </div>
            </div>
        </div>
        <div className="row" data-aos="fade-up">
            <div className="col-12">
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <div className="article-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/article-image1.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <div className="span_wrapper">
                                    <span>March 18, 2019</span>
                                    <span className="dash">-</span>
                                    <span>0 Comments</span>
                                </div>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <h5>Maiores alias consequatur perferendis doloribus</h5>
                                </a>
                                <p className="text-size-14">Aute irure dolor in reprehenderit in voluptate velit esse cillum...</p>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="article-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/article-image2.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <div className="span_wrapper">
                                    <span>March 18, 2019</span>
                                    <span className="dash">-</span>
                                    <span>0 Comments</span>
                                </div>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <h5>Eiusmod tempor incididunt labore aet dolore</h5>
                                </a>
                                <p className="text-size-14">Rute irure dolor in reprehenderit in voluptate velit esse cillum...</p>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="article-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/article-image3.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <div className="span_wrapper">
                                    <span>March 18, 2019</span>
                                    <span className="dash">-</span>
                                    <span>0 Comments</span>
                                </div>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <h5>Dolore aeu fugiat nulla paria sint occaecat</h5>
                                </a>
                                <p className="text-size-14">Gute irure dolor in reprehenderit in voluptate velit esse cillum...</p>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="article-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/article-image1.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <div className="span_wrapper">
                                    <span>March 18, 2019</span>
                                    <span className="dash">-</span>
                                    <span>0 Comments</span>
                                </div>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <h5>Maiores alias consequatur perferendis doloribus</h5>
                                </a>
                                <p className="text-size-14">Aute irure dolor in reprehenderit in voluptate velit esse cillum...</p>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="article-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/article-image2.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <div className="span_wrapper">
                                    <span>March 18, 2019</span>
                                    <span className="dash">-</span>
                                    <span>0 Comments</span>
                                </div>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <h5>Eiusmod tempor incididunt labore aet dolore</h5>
                                </a>
                                <p className="text-size-14">Rute irure dolor in reprehenderit in voluptate velit esse cillum...</p>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="article-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/article-image3.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <div className="span_wrapper">
                                    <span>March 18, 2019</span>
                                    <span className="dash">-</span>
                                    <span>0 Comments</span>
                                </div>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <h5>Dolore aeu fugiat nulla paria sint occaecat</h5>
                                </a>
                                <p className="text-size-14">Gute irure dolor in reprehenderit in voluptate velit esse cillum...</p>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="article-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/article-image1.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <div className="span_wrapper">
                                    <span>March 18, 2019</span>
                                    <span className="dash">-</span>
                                    <span>0 Comments</span>
                                </div>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <h5>Maiores alias consequatur perferendis doloribus</h5>
                                </a>
                                <p className="text-size-14">Aute irure dolor in reprehenderit in voluptate velit esse cillum...</p>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="article-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/article-image2.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <div className="span_wrapper">
                                    <span>March 18, 2019</span>
                                    <span className="dash">-</span>
                                    <span>0 Comments</span>
                                </div>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <h5>Eiusmod tempor incididunt labore aet dolore</h5>
                                </a>
                                <p className="text-size-14">Rute irure dolor in reprehenderit in voluptate velit esse cillum...</p>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="article-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/article-image3.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <div className="span_wrapper">
                                    <span>March 18, 2019</span>
                                    <span className="dash">-</span>
                                    <span>0 Comments</span>
                                </div>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <h5>Dolore aeu fugiat nulla paria sint occaecat</h5>
                                </a>
                                <p className="text-size-14">Gute irure dolor in reprehenderit in voluptate velit esse cillum...</p>
                                <a href="/demo-04/single-blog" className="text-decoration-none">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
      <LawfinityFooter />
    </>
  );
}
