"use client";
import { LawfinityPageBanner } from "@/components/demo04/LawfinityPageBanner";
import React from "react";

import { LawfinityFooter } from "@/components/demo04/LawfinityFooter";
import { LawfinityConsultationForm } from "@/components/demo04/LawfinityConsultationForm";
import { LawfinityPreloader } from "@/components/demo04/LawfinityPreloader";
import { LawfinityBackToTop } from "@/components/demo04/LawfinityBackToTop";

export default function LawfinityThreeColumSidbarPage() {
  return (
    <>
      <LawfinityPreloader />
      <LawfinityBackToTop />
      <LawfinityConsultationForm />
      <LawfinityPageBanner title="Three Column Sidebar" currentPageName="Three Column Sidebar" />
<section className="blog-posts blogpage-section">
        <div className="container">
            <div className="row">
                <div className="col-xl-9 col-lg-9">
                    <div id="blog" className="three-column col-xl-12">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="700">
                                <div className="blog-box threecolumn-blog">
                                    <div className="post-image">
                                        <a href="/demo-04/single-blog">
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
                                        <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante
                                            posuere ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                                {/* col */}
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="700">
                                <div className="blog-box threecolumn-blog">
                                    <div className="post-item-wrap position-relative">
                                        <div id="blogslider" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item">
                                                    <img src="/demo-04/assets/images/standard_post_img02.jpg" alt="image" loading="lazy" />
                                                    {/* carousel-item */}
                                                </div>
                                                <div className="carousel-item active carousel-item-left">
                                                    <img src="/demo-04/assets/images/standard_post_img04.jpg" alt="image" loading="lazy" />
                                                    {/* carousel-item */}
                                                </div>
                                                <div className="carousel-item carousel-item-next carousel-item-left">
                                                    <img src="/demo-04/assets/images/standard_post_img06.jpg" alt="image" loading="lazy" />
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
                                            <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis
                                                ante posuere ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                                        {/* post-item-wrap */}
                                    </div>
                                    {/* post-item */}
                                </div>
                                {/* col */}
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="700">
                                <div className="blog-box threecolumn-blog">
                                    <div className="post-image">
                                        <a href="/demo-04/single-blog">
                                            <img alt="image" src="/demo-04/assets/images/standard_post_img03.jpg" loading="lazy" />
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
                                        <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante
                                            posuere ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                                {/* col */}
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="700">
                                <div className="blog-box threecolumn-blog">
                                    <div className="post-item-wrap position-relative">
                                        <div className="post-audio position-relative">
                                            <div className="post-image">
                                                <a href="/demo-04/single-blog">
                                                    <img alt="image" src="/demo-04/assets/images/standard_post_img05.jpg" loading="lazy" />
                                                </a>
                                                {/* post-image */}
                                            </div>
                                            <span className="post-meta-category">
                                                {/*  <a href="">Audio</a>  */}
                                            </span>
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
                                            <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis
                                                ante posuere ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                                        {/* post-item-wrap */}
                                    </div>
                                    {/* post-item */}
                                </div>
                                {/* col */}
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="700">
                                <div className="blog-box threecolumn-blog">
                                    <div className="post-item-wrap position-relative">
                                        <div className="post-video">
                                            {/*  <style>.embed-container { position: relative; padding-bottom: 66.40%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style>  */}
                                            <div className="embed-container"><iframe src="https://player.vimeo.com/video/157467640?background=1"></iframe>
                                            </div>
                                            {/* post-video */}
                                        </div>
                                        <div className="lower-portion">
                                            <div className="span-i-con">
                                            <i className="fa-solid fa-user"></i>
                                            <span className="text-size-14 text-mr">By : Admin</span>
                                            <i className="tag-mb fa-solid fa-tag"></i>
                                            <span className="text-size-14">Virtual Assistant</span>
                                            </div>
                                            <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis
                                                ante posuere ac. Vivamus luctus commodo dolor porta feugiat.</p>
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
                                        {/* post-item-wrap */}
                                    </div>
                                </div>
                                {/* col */}
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="700">
                                <div className="blog-box threecolumn-blog blogpost-box">
                                    <div className="post-item-wrap position-relative">
                                        <div className="post-video">
                                            <div className="fluid-width-video-wrapper">
                                                <iframe width="560" height="376" src="https://www.youtube.com/embed/dA8Smj5tZOQ"></iframe>
                                                {/* fluid-width-video-wrapper */}
                                            </div>
                                            {/* post-video */}
                                        </div>
                                        {/*  <div class="float-left">  */}
                                        <div className="infinite-blog float-left">
                                            <div className="lower-portion">
                                                <div className="span-i-con">
                                                <i className="fa-solid fa-user"></i>
                                                <span className="text-size-14 text-mr">By : Admin</span>
                                                <i className="tag-mb fa-solid fa-tag"></i>
                                                <span className="text-size-14">Virtual Assistant</span>
                                                </div>
                                                <p className="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac
                                                    sagittis ante posuere ac. Vivamus luctus commodo dolor porta
                                                    feugiat.</p>
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
                                        {/* post-item-description */}
                                        {/*  </div>  */}
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
                <div className="sidebar sticky-sidebar col-lg-3">
                    <div className="theiaStickySidebar">
                        <div className="widget widget-newsletter" data-aos="fade-up" data-aos-duration="700">
                            <form id="widget-search-form-sidebar" className="form-inline">
                                <div className="input-group">
                                    <input type="text" aria-required="true" name="q" className="form-control widget-search-form" placeholder="Search for pages..." />
                                    <div className="input-group-append">
                                        <span className="input-group-btn">
                                            <button type="submit" id="widget-widget-search-form-button" className="btn"><i className="fa fa-search"></i></button>
                                        </span>
                                        {/* input-group-append */}
                                    </div>
                                    {/* input-group */}
                                </div>
                                {/* form-inline */}
                            </form>
                            {/* widget */}
                        </div>
                        <div className="widget">
                            <div className="tabs">
                                <ul className="nav nav-tabs" id="tabs-posts" role="tablist" data-aos="fade-up" data-aos-duration="700">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#popular" role="tab" aria-controls="popular" aria-selected="true">Popular</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#featured" role="tab" aria-controls="featured" aria-selected="false">Featured</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#recent" role="tab" aria-controls="recent" aria-selected="false">Recent</a>
                                    </li>
                                    {/* nav-tabs */}
                                </ul>
                                <div className="tab-content" id="tabs-posts-content" data-aos="fade-up" data-aos-duration="700">
                                    <div className="tab-pane fade show active" id="popular" role="tabpanel">
                                        <div className="post-thumbnail-list">
                                            <div className="post-thumbnail-entry">
                                                <img data-aos="fade-up" alt="image" src="/demo-04/assets/images/side_post_img01.jpg" loading="lazy" />
                                                <div className="post-thumbnail-content">
                                                    <a href="/demo-04/single-blog">A true story, that never been told!</a>
                                                    <span className="post-date"><i className="far fa-clock"></i> 6m ago</span>
                                                    <span className="post-category"><i className="fa fa-tag"></i>
                                                        Technology</span>
                                                    {/* post-thumbnail-content */}
                                                </div>
                                                {/* post-thumbnail-entry */}
                                            </div>
                                            <div className="post-thumbnail-entry">
                                                <img data-aos="fade-up" alt="image" src="/demo-04/assets/images/side_post_img02.jpg" loading="lazy" />
                                                <div className="post-thumbnail-content">
                                                    <a href="/demo-04/single-blog">Beautiful nature, and rare feathers!</a>
                                                    <span className="post-date"><i className="far fa-clock"></i> 24h ago</span>
                                                    <span className="post-category"><i className="fa fa-tag"></i>
                                                        Lifestyle</span>
                                                    {/* post-thumbnail-content */}
                                                </div>
                                                {/* post-thumbnail-entry */}
                                            </div>
                                            <div className="post-thumbnail-entry">
                                                <img data-aos="fade-up" alt="image" src="/demo-04/assets/images/side_post_img03.jpg" loading="lazy" />
                                                <div className="post-thumbnail-content">
                                                    <a href="/demo-04/single-blog">The most happiest time of the day!</a>
                                                    <span className="post-date"><i className="far fa-clock"></i> 11h ago</span>
                                                    <span className="post-category"><i className="fa fa-tag"></i>
                                                        Lifestyle</span>
                                                    {/* post-thumbnail-content */}
                                                </div>
                                                {/* post-thumbnail-entry */}
                                            </div>
                                            {/* post-thumbnail-list */}
                                        </div>
                                        {/* tab-pane */}
                                    </div>
                                    <div className="tab-pane fade" id="featured" role="tabpanel">
                                        <div className="post-thumbnail-list">
                                            <div className="post-thumbnail-entry">
                                                <img data-aos="fade-up" alt="image" src="/demo-04/assets/images/side_post_img03.jpg" loading="lazy" />
                                                <div className="post-thumbnail-content">
                                                    <a href="/demo-04/single-blog">Beautiful nature, and rare feathers!</a>
                                                    <span className="post-date"><i className="far fa-clock"></i> 24h ago</span>
                                                    <span className="post-category"><i className="fa fa-tag"></i>
                                                        Lifestyle</span>
                                                    {/* post-thumbnail-content */}
                                                </div>
                                                {/* post-thumbnail-entry */}
                                            </div>
                                            <div className="post-thumbnail-entry">
                                                <img data-aos="fade-up" alt="image" src="/demo-04/assets/images/side_post_img02.jpg" loading="lazy" />
                                                <div className="post-thumbnail-content">
                                                    <a href="/demo-04/single-blog">The most happiest time of the day!</a>
                                                    <span className="post-date"><i className="far fa-clock"></i> 11h ago</span>
                                                    <span className="post-category"><i className="fa fa-tag"></i>
                                                        Lifestyle</span>
                                                    {/* post-thumbnail-content */}
                                                </div>
                                                {/* post-thumbnail-entry */}
                                            </div>
                                            <div className="post-thumbnail-entry">
                                                <img data-aos="fade-up" alt="image" src="/demo-04/assets/images/side_post_img01.jpg" loading="lazy" />
                                                <div className="post-thumbnail-content">
                                                    <a href="/demo-04/single-blog">New costs and rise of the economy!</a>
                                                    <span className="post-date"><i className="far fa-clock"></i> 11h ago</span>
                                                    <span className="post-category"><i className="fa fa-tag"></i>
                                                        Lifestyle</span>
                                                    {/* post-thumbnail-content */}
                                                </div>
                                                {/* post-thumbnail-entry */}
                                            </div>
                                            {/* post-thumbnail-list */}
                                        </div>
                                        {/* tab-pane */}
                                    </div>
                                    <div className="tab-pane fade" id="recent" role="tabpanel">
                                        <div className="post-thumbnail-list">
                                            <div className="post-thumbnail-entry">
                                                <img data-aos="fade-up" alt="image" src="/demo-04/assets/images/side_post_img02.jpg" loading="lazy" />
                                                <div className="post-thumbnail-content">
                                                    <a href="/demo-04/single-blog">The most happiest time of the day!</a>
                                                    <span className="post-date"><i className="far fa-clock"></i> 11h ago</span>
                                                    <span className="post-category"><i className="fa fa-tag"></i>
                                                        Lifestyle</span>
                                                    {/* post-thumbnail-content */}
                                                </div>
                                                {/* post-thumbnail-entry */}
                                            </div>
                                            <div className="post-thumbnail-entry">
                                                <img data-aos="fade-up" alt="image" src="/demo-04/assets/images/side_post_img01.jpg" loading="lazy" />
                                                <div className="post-thumbnail-content">
                                                    <a href="/demo-04/single-blog">New costs and rise of the economy!</a>
                                                    <span className="post-date"><i className="far fa-clock"></i> 11h ago</span>
                                                    <span className="post-category"><i className="fa fa-tag"></i>
                                                        Lifestyle</span>
                                                    {/* post-thumbnail-content */}
                                                </div>
                                                {/* post-thumbnail-entry */}
                                            </div>
                                            <div className="post-thumbnail-entry">
                                                <img data-aos="fade-up" alt="image" src="/demo-04/assets/images/side_post_img03.jpg" loading="lazy" />
                                                <div className="post-thumbnail-content">
                                                    <a href="/demo-04/single-blog">Beautiful nature, and rare feathers!</a>
                                                    <span className="post-date"><i className="far fa-clock"></i> 24h ago</span>
                                                    <span className="post-category"><i className="fa fa-tag"></i>
                                                        Lifestyle</span>
                                                    {/* post-thumbnail-content */}
                                                </div>
                                                {/* post-thumbnail-entry */}
                                            </div>
                                            {/* post-thumbnail-list */}
                                        </div>
                                        {/* tab-pane */}
                                    </div>
                                    {/* tab-content */}
                                </div>
                                {/* tabs */}
                            </div>
                            {/* widget */}
                        </div>
                        <div className="widget widget-categories">
                            <div className="widget-title font_weight_600">Categories</div>
                            <ul data-aos="fade-up" data-aos-duration="700">
                                <li className="cat-item">
                                    <a href="#">Tips</a>
                                    <span className="cat-count-span">(2)</span>
                                </li>
                                <li className="cat-item">
                                    <a href="#">WordPress</a>
                                    <span className="cat-count-span">(10)</span>
                                </li>
                                <li className="cat-item">
                                    <a href="#">Hosting</a>
                                    <span className="cat-count-span">(7)</span>
                                </li>
                                <li className="cat-item">
                                    <a href="#">PHP</a>
                                    <span className="cat-count-span">(3)</span>
                                </li>
                                <li className="cat-item">
                                    <a href="#">Photography</a>
                                    <span className="cat-count-span">(9)</span>
                                </li>
                                <li className="cat-item">
                                    <a href="#">Advise</a>
                                    <span className="cat-count-span">(2)</span>
                                </li>
                                <li className="cat-item">
                                    <a href="#">Technology</a>
                                    <span className="cat-count-span">(10)</span>
                                </li>
                                <li className="cat-item">
                                    <a href="#">AI</a>
                                    <span className="cat-count-span">(7)</span>
                                </li>
                                <li className="cat-item">
                                    <a href="#">Products</a>
                                    <span className="cat-count-span">(3)</span>
                                </li>
                                <li className="cat-item">
                                    <a href="#">Action</a>
                                    <span className="cat-count-span">(9)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="widget widget-tweeter" data-aos="fade-up" data-aos-duration="700">
                            <h4 className="widget-title font_weight_600">Recent Tweets</h4>
                            <div id="twitter-cnt">
                                <ul>
                                    <li>Rule number 1: Don't overthink it
                                        <a href="#" target="_blank" title="Visit this link">https://t.co/T9Vg7b9XuI</a>
                                        <small>Sep/12/2019</small>
                                    </li>
                                    <li>Smart OR Stylish? How do you balance design principles with design trends? <a href="#" target="_blank" title="Visit this link">https://t.co/yBb0HKiksq</a>
                                        <a href="https://t.co/kR5EhraUuK" target="_blank" title="Visit this link">https://t.co/kR5EhraUuK</a>
                                        <small>Sep/10/2019</small>
                                    </li>
                                </ul>
                                {/* twitter-cnt */}
                            </div>
                            {/* widget */}
                        </div>
                        <div className="widget widget-tags" data-aos="fade-up" data-aos-duration="700">
                            <h4 className="widget-title font_weight_600">Tags</h4>
                            <div className="tags">
                                <a href="#">Tips</a>
                                <a href="#">WordPress</a>
                                <a href="#">Hosting</a>
                                <a href="#">PHP</a>
                                <a href="#">Advise</a>
                                <a href="#">Technology</a>
                                <a href="#">AI</a>
                                <a href="#">Products</a>
                                <a href="#">Action</a>
                                <a href="#">Photography</a>
                                {/* tags */}
                            </div>
                            {/* widget */}
                        </div>
                        {/* theiaStickySidebar */}
                    </div>
                    {/* sidebar */}
                </div>
                {/* row */}
            </div>
        </div>
        {/* container */}
    </section>
      <LawfinityFooter />
    </>
  );
}
