"use client";
import { LawfinityPageBanner } from "@/components/demo04/LawfinityPageBanner";
import React from "react";

import { LawfinityFooter } from "@/components/demo04/LawfinityFooter";
import { LawfinityConsultationForm } from "@/components/demo04/LawfinityConsultationForm";
import { LawfinityPreloader } from "@/components/demo04/LawfinityPreloader";
import { LawfinityBackToTop } from "@/components/demo04/LawfinityBackToTop";

export default function LawfinitySingleBlogPage() {
  return (
    <>
      <LawfinityPreloader />
      <LawfinityBackToTop />
      <LawfinityConsultationForm />
      <LawfinityPageBanner title="Single Blog" currentPageName="Single Blog" />
<section className="singleblog-section blogpage-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="main-box">
                        <figure className="image1 mb-3" data-aos="fade-up" data-aos-duration="700">
                            <img src="/demo-04/assets/images/singleblog-image1.jpg" alt="image" className="img-fluid" loading="lazy" />
                        </figure>
                        <div className="content1" data-aos="fade-up" data-aos-duration="700">
                            <h4>Why You Need Virtual Assistant for Your Company</h4>
                            <div className="span-fa-outer-con">
                            <i className="fa-solid fa-user"></i>
                            <span className="text-size-14 text-mr">By : Admin</span>
                            <i className="mb-0 calendar fa-solid fa-calendar-days"></i>
                            <span className="mb-0 text-size-14">Dec 20,2022</span>
                            </div>
                            <p className="text-size-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>
                        </div>
                        <div className="content2" data-aos="fade-up" data-aos-duration="700">
                            <figure className="singleblog-quoteimage">
                                <img src="/demo-04/assets/images/singleblog-quoteimage.png" alt="image" className="img-fluid" loading="lazy" />
                            </figure>
                            <p className="mb-0 text-white text-size-18">“Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur.xcepteur sint occaecat”</p>
                        </div>
                        <p className="text text-size-16">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae
                            ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                            ipsam voluptatem quia voluptas.
                        </p>
                        <div className="content3" data-aos="fade-up" data-aos-duration="700">
                            <figure className="image1 mb-3" data-aos="fade-up">
                                <img src="/demo-04/assets/images/singleblog-image2.jpg" alt="image" className="img-fluid" loading="lazy" />
                            </figure>
                            <p className="text text-size-16">Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                enim ipsam voluptatem quia voluptas.
                            </p>
                        </div>
                        <div className="content4" data-aos="fade-up" data-aos-duration="700">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="tag">
                                        <h4>Releted Tags</h4>
                                        <ul className="mb-0 list-unstyled ">
                                            <li><a className="button text-decoration-none" href="/demo-04/about">Assistant</a>
                                            </li>
                                            <li><a className="button button2 text-decoration-none" href="/demo-04/about">Advice</a></li>
                                            <li><a className="button button3 text-decoration-none" href="/demo-04/about">Virtual</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="icon">
                                        <h4>Social Share</h4>
                                        <div className="social-icons position-absolute">
                                            <ul className="mb-0 list-unstyled ">
                                                <li><a href="https://www.linkedin.com/login" className="text-decoration-none"><i className="fa-brands fa-linkedin-in social-networks"></i></a>
                                                </li>
                                                <li><a href="https://www.instagram.com/" className="text-decoration-none"><i className="fa-brands fa-instagram social-networks"></i></a></li>
                                                <li><a href="https://www.facebook.com/login/" className="text-decoration-none"><i className="fa-brands fa-facebook-f social-networks"></i></a>
                                                </li>
                                                <li><a href="https://twitter.com/i/flow/login" className="text-decoration-none"><i className="fa-brands fa-x-twitter social-networks"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttons aos-init aos-animate" data-aos="fade-up">
                            <a href="/demo-04/single-blog" className="prev">
                                <span className="prev-text">Prev</span>
                            </a>
                            <a href="/demo-04/single-blog" className="next">
                                <span className="next-text">Next</span>
                            </a>
                        </div>
                        <div className="content5" data-aos="fade-up" data-aos-duration="700">
                            <figure className="singleblog-review1 mb-0">
                                <img src="/demo-04/assets/images/singleblog-review1.png" alt="image" className="img-fluid" loading="lazy" />
                            </figure>
                            <div className="content">
                                <h4>Billy wallson</h4>
                                <span className="text-size-16">Senior Director</span>
                                <p className="text-size-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali,
                                </p>
                            </div>
                        </div>
                        <div className="content6" data-aos="fade-up" data-aos-duration="700">
                            <h4>2 Comments</h4>
                            <div className="comment">
                                <div className="image" data-aos="flip-left"><img alt="image" src="/demo-04/assets/images/singleblog-review2.png" className="avatar" loading="lazy" /></div>
                                <div className="content">
                                    <h5>Roseanne Williams</h5>
                                    <span className="text-size-14">Dec 29, 2022</span>
                                    <a className="reply text-decoration-none" href="#">Reply</a>
                                    <div className="text_holder">
                                        <p className="text-size-16">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="image" data-aos="flip-left"><img alt="image" src="/demo-04/assets/images/singleblog-review3.png" className="avatar" loading="lazy" /></div>
                                <div className="content">
                                    <h5>Samantha Nicolan</h5>
                                    <span className="text-size-14">Dec 29, 2022</span>
                                    <a className="reply text-decoration-none" href="#">Reply</a>
                                    <div className="text_holder">
                                        <p className="text-size-16">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content7" data-aos="fade-up" data-aos-duration="700">
                            <h4>Leave a Comment</h4>
                            <form id="blogpage" method="POST">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mb-0">
                                            <textarea className="form_style" placeholder="Enter your comment here..." rows={3} name="msg"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-0">
                                            <input type="text" className="form_style" placeholder="Your name" name="name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group mb-0">
                                            <input type="email" className="form_style" placeholder="Your e-mail" name="emailid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mb-0">
                                            <input type="text" className="form_style text-mb" placeholder="Your topic" name="topic" />
                                        </div>
                                    </div>
                                </div>
                                <div className="button text-center">
                                    <button type="submit" className="post_comment">Post Comment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12 column">
                    <div className="box1" data-aos="fade-up" data-aos-duration="700">
                        <h4>Search News</h4>
                        <form method="POST">
                            <div className="form-row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <input type="text" name="search" id="searchblog" className="form-control upper_layer" placeholder="Search Here..." />
                                    <div className="input-group-append form-button">
                                        <button className="btn search" name="btnsearch" id="searchbtn"><i className="fa-solid fa-magnifying-glass"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="box1 box2" data-aos="fade-up" data-aos-duration="700">
                        <h4>Popular Category</h4>
                        <ul className="list-unstyled mb-0">
                            <li className="text-size-16"><a href="/demo-04/three-colum-sidbar">Digital business</a></li>
                            <li className="text-size-16"><a href="/demo-04/three-colum-sidbar">Business Consulting</a></li>
                            <li className="text-size-16"><a href="/demo-04/three-colum-sidbar">Consulting</a></li>
                            <li className="mb-0 text-size-16"><a href="/demo-04/three-colum-sidbar">Business & Finance</a></li>
                        </ul>
                    </div>
                    <div className="box1 box3" data-aos="fade-up" data-aos-duration="700">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <ul className="mb-0 list-unstyled ">
                                <li><a href="https://www.linkedin.com/login" className="text-decoration-none"><i className="fa-brands fa-linkedin-in social-networks"></i></a>
                                </li>
                                <li><a href="https://www.instagram.com/" className="text-decoration-none"><i className="fa-brands fa-instagram social-networks"></i></a></li>
                                <li><a href="https://www.facebook.com/login/" className="text-decoration-none"><i className="fa-brands fa-facebook-f social-networks"></i></a>
                                </li>
                                <li><a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" className="text-decoration-none"><i className="fa-brands fa-x-twitter social-networks"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="box1 box4" data-aos="fade-up" data-aos-duration="700">
                        <h4>Tags</h4>
                        <ul className="tag mb-0 list-unstyled">
                            <li><a className="button text-decoration-none" href="/demo-04/about">Assistant</a></li>
                            <li><a className="button button2 text-decoration-none" href="/demo-04/about">Advice</a></li>
                            <li><a className="button button3 text-decoration-none" href="/demo-04/about">Virtual</a></li>
                            <li><a className="button button4 text-decoration-none" href="/demo-04/about">Designer</a></li>
                            <li><a className="button button5 text-decoration-none" href="/demo-04/about">Blog</a></li>
                            <li><a className="button button6 text-decoration-none" href="/demo-04/about">Support</a></li>
                            <li><a className="button button7 text-decoration-none" href="/demo-04/about">Finance</a></li>
                            <li><a className="button button8 text-decoration-none" href="/demo-04/about">Projects</a></li>
                        </ul>
                    </div>
                    <div className="box1 box5" data-aos="fade-up" data-aos-duration="700">
                        <h4>Feeds</h4>
                        <div className="feed">
                            <figure className="feed-image mb-0" data-aos="fade-up">
                                <img src="/demo-04/assets/images/singleblog-feed1.jpg" alt="image" className="img-fluid" loading="lazy" />
                            </figure>
                            <a href="/demo-04/six-colum-full-wide" className="mb-0">Why You Need Virtual Assistant for Your
                                Company</a>
                        </div>
                        <div className="feed">
                            <figure className="feed-image mb-0" data-aos="fade-up">
                                <img src="/demo-04/assets/images/singleblog-feed2.jpg" alt="image" className="img-fluid" loading="lazy" />
                            </figure>
                            <a href="/demo-04/six-colum-full-wide" className="mb-0">Why You Need Virtual Assistant for Your
                                Company</a>
                        </div>
                        <div className="feed">
                            <figure className="feed-image mb-0" data-aos="fade-up">
                                <img src="/demo-04/assets/images/singleblog-feed3.jpg" alt="image" className="img-fluid" loading="lazy" />
                            </figure>
                            <a href="/demo-04/six-colum-full-wide" className="mb-0">Why You Need Virtual Assistant for Your
                                Company</a>
                        </div>
                        <div className="feed feed4">
                            <figure className="feed-image mb-0" data-aos="fade-up">
                                <img src="/demo-04/assets/images/singleblog-feed4.jpg" alt="image" className="img-fluid" loading="lazy" />
                            </figure>
                            <a href="/demo-04/six-colum-full-wide" className="mb-0">Why You Need Virtual Assistant for Your
                                Company</a>
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
