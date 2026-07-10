"use client";
import { LawfinityPageBanner } from "@/components/demo04/LawfinityPageBanner";
import { LawfinityContactForm } from "@/components/demo04/LawfinityContactForm";
import React from "react";

import { LawfinityFooter } from "@/components/demo04/LawfinityFooter";
import { LawfinityConsultationForm } from "@/components/demo04/LawfinityConsultationForm";
import { LawfinityPreloader } from "@/components/demo04/LawfinityPreloader";
import { LawfinityBackToTop } from "@/components/demo04/LawfinityBackToTop";

export default function LawfinityAboutPage() {
  return (
    <>
      <LawfinityPreloader />
      <LawfinityBackToTop />
      <LawfinityConsultationForm />
      <LawfinityPageBanner title="About Us" currentPageName="About" />
<section className="aboutpage-con position-relative">
    <figure className="about-sideimage mb-0">
        <img src="/demo-04/assets/images/lawyer-sideimage.png" alt="image" className="img-fluid" />
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-2 text-lg-left text-center">
                <div className="about_wrapper position-relative" data-aos="zoom-in">
                    <figure className="about-image mb-0">
                        <img src="/demo-04/assets/images/aboutpage-image.jpg" alt="image" className="img-fluid" />
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
<section className="succeed-con position-relative">
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
                    <h2 className="text-white">Book a free consultation</h2>
                    <LawfinityContactForm type="appointment" />
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
<section className="article-con">
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
