"use client";
import { LawfinityPageBanner } from "@/components/demo04/LawfinityPageBanner";
import React from "react";

import { LawfinityFooter } from "@/components/demo04/LawfinityFooter";
import { LawfinityConsultationForm } from "@/components/demo04/LawfinityConsultationForm";
import { LawfinityPreloader } from "@/components/demo04/LawfinityPreloader";
import { LawfinityBackToTop } from "@/components/demo04/LawfinityBackToTop";

export default function LawfinityLoadMorePage() {
  return (
    <>
      <LawfinityPreloader />
      <LawfinityBackToTop />
      <LawfinityConsultationForm />
      <LawfinityPageBanner title="Load More" currentPageName="Load More" />
<div className="blog-posts blogpage-section loadblog-section background-gradient">
        <div className="container">
            <div className="row wow fadeInUp">
                <div id="blog" className="col-xl-12">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="blog-box load-blog float-left w-100 post-item mb-4 hide-blog" data-aos="fade-up" data-aos-duration="700">
                                <div className="post-item-wrap position-relative">
                                    <div className="post-image">
                                        <a href="/demo-04/single-blog">
                                            <img alt="image" src="/demo-04/assets/images/standard_post_img01.jpg" loading="lazy" />
                                        </a>
                                    </div>
                                    <div className="lower-portion">
                                        <div className="span-i-con">
                                            <i className="fas fa-user"></i>
                                            <span className="text-size-14 text-mr">By : Admin</span>
                                            <i className="fas fa-tag"></i>
                                            <span className="text-size-14">Virtual Assistant</span>
                                        </div>
                                        <a href="/demo-04/single-blog">
                                            <h5>Why You Need Virtual Assistant for Your Company</h5>
                                        </a>
                                    </div>
                                    <div className="button-portion loadone_twocol">
                                        <div className="date">
                                            <i className="fas fa-calendar-alt"></i>
                                            <span className="mb-0 text-size-14">Dec 20,2022</span>
                                        </div>
                                        <div className="button">
                                            <a className="mb-0 read_more text-decoration-none" href="/demo-04/single-blog">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="blog-box load-blog float-left w-100 post-item mb-4 hide-blog" data-aos="fade-up" data-aos-duration="700">
                                <div className="post-item-wrap position-relative">
                                    <div id="blogslider" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item">
                                                <img src="/demo-04/assets/images/standard_post_img02.jpg" alt="image" loading="lazy" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="/demo-04/assets/images/standard_post_img04.jpg" alt="image" loading="lazy" />
                                            </div>
                                            <div className="carousel-item active">
                                                <img src="/demo-04/assets/images/standard_post_img06.jpg" alt="image" loading="lazy" />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#blogslider" data-slide="prev">
                                            <span className="carousel-control-prev-icon"></span>
                                        </a>
                                        <a className="carousel-control-next" href="#blogslider" data-slide="next">
                                            <span className="carousel-control-next-icon"></span>
                                        </a>
                                    </div>
                                    <div className="lower-portion">
                                        <div className="span-i-con">
                                            <i className="fas fa-user"></i>
                                            <span className="text-size-14 text-mr">By : Admin</span>
                                            <i className="fas fa-tag"></i>
                                            <span className="text-size-14">Virtual Assistant</span>
                                        </div>
                                        <a href="/demo-04/single-blog">
                                            <h5>Why You Need Virtual Assistant for Your Company</h5>
                                        </a>
                                    </div>
                                    <div className="button-portion loadone_twocol">
                                        <div className="date">
                                            <i className="fas fa-calendar-alt"></i>
                                            <span className="mb-0 text-size-14">Dec 20,2022</span>
                                        </div>
                                        <div className="button">
                                            <a className="mb-0 read_more text-decoration-none" href="/demo-04/single-blog">Read
                                                More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="blog-box load-blog float-left w-100 post-item mb-4 hide-blog" data-aos="fade-up" data-aos-duration="700">
                                <div className="post-item-wrap position-relative">
                                    <div className="post-image">
                                        <a href="#"><img alt="image" src="/demo-04/assets/images/standard_post_img03.jpg" loading="lazy" /> </a>
                                    </div>
                                    <div className="lower-portion">
                                        <div className="span-i-con">
                                            <i className="fas fa-user"></i>
                                            <span className="text-size-14 text-mr">By : Admin</span>
                                            <i className="fas fa-tag"></i>
                                            <span className="text-size-14">Virtual Assistant</span>
                                        </div>
                                        <a href="/demo-04/single-blog">
                                            <h5>Why You Need Virtual Assistant for Your Company</h5>
                                        </a>
                                    </div>
                                    <div className="button-portion loadone_twocol">
                                        <div className="date">
                                            <i className="fas fa-calendar-alt"></i>
                                            <span className="mb-0 text-size-14">Dec 20,2022</span>
                                        </div>
                                        <div className="button">
                                            <a className="mb-0 read_more text-decoration-none" href="/demo-04/single-blog">Read
                                                More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row hide-blog hide-blog-outer-wrap">
                                <div className="col-xl-4 col-lg-4">
                                    <div className="blog-box load-blog hide-blog" data-aos="fade-up" data-aos-duration="700">
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
                                                    <i className="fas fa-user"></i>
                                                    <span className="text-size-14 text-mr">By : Admin</span>
                                                    <i className="fas fa-tag"></i>
                                                    <span className="text-size-14">Virtual Assistant</span>
                                                </div>
                                                <a href="/demo-04/single-blog">
                                                    <h5>Why You Need Virtual Assistant for Your Company</h5>
                                                </a>
                                            </div>
                                            <div className="button-portion">
                                                <div className="date">
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span className="mb-0 text-size-14">Dec 20,2022</span>
                                                </div>
                                                <div className="button">
                                                    <a className="mb-0 read_more text-decoration-none" href="/demo-04/single-blog">Read
                                                        More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4">
                                    <div className="blog-box load-blog hide-blog" data-aos="fade-up" data-aos-duration="700">
                                        <div className="post-item-wrap position-relative">
                                            <div className="post-video">
                                                <div className="embed-container"><iframe src="https://player.vimeo.com/video/157467640?background=1"></iframe>
                                                </div>
                                            </div>
                                            <div className="lower-portion">
                                                <div className="span-i-con">
                                                    <i className="fas fa-user"></i>
                                                    <span className="text-size-14 text-mr">By : Admin</span>
                                                    <i className="fas fa-tag"></i>
                                                    <span className="text-size-14">Virtual Assistant</span>
                                                </div>
                                                <a href="/demo-04/single-blog">
                                                    <h5>Why You Need Virtual Assistant for Your Company</h5>
                                                </a>
                                            </div>
                                            <div className="button-portion">
                                                <div className="date">
                                                    <i className="fas fa-calendar-alt"></i>
                                                    <span className="mb-0 text-size-14">Dec 20,2022</span>
                                                </div>
                                                <div className="button">
                                                    <a className="mb-0 read_more text-decoration-none" href="/demo-04/single-blog">Read
                                                        More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4">
                                    <div className="blog-box hide-blog" data-aos="fade-up" data-aos-duration="700">
                                        <div className="post-item-wrap position-relative">
                                            <div className="post-video">
                                                <div className="fluid-width-video-wrapper">
                                                    <iframe width="560" height="376" src="https://www.youtube.com/embed/dA8Smj5tZOQ"></iframe>
                                                </div>
                                            </div>
                                            <div className="infinite-blog float-left">
                                                <div className="lower-portion">
                                                    <div className="span-i-con">
                                                        <i className="fas fa-user"></i>
                                                        <span className="text-size-14 text-mr">By : Admin</span>
                                                        <i className="fas fa-tag"></i>
                                                        <span className="text-size-14">Virtual Assistant</span>
                                                    </div>
                                                    <a href="/demo-04/single-blog">
                                                        <h5>Why You Need Virtual Assistant for Your Company</h5>
                                                    </a>
                                                </div>
                                                <div className="button-portion">
                                                    <div className="date">
                                                        <i className="fas fa-calendar-alt"></i>
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
                        <div className="load-more d-inline-block m-auto align-top" data-aos="fade-up" data-aos-duration="700">
                            <a className="default-btn hover-effect" href="#" id="loadMore">Load More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <LawfinityFooter />
    </>
  );
}
