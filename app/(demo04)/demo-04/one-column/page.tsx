"use client";
import { LawfinityPageBanner } from "@/components/demo04/LawfinityPageBanner";
import React from "react";

import { LawfinityFooter } from "@/components/demo04/LawfinityFooter";
import { LawfinityConsultationForm } from "@/components/demo04/LawfinityConsultationForm";
import { LawfinityPreloader } from "@/components/demo04/LawfinityPreloader";
import { LawfinityBackToTop } from "@/components/demo04/LawfinityBackToTop";

export default function LawfinityOneColumnPage() {
  return (
    <>
      <LawfinityPreloader />
      <LawfinityBackToTop />
      <LawfinityConsultationForm />
      <LawfinityPageBanner title="One Column" currentPageName="One Column" />
<div className="blog-posts blogpage-section background-gradient">
        <div className="container">
            <div className="row wow fadeInUp" style={{"visibility":"visible","animationName":"fadeInUp"}}>
                <div id="blog" className="col-xl-12">
                    <div className="blog-box onecolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div className="post-image">
                                <a href="/demo-04/single-blog"><img alt="image" src="/demo-04/assets/images/post-featured.jpg" loading="lazy" /></a>
                            </div>
                            <div className="lower-portion">
                                <div className="span-i-con">
                                <i className="fa-solid fa-user"></i>
                                <span className="text-size-14 text-mr">By : Admin</span>
                                <i className="tag-mb fa-solid fa-tag"></i>
                                <span className="text-size-14">Virtual Assistant</span>
                                </div>
                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula ac sagittis
                                    ante posuere ac pharetra laoreet commodo dolor porta.</p>
                            </div>
                            <div className="button-portion loadone_twocol">
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
                    <div className="blog-box onecolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div id="blogslider" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="/demo-04/assets/images/post-featured2.jpg" alt="image" loading="lazy" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/demo-04/assets/images/post-featured2.jpg" alt="image" loading="lazy" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/demo-04/assets/images/post-featured3.jpg" alt="image" loading="lazy" />
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
                                <i className="fa-solid fa-user"></i>
                                <span className="text-size-14 text-mr">By : Admin</span>
                                <i className="tag-mb fa-solid fa-tag"></i>
                                <span className="text-size-14">Virtual Assistant</span>
                                </div>
                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula ac sagittis
                                    ante posuere ac pharetra laoreet commodo dolor porta.</p>
                            </div>
                            <div className="button-portion loadone_twocol">
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
                    <div className="blog-box onecolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div className="post-image">
                                <a href="/demo-04/single-blog"><img alt="image" src="/demo-04/assets/images/post-featured4.jpg" loading="lazy" /></a>
                            </div>
                            <div className="lower-portion">
                                <div className="span-i-con">
                                <i className="fa-solid fa-user"></i>
                                <span className="text-size-14 text-mr">By : Admin</span>
                                <i className="tag-mb fa-solid fa-tag"></i>
                                <span className="text-size-14">Virtual Assistant</span>
                                </div>
                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula ac sagittis
                                    ante posuere ac pharetra laoreet commodo dolor porta.</p>
                            </div>
                            <div className="button-portion loadone_twocol">
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
                    <div className="blog-box onecolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div className="post-audio position-relative">
                                <a href="/demo-04/single-blog"><img alt="image" src="/demo-04/assets/images/post-featured.jpg" loading="lazy" /> </a>
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
                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula ac sagittis
                                    ante posuere ac pharetra laoreet commodo dolor porta.</p>
                            </div>
                            <div className="button-portion loadone_twocol">
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
                    <div className="blog-box onecolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div className="post-video">
                                <div className="embed-container"><iframe src="https://player.vimeo.com/video/157467640?background=1"></iframe></div>
                            </div>
                            <div className="lower-portion">
                                <div className="span-i-con">
                                <i className="fa-solid fa-user"></i>
                                <span className="text-size-14 text-mr">By : Admin</span>
                                <i className="tag-mb fa-solid fa-tag"></i>
                                <span className="text-size-14">Virtual Assistant</span>
                                </div>
                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula ac sagittis
                                    ante posuere ac pharetra laoreet commodo dolor porta.</p>
                            </div>
                            <div className="button-portion loadone_twocol">
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
                    <div className="blog-box onecolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div className="post-video">
                                <div className="embed-container"><iframe width="560" height="376" src="https://www.youtube.com/embed/dA8Smj5tZOQ"></iframe></div>
                            </div>
                            <div className="lower-portion">
                                <div className="span-i-con">
                                <i className="fa-solid fa-user"></i>
                                <span className="text-size-14 text-mr">By : Admin</span>
                                <i className="tag-mb fa-solid fa-tag"></i>
                                <span className="text-size-14">Virtual Assistant</span>
                                </div>
                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula ac sagittis
                                    ante posuere ac pharetra laoreet commodo dolor porta.</p>
                            </div>
                            <div className="button-portion loadone_twocol">
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
                </div>
            </div>
        </div>
    </div>
      <LawfinityFooter />
    </>
  );
}
