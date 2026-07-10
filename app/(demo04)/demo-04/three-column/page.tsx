"use client";
import { LawfinityPageBanner } from "@/components/demo04/LawfinityPageBanner";
import React from "react";

import { LawfinityFooter } from "@/components/demo04/LawfinityFooter";
import { LawfinityConsultationForm } from "@/components/demo04/LawfinityConsultationForm";
import { LawfinityPreloader } from "@/components/demo04/LawfinityPreloader";
import { LawfinityBackToTop } from "@/components/demo04/LawfinityBackToTop";

export default function LawfinityThreeColumnPage() {
  return (
    <>
      <LawfinityPreloader />
      <LawfinityBackToTop />
      <LawfinityConsultationForm />
      <LawfinityPageBanner title="Three Column" currentPageName="Three Column" />
<section className="blog-posts blogpage-section three-column-con">
        <div className="container">
            <div className="row wow fadeInUp" style={{"visibility":"visible","animationName":"fadeInUp"}}>
                <div id="blog" className="col-xl-12">
                    {/*  threecolumn-blog   */}
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration="700">
                            <div className="blog-box blog-box1">
                                <figure className="blog-image mb-0">
                                    <img src="/demo-04/assets/images/blog-image1.jpg" alt="image" className="img-fluid" loading="lazy" />
                                </figure>
                                <div className="lower-portion">
                                    <div className="span-i-con">
                                    <i className="fa-solid fa-user"></i>
                                    <span className="text-size-14 text-mr">By : Admin</span>
                                    <i className="tag-mb fa-solid fa-tag"></i>
                                    <span className="text-size-14">Virtual Assistant</span>
                                    </div>
                                    <a href="/demo-04/single-blog">
                                        <h5>Why You Need Virtual Assistant for Your Company</h5>
                                    </a>
                                </div>
                                <div className="button-portion ">
                                    <div className="date">
                                        <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                        <span className="mb-0 text-size-14">Dec 20,2022</span>
                                    </div>
                                    <div className="button">
                                        <a className="mb-0 read_more text-decoration-none" href="/demo-04/single-blog">Read
                                            More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration="700">
                            <div className="blog-box blog-box2">
                                <figure className="blog-image mb-0">
                                    <img src="/demo-04/assets/images/blog-image2.jpg" alt="image" className="img-fluid" loading="lazy" />
                                </figure>
                                <div className="lower-portion">
                                    <div className="span-i-con">
                                    <i className="fa-solid fa-user"></i>
                                    <span className="text-size-14 text-mr">By : Admin</span>
                                    <i className="tag-mb fa-solid fa-tag"></i>
                                    <span className="text-size-14">Virtual Assistant</span>
                                    </div>
                                    <a href="/demo-04/single-blog">
                                        <h5>Why You Need Virtual Assistant for Your Company</h5>
                                    </a>
                                </div>
                                <div className="button-portion">
                                    <div className="date">
                                        <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                        <span className="mb-0 text-size-14">Dec 20,2022</span>
                                    </div>
                                    <div className="button">
                                        <a className="mb-0 read_more text-decoration-none" href="/demo-04/single-blog">Read
                                            More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration="700">
                            <div className="blog-box">
                                <figure className="blog-image mb-0">
                                    <img src="/demo-04/assets/images/blog-image3.jpg" alt="image" className="img-fluid" loading="lazy" />
                                </figure>
                                <div className="lower-portion">
                                    <div className="span-i-con">
                                    <i className="fa-solid fa-user"></i>
                                    <span className="text-size-14 text-mr">By : Admin</span>
                                    <i className="tag-mb fa-solid fa-tag"></i>
                                    <span className="text-size-14">Virtual Assistant</span>
                                    </div>
                                    <a href="/demo-04/single-blog">
                                        <h5>Why You Need Virtual Assistant for Your Company</h5>
                                    </a>
                                </div>
                                <div className="button-portion">
                                    <div className="date">
                                        <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                        <span className="mb-0 text-size-14">Dec 20,2022</span>
                                    </div>
                                    <div className="button">
                                        <a className="mb-0 read_more text-decoration-none" href="/demo-04/single-blog">Read
                                            More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration="700">
                            <div className="blog-box">
                                <div className="post-item-wrap position-relative">
                                    <div className="post-audio position-relative">
                                        <a href="#"><img src="/demo-04/assets/images/blog-image4.jpg" alt="image" className="img-fluid" loading="lazy" /></a>
                                        {/*  <audio class="position-absolute" controls="">
                                            <source src="horse.ogg" type="audio/ogg">
                                            <source src="assets/audio/horse.mp3" type="audio/mpeg">
                                        </audio>  */}
                                    </div>
                                    <div className="lower-portion">
                                        <div className="span-i-con">
                                        <i className="fa-solid fa-user"></i>
                                        <span className="text-size-14 text-mr">By : Admin</span>
                                        <i className="tag-mb fa-solid fa-tag"></i>
                                        <span className="text-size-14">Virtual Assistant</span>
                                        </div>
                                        <a href="/demo-04/single-blog">
                                            <h5>Why You Need Virtual Assistant for Your Company</h5>
                                        </a>
                                    </div>
                                    <div className="button-portion">
                                        <div className="date">
                                            <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                            <span className="mb-0 text-size-14">Dec 20,2022</span>
                                        </div>
                                        <div className="button">
                                            <a className="mb-0 read_more text-decoration-none" href="/demo-04/single-blog">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration="700">
                            <div className="blog-box">
                                <div className="post-item-wrap position-relative">
                                    <div className="post-video">
                                        <div className="embed-container"><iframe src="https://player.vimeo.com/video/157467640?background=1"></iframe>
                                        </div>
                                    </div>
                                    <div className="lower-portion">
                                        <div className="span-i-con">
                                        <i className="fa-solid fa-user"></i>
                                        <span className="text-size-14 text-mr">By : Admin</span>
                                        <i className="tag-mb fa-solid fa-tag"></i>
                                        <span className="text-size-14">Virtual Assistant</span>
                                        </div>
                                        <a href="/demo-04/single-blog">
                                            <h5>Why You Need Virtual Assistant for Your Company</h5>
                                        </a>
                                    </div>
                                    <div className="button-portion">
                                        <div className="date">
                                            <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                            <span className="mb-0 text-size-14">Dec 20,2022</span>
                                        </div>
                                        <div className="button">
                                            <a className="mb-0 read_more text-decoration-none" href="/demo-04/single-blog">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration="700">
                            <div className="blog-box blogpost-box">
                                <div className="post-item-wrap position-relative">
                                    <div className="post-video">
                                        <div className="fluid-width-video-wrapper">
                                            <iframe width="560" height="376" src="https://www.youtube.com/embed/dA8Smj5tZOQ"></iframe>
                                        </div>
                                    </div>
                                    <div className="infinite-blog float-left">
                                        <div className="lower-portion">
                                            <div className="span-i-con">
                                            <i className="fa-solid fa-user"></i>
                                            <span className="text-size-14 text-mr">By : Admin</span>
                                            <i className="tag-mb fa-solid fa-tag"></i>
                                            <span className="text-size-14">Virtual Assistant</span>
                                            </div>
                                            <a href="/demo-04/single-blog">
                                                <h5>Why You Need Virtual Assistant for Your Company</h5>
                                            </a>
                                        </div>
                                        <div className="button-portion">
                                            <div className="date">
                                                <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                                <span className="mb-0 text-size-14">Dec 20,2022</span>
                                            </div>
                                            <div className="button">
                                                <a className="mb-0 read_more text-decoration-none" href="/demo-04/single-blog">Read More</a>
                                            </div>
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
      <LawfinityFooter />
    </>
  );
}
