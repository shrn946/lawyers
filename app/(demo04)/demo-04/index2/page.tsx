"use client";

import React from "react";
import { LawfinityHeader } from "@/components/demo04/LawfinityHeader";
import { LawfinityFooter } from "@/components/demo04/LawfinityFooter";
import { LawfinityConsultationForm } from "@/components/demo04/LawfinityConsultationForm";
import { LawfinityPreloader } from "@/components/demo04/LawfinityPreloader";
import { LawfinityBackToTop } from "@/components/demo04/LawfinityBackToTop";

export default function LawfinityIndex2Page() {
  return (
    <>
      <LawfinityPreloader />
      <LawfinityBackToTop />
      <LawfinityConsultationForm />
      <div className="legal_matter position-relative">
    <LawfinityHeader />
    {/*  Banner  */}
    <section className="legal_matter_banner position-relative">
        <div className="container position-relative">
            <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12">
                    <div className="banner_content" data-aos="fade-up">
                        <h6>Welcome to the lawfinity</h6>
                        <h1 className="text-white">We are Here to Assist You in Resolving Your Legal Matters.</h1>
                        <p className="text-white text-size-16">Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla sint occaecat cupidatat non sunt in
                            mollit anim laborum.
                        </p>
                        <a href="/demo-04/contact" className="text-decoration-none appointment">Book Appointment<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12">
                    <div className="banner_wrapper position-relative">
                        <figure className="banner-image mb-0" data-aos="fade-up">
                            <img src="/demo-04/assets/images/banner-image.png" alt="image" className="img-fluid" />
                        </figure>
                        <figure className="banner-background mb-0">
                            <img src="/demo-04/assets/images/banner3-background.jpg" alt="image" className="img-fluid" />
                        </figure>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled mb-0 social-icons">
                <li><a href="https://www.facebook.com/login/" className="text-decoration-none"><i className="fa-brands fa-facebook-f social-networks"></i></a></li>
                <li><a href="https://twitter.com/i/flow/login" className="text-decoration-none"><i className="fa-brands fa-x-twitter social-networks"></i></a></li>
                <li><a href="https://www.linkedin.com/login" className="text-decoration-none"><i className="fa-brands fa-linkedin social-networks"></i></a></li>
            </ul>
        </div>
    </section>
</div>
<section className="expertise-con">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="expertise_content text-center" data-aos="fade-up">
                    <h6>Our Expertise</h6>
                    <h2>Our Legal Practice Areas</h2>
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
                        <div className="expertise-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/expertise-image1.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <a href="/demo-04/practice-area" className="text-decoration-none"><h5>Immigration Law</h5></a>
                                <p className="text-size-14">Aute irure dolor in reprehenderit in voluptate velit esse cillum maiores alias conse noloribus...</p>
                                <a href="/demo-04/practice-area" className="text-decoration-none read_more">Read more<i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="expertise-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/expertise-image2.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <a href="/demo-04/practice-area" className="text-decoration-none"><h5>Business Law</h5></a>
                                <p className="text-size-14">Zute irure dolor in reprehenderit in voluptate velit esse cillum maiores alias conse noloribus...</p>
                                <a href="/demo-04/practice-area" className="text-decoration-none read_more">Read more<i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="expertise-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/expertise-image3.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <a href="/demo-04/practice-area" className="text-decoration-none"><h5>Criminal Law</h5></a>
                                <p className="text-size-14">Nute irure dolor in reprehenderit in voluptate velit esse cillum maiores alias conse noloribus...</p>
                                <a href="/demo-04/practice-area" className="text-decoration-none read_more">Read more<i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="expertise-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/expertise-image1.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <a href="/demo-04/practice-area" className="text-decoration-none"><h5>Immigration Law</h5></a>
                                <p className="text-size-14">Aute irure dolor in reprehenderit in voluptate velit esse cillum maiores alias conse noloribus...</p>
                                <a href="/demo-04/practice-area" className="text-decoration-none read_more">Read more<i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="expertise-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/expertise-image2.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <a href="/demo-04/practice-area" className="text-decoration-none"><h5>Business Law</h5></a>
                                <p className="text-size-14">Zute irure dolor in reprehenderit in voluptate velit esse cillum maiores alias conse noloribus...</p>
                                <a href="/demo-04/practice-area" className="text-decoration-none read_more">Read more<i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="expertise-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/expertise-image3.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <a href="/demo-04/practice-area" className="text-decoration-none"><h5>Criminal Law</h5></a>
                                <p className="text-size-14">Nute irure dolor in reprehenderit in voluptate velit esse cillum maiores alias conse noloribus...</p>
                                <a href="/demo-04/practice-area" className="text-decoration-none read_more">Read more<i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="expertise-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/expertise-image1.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <a href="/demo-04/practice-area" className="text-decoration-none"><h5>Immigration Law</h5></a>
                                <p className="text-size-14">Aute irure dolor in reprehenderit in voluptate velit esse cillum maiores alias conse noloribus...</p>
                                <a href="/demo-04/practice-area" className="text-decoration-none read_more">Read more<i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="expertise-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/expertise-image2.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <a href="/demo-04/practice-area" className="text-decoration-none"><h5>Business Law</h5></a>
                                <p className="text-size-14">Zute irure dolor in reprehenderit in voluptate velit esse cillum maiores alias conse noloribus...</p>
                                <a href="/demo-04/practice-area" className="text-decoration-none read_more">Read more<i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="expertise-box">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/expertise-image3.jpg" alt="image" className="img-fluid" />
                            </figure>
                            <div className="box-content">
                                <a href="/demo-04/practice-area" className="text-decoration-none"><h5>Criminal Law</h5></a>
                                <p className="text-size-14">Nute irure dolor in reprehenderit in voluptate velit esse cillum maiores alias conse noloribus...</p>
                                <a href="/demo-04/practice-area" className="text-decoration-none read_more">Read more<i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="about-con position-relative">
    <figure className="about-sideimage mb-0">
        <img src="/demo-04/assets/images/about-sideimage.png" alt="image" className="image-fluid" />
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                <div className="about_wrapper position-relative">
                    <figure className="about-image mb-0">
                        <img src="/demo-04/assets/images/about-image.jpg" alt="image" className="image-fluid" />
                    </figure>
                </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                <div className="about_content" data-aos="fade-up">
                    <div className="content">
                        <h6>About us</h6>
                        <h2 className="text-white">Providing Top-Notch Legal Representation</h2>
                        <p className="text-white text-size-16">Quis autem vel eum iure reprehenderit rui in ea volurate veli esse ruam nihil molestiae conseauatur vel illum rui dolorema 
                            eum fugiat ruo voluetas nulla pariatur.
                        </p>
                        <ul className="list-unstyled">
                            <li>
                                <i className="fa fa-check" aria-hidden="true"></i>
                                <p className="mb-0 text-size-16">Excepteur sint occaecat cupidatat noru even.</p>
                            </li>
                            <li>
                                <i className="fa fa-check" aria-hidden="true"></i>
                                <p className="mb-0 text-size-16">Duis aute irure dolor in reprehenderit in voluta facis.</p>
                            </li>
                            <li>
                                <i className="fa fa-check" aria-hidden="true"></i>
                                <p className="mb-0 text-size-16">Rerum hic tenetur a sapiente delectus au occae.</p>
                            </li>
                        </ul>
                        <a href="/demo-04/about" className="text-decoration-none read_more">Read More<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="succeed-con legal_matter_succeed position-relative">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="succeed_content" data-aos="fade-up">
                    <h6>Who We Are</h6>
                    <h2>Committed to Helping Our Clients Succeed</h2>
                    <p className="text text-size-16">Nucimus qui blanditiis praesentium voluptatum deleniti atrue corrupti ruos dolores ruas molestias occaecati.</p>
                    <ul className="list-unstyled mb-0">
                        <li>
                            <i className="fa fa-check" aria-hidden="true"></i>
                            <p className="mb-0 text-size-16">Nxcepteur sint occaecat cupidatat noru even.</p>
                        </li>
                        <li>
                            <i className="fa fa-check" aria-hidden="true"></i>
                            <p className="mb-0 text-size-16">Guis aute irure dolor in reprehenderit in voluta facis.</p>
                        </li>
                        <li>
                            <i className="fa fa-check" aria-hidden="true"></i>
                            <p className="mb-0 text-size-16">Kerum hic tenetur a sapiente delectus au occae.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="succeed_wrapper" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="box">
                                <div className="succeed-box">
                                    <figure className="icon">
                                        <img src="/demo-04/assets/images/succeed-icon1.png" alt="image" className="img-fluid" />
                                    </figure>
                                    <span className="number counter">250</span>
                                    <sup className="plus">+</sup>
                                    <span className="text">Business Partners</span>
                                </div> 
                            </div>  
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="succeed-box">
                                <figure className="icon">
                                    <img src="/demo-04/assets/images/succeed-icon2.png" alt="image" className="img-fluid" />
                                </figure>
                                <span className="number counter">180</span>
                                <sup className="plus">+</sup>
                                <span className="text">Cases Done</span>
                            </div> 
                        </div>
                    </div>
                    <div className="succeed-downcontent">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="box">
                                    <div className="succeed-box">
                                        <figure className="icon">
                                            <img src="/demo-04/assets/images/succeed-icon3.png" alt="image" className="img-fluid" />
                                        </figure>
                                        <span className="number counter">370</span>
                                        <sup className="plus">+</sup>
                                        <span className="text">Happy Clients</span>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="succeed-box">
                                    <figure className="icon">
                                        <img src="/demo-04/assets/images/succeed-icon4.png" alt="image" className="img-fluid" />
                                    </figure>
                                    <span className="number counter">90</span>
                                    <sup className="plus">+</sup>
                                    <span className="text">Awards Won</span>
                                </div> 
                            </div>
                        </div>
                    </div>
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
                    <h2>Our Latest Case Studies</h2>
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
<section className="faq_testimonial-con aboutpage-testimonial position-relative">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="faq_testimonial_content text-center" data-aos="fade-up">
                    <h6>Testimonials</h6>
                    <h2 className="mb-0">What our Clients are Saying</h2>
                </div>
            </div>
        </div>
        <div className="row position-relative" data-aos="fade-up">
            <div className="col-12">
                <div className="testimonial_content">
                    <figure className="testimonial-quote">
                        <img src="/demo-04/assets/images/faq-testimonialquote.png" alt="image" className="img-fluid" />
                    </figure>
                    <div className="owl-carousel owl-theme">
                        <div className="item">
                            <div className="content-box">
                                <figure className="testimonial-starimage">
                                    <img src="/demo-04/assets/images/faq-testimonialstar.png" alt="image" className="img-fluid" />
                                </figure>
                                <p className="text-size-18">“Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aur odit aut fugit, sed neatae vitae
                                    dicta ripiscing elit, sed do euismod tempor incidunt labore aredolore magna aliqua ut enim ad minim adipiscing elit, sed do euismod tempor incidunt
                                    labore minima veniam.”
                                </p>
                                <div className="review-content">
                                    <figure className="testimonial-personimage mb-0">
                                        <img src="/demo-04/assets/images/testimonial-personimage.jpg" alt="image" className="img-fluid" />
                                    </figure>
                                    <div className="detail">
                                        <span className="name">Kevin Andrew</span>
                                        <span className="position">CEO, of the company</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="content-box">
                                <figure className="testimonial-starimage">
                                    <img src="/demo-04/assets/images/faq-testimonialstar.png" alt="image" className="img-fluid" />
                                </figure>
                                <p className="text-size-18">“Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aur odit aut fugit, sed neatae vitae
                                    dicta ripiscing elit, sed do euismod tempor incidunt labore aredolore magna aliqua ut enim ad minim adipiscing elit, sed do euismod tempor incidunt
                                    labore minima veniam.”
                                </p>
                                <div className="review-content">
                                    <figure className="testimonial-personimage mb-0">
                                        <img src="/demo-04/assets/images/testimonial-personimage.jpg" alt="image" className="img-fluid" />
                                    </figure>
                                    <div className="detail">
                                        <span className="name">Kevin Andrew</span>
                                        <span className="position">CEO, of the company</span>
                                    </div>
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
<section className="lawyer-con legal_matter_lawyer position-relative">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="lawyer_content text-center" data-aos="fade-up">
                    <h6>Team Members</h6>
                    <h2>Team of Our Expert Lawyers</h2>
                    <p className="col-xl-8 col-lg-10 mx-auto text-size-16 mb-0">Nucimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ruas molestias excepturi
                        sint occaecati cupiditate non provident.
                    </p>
                </div>
            </div>
        </div>
        <div className="row" data-aos="fade-up">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
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
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
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
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
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
      <LawfinityFooter />
    </>
  );
}
