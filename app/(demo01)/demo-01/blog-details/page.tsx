
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";


export default function Page() {
  return (
    <>
      {/*============ Back to top Start============ */}
    <button id="back-to-top-btn"><i className="fa-solid fa-arrow-up-long"></i></button>
    {/*============ Back to top End============ */}
    {/*============ Search area Start============ */}
    <div className="header-search ">
            <div className="header-search-area ">
                       <h2 className="title">search here</h2>
                       <div className="input-wrap">
                        <input  type="text" placeholder="search here" />
                        <button className="search-btn">search</button>
                       </div>
                        <button className="header-search-close ">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
            </div>
            <div className="header-search-overlay"></div>
    </div>
    {/*============ Search Area End ============ */}
    {/*============ mobile menu Start============ */}
    <div className="mobile-menu ">
            <div className="mobile-menu-area two p-relative">
                        <div className="mobile-menu-logo">
                            <a href="/demo-01/index-2">
                            <img  src="/demo-01/assets/img/header/logo.svg" alt="" />
                            </a>
                        </div>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="mobile-menu-accordion-item">
                                <h2 className="mobile-menu-accordion-header">
                                <a href="/demo-01/index-2">home</a>
                                <button className="mobile-menu-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                     <i className="fa-solid fa-plus plus"></i>
                                     <i className="fa-solid fa-minus minus"></i>
                                </button>
                                </h2> 
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
                                <div className="mobile-menu-accordion-body">
                                    <ul>
                                        <li><a href="/demo-01/index-2"> <i className="fa-regular fa-angle-right"></i>home 01</a></li>
                                        <li><a href="/demo-01/index-3"><i className="fa-regular fa-angle-right"></i>home 02</a></li>
                                        <li><a href="/demo-01/index-4"><i className="fa-regular fa-angle-right"></i>home 03</a></li>
                                        <li><a href="/demo-01/index-5"><i className="fa-regular fa-angle-right"></i>home 04</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="mobile-menu-accordion-item">
                                <h2 className="mobile-menu-accordion-header">
                                <a href="/demo-01/about">about</a>
                                <button className="mobile-menu-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    <i className="fa-solid fa-plus plus"></i>
                                     <i className="fa-solid fa-minus minus"></i>
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                <div className="mobile-menu-accordion-body">
                                    <ul>
                                        <li><a href="/demo-01/about"><i className="fa-regular fa-angle-right"></i>about us </a></li>
                                        
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="mobile-menu-accordion-item">
                                <h2 className="mobile-menu-accordion-header">
                                <a href="/demo-01/index-2">pages</a>
                                <button className="mobile-menu-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    <i className="fa-solid fa-plus plus"></i>
                                     <i className="fa-solid fa-minus minus"></i>
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                <div className="mobile-menu-accordion-body">
                                    <ul>
                                        <li><a href="/demo-01/practice"><i className="fa-regular fa-angle-right"></i>practice</a></li>
                                        <li><a href="/demo-01/practice-details"><i className="fa-regular fa-angle-right"></i>practice details</a></li>
                                        <li><a href="/demo-01/attorney"><i className="fa-regular fa-angle-right"></i>attorney</a></li>
                                        <li><a href="/demo-01/attorney-details"><i className="fa-regular fa-angle-right"></i>attorney details </a></li>
                                        <li><a href="/demo-01/price"><i className="fa-regular fa-angle-right"></i>price</a></li>
                                        <li><a href="/demo-01/faq"><i className="fa-regular fa-angle-right"></i>FAQ</a></li>
                                        <li><a href="/demo-01/product"><i className="fa-regular fa-angle-right"></i>product</a></li>
                                        <li><a href="/demo-01/product-details"><i className="fa-regular fa-angle-right"></i>product details</a></li>
                                        <li><a href="/demo-01/cart"><i className="fa-regular fa-angle-right"></i>Cart</a></li>
                                        <li><a href="/demo-01/checkout"><i className="fa-regular fa-angle-right"></i>checkout</a></li>
                                        <li><a href="/demo-01/error"><i className="fa-regular fa-angle-right"></i>error</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="mobile-menu-accordion-item">
                                <h2 className="mobile-menu-accordion-header">
                                <a href="/demo-01/case">case-studies</a>
                                <button className="mobile-menu-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    <i className="fa-solid fa-plus plus"></i>
                                     <i className="fa-solid fa-minus minus"></i>
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                                <div className="mobile-menu-accordion-body">
                                    <ul>
                                        <li><a href="/demo-01/case"><i className="fa-regular fa-angle-right"></i>case-studies </a></li>
                                        <li><a href="/demo-01/case-details"><i className="fa-regular fa-angle-right"></i>case-details</a></li>
                                        
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="mobile-menu-accordion-item">
                                <h2 className="mobile-menu-accordion-header">
                                <a href="/demo-01/blog">blog</a>
                                <button className="mobile-menu-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                    <i className="fa-solid fa-plus plus"></i>
                                     <i className="fa-solid fa-minus minus"></i>
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                                <div className="mobile-menu-accordion-body">
                                    <ul>
                                        <li><a href="/demo-01/blog"><i className="fa-regular fa-angle-right"></i>blog </a></li>
                                        <li><a href="/demo-01/blog-standard"><i className="fa-regular fa-angle-right"></i>blog standard</a></li>
                                        <li><a href="/demo-01/blog-details"><i className="fa-regular fa-angle-right"></i>blog details</a></li>
                                        
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="mobile-menu-accordion-item">
                                <div className="mobile-menu-accordion-header">
                                <a href="/demo-01/contact">contact us</a>

                                </div>
                               
                            </div>
                        </div>
                         <div className="social">
                            <a href="https://www.facebook.com/">
                            <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/">
                            <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://x.com/">
                            <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/">
                            <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                        <button className="mobile-menu-close p-absolute">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
            </div>
            <div className="mobile-menu-overlay"></div>
    </div>
    {/*============ momile menu End ============ */}
     {/*============ Header Start============ */}
    <header>
        <div className="header p-absolute three">
            <div className="header-menu-area three">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2 col-6">
                                <div className="header-logo ">
                                <a href="/demo-01/index-2">
                                    <img  src="/demo-01/assets/img/header/logo.svg" alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div className=" col-xl-7 col-lg-7 md-none">
                             <div className="header-menu  two">
                                <nav>
                                    <ul >
                                        <li className="sub-menu"><a href="/demo-01/index-2">home <i className="fa-solid fa-plus plus"></i><i className="fa-solid fa-minus minus"></i>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="/demo-01/index-2"><i className="fa-solid fa-angle-right"></i>Home 01</a></li>
                                                <li><a href="/demo-01/index-3"><i className="fa-solid fa-angle-right"></i>Home 02</a></li>
                                                <li><a href="/demo-01/index-4"><i className="fa-solid fa-angle-right"></i>Home 03</a></li>
                                                <li><a href="/demo-01/index-5"><i className="fa-solid fa-angle-right"></i>Home 04</a></li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu  "><a href="/demo-01/about">about us
                                            <i className="fa-solid fa-plus plus"></i><i className="fa-solid fa-minus minus"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                                <li><a href="/demo-01/about"><i className="fa-solid fa-angle-right"></i>about us</a></li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu mega-menu-wrapper"><a href="#">pages
                                            <i className="fa-solid fa-plus plus"></i><i className="fa-solid fa-minus minus"></i>
                                        </a>
                                            <ul className=" dropdown-menu mega-menu two flex justify-between">
                                                <li>
                                                    <span>pagelist one</span>
                                                     <ul>
                                                        <li><a href="/demo-01/index-2"><i className="fa-solid fa-angle-right"></i>home 01</a></li>
                                                        <li><a href="/demo-01/index-3"><i className="fa-solid fa-angle-right"></i>home 02</a></li>
                                                        <li><a href="/demo-01/index-4"><i className="fa-solid fa-angle-right"></i>home 03</a></li>
                                                        <li><a href="/demo-01/index-5"><i className="fa-solid fa-angle-right"></i>home 04</a></li>
                                                        <li><a href="/demo-01/about"><i className="fa-solid fa-angle-right"></i>about us</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span>pagelist two</span>
                                                     <ul>
                                                        <li><a href="/demo-01/practice"><i className="fa-solid fa-angle-right"></i>practice</a></li>
                                                        <li><a href="/demo-01/practice-details"><i className="fa-solid fa-angle-right"></i>practice details</a></li>
                                                        <li><a href="/demo-01/case"><i className="fa-solid fa-angle-right"></i>case</a></li>
                                                        <li><a href="/demo-01/case-details"><i className="fa-solid fa-angle-right"></i>case details</a></li>
                                                         <li><a href="/demo-01/attorney"><i className="fa-solid fa-angle-right"></i>attorney</a></li>
                                                        <li><a href="/demo-01/attorney-details"><i className="fa-solid fa-angle-right"></i>attorney details</a></li>
                                                        
                                                    </ul>
                                                    
                                                </li>
                                                <li>
                                                    <span>pagelist three</span>
                                                   <ul>
                                                        <li><a href="/demo-01/price"><i className="fa-solid fa-angle-right"></i>price</a></li>
                                                        <li><a href="/demo-01/faq"><i className="fa-solid fa-angle-right"></i>FAQ</a></li>
                                                        <li><a href="/demo-01/product"><i className="fa-solid fa-angle-right"></i>product</a></li>
                                                        <li><a href="/demo-01/product-details"><i className="fa-solid fa-angle-right"></i>product details</a></li>
                                                        <li><a href="/demo-01/cart"><i className="fa-solid fa-angle-right"></i>Cart</a></li>
                                                        <li><a href="/demo-01/checkout"><i className="fa-solid fa-angle-right"></i>checkout</a></li>
                                                        
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span>pagelist four</span>
                                                    <ul>
                                                        <li><a href="/demo-01/blog"><i className="fa-solid fa-angle-right"></i>blog</a></li>
                                                        <li><a href="/demo-01/blog-standard"><i className="fa-solid fa-angle-right"></i>blog standard</a></li>
                                                        <li><a href="/demo-01/blog-details"><i className="fa-solid fa-angle-right"></i>blog details</a></li>
                                                        <li><a href="/demo-01/contact"><i className="fa-solid fa-angle-right"></i>contact</a></li>
                                                        <li><a href="/demo-01/error"><i className="fa-solid fa-angle-right"></i>error 404</a></li>
                                                        
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu"><a href="/demo-01/case">case studies
                                            <i className="fa-solid fa-plus plus"></i><i className="fa-solid fa-minus minus"></i>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="/demo-01/case"><i className="fa-solid fa-angle-right"></i>case-studies</a></li>
                                                <li><a href="/demo-01/case-details"><i className="fa-solid fa-angle-right"></i>case details</a></li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu"><a href="/demo-01/blog">blog
                                            <i className="fa-solid fa-plus plus"></i><i className="fa-solid fa-minus minus"></i>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="/demo-01/blog"><i className="fa-solid fa-angle-right"></i>blog</a></li>
                                                <li><a href="/demo-01/blog-standard"><i className="fa-solid fa-angle-right"></i>blog standard</a></li>
                                                <li><a href="/demo-01/blog-details"><i className="fa-solid fa-angle-right"></i>blog details</a></li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu"><a href="/demo-01/contact">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="header-button three text-right ">
                                <button className="header-search-btn three">
                                    <i className="fa-solid fa-search"></i>
                                </button>
                                <a href="/demo-01/contact" className="main-btn md-none">contact us<svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4375 6.37085C14.6861 6.37085 14.9246 6.27208 15.1004 6.09626C15.2762 5.92045 15.375 5.68199 15.375 5.43335C15.375 5.18471 15.2762 4.94625 15.1004 4.77044C14.9246 4.59462 14.6861 4.49585 14.4375 4.49585H0.937499C0.688858 4.49585 0.450401 4.59462 0.274586 4.77044C0.0987701 4.94625 -9.53674e-07 5.18471 -9.53674e-07 5.43335C-9.53674e-07 5.68199 0.0987701 5.92045 0.274586 6.09626C0.450401 6.27208 0.688858 6.37085 0.937499 6.37085H14.4375Z" fill="white"/>
                                <path d="M9.93751 10.8709C10.0605 10.8714 10.1824 10.847 10.2958 10.7994C10.4092 10.7517 10.5118 10.6816 10.5975 10.5934L15.0975 6.09338C15.1855 6.00745 15.2554 5.9048 15.3032 5.79146C15.3509 5.67811 15.3755 5.55637 15.3755 5.43338C15.3755 5.31039 15.3509 5.18865 15.3032 5.07531C15.2554 4.96196 15.1855 4.85931 15.0975 4.77338L10.5975 0.273381C10.5108 0.186708 10.4079 0.117956 10.2947 0.0710492C10.1815 0.0241424 10.0601 9.13242e-10 9.93751 0C9.81493 -9.13243e-10 9.69356 0.0241424 9.58032 0.0710492C9.46708 0.117956 9.36418 0.186708 9.27751 0.273381C9.19084 0.360053 9.12208 0.462948 9.07518 0.576191C9.02827 0.689434 9.00413 0.810808 9.00413 0.933381C9.00413 1.05595 9.02827 1.17733 9.07518 1.29057C9.12208 1.40381 9.19084 1.50671 9.27751 1.59338L13.11 5.43338L9.27751 9.27338C9.14756 9.40447 9.0592 9.57099 9.0235 9.75209C8.9878 9.93318 9.00636 10.1208 9.07684 10.2914C9.14732 10.462 9.26659 10.608 9.41969 10.7111C9.5728 10.8141 9.75293 10.8697 9.93751 10.8709Z" fill="white"/>
                                </svg>
                                </a>
                                <button className="header-menu-bar ">
                                    <i className="fa-solid fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </header>
    {/*============ Header End ============ */}
    <main>
{/*============ Breadcumb Start ============ */}
        <section className="breadcumb-wrapper text-center" data-bg-src="/demo-01/assets/img/breadcumb/breadcumb-bg.png">
            <div className="wow img-custom-anim-scale" data-wow-duration="1.5s" data-wow-delay="0s">
                <h2 className="breadcumb-title">Blog Details</h2>
            <p className="breadcumb-text"><a href="/demo-01/index-2">home </a> <i className="fa-regular fa-angles-right"></i>Blog Details</p>
            </div>
        </section>
{/*============ breadcumb End ============ */}
      <div className="blog-details-wrapper sec-pb-pt-120">
        <div className="container">
            <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-single">
                            <div className="blog-details-content">
                                <div className="blog-details-thumb1  p-relative wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                   <div className="thumb fix cover">
                                     <img  src="/demo-01/assets/img/blog/lawyers-reviewing-contracts.jpg" alt="" />
                                   </div>
                                    <a href="/demo-01/blog-details" className="date p-absolute"> 10 <br  /> <span>Oct</span></a>
                                </div>
                                <div className="blog-details-text wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                    <div className="comment-admin">
                                        <a href="/demo-01/blog-details" className="comment"><i className="fa-regular fa-comments"></i> 02 comments</a>
                                        <a href="/demo-01/blog-details" className="admin"><i className="fa-regular fa-user"></i> admin</a>
                                    </div>
                                    <a href="/demo-01/blog-details" className="blog-details-subtitle">Please bring any relevant documents, contracts</a>
                                    <p>We provide a wide range of legal services, including family law, corporate advisory, criminal defense kind estate planning, immigration assistance, personal injury claims, real estate services, employment law consultation, intellectual property protection, and contract drafting and review
                                        <br  /><br  />
                                     Please bring any relevant documents related to your legal matter, such as contracts, court papers kinds identification, and any correspondence pertinent to your case. This will help us understand your legals  situation better and provide effective assistance..   
                                    </p>
                                    <blockquote className="blockquote-wrap p-relative">
                                        <div className="quote p-absolute">
                                            <img  src="/demo-01/assets/img/blog/quote.svg" alt="" />
                                        </div>
                                        <p> It may also include deodorizing an fabric protection treatments cleaning fabric shipments arrive on schedule.  and leather furniture. Techniques include steam cleaning</p>
                                        <span className="name p-absolute">jenny wilson</span>
                                    </blockquote>
                                    <h2>We specialize in areas such as family law, corporate law</h2>
                                    <p>Our fees vary depending on the complexity and nature of the legal services required. We offer kinds any transparent pricing and will discuss our fee structure with you during the initial consultation to ensure clarity and mutual understanding.</p>
                                    <div className="row gx-xl-4 gx-md-2">
                                        <div className="col-md-6">
                                            <div className="blog-details-thumb2 fix cover mt-25">
                                                <img  src="/demo-01/assets/img/blog/arab-sheikh-engages-with-business-leaders-strategic-office-meeting-investment-opportunities.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 ">
                                            <div className="blog-details-thumb2 fix cover  mt-25">
                                                <img  src="/demo-01/assets/img/blog/biracial-group-attorneys-working-with-documents-sitting-office-table.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-30">Share safety tips, quick electrical fixes, and energy-saving advice regular inspections a homes and businesses to catch potential problems before they become costly repairs.</p>
                                    <ul className="list mt-25">
                                        <li><i className="fa-regular fa-circle-check"></i>Immigration Law Assistance</li>
                                        <li><i className="fa-regular fa-circle-check"></i>Real Estate Legal Services</li>
                                        <li><i className="fa-regular fa-circle-check"></i>Rights Protection Advocacy</li>
                                        <li><i className="fa-regular fa-circle-check"></i>Precision Litigation Solutions</li>
                                    </ul>
                                    <div className="tag-share ">
                                        <div className="tag wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                            <span>tags:</span>
                                            <a href="/demo-01/blog-standard">Advocate</a>
                                            <a href="/demo-01/blog-standard">Project</a>
                                            
                                        </div>
                                        <div className="share d-flex wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.7s">
                                            <span>share:</span>
                                             <a href="https://www.facebook.com/">
                                            <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                            <a href="https://www.instagram.com/">
                                            <i className="fa-brands fa-instagram"></i>
                                            </a>
                                            <a href="https://x.com/">
                                            <i className="fa-brands fa-twitter"></i>
                                            </a>
                                            <a href="https://www.linkedin.com/">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-details-post">
                                    <div className="blog-details-post-wrapper">
                                <div className="img">
                                    <img  src="/demo-01/assets/img/blog/post-1.jpg" alt="" />
                                </div>
                                <div className="post-info">
                                    <span className="name">Eleanor Pena <br  /> <span className="date">12May, 2024  05:56pm</span></span>
                                    <p>Please bring any documents related to your case, including contracts, emails, legal notices, or other relevant paperwork.</p>
                                    <div className="social">
                                         <a href="https://www.facebook.com/">
                                        <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="https://www.instagram.com/">
                                        <i className="fa-brands fa-instagram"></i>
                                        </a>
                                        <a href="https://x.com/">
                                        <i className="fa-brands fa-twitter"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/">
                                        <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                                </div>
                              
                            </div>
                            <div className="blog-details-post-btn mt-40 mb-40">
                                <a href="/demo-01/blog-details" className="post-btn-prev"><i className="fa-solid fa-arrow-left"></i>previous post</a>
                                <a href="/demo-01/blog-details" className="post-btn-next">next post<i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                            <div className="blog-details-comment wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                    <div className="comment-title">
                                        <span>comments (04)</span> 
                                    </div>
                                    <div className=" comment-item comment1">
                                        <div className="img">
                                            <img  src="/demo-01/assets/img/blog/comment-1.jpg" alt="" />
                                        </div>
                                        <div className="info">
                                            <span className="name">Alex Michel</span>
                                            <span className="date">March 10, 2026  7:56am</span>
                                            <p>Patios decks and building exteriors This service removes dirt mold mildew stains and algae restoring the appearance surfaces</p>
                                        </div>
                                        <div className="reply">
                                            <a href="/demo-01/blog-details">
                                            <i className="fa-solid fa-reply"></i>
                                            reply
                                            </a>
                                        </div>
                                    </div>
                                    <div className=" comment-item comment2">
                                        <div className="img">
                                            <img  src="/demo-01/assets/img/blog/comment-2.jpg" alt="" />
                                        </div>
                                        <div className="info">
                                            <span className="name">Ronald Richards</span>
                                            <span className="date">March 10, 2026  5:30am</span>
                                            <p>Solvent cleaning to remove dirt stains, and allergens This service helps to extend the life of furniture maintain.</p>
                                        </div>
                                        <div className="reply">
                                            <a href="/demo-01/blog-details">
                                            <i className="fa-solid fa-reply"></i>
                                            reply
                                            </a>
                                        </div>
                                    </div>
                                    <div className=" comment-item comment3 ">
                                        <div className="img">
                                            <img  src="/demo-01/assets/img/blog/comment-3.jpg" alt="" />
                                        </div>
                                        <div className="info">
                                            <span className="name">Alex Michel</span>
                                            <span className="date">March 10, 2026  2:15pm</span>
                                            <p>Patios decks and building exteriors This service removes dirt mold mildew stains and algae restoring the appearance surfaces</p>
                                        </div>
                                        <div className="reply">
                                            <a href="/demo-01/blog-details">
                                            <i className="fa-solid fa-reply"></i>
                                            reply
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            <div className="blog-details-reply">
                                    <div className="reply-title">
                                        <span>Leave a Reply</span>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <form action="#" className="wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                        
                                        <div className="input-wrap">
                                            <input  type="text" placeholder="Enter your Name" />
                                            <i className="fa-regular fa-user"></i>
                                        </div>
                                        <div className="input-wrap">
                                            <input  type="email" placeholder="Enter your Email" />
                                            <i className="fa-regular fa-envelope"></i>
                                        </div>
                                        <div className="input-wrap">
                                            <input  type="text" placeholder="Website" />
                                            <i className="fa-solid fa-globe"></i>
                                        </div>
                                        <div className="input-wrap">
                                           <textarea name="comment" id="comment" placeholder="Type your comment"></textarea>
                                           <i className="fa-solid fa-pencil"></i>
                                        </div>
                                        
                                        <span className="check-area"> <input  className="checkbox" id="checkbox" type="checkbox" />
                                            <label htmlFor="checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
                                            </span>
                                         <input  className="main-btn" type="submit" value="Send Message" /> 
                                    </form>
                                    
                             </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-area">
                            <div className="widget widget-search wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                <form action="#" className="search-form fix">
                                    <input  type="search" placeholder="Enter Keyword" />
                                    <button className="search-btn" type="submit">
                                    <i className="fa-regular fa-search"></i>
                                    </button>
                                    
                                </form>
                            </div>
                            <div className="widget widget-categories wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s"> 
                                <h3 className="widget-title">Categories</h3>
                               <ul>
                                <li><a href="/demo-01/blog-standard"><i className="fa-solid fa-folder-open folder"></i>Family Law <i className="fa-solid fa-arrow-right arrow">
                                </i></a>
                                </li>
                                <li><a href="/demo-01/blog-standard"><i className="fa-solid fa-folder-open folder"></i>Criminal Law <i className="fa-solid fa-arrow-right arrow">
                                </i></a>
                                </li>
                                <li><a href="/demo-01/blog-standard"><i className="fa-solid fa-folder-open folder"></i>Artificial Intelligence<i className="fa-solid fa-arrow-right arrow">
                                </i></a>
                                </li>
                                <li><a href="/demo-01/blog-standard"><i className="fa-solid fa-folder-open folder"></i>Health Care Policy <i className="fa-solid fa-arrow-right arrow">
                                </i></a>
                                </li>
                                <li><a href="/demo-01/blog-standard"><i className="fa-solid fa-folder-open folder"></i>Real Estate Law <i className="fa-solid fa-arrow-right arrow">
                                </i></a>
                                </li>
                                <li><a href="/demo-01/blog-standard"><i className="fa-solid fa-folder-open folder"></i>Law Intellectual <i className="fa-solid fa-arrow-right arrow">
                                </i></a>
                                </li>
                                <li><a href="/demo-01/blog-standard"><i className="fa-solid fa-folder-open folder"></i>Ligation Presentation <i className="fa-solid fa-arrow-right arrow">
                                </i></a>
                                </li>
                                
                               
                               </ul>
                            </div>
                           
                            <div className="widget widget-recent-post wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                <h3 className="widget-title">Recent Post</h3>
                                <div className="recent-post-wrap">
                                    <div className="recent-post">
                                        <a href="/demo-01/blog-standard" className="media-img fix cover">
                                            <img  src="/demo-01/assets/img/blog/group-contemporary-lawyers-gathered-by-table-paperwork.jpg" alt="" />
                                        </a>
                                        <div className="media-body">
                                            <a href="/demo-01/blog-standard" className="recent-post-title">Dedicated to Your Legal Success</a>
                                            <a href="/demo-01/blog-standard" className="recent-post-meta"> <i className="fa-regular fa-calendar"></i> 4 March. 2022</a>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <a href="/demo-01/blog-standard" className="media-img fix cover">
                                            <img  src="/demo-01/assets/img/blog/italy-office-business-meeting-1.jpg" alt="" />
                                        </a>
                                        <div className="media-body">
                                            <a href="/demo-01/blog-standard" className="recent-post-title">Estate planning and trust creation</a>
                                            <a href="/demo-01/blog-standard" className="recent-post-meta"> <i className="fa-regular fa-calendar"></i> 4 March. 2022</a>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <a href="/demo-01/blog-standard" className="media-img fix cover">
                                            <img  src="/demo-01/assets/img/blog/two-bearded-men-wearing-old-fashioned-suits-talking-discuss-something-restaurant.jpg" alt="" />
                                        </a>
                                        <div className="media-body">
                                            <a href="/demo-01/blog-standard" className="recent-post-title">When It’s Legal, We’re Your Team</a>
                                            <a href="/demo-01/blog-standard" className="recent-post-meta"> <i className="fa-regular fa-calendar"></i>10 december 2024</a>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="widget widget-tag wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                <h3 className="widget-title">popular tag</h3>
                                <div className="tag-wrap">
                                        <a href="/demo-01/blog-standard">Advocate</a>
                                        <a href="/demo-01/blog-standard">Attorney</a>
                                        <a href="/demo-01/blog-standard">Court</a>
                                        <a href="/demo-01/blog-standard">Project</a>
                                        <a href="/demo-01/blog-standard">Justice</a>
                                        <a href="/demo-01/blog-standard">Lawyer</a>
                                        <a href="/demo-01/blog-standard">Settlements</a>
                                        <a href="/demo-01/blog-standard">News</a>
                                        <a href="/demo-01/blog-standard">Clients</a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      </div>
        
    </main>

    {/*============ Footer Start ============ */}
 <footer>
     <div className="footer-contact-us" data-bg-src="/demo-01/assets/img/footer/bg-2.png">
        <div className="row gx-0">
            <div className="col-xxxl-5 col-xl-4 col-lg-4 md-none">
                <div className="footer-contact-us-img cover">
                    <img  src="/demo-01/assets/img/footer/Img(1).png" alt="" />
                </div>
            </div>
            <div className="col-xxxl-7 col-xl-8 col-lg-8">
                <div className="footer-contact-us-right ">
                    <h3>The mission is to provide Lawyer  Services</h3>
                        <a href="/demo-01/contact" className="main-btn black">
                            contact us<svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4375 6.37091C14.6861 6.37091 14.9246 6.27214 15.1004 6.09632C15.2762 5.92051 15.375 5.68205 15.375 5.43341C15.375 5.18477 15.2762 4.94631 15.1004 4.7705C14.9246 4.59468 14.6861 4.49591 14.4375 4.49591H0.937499C0.688858 4.49591 0.450401 4.59468 0.274586 4.7705C0.0987701 4.94631 -9.53674e-07 5.18477 -9.53674e-07 5.43341C-9.53674e-07 5.68205 0.0987701 5.92051 0.274586 6.09632C0.450401 6.27214 0.688858 6.37091 0.937499 6.37091H14.4375Z" fill="white"/>
                            <path d="M9.9375 10.8709C10.0605 10.8714 10.1824 10.847 10.2958 10.7994C10.4092 10.7517 10.5118 10.6816 10.5975 10.5934L15.0975 6.09338C15.1855 6.00745 15.2554 5.9048 15.3032 5.79146C15.3509 5.67811 15.3755 5.55637 15.3755 5.43338C15.3755 5.31039 15.3509 5.18865 15.3032 5.07531C15.2554 4.96196 15.1855 4.85931 15.0975 4.77338L10.5975 0.273381C10.5108 0.186708 10.4079 0.117956 10.2947 0.0710492C10.1814 0.0241424 10.0601 9.13242e-10 9.9375 0C9.81493 -9.13243e-10 9.69355 0.0241424 9.58031 0.0710492C9.46707 0.117956 9.36417 0.186708 9.2775 0.273381C9.19083 0.360053 9.12208 0.462948 9.07517 0.576191C9.02826 0.689434 9.00412 0.810808 9.00412 0.933381C9.00412 1.05595 9.02826 1.17733 9.07517 1.29057C9.12208 1.40381 9.19083 1.50671 9.2775 1.59338L13.11 5.43338L9.2775 9.27338C9.14755 9.40447 9.05919 9.57099 9.02349 9.75209C8.9878 9.93318 9.00635 10.1208 9.07683 10.2914C9.14731 10.462 9.26658 10.608 9.41969 10.7111C9.57279 10.8141 9.75292 10.8697 9.9375 10.8709Z" fill="white"/>
                            </svg>

                        </a>
                        <div className="bg"></div>
                </div>
            </div>
        </div>
     </div>
     <div className="footer" data-bg-src="/demo-01/assets/img/footer/Bg.png">
        
        <div className="footer-middle p-relative">
              <div className="container">
                <div className="footer-middle-wrapper">
                    <div className="footer-logo-area wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">
                        <div className="logo">
                            <a href="/demo-01/index-2">
                            <img  src="/demo-01/assets/img/footer/Logo.svg" alt="" />
                            </a>
                        </div>
                        <p>We are committed to serving community and offer pro bono services  individuals who meet certain eligibility </p>
                        <div className="call">
                            <div className="call-icon">
                                <img  src="/demo-01/assets/img/footer/call.svg" alt="" />
                            </div>
                            <a href="tel:+000(564)56825" className="number">+000 (564) 568 25</a>
                        </div>
                    </div>
                <div className="footer-service wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                    <h3>our services</h3>
                    <ul>
                        <li><a href="/demo-01/practice"><i className="fa-regular fa-angle-right"></i>Business Formation</a></li>
                        <li><a href="/demo-01/practice"><i className="fa-regular fa-angle-right"></i>Corporate Law</a></li>
                        <li><a href="/demo-01/practice"><i className="fa-regular fa-angle-right"></i>Employment Law</a></li>
                        <li><a href="/demo-01/practice"><i className="fa-regular fa-angle-right"></i>Intellectual Property La</a></li>
                        <li><a href="/demo-01/practice"><i className="fa-regular fa-angle-right"></i>Real Estate Law</a></li>
                        
                       
                    </ul>
                </div>
                <div className="footer-pages wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.7s">
                    <h3>pages</h3>
                    <ul>
                        <li><a href="/demo-01/about"><i className="fa-regular fa-angle-right"></i>About Us</a></li>
                        <li><a href="/demo-01/practice-details"><i className="fa-regular fa-angle-right"></i>Services</a></li>
                        <li><a href="/demo-01/about"><i className="fa-regular fa-angle-right"></i>Get In Touch</a></li>
                        <li><a href="/demo-01/about"><i className="fa-regular fa-angle-right"></i>How It Work</a></li>
                        <li><a href="/demo-01/contact"><i className="fa-regular fa-angle-right"></i>Contact Us</a></li>
                        
                       
                    </ul>
                </div>
                <div className="footer-post wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">
                    <h3>recent post</h3>
                    <div className="footer-post-item d-flex">
                        <div className="img   cover">
                           <a href="/demo-01/blog-details">
                             <img  src="/demo-01/assets/img/footer/recent-post-1.jpg" alt="" />
                           </a>
                        </div>
                        <div className="info">
                            <a href="/demo-01/blog-details" className="date"><i className="fa-solid fa-calendar-days"></i> 20 Jan, 2026</a>
                            <a href="/demo-01/blog-details" className="title">Expert Counsel for Every an Challenge</a>
                        </div>
                    </div>
                    <div className="footer-post-item d-flex">
                        <div className="img   cover">
                            <a href="/demo-01/blog-details">
                                <img  src="/demo-01/assets/img/footer/recent-post-2.jpg" alt="" />
                            </a>
                        </div>
                        <div className="info">
                            <a href="/demo-01/blog-details" className="date"><i className="fa-solid fa-calendar-days"></i> 20 Jan, 2026</a>
                            <a href="/demo-01/blog-details" className="title">When It’s Legal, We’re Your a Team</a>
                        </div>
                    </div>
                </div>
               
                </div>
               
              </div>
               <div className="footer-bg cover">
                <img  src="/demo-01/assets/img/footer/Bg.png" alt="" />
              </div>
        </div>
         <div className="footer-bottom">
              <div className="container">
                <div className="footer-bottom-wrapper wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">
                     <div className="footer-bottom-left">
                    <p>Copyright © 2026 <a className="highlight" href="/demo-01/index-2">Lawia</a>. All Rights Reserved By <a href="/demo-01/index-2" className="highlight">Vecuro</a>. </p>
                </div>
                <div className="footer-bottom-right">
                    <span>
                        <a href="/demo-01/contact">Setting & Privacy</a> / 
                    <a href="/demo-01/faq">FAQ </a> / 
                    <a href="/demo-01/contact">Support</a>
                    </span>
                </div>
                </div>
                 
              </div>
        </div>
    </div>
</footer>
    {/*============ Footer End ============ */}
   
    {/*===================
         ALL JS File
    ====================*/}
    {/* Jquery */}
        
    {/* bootstrap */}
    
    {/* Slick Slider */}
    
    {/* Swiper Slider */}
    
    {/* Magnific Popup */}
    
    {/* Counter Up */}
    
    
    {/* WOW Animation */}
    
    {/* Main Js File */}
    </>
  );
}
