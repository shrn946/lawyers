"use client";
import { LawfinityPageBanner } from "@/components/demo04/LawfinityPageBanner";
import React from "react";

import { LawfinityFooter } from "@/components/demo04/LawfinityFooter";
import { LawfinityConsultationForm } from "@/components/demo04/LawfinityConsultationForm";
import { LawfinityPreloader } from "@/components/demo04/LawfinityPreloader";
import { LawfinityBackToTop } from "@/components/demo04/LawfinityBackToTop";

export default function LawfinitySixColumFullWidePage() {
  return (
    <>
      <LawfinityPreloader />
      <LawfinityBackToTop />
      <LawfinityConsultationForm />
      <LawfinityPageBanner title="Six Column" currentPageName="Six Column" />
<div className=" blog-posts blogpage-section six-main-box">
        <div id="blog" className="col-xl-12">
            <div className="row wow fadeInUp" style={{"visibility":"visible","animationName":"fadeInUp"}}>
                <div className="col-xl-2 col-lg-6 col-md-6">
                    <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div className="post-image">
                                <a href="/demo-04/three-colum-sidbar">
                                    <img alt="image" src="/demo-04/assets/images/standard_post_img01.jpg" loading="lazy" />
                                </a>
                                {/* post-image */}
                            </div>
                            <div className="lower-portion">
                                <div className="span-i-con">
                                <i className="fa-solid fa-user"></i>
                                <span className="text-size-14 text-mr">By : Admin</span>
                                <i className="tag-mb fa-solid fa-tag"></i>
                                <span className="text-size-14">Virtual Assistant</span>
                                </div>
                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                            {/* post-item-wrap */}
                        </div>
                        {/* post-item */}
                    </div>
                    {/* col */}
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6">
                    <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div id="blogslider" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="/demo-04/assets/images/standard_post_img02.jpg" alt="image" loading="lazy" />
                                        {/* carousel-item */}
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/demo-04/assets/images/standard_post_img03.jpg" alt="image" loading="lazy" />
                                        {/* carousel-item */}
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/demo-04/assets/images/standard_post_img04.jpg" alt="image" loading="lazy" />
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
                                <i className="fa-solid fa-user"></i>
                                <span className="text-size-14 text-mr">By : Admin</span>
                                <i className="tag-mb fa-solid fa-tag"></i>
                                <span className="text-size-14">Virtual Assistant</span>
                                </div>
                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                            {/* post-item-wrap */}
                        </div>
                        {/* post-item */}
                    </div>
                    {/* col */}
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6">
                    <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div className="post-image">
                                <a href="/demo-04/three-colum-sidbar">
                                    <img alt="image" src="/demo-04/assets/images/standard_post_img05.jpg" loading="lazy" /> </a>
                                {/* post-image */}
                            </div>
                            <div className="lower-portion">
                                <div className="span-i-con">
                                <i className="fa-solid fa-user"></i>
                                <span className="text-size-14 text-mr">By : Admin</span>
                                <i className="tag-mb fa-solid fa-tag"></i>
                                <span className="text-size-14">Virtual Assistant</span>
                                </div>
                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                            {/* post-item-wrap */}
                        </div>
                        {/* post-item */}
                    </div>
                    {/* col */}
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6">
                    <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div className="post-audio position-relative">
                                <a href="/demo-04/three-colum-sidbar">
                                    <img alt="image" src="/demo-04/assets/images/standard_post_img06.jpg" loading="lazy" /> </a>
                                {/*  <audio class="position-absolute" controls="">
                                    <source src="horse.ogg" type="audio/ogg">
                                    <source src="assets/audio/horse.mp3" type="audio/mpeg">
                                </audio>  */}
                                {/* post-audio */}
                            </div>
                            <div className="lower-portion">
                                <div className="span-i-con">
                                <i className="fa-solid fa-user"></i>
                                <span className="text-size-14 text-mr">By : Admin</span>
                                <i className="tag-mb fa-solid fa-tag"></i>
                                <span className="text-size-14">Virtual Assistant</span>
                                </div>
                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                            {/* post-item-wrap */}
                        </div>
                        {/* post-item */}
                    </div>
                    {/* col */}
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6">
                    <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div className="post-video">
                                {/*  <style>.embed-container { position: relative; padding-bottom: 66.40%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style>  */}
                                <div className="embed-container"><iframe src="https://player.vimeo.com/video/157467640?background=1"></iframe></div>
                                {/* post-video */}
                            </div>
                            <div className="lower-portion">
                                <div className="span-i-con">
                                <i className="fa-solid fa-user"></i>
                                <span className="text-size-14 text-mr">By : Admin</span>
                                <i className="tag-mb fa-solid fa-tag"></i>
                                <span className="text-size-14">Virtual Assistant</span>
                                </div>
                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                            {/* post-item-wrap */}
                        </div>
                    </div>
                    {/* col */}
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6">
                    <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div className="post-video">
                                <div className="fluid-width-video-wrapper">
                                    <iframe width="560" height="376" src="https://www.youtube.com/embed/dA8Smj5tZOQ"></iframe>
                                    {/* fluid-width-video-wrapper */}
                                </div>
                                {/* post-video */}
                            </div>
                            <div className="infinite-blog float-left">
                                <div className="lower-portion">
                                    <div className="span-i-con">
                                    <i className="fa-solid fa-user"></i>
                                    <span className="text-size-14 text-mr">By : Admin</span>
                                    <i className="tag-mb fa-solid fa-tag"></i>
                                    <span className="text-size-14">Virtual Assistant</span>
                                    </div>
                                    <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante
                                        posuere ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                            {/* post-item-wrap */}
                        </div>
                        {/* post-item */}
                    </div>
                    {/* col */}
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6">
                    <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div className="post-audio position-relative">
                                <a href="/demo-04/three-colum-sidbar">
                                    <img alt="image" src="/demo-04/assets/images/standard_post_img03.jpg" loading="lazy" /> </a>
                                {/*  <audio class="position-absolute" controls="">
                                    <source src="horse.ogg" type="audio/ogg">
                                    <source src="assets/audio/horse.mp3" type="audio/mpeg">
                                </audio>  */}
                                {/* post-audio */}
                            </div>
                            <div className="lower-portion">
                                <div className="span-i-con">
                                <i className="fa-solid fa-user"></i>
                                <span className="text-size-14 text-mr">By : Admin</span>
                                <i className="tag-mb fa-solid fa-tag"></i>
                                <span className="text-size-14">Virtual Assistant</span>
                                </div>
                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                            {/* post-item-wrap */}
                        </div>
                        {/* post-item */}
                    </div>
                    {/* col */}
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6">
                    <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div className="post-video">
                                {/*  <style>.embed-container { position: relative; padding-bottom: 66.40%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style>  */}
                                <div className="embed-container"><iframe src="https://player.vimeo.com/video/157467640?background=1"></iframe></div>
                                {/* post-video */}
                            </div>
                            <div className="lower-portion">
                                <div className="span-i-con">
                                <i className="fa-solid fa-user"></i>
                                <span className="text-size-14 text-mr">By : Admin</span>
                                <i className="tag-mb fa-solid fa-tag"></i>
                                <span className="text-size-14">Virtual Assistant</span>
                                </div>
                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                            {/* post-item-wrap */}
                        </div>
                    </div>
                    {/* col */}
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6">
                    <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div className="post-video">
                                <div className="fluid-width-video-wrapper">
                                    <iframe width="560" height="376" src="https://www.youtube.com/embed/dA8Smj5tZOQ"></iframe>
                                    {/* fluid-width-video-wrapper */}
                                </div>
                                {/* post-video */}
                            </div>
                            <div className="infinite-blog float-left">
                                <div className="lower-portion">
                                    <div className="span-i-con">
                                    <i className="fa-solid fa-user"></i>
                                    <span className="text-size-14 text-mr">By : Admin</span>
                                    <i className="tag-mb fa-solid fa-tag"></i>
                                    <span className="text-size-14">Virtual Assistant</span>
                                    </div>
                                    <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante
                                        posuere ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                            {/* post-item-wrap */}
                        </div>
                        {/* post-item */}
                    </div>
                    {/* col */}
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6">
                    <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div className="post-image">
                                <a href="/demo-04/three-colum-sidbar">
                                    <img alt="image" src="/demo-04/assets/images/standard_post_img04.jpg" loading="lazy" />
                                </a>
                                {/* post-image */}
                            </div>
                            <div className="lower-portion">
                                <div className="span-i-con">
                                <i className="fa-solid fa-user"></i>
                                <span className="text-size-14 text-mr">By : Admin</span>
                                <i className="tag-mb fa-solid fa-tag"></i>
                                <span className="text-size-14">Virtual Assistant</span>
                                </div>
                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                            {/* post-item-wrap */}
                        </div>
                        {/* post-item */}
                    </div>
                    {/* col */}
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6">
                    <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div className="post-image">
                                <a href="/demo-04/three-colum-sidbar">
                                    <img alt="image" src="/demo-04/assets/images/standard_post_img02.jpg" loading="lazy" /> </a>
                                {/* post-image */}
                            </div>
                            <div className="lower-portion">
                                <div className="span-i-con">
                                <i className="fa-solid fa-user"></i>
                                <span className="text-size-14 text-mr">By : Admin</span>
                                <i className="tag-mb fa-solid fa-tag"></i>
                                <span className="text-size-14">Virtual Assistant</span>
                                </div>
                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                            {/* post-item-wrap */}
                        </div>
                        {/* post-item */}
                    </div>
                    {/* col */}
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6">
                    <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                        <div className="post-item-wrap position-relative">
                            <div className="post-image">
                                <a href="/demo-04/three-colum-sidbar">
                                    <img alt="image" src="/demo-04/assets/images/standard_post_img06.jpg" loading="lazy" /> </a>
                            </div>
                            <div className="lower-portion">
                                <div className="span-i-con">
                                <i className="fa-solid fa-user"></i>
                                <span className="text-size-14 text-mr">By : Admin</span>
                                <i className="tag-mb fa-solid fa-tag"></i>
                                <span className="text-size-14">Virtual Assistant</span>
                                </div>
                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
      <LawfinityFooter />
    </>
  );
}
