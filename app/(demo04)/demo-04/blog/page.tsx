"use client";
import { LawfinityPageBanner } from "@/components/demo04/LawfinityPageBanner";
import React from "react";

import { LawfinityFooter } from "@/components/demo04/LawfinityFooter";
import { LawfinityConsultationForm } from "@/components/demo04/LawfinityConsultationForm";
import { LawfinityPreloader } from "@/components/demo04/LawfinityPreloader";
import { LawfinityBackToTop } from "@/components/demo04/LawfinityBackToTop";

export default function LawfinityBlogPage() {
  return (
    <>
      <LawfinityPreloader />
      <LawfinityBackToTop />
      <LawfinityConsultationForm />
      <LawfinityPageBanner title="Blog" currentPageName="Blog" />
<div className="blog-tabs-section padding-top padding-bottom background-gradient">
        <div className="container">
            <div className="blog-tabs-inner-section" data-aos="fade-up" data-aos-duration="700">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-expanded="true">All</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="advices-tab" data-toggle="tab" href="#advices" role="tab" aria-controls="advices">Advices</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="announcements-tab" data-toggle="tab" href="#announcements" role="tab" aria-controls="announcements">Announcements</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="news-tab" data-toggle="tab" href="#news" role="tab" aria-controls="news">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="consultation-tab" data-toggle="tab" href="#consultation" role="tab" aria-controls="consultation">Consultation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="development-tab" data-toggle="tab" href="#development" role="tab" aria-controls="development">Development</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="single-blog-outer-con">
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img1.jpg" alt="single-blog-tab-img1" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">Our strength, Your Business</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img2.jpg" alt="single-blog-tab-img2" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">How’s the Economy?</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img3.jpg" alt="single-blog-tab-img3" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">Our strength, Your Business</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img4.jpg" alt="single-blog-tab-img4" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">How’s the Economy?</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img5.jpg" alt="single-blog-tab-img5" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">How’s the Economy?</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img6.jpg" alt="single-blog-tab-img6" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">How’s the Economy?</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img7.jpg" alt="single-blog-tab-img7" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">Our strength, Your Business</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img8.jpg" alt="single-blog-tab-img8" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">Our strength, Your Business</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img9.jpg" alt="single-blog-tab-img9" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">Our strength, Your Business</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img10.jpg" alt="single-blog-tab-img10" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">Our strength, Your Business</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="advices" role="tabpanel" aria-labelledby="advices-tab">
                        <div className="single-blog-outer-con">
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img3.jpg" alt="single-blog-tab-img3" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">Our strength, Your Business</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img4.jpg" alt="single-blog-tab-img4" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">How’s the Economy?</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img5.jpg" alt="single-blog-tab-img5" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">How’s the Economy?</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img6.jpg" alt="single-blog-tab-img6" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">How’s the Economy?</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="announcements" role="tabpanel" aria-labelledby="announcements-tab">
                        <div className="single-blog-outer-con">
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img5.jpg" alt="single-blog-tab-img5" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">How’s the Economy?</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img6.jpg" alt="single-blog-tab-img6" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">How’s the Economy?</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="news" role="tabpanel" aria-labelledby="news-tab">
                        <div className="single-blog-outer-con">
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img3.jpg" alt="single-blog-tab-img3" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">Our strength, Your Business</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img4.jpg" alt="single-blog-tab-img4" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">How’s the Economy?</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="consultation" role="tabpanel" aria-labelledby="consultation-tab">
                        <div className="single-blog-outer-con">
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img6.jpg" alt="single-blog-tab-img6" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">How’s the Economy?</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img3.jpg" alt="single-blog-tab-img3" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">Our strength, Your Business</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="development" role="tabpanel" aria-labelledby="development-tab">
                        <div className="single-blog-outer-con">
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img4.jpg" alt="single-blog-tab-img4" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">How’s the Economy?</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="single-blog-box">
                                <figure className="mb-0">
                                    <img src="/demo-04/assets/images/single-blog-tab-img6.jpg" alt="single-blog-tab-img6" loading="lazy" className="img-fluid" />
                                </figure>
                                <div className="single-blog-details">
                                    <ul className="list-unstyled">
                                        <li className="position-relative"><i className="fas fa-user"></i> Posted by Admin</li>
                                        <li className="position-relative"><i className="fas fa-calendar-alt"></i> October 30,
                                            2022</li>
                                    </ul>
                                    <h4><a href="/demo-04/single-blog">How’s the Economy?</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem
                                        ipsum dolor sit amet, consectetur</p>
                                    <div className="generic-btn2">
                                        <a href="/demo-04/single-blog">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left"></i></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active">
                                <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item"><a className="page-link" href="#">6</a></li>
                            <li className="page-item"><a className="page-link" href="#">7</a></li>
                            <li className="page-item"><a className="page-link" href="#">8</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#"><i className="fas fa-angle-right"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
      <LawfinityFooter />
    </>
  );
}
