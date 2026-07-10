"use client";
import { LawfinityPageBanner } from "@/components/demo04/LawfinityPageBanner";
import React from "react";

import { LawfinityFooter } from "@/components/demo04/LawfinityFooter";
import { LawfinityConsultationForm } from "@/components/demo04/LawfinityConsultationForm";
import { LawfinityPreloader } from "@/components/demo04/LawfinityPreloader";
import { LawfinityBackToTop } from "@/components/demo04/LawfinityBackToTop";

export default function LawfinityReviewPage() {
  return (
    <>
      <LawfinityPreloader />
      <LawfinityBackToTop />
      <LawfinityConsultationForm />
      <LawfinityPageBanner title="Reviews" currentPageName="Reviews" />
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
