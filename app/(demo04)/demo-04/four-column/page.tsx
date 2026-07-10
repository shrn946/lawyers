"use client";
import { LawfinityPageBanner } from "@/components/demo04/LawfinityPageBanner";
import React from "react";

import { LawfinityFooter } from "@/components/demo04/LawfinityFooter";
import { LawfinityConsultationForm } from "@/components/demo04/LawfinityConsultationForm";
import { LawfinityPreloader } from "@/components/demo04/LawfinityPreloader";
import { LawfinityBackToTop } from "@/components/demo04/LawfinityBackToTop";

export default function LawfinityFourColumnPage() {
  return (
    <>
      <LawfinityPreloader />
      <LawfinityBackToTop />
      <LawfinityConsultationForm />
      <LawfinityPageBanner title="Four Column" currentPageName="Four Column" />
<div className="blog-posts blogpage-section background-gradient">
        <div className="container">
            <div className="row wow fadeInUp" style={{"visibility":"visible","animationName":"fadeInUp"}}>
                <div id="blog" className="col-xl-12">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="blog-box fourcolumn-blog float-left w-100 post-item mb-4" data-aos="fade-up" data-aos-duration="700">
                                <div className="post-item-wrap position-relative">
                                    <div className="post-image">
                                        <a href="/demo-04/single-blog">
                                            <img alt="image" src="/demo-04/assets/images/standard_post_img01.jpg" loading="lazy" className="img-fluid" />
                                        </a>
                                        {/* post-image */}
                                    </div>
                                    <div className="lower-portion">
                                    <div className="span-i-con">
                                        <i className="fas fa-user"></i>
                                        <span className="text-size-14 text-mr">By : Admin</span>
                                        <i className="fas fa-tag"></i>
                                        <span className="text-size-14">Virtual Assistant</span>
                                    </div>
                                        <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante
                                            posuere ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                                    {/* post-item-wrap */}
                                </div>
                                {/* post-item */}
                            </div>
                            {/* col */}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="blog-box fourcolumn-blog float-left w-100 post-item mb-4" data-aos="fade-up" data-aos-duration="700">
                                <div className="post-item-wrap position-relative">
                                    <div id="blogslider" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item">
                                                <img src="/demo-04/assets/images/standard_post_img06.jpg" alt="image" loading="lazy" className="img-fluid" />
                                                {/* carousel-item */}
                                            </div>
                                            <div className="carousel-item active">
                                                <img src="/demo-04/assets/images/standard_post_img05.jpg" alt="image" loading="lazy" className="img-fluid" />
                                                {/* carousel-item */}
                                            </div>
                                            <div className="carousel-item">
                                                <img src="/demo-04/assets/images/standard_post_img04.jpg" alt="image" loading="lazy" className="img-fluid" />
                                                {/* carousel-item */}
                                            </div>
                                            {/* carousel-inner */}
                                        </div>
                                        {/*  Left and right controls  */}
                                        <a className="carousel-control-prev" href="#blogslider" data-slide="prev">
                                            <span className="carousel-control-prev-icon"></span>
                                        </a>
                                        <a className="carousel-control-next" href="#blogslider" data-slide="next">
                                            <span className="carousel-control-next-icon"></span>
                                        </a>
                                        {/* blogslider */}
                                    </div>
                                    <div className="lower-portion">
                                        <div className="span-i-con">
                                        <i className="fas fa-user"></i>
                                        <span className="text-size-14 text-mr">By : Admin</span>
                                        <i className="fas fa-tag"></i>
                                        <span className="text-size-14">Virtual Assistant</span>
                                        </div>
                                        <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante
                                            posuere ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                                    {/* post-item-wrap */}
                                </div>
                                {/* post-item */}
                            </div>
                            {/* col */}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="blog-box fourcolumn-blog float-left w-100 post-item mb-4" data-aos="fade-up" data-aos-duration="700">
                                <div className="post-item-wrap position-relative">
                                    <div className="post-image">
                                        <a href="/demo-04/single-blog">
                                            <img alt="image" src="/demo-04/assets/images/standard_post_img02.jpg" loading="lazy" className="img-fluid" /> </a>
                                        {/* post-image */}
                                    </div>
                                    <div className="lower-portion">
                                        <div className="span-i-con">
                                        <i className="fas fa-user"></i>
                                        <span className="text-size-14 text-mr">By : Admin</span>
                                        <i className="fas fa-tag"></i>
                                        <span className="text-size-14">Virtual Assistant</span>
                                        </div>
                                        <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante
                                            posuere ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                                    {/* post-item-wrap */}
                                </div>
                                {/* post-item */}
                            </div>
                            {/* col */}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="blog-box fourcolumn-blog float-left w-100 post-item mb-4" data-aos="fade-up" data-aos-duration="700">
                                <div className="post-item-wrap position-relative">
                                    {/*  <div class="post-audio position-relative">
                                        <a href="single-blog.html">
                                            <img src="assets/images/standard_post_img03.jpg" alt="image" class="img-fluid"
                                                loading="lazy">
                                        </a>
                                        <span class="post-meta-category">
                                        </span>
                                        <audio class="position-absolute" controls="">
                                            <source src="horse.ogg" type="audio/ogg">
                                            <source src="assets/audio/horse.mp3" type="audio/mpeg">
                                        </audio>
                                    </div>  */}
                                    <div className="post-audio position-relative">
                                        <div className="post-image">
                                            <a href="/demo-04/single-blog">
                                                <img alt="image" src="/demo-04/assets/images/standard_post_img03.jpg" loading="lazy" />
                                            </a>
                                            {/* post-image */}
                                        </div>
                                        {/*  <span class="post-meta-category">  */}
                                            {/*  <a href="">Audio</a>  */}
                                        {/*  </span>  */}
                                        {/*  <audio class="position-absolute" controls="">
                                            <source src="horse.ogg" type="audio/ogg">
                                            <source src="assets/audio/horse.mp3" type="audio/mpeg">
                                        </audio>  */}
                                        {/* post-audio */}
                                    </div>
                                    <div className="lower-portion">
                                        <div className="span-i-con">
                                        <i className="fas fa-user"></i>
                                        <span className="text-size-14 text-mr">By : Admin</span>
                                        <i className="fas fa-tag"></i>
                                        <span className="text-size-14">Virtual Assistant</span>
                                        </div>
                                        <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante
                                            posuere ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                                {/* post-item */}
                            </div>
                            {/* col */}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="blog-box fourcolumn-blog float-left w-100 post-item mb-4" data-aos="fade-up" data-aos-duration="700">
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
                                        <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante
                                            posuere ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                            {/* col */}
                        </div>                        
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="blog-box fourcolumn-blog float-left w-100 post-item mb-4" data-aos="fade-up" data-aos-duration="700">
                                <div className="post-item-wrap position-relative">
                                    <div className="post-video">
                                        <div className="embed-container">
                                            <iframe width="560" height="376" src="https://www.youtube.com/embed/dA8Smj5tZOQ">
                                            </iframe>
                                        </div>
                                    </div>
                                    <div className="lower-portion">
                                        <div className="span-i-con">
                                        <i className="fas fa-user"></i>
                                        <span className="text-size-14 text-mr">By : Admin</span>
                                        <i className="fas fa-tag"></i>
                                        <span className="text-size-14">Virtual Assistant</span>
                                        </div>
                                        <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante
                                            posuere ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                            {/* col */}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="blog-box fourcolumn-blog float-left w-100 post-item mb-4" data-aos="fade-up" data-aos-duration="700">
                                <div className="post-item-wrap position-relative">
                                    <div className="post-image">
                                        <a href="/demo-04/single-blog">
                                            <img alt="image" src="/demo-04/assets/images/standard_post_img04.jpg" loading="lazy" className="img-fluid" />
                                        </a>
                                        {/* post-image */}
                                    </div>
                                    <div className="lower-portion">
                                        <div className="span-i-con">
                                        <i className="fas fa-user"></i>
                                        <span className="text-size-14 text-mr">By : Admin</span>
                                        <i className="fas fa-tag"></i>
                                        <span className="text-size-14">Virtual Assistant</span>
                                        </div>
                                        <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante
                                            posuere ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                                    {/* post-item-wrap */}
                                </div>
                                {/* post-item */}
                            </div>
                            {/* col */}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="blog-box fourcolumn-blog float-left w-100 post-item mb-4" data-aos="fade-up" data-aos-duration="700">
                                <div className="post-item-wrap position-relative">
                                    <div className="post-image">
                                        <a href="/demo-04/single-blog">
                                            <img alt="image" src="/demo-04/assets/images/standard_post_img06.jpg" loading="lazy" className="img-fluid" /> </a>
                                        {/* post-image */}
                                    </div>
                                    <div className="lower-portion">
                                        <div className="span-i-con">
                                        <i className="fas fa-user"></i>
                                        <span className="text-size-14 text-mr">By : Admin</span>
                                        <i className="fas fa-tag"></i>
                                        <span className="text-size-14">Virtual Assistant</span>
                                        </div>
                                        <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante
                                            posuere ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                                    {/* post-item-wrap */}
                                </div>
                                {/* post-item */}
                            </div>
                            {/* col */}
                        </div>
                    </div>
                    {/* blog */}
                </div>
            </div>
        </div>
    </div>
      <LawfinityFooter />
    </>
  );
}
