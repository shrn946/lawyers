"use client";

import React from "react";
import { LawfinityHeader } from "@/components/demo04/LawfinityHeader";
import { LawfinityFooter } from "@/components/demo04/LawfinityFooter";
import { LawfinityConsultationForm } from "@/components/demo04/LawfinityConsultationForm";
import { LawfinityPreloader } from "@/components/demo04/LawfinityPreloader";
import { LawfinityBackToTop } from "@/components/demo04/LawfinityBackToTop";

export default function LawfinityIndex1Page() {
  return (
    <>
      <LawfinityPreloader />
      <LawfinityBackToTop />
      <LawfinityConsultationForm />
      <div className="legal_situation position-relative">
    <figure className="banner-rightimage image mb-0">
        <img src="/demo-04/assets/images/banner-rightimage.png" alt="image" className="img-fluid" />
    </figure>
    <figure className="banner-leftimage image mb-0">
        <img src="/demo-04/assets/images/banner-leftimage.png" alt="image" className="img-fluid" />
    </figure>
    <LawfinityHeader />
    {/*  Banner  */}
    <section className="legal_situation_banner position-relative">
        <div className="container position-relative">
            <div className="row">
                <div className="col-12">
                    <div className="banner_content text-center position-relative" data-aos="fade-up">
                        <h6>Welcome to the lawfinity</h6>
                        <h1 className="text-white">We Help You to Solve Your Legal Situations</h1>
                        <p className="text-white text-size-16">Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur sint occaecat cupidatat non sunt in  mollit anim laborum.</p>
                        <a href="/demo-04/contact" className="text-decoration-none appointment">Book Appointment<i className="fa-solid fa-arrow-right"></i></a>
                        <div className="down_button">
                            <a href="#footer" className="scroll text-decoration-none">
                                <figure className="banner-dropdownimage mb-0">
                                    <img src="/demo-04/assets/images/banner-dropdownimage.png" className="img-fluid" alt="image" />
                                </figure>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<section className="aboutpage-con position-relative">
    <figure className="about-sideimage mb-0">
        <img src="/demo-04/assets/images/lawyer-sideimage.png" alt="image" className="img-fluid" />
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-2 text-lg-left text-center">
                <div className="about_wrapper position-relative" data-aos="zoom-in">
                    <figure className="about-image mb-0">
                        <img src="/demo-04/assets/images/about2-image.jpg" alt="image" className="img-fluid" />
                    </figure>
                    <figure className="about-circle mb-0">
                        <img src="/demo-04/assets/images/aboutpage-circle.png" alt="image" className="img-fluid" />
                    </figure>
                    <div className="about-box">
                        <figure className="about-icon">
                            <img src="/demo-04/assets/images/aboutpage-icon.png" alt="image" className="img-fluid" />
                        </figure>
                        <span className="number counter">30</span>
                        <sup className="plus">+</sup>
                        <span className="text">Years of Experience</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
                <div className="about_content" data-aos="fade-up">
                    <h6>About us</h6>
                    <h2>Providing Top-Notch Legal Representation</h2>
                    <p className="text text-size-16">Quis autem vel eum iure reprehenderit rui in ea volurate veli esse ruam nihil molestiae conseauatur vel illum rui dolorema 
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
</section>
<section className="practice-con">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="practice_content text-center" data-aos="fade-up">
                    <h6>Our Expertise</h6>
                    <h2>Our Legal Practice Areas</h2>
                    <p className="col-xl-8 col-lg-10 mx-auto text-size-16 mb-0">Nucimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ruas molestias excepturi
                        sint occaecati cupiditate non provident.
                    </p>
                </div>
            </div>
        </div>
        <div className="row" data-aos="fade-up">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="box">
                    <div className="practice-box">
                        <figure className="icon">
                            <img src="/demo-04/assets/images/practice-icon1.png" alt="image" className="img-fluid" />
                        </figure>
                        <h5>Immigration Law</h5>
                        <p className="text-size-14">Aute irure dolor in reprehenderit in voluptate velit esse cillum maiores alias conse noloribus...</p>
                        <a href="/demo-04/practice-area" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="box">
                    <div className="practice-box">
                        <figure className="icon">
                            <img src="/demo-04/assets/images/practice-icon2.png" alt="image" className="img-fluid" />
                        </figure>
                        <h5>Business Law</h5>
                        <p className="text-size-14">Aute irure dolor in reprehenderit in voluptate velit esse cillum maiores alias conse noloribus...</p>
                        <a href="/demo-04/practice-area" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="box">
                    <div className="practice-box">
                        <figure className="icon">
                            <img src="/demo-04/assets/images/practice-icon3.png" alt="image" className="img-fluid" />
                        </figure>
                        <h5>Criminal Law</h5>
                        <p className="text-size-14">Aute irure dolor in reprehenderit in voluptate velit esse cillum maiores alias conse noloribus...</p>
                        <a href="/demo-04/practice-area" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="box">
                    <div className="practice-box">
                        <figure className="icon">
                            <img src="/demo-04/assets/images/practice-icon4.png" alt="image" className="img-fluid" />
                        </figure>
                        <h5>Real Estate Law</h5>
                        <p className="text-size-14">Aute irure dolor in reprehenderit in voluptate velit esse cillum maiores alias conse noloribus...</p>
                        <a href="/demo-04/practice-area" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="box">
                    <div className="practice-box">
                        <figure className="icon">
                            <img src="/demo-04/assets/images/practice-icon5.png" alt="image" className="img-fluid" />
                        </figure>
                        <h5>Tax Litigation Law</h5>
                        <p className="text-size-14">Aute irure dolor in reprehenderit in voluptate velit esse cillum maiores alias conse noloribus...</p>
                        <a href="/demo-04/practice-area" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="box">
                    <div className="practice-box">
                        <figure className="icon">
                            <img src="/demo-04/assets/images/practice-icon6.png" alt="image" className="img-fluid" />
                        </figure>
                        <h5>Family Crimes</h5>
                        <p className="text-size-14">Aute irure dolor in reprehenderit in voluptate velit esse cillum maiores alias conse noloribus...</p>
                        <a href="/demo-04/practice-area" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="legal_situation_portfolio">
    <div className="container">
        <div className="portfolio_content" data-aos="fade-up">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="content">
                        <h6>Portfolio</h6>
                        <h2 className="mb-0">Our Latest Case Studies</h2>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <p className="text-size-16 mb-0">Quis autem vel eum iure reprehenderit rui in ea volurate veli esse ruam nihil molestiae conseauatur vel illum rui dolorema
                        eum fugiat ruo volue nulla pariatur maiores alias.
                    </p>
                </div>
            </div>
        </div>
        <div className="lower_portion" data-aos="fade-up">
            <div className="row">
                <div className="col-12">
                    <div className="owl-carousel owl-theme">
                        <div className="item">
                            <div className="portfolio-box">
                                <div className="image position-relative">
                                    <figure className="mb-0">
                                        <img src="/demo-04/assets/images/portfolio-image1.jpg" alt="image" className="img-fluid" />
                                    </figure>
                                    <span>Law & Attorney</span>
                                </div>
                                <div className="box-content">
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><h5>Taxes and Civil</h5></a>
                                    <p className="text-size-14">Dolor in reprehenderit in velit esse cillum maiores alias...</p>
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="portfolio-box">
                                <div className="image position-relative">
                                    <figure className="mb-0">
                                        <img src="/demo-04/assets/images/portfolio-image2.jpg" alt="image" className="img-fluid" />
                                    </figure>
                                    <span>Law & Attorney</span>
                                </div>
                                <div className="box-content">
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><h5>Property & Real Estate</h5></a>
                                    <p className="text-size-14">Nolor in reprehenderit in velit esse cillum maiores alias...</p>
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="portfolio-box">
                                <div className="image position-relative">
                                    <figure className="mb-0">
                                        <img src="/demo-04/assets/images/portfolio-image3.jpg" alt="image" className="img-fluid" />
                                    </figure>
                                    <span>Law & Attorney</span>
                                </div>
                                <div className="box-content">
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><h5>Business & Family</h5></a>
                                    <p className="text-size-14">Golor in reprehenderit in velit esse cillum maiores alias...</p>
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="portfolio-box">
                                <div className="image position-relative">
                                    <figure className="mb-0">
                                        <img src="/demo-04/assets/images/portfolio-image1.jpg" alt="image" className="img-fluid" />
                                    </figure>
                                    <span>Law & Attorney</span>
                                </div>
                                <div className="box-content">
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><h5>Taxes and Civil</h5></a>
                                    <p className="text-size-14">Dolor in reprehenderit in velit esse cillum maiores alias...</p>
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="portfolio-box">
                                <div className="image position-relative">
                                    <figure className="mb-0">
                                        <img src="/demo-04/assets/images/portfolio-image2.jpg" alt="image" className="img-fluid" />
                                    </figure>
                                    <span>Law & Attorney</span>
                                </div>
                                <div className="box-content">
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><h5>Property & Real Estate</h5></a>
                                    <p className="text-size-14">Nolor in reprehenderit in velit esse cillum maiores alias...</p>
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="portfolio-box">
                                <div className="image position-relative">
                                    <figure className="mb-0">
                                        <img src="/demo-04/assets/images/portfolio-image3.jpg" alt="image" className="img-fluid" />
                                    </figure>
                                    <span>Law & Attorney</span>
                                </div>
                                <div className="box-content">
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><h5>Business & Family</h5></a>
                                    <p className="text-size-14">Golor in reprehenderit in velit esse cillum maiores alias...</p>
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="portfolio-box">
                                <div className="image position-relative">
                                    <figure className="mb-0">
                                        <img src="/demo-04/assets/images/portfolio-image1.jpg" alt="image" className="img-fluid" />
                                    </figure>
                                    <span>Law & Attorney</span>
                                </div>
                                <div className="box-content">
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><h5>Taxes and Civil</h5></a>
                                    <p className="text-size-14">Dolor in reprehenderit in velit esse cillum maiores alias...</p>
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="portfolio-box">
                                <div className="image position-relative">
                                    <figure className="mb-0">
                                        <img src="/demo-04/assets/images/portfolio-image2.jpg" alt="image" className="img-fluid" />
                                    </figure>
                                    <span>Law & Attorney</span>
                                </div>
                                <div className="box-content">
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><h5>Property & Real Estate</h5></a>
                                    <p className="text-size-14">Nolor in reprehenderit in velit esse cillum maiores alias...</p>
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="portfolio-box">
                                <div className="image position-relative">
                                    <figure className="mb-0">
                                        <img src="/demo-04/assets/images/portfolio-image3.jpg" alt="image" className="img-fluid" />
                                    </figure>
                                    <span>Law & Attorney</span>
                                </div>
                                <div className="box-content">
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><h5>Business & Family</h5></a>
                                    <p className="text-size-14">Golor in reprehenderit in velit esse cillum maiores alias...</p>
                                    <a href="/demo-04/case-studies" className="text-decoration-none"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="faq-con practicearea-faq legal_situation_faq position-relative">
    <div className="container">
        <div className="faq">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="left_column" data-aos="fade-up">
                        <div className="faq_content mb-0">
                            <h6>Faq’s</h6>
                            <h2>Frequently Asked Questions</h2>
                            <p className="text-size-16">Nucimus qui blanditiis praesentium voluptatum deleniti atque 
                                corrupti quos dolores ruas molestias.
                            </p>
                        </div>
                        <div className="accordian-section-inner position-relative">
                            <div className="accordian-inner">
                                <div id="faq_accordion1">
                                    <div className="accordion-card">
                                        <div className="card-header" id="headingOne">
                                            <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                <h5>How do I choose a personal injury lawyer?</h5>
                                            </a>
                                        </div>
                                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne">
                                            <div className="card-body">
                                                <p className="text-size-14 text-left mb-0">Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-card">
                                        <div className="card-header" id="headingTwo">
                                            <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <h5>What should I do if I am involved in a car accident?</h5>
                                            </a>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo">
                                            <div className="card-body">
                                                <p className="text-size-14 text-left mb-0">Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-card">
                                        <div className="card-header" id="headingThree">
                                            <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <h5>How much does legal representation cost?</h5>
                                            </a>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree">
                                            <div className="card-body">
                                                <p className="text-size-14 text-left mb-0">Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
                                            </div>
                                        </div>
                                    </div>                                
                                    <div className="accordion-card">
                                        <div className="card-header" id="headingFour">
                                            <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                <h5>How Do I Choose the Right Attorney?</h5>
                                            </a>
                                        </div>
                                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour">
                                            <div className="card-body">
                                                <p className="text-size-14 text-left mb-0">Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="practicearea_wrapper position-relative" data-aos="zoom-in">
                        <figure className="practicearea-faqimage mb-0">
                            <img src="/demo-04/assets/images/practicearea-faqimage.png" alt="image" className="image-fluid" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="amazing-con position-relative">
    <figure className="amazing-sideimage mb-0">
        <img src="/demo-04/assets/images/amazing-sideimage.png" alt="image" className="image-fluid" />
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="amazing_wrapper position-relative">
                    <figure className="amazing-image mb-0">
                        <img src="/demo-04/assets/images/amazing-image.jpg" alt="image" className="image-fluid" />
                    </figure>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="amazing_content aos-init aos-animate" data-aos="fade-up">
                    <h6>Who We Are</h6>
                    <h2 className="text-white">Get an Amazing Experience With Us</h2>
                    <p className="text-white text-size-16">Nucimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ruas molestias.</p>
                    <div className="content">
                        {/*  <div class="row">  */}
                            {/*  <div class="col-12">  */}
                                {/*  <div class="row">  */}
                                    <div className="upper_portion">
                                        {/*  <div class="col-lg-6 col-md-6 col-sm-6 col-12">  */}
                                            <div className="amazing-box">
                                                <figure className="mb-0 icon icon1">
                                                    <img src="/demo-04/assets/images/succeed-icon1.png" alt="image" className="img-fluid" />
                                                </figure>
                                                <div className="box-content">
                                                    <span className="number counter">250</span>
                                                    <sup className="plus">+</sup>
                                                    <span className="text">Business Partners</span>
                                                </div>
                                            </div>
                                        {/*  </div>  */}
                                        {/*  <div class="col-lg-6 col-md-6 col-sm-6 col-12">  */}
                                            <div className="amazing-box mb-0">
                                                <figure className="mb-0 icon icon2">
                                                    <img src="/demo-04/assets/images/succeed-icon3.png" alt="image" className="img-fluid" />
                                                </figure>
                                                <div className="box-content">
                                                    <span className="number counter">370</span>
                                                    <sup className="plus">+</sup>
                                                    <span className="text">Happy Clients</span>
                                                </div>
                                            </div>
                                        {/*  </div>  */}
                                    </div>
                                    <div className="lower_portion">
                                        {/*  <div class="col-lg-6 col-md-6 col-sm-6 col-12">  */}
                                            <div className="amazing-box">
                                                <figure className="mb-0 icon icon2">
                                                    <img src="/demo-04/assets/images/succeed-icon2.png" alt="image" className="img-fluid" />
                                                </figure>
                                                <div className="box-content">
                                                    <span className="number counter">180</span>
                                                    <sup className="plus">+</sup>
                                                    <span className="text">Cases Done</span>
                                                </div>
                                            </div>
                                        {/*  </div>  */}
                                        {/*  <div class="col-lg-6 col-md-6 col-sm-6 col-12">  */}
                                            <div className="amazing-box mb-0">
                                                <figure className="mb-0 icon icon1">
                                                    <img src="/demo-04/assets/images/succeed-icon4.png" alt="image" className="img-fluid" />
                                                </figure>
                                                <div className="box-content">
                                                    <span className="number counter">90</span>
                                                    <sup className="plus">+</sup>
                                                    <span className="text">Awards Won</span>
                                                </div>
                                            </div>
                                        {/*  </div>  */}
                                    </div>
                                {/*  </div>  */}
                            {/*  </div>  */}
                        {/*  </div>  */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="legal_situation_testimonial position-relative">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="testimonial_content text-center position-relative" data-aos="fade-up">
                    <h6>Testimonials</h6>
                    <h2 className="mb-0">What our Clients are Saying</h2>
                    <figure className="mb-0">
                        <img src="/demo-04/assets/images/testimonial2-quote.png" alt="image" className="img-fluid" />
                    </figure>
                </div>
            </div>
        </div>
        <div className="row position-relative" data-aos="fade-up">
            <div className="col-12">
                <div id="testimonialcarousel" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#testimonialcarousel" data-slide-to="0" className="active">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/testimonial_image1.jpg" alt="image" className="img-fluid" />
                            </figure>
                        </li>
                        <li data-target="#testimonialcarousel" data-slide-to="1" className="">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/testimonial_image2.jpg" alt="image" className="img-fluid" />
                            </figure>
                        </li>
                        <li data-target="#testimonialcarousel" data-slide-to="2" className="">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/testimonial_image3.jpg" alt="image" className="img-fluid" />
                            </figure>
                        </li>
                        <li data-target="#testimonialcarousel" data-slide-to="3" className="">
                            <figure className="mb-0">
                                <img src="/demo-04/assets/images/testimonial_image4.jpg" alt="image" className="img-fluid" />
                            </figure>
                        </li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="testimonial_box">
                                <figure className="testimonial-starimage">
                                    <img src="/demo-04/assets/images/testimonial2-star.png" alt="image" className="img-fluid" />
                                </figure>
                                <p className="text-size-18">“Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aur odit aut fugit, sed neatae vitae
                                    dicta ripiscing elit, sed do euismod tempor incidunt labore aredolore magna aliqua ut enim ad minim adipiscing elit, sed do euismod tempor incidunt
                                    labore minima veniam.”
                                </p>
                                <div className="name_wrapper">
                                    <span className="name">Fergus Douchebag</span>
                                    <span className="position">Happy Customer</span>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="testimonial_box">
                                <figure className="testimonial-starimage">
                                    <img src="/demo-04/assets/images/testimonial2-star.png" alt="image" className="img-fluid" />
                                </figure>
                                <p className="text-size-18">“Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aur odit aut fugit, sed neatae vitae
                                    dicta ripiscing elit, sed do euismod tempor incidunt labore aredolore magna aliqua ut enim ad minim adipiscing elit, sed do euismod tempor incidunt
                                    labore minima veniam.”
                                </p>
                                <div className="name_wrapper">
                                    <span className="name">Helene Paquet</span>
                                    <span className="position">Employee</span>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="testimonial_box">
                                <figure className="testimonial-starimage">
                                    <img src="/demo-04/assets/images/testimonial2-star.png" alt="image" className="img-fluid" />
                                </figure>
                                <p className="text-size-18">“Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aur odit aut fugit, sed neatae vitae
                                    dicta ripiscing elit, sed do euismod tempor incidunt labore aredolore magna aliqua ut enim ad minim adipiscing elit, sed do euismod tempor incidunt
                                    labore minima veniam.”
                                </p>
                                <div className="name_wrapper">
                                    <span className="name">Kevin Andrew</span>
                                    <span className="position">Company Manager</span>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="testimonial_box">
                                <figure className="testimonial-starimage">
                                    <img src="/demo-04/assets/images/testimonial2-star.png" alt="image" className="img-fluid" />
                                </figure>
                                <p className="text-size-18">“Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aur odit aut fugit, sed neatae vitae
                                    dicta ripiscing elit, sed do euismod tempor incidunt labore aredolore magna aliqua ut enim ad minim adipiscing elit, sed do euismod tempor incidunt
                                    labore minima veniam.”
                                </p>
                                <div className="name_wrapper">
                                    <span className="name">Alina Parker</span>
                                    <span className="position">CEO, Global Tech</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination-outer">
                        <a className="carousel-control-prev" href="#testimonialcarousel" role="button" data-slide="prev">
                            <i className="fa-solid fa-arrow-left"></i>
                            {/*  <span class="sr-only">Previous</span>  */}
                        </a>
                        <a className="carousel-control-next" href="#testimonialcarousel" role="button" data-slide="next">
                            <i className="fa-solid fa-arrow-right"></i>
                            {/*  <span class="sr-only">Next</span>  */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="blog-con">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="article_content text-center" data-aos="fade-up">
                    <h6>News & Articles</h6>
                    <h2>Latest Blog Posts</h2>
                    <p className="col-xl-8 col-lg-10 mx-auto text-size-16 mb-0">Kucimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ruas molestias excepturi
                        sint occaecati cupiditate non provident.
                    </p>
                </div>
            </div>
        </div>
        <div className="row" data-aos="fade-up">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="article-box">
                    <figure className="mb-0">
                        <img src="/demo-04/assets/images/article-image4.jpg" alt="image" className="img-fluid" />
                    </figure>
                    <div className="box-content">
                        <div className="span_wrapper">
                            <span>March 18, 2019</span>
                            <span className="dash">-</span>
                            <span>0 Comments</span>
                        </div>
                        <a href="/demo-04/single-blog" className="text-decoration-none">
                            <h5>Maiores alias conseuatur perfer aendis doloribus</h5>
                        </a>
                        <p className="text-size-14 mb-0">Quisquam est rui dolorem iesum  ruia dolor sit amreu...</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="article-box">
                    <figure className="mb-0">
                        <img src="/demo-04/assets/images/article-image5.jpg" alt="image" className="img-fluid" />
                    </figure>
                    <div className="box-content">
                        <div className="span_wrapper">
                            <span>March 18, 2019</span>
                            <span className="dash">-</span>
                            <span>0 Comments</span>
                        </div>
                        <a href="/demo-04/single-blog" className="text-decoration-none">
                            <h5>Eiusmod tempor incididunt labore aet dolore consecteur</h5>
                        </a>
                        <p className="text-size-14 mb-0">Quisquam est rui dolorem iesum  ruia dolor sit amreu...</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="article-box mb-0">
                    <figure className="mb-0">
                        <img src="/demo-04/assets/images/article-image6.jpg" alt="image" className="img-fluid" />
                    </figure>
                    <div className="box-content">
                        <div className="span_wrapper">
                            <span>March 18, 2019</span>
                            <span className="dash">-</span>
                            <span>0 Comments</span>
                        </div>
                        <a href="/demo-04/single-blog" className="text-decoration-none">
                            <h5>Dolore aeu fugiat nulla paria sint occaecat nostrum</h5>
                        </a>
                        <p className="text-size-14 mb-0">Quisquam est rui dolorem iesum  ruia dolor sit amreu...</p>
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
