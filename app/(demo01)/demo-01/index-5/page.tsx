
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
    

    <main id="main-3">
    {/*============ Hero Start ============ */}
         <section className="hero hero-3" data-bg-src="/demo-01/assets/img/hero/hero-3-bg.png">
            <div className="container h-100 p-relative">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-title hero-title-3">
                            <h1>
                                <span className="title1 wow img-custom-anim-left pb-10" data-wow-duration="1.5s"
                                    data-wow-delay="0.1s">Navigating justice <img  src="/demo-01/assets/img/hero/scales.png"
                                        alt="" /></span> <br  />
                                <span className="title2 wow img-custom-anim-left pb-10" data-wow-duration="1.5s"
                                    data-wow-delay="1s"><span className="highlight">With Expertise</span> And</span><br  />
                                <span className="title3 highlight wow img-custom-anim-left pb-10" data-wow-duration="1.5s"
                                    data-wow-delay="2s"><img  src="/demo-01/assets/img/hero/hammer.png" alt="" /> Compassion</span>
                            </h1>
                            <div className="vector1 p-absolute">
                                <img  src="/demo-01/assets/img/hero/text-vector.svg" alt="" />
                            </div>
                            <div className="vector2 p-absolute fix wow img-custom-anim-scale" data-wow-duration="1.5s"
                                data-wow-delay="2s">
                                <div className="vector2-area ">
                                    <img  className="arrow p-absulate" src="/demo-01/assets/img/hero/arrow.svg" alt="" />
                                    <img  className="round" src="/demo-01/assets/img/hero/Round.png" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 md-none wow tpFadeInUp" data-wow-duration="2.5s" data-wow-delay="2s">
                        <div className="hero-thumb three one fix cover">
                            <img  src="/demo-01/assets/img/hero/hero-3-thumb1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4 wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="2s">
                        <div className="hero-text-content mt-80">
                            <p>We specialize in a range of services, includ family law, corporate law personal injury,
                                reestate, and criminal defense.</p>
                            <a href="/demo-01/contact" className="main-btn mt-40 mb-40">contact us<svg width="16" height="11"
                                    viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.4375 6.37085C14.6861 6.37085 14.9246 6.27208 15.1004 6.09626C15.2762 5.92045 15.375 5.68199 15.375 5.43335C15.375 5.18471 15.2762 4.94625 15.1004 4.77044C14.9246 4.59462 14.6861 4.49585 14.4375 4.49585H0.937499C0.688858 4.49585 0.450401 4.59462 0.274586 4.77044C0.0987701 4.94625 -9.53674e-07 5.18471 -9.53674e-07 5.43335C-9.53674e-07 5.68199 0.0987701 5.92045 0.274586 6.09626C0.450401 6.27208 0.688858 6.37085 0.937499 6.37085H14.4375Z"
                                        fill="white" />
                                    <path
                                        d="M9.93751 10.8709C10.0605 10.8714 10.1824 10.847 10.2958 10.7994C10.4092 10.7517 10.5118 10.6816 10.5975 10.5934L15.0975 6.09338C15.1855 6.00745 15.2554 5.9048 15.3032 5.79146C15.3509 5.67811 15.3755 5.55637 15.3755 5.43338C15.3755 5.31039 15.3509 5.18865 15.3032 5.07531C15.2554 4.96196 15.1855 4.85931 15.0975 4.77338L10.5975 0.273381C10.5108 0.186708 10.4079 0.117956 10.2947 0.0710492C10.1815 0.0241424 10.0601 9.13242e-10 9.93751 0C9.81493 -9.13243e-10 9.69356 0.0241424 9.58032 0.0710492C9.46708 0.117956 9.36418 0.186708 9.27751 0.273381C9.19084 0.360053 9.12208 0.462948 9.07518 0.576191C9.02827 0.689434 9.00413 0.810808 9.00413 0.933381C9.00413 1.05595 9.02827 1.17733 9.07518 1.29057C9.12208 1.40381 9.19084 1.50671 9.27751 1.59338L13.11 5.43338L9.27751 9.27338C9.14756 9.40447 9.0592 9.57099 9.0235 9.75209C8.9878 9.93318 9.00636 10.1208 9.07684 10.2914C9.14732 10.462 9.26659 10.608 9.41969 10.7111C9.5728 10.8141 9.75293 10.8697 9.93751 10.8709Z"
                                        fill="white" />
                                </svg>
                            </a>
                           <div className="info">
                             <div className="marquee">
                                <div className="info-wrap">
                                <span>Employment Guard</span>
                                <span>Real Estate Safe</span>
                                <span>Sr</span>
                            </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div className="col-lg-4 md-none wow tpFadeInUp" data-wow-duration="3.5s" data-wow-delay="2s">
                        <div className="hero-thumb three fix cover mt-80">
                            <img  src="/demo-01/assets/img/hero/hero-3-thumb2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="vector-bg">
                <img  src="/demo-01/assets/img/hero/Bg.svg" alt="" />
            </div>
        </section>
    {/*============ Hero End ============ */}
      {/*============ service Start ============ */}

     <section className="service sec-pb-pt">
        <div className="container">
             <div className="sec-title text-center mb-60">
                        <span className="sub-title two"> What do you Offer</span>
                        <h2 className="white-color">Services You Can Trust</h2>
                    </div>
            <div className="row gx-lg-2 gx-xl-4 service-3">
                <div className="col-lg-3">
                    <div className="service-content  service-content-3 four">
                        <div className="service-text service-text-3 text-center">
                            <div className="icon-area">
                                <div className="icon">
                                    <img  src="/demo-01/assets/img/Service/icon3-4.svg" alt="" />
                                </div>
                            </div>
                            <h3>Expertise & Integrity</h3>
                            <p>We offer flat fees, hourly rates an   depending on the service</p>
                           
                        </div>
                       
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="service-content service-content-3 four">
                        <div className="service-text service-text-3 text-center">
                            <div className="icon-area">
                                <div className="icon">
                                    <img  src="/demo-01/assets/img/Service/icon3-3.svg" alt="" />
                                </div>
                            </div>
                            <h3>EPersonalized Attention</h3>
                            <p>We offer flat fees, hourly rates an   depending on the service</p>
                           
                        </div>
                       
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="service-content service-content-3 four">
                        <div className="service-text service-text-3 text-center">
                            <div className="icon-area">
                                <div className="icon">
                                    <img  src="/demo-01/assets/img/Service/icon3-2.svg" alt="" />
                                </div>
                            </div>
                            <h3>Cost Effective Solutions</h3>
                            <p>We offer flat fees, hourly rates an   depending on the service</p>
                           
                        </div>
                       
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="service-content service-content-3 four">
                        <div className="service-text service-text-3 text-center">
                            <div className="icon-area">
                                <div className="icon">
                                    <img  src="/demo-01/assets/img/Service/icon3-1.svg" alt="" />
                                </div>
                            </div>
                            <h3>Education Law</h3>
                            <p>We offer flat fees, hourly rates an   depending on the service</p>
                           
                        </div>
                       
                    </div>
                </div>
              
                
            </div>
        </div>
    </section>
    {/*============ Service End ============ */}
     {/*============ Banner Start ============ */}
    <div className="banner three four  sec-pb">
            <div className="container">
                <div className="banner-arrows mb-40">
                    <div className="swiper-banner-button-prev arrow"><i className="fa-light fa-angle-left"></i></div>
                    <div className="swiper-banner-button-next arrow"> <i className="fa-light fa-angle-right"></i></div>
                </div>
                <div className="swiper banner3">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="img">
                                <img  src="/demo-01/assets/img/banner/banner-1.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="img">
                                <img  src="/demo-01/assets/img/banner/banner-4.svg" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="img">
                                <img  src="/demo-01/assets/img/banner/banner-3.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="img">
                                <img  src="/demo-01/assets/img/banner/banner-4.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="img">
                                <img  src="/demo-01/assets/img/banner/banner-5.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="img">
                                <img  src="/demo-01/assets/img/banner/banner-4.svg" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="img">
                                <img  src="/demo-01/assets/img/banner/banner-5.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="img">
                                <img  src="/demo-01/assets/img/banner/banner-3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    {/*============ Banner End ============ */}
    {/*============ About Start ============ */}

    <section className="about three four sec-pb-pt">
        <div className="container">
            
            <div className="row">
                <div className="col-lg-6">
                    <div className="about-thumb three cover">
                        <img  src="/demo-01/assets/img/about/about3-thumb.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-content three">
                        <div className=" about-title sec-title">
                    <span className="sub-title"><i></i> about us</span>
                    <h2 className="white-color">We are the Leading Law Firm for Annual revenues</h2>
                     <p className="border-color">If you're unsure, we offer consultations to help determine any whether legal representation is necessary to resolve matters efficiently while prioritizing best interests.</p>
                        </div>
                       
                        <div className="about-tabs mt-40">
                            <nav>
                            <div className="nav about-nav-tabs" id="nav-tab" role="tablist">
                                <button className="about-nav-link white" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Our Mission</button>
                                <button className="about-nav-link active white" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Our Strategy</button>
                                <button className="about-nav-link white" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Our Vision</button>
                                
                            </div>
                            </nav>
                            <div className="about-tab-content mt-40" id="nav-tabContent">
                            <div className="about-tab-pane four tab-pane fade " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                                <ul>
                                    <li><i className="fa-regular fa-check-circle"></i>Estate planning and trust creation</li>
                                    <li><i className="fa-regular fa-check-circle"></i>Mediation and conflict resolution</li>
                                    <li><i className="fa-regular fa-check-circle"></i>Personal injury claims assistance</li>
                                    <li><i className="fa-regular fa-check-circle"></i>Family law and custody services</li>
                                </ul>
                                <div className="about-thumb2 three cover fix p-relative">
                                    <img  src="/demo-01/assets/img/about/about2-thumb2.png" alt="" />

                                    <div className="play-btn-area p-absolute">
                                        <a href="https://www.youtube.com/watch?v=zYRgrWtzpc0" className="video-play popup-video"><i className="fa-solid fa-play"></i>
                                        <b className="circle1"></b></a>
                                </div>
                                </div>
                            </div>
                            <div className="about-tab-pane four fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                                  <ul>
                                    <li><i className="fa-regular fa-check-circle"></i>Mediation and conflict resolution</li>
                                    <li><i className="fa-regular fa-check-circle"></i>Estate planning and trust creation</li>
                                    <li><i className="fa-regular fa-check-circle"></i>Family law and custody services</li>
                                    <li><i className="fa-regular fa-check-circle"></i>Personal injury claims assistance</li>
                                </ul>
                                <div className="about-thumb2 three fix cover p-relative">
                                    <img  src="/demo-01/assets/img/about/about3-thumb2.jpg" alt="" />

                                    <div className="play-btn-area p-absolute">
                                        <a href="https://www.youtube.com/watch?v=zYRgrWtzpc0" className="video-play popup-video"><i className="fa-solid fa-play"></i>
                                        <b className="circle1"></b></a>
                                </div>
                                </div>
                            </div>
                            <div className="about-tab-pane four fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
                                  <ul>
                                      <li><i className="fa-regular fa-check-circle"></i>Personal injury claims assistance</li>
                                      <li><i className="fa-regular fa-check-circle"></i>Estate planning and trust creation</li>
                                      <li><i className="fa-regular fa-check-circle"></i>Family law and custody services</li>
                                      <li><i className="fa-regular fa-check-circle"></i>Mediation and conflict resolution</li>
                                </ul>
                                <div className="about-thumb2 three cover fix p-relative">
                                    <img  src="/demo-01/assets/img/about/about3-thumb2.jpg" alt="" />

                                    <div className="play-btn-area p-absolute">
                                        <a href="https://www.youtube.com/watch?v=zYRgrWtzpc0" className="video-play popup-video"><i className="fa-solid fa-play"></i>
                                        <b className="circle1"></b></a>
                                </div>
                                </div>
                            </div>
                           
                            </div>
                        </div>
                        <div className="about-btn-area d-flex mt-40">
                            <a href="/demo-01/about" className="main-btn mr-20">more about <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4375 6.37085C14.6861 6.37085 14.9246 6.27208 15.1004 6.09626C15.2762 5.92045 15.375 5.68199 15.375 5.43335C15.375 5.18471 15.2762 4.94625 15.1004 4.77044C14.9246 4.59462 14.6861 4.49585 14.4375 4.49585H0.937499C0.688858 4.49585 0.450401 4.59462 0.274586 4.77044C0.0987701 4.94625 -9.53674e-07 5.18471 -9.53674e-07 5.43335C-9.53674e-07 5.68199 0.0987701 5.92045 0.274586 6.09626C0.450401 6.27208 0.688858 6.37085 0.937499 6.37085H14.4375Z" fill="white"/>
                            <path d="M9.93751 10.8709C10.0605 10.8714 10.1824 10.847 10.2958 10.7994C10.4092 10.7517 10.5118 10.6816 10.5975 10.5934L15.0975 6.09338C15.1855 6.00745 15.2554 5.9048 15.3032 5.79146C15.3509 5.67811 15.3755 5.55637 15.3755 5.43338C15.3755 5.31039 15.3509 5.18865 15.3032 5.07531C15.2554 4.96196 15.1855 4.85931 15.0975 4.77338L10.5975 0.273381C10.5108 0.186708 10.4079 0.117956 10.2947 0.0710492C10.1815 0.0241424 10.0601 9.13242e-10 9.93751 0C9.81493 -9.13243e-10 9.69356 0.0241424 9.58032 0.0710492C9.46708 0.117956 9.36418 0.186708 9.27751 0.273381C9.19084 0.360053 9.12208 0.462948 9.07518 0.576191C9.02827 0.689434 9.00413 0.810808 9.00413 0.933381C9.00413 1.05595 9.02827 1.17733 9.07518 1.29057C9.12208 1.40381 9.19084 1.50671 9.27751 1.59338L13.11 5.43338L9.27751 9.27338C9.14756 9.40447 9.0592 9.57099 9.0235 9.75209C8.9878 9.93318 9.00636 10.1208 9.07684 10.2914C9.14732 10.462 9.26659 10.608 9.41969 10.7111C9.5728 10.8141 9.75293 10.8697 9.93751 10.8709Z" fill="white"/>
                            </svg></a>
                            <img  src="/demo-01/assets/img/about/Frame-2.svg" alt="" />
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </section>
    {/*============ About End ============ */}
    {/*============ Contact Start ============ */}
     <section className="contact-3 " data-bg-src="/demo-01/assets/img/contact/contact-bg-2.png">
        <div className="container">
            <div className="counter-2 three" data-bg-src="/demo-01/assets/img/contact/counter-bg-1.png">
                    <div className="counter-2-item item-three text-center">
                        <span><span className="count">1,80</span>+</span>
                        <p>case closed</p>
                    </div>
                    <div className="counter-2-item item-three text-center">
                        <span><span className="count">150</span>+</span>
                        <p>Expert Attorneys</p>
                    </div>
                    <div className="counter-2-item item-three text-center">
                        <span><span className="count">55</span>k</span>
                        <p>Trusted Clients</p>
                    </div>
                    <div className="counter-2-item item-three text-center">
                        <span><span className="count">100</span>+</span>
                        <p>Successful Case</p>
                    </div>
                  </div>
          
            <div className="contact-3-wrapper p-relative">
                <div className=" contact-title sec-title ">
            <h2 className="white-color">Turning Legal Challenges into Opportunities</h2>
            <a href="#" className="main-btn mt-40">explore More<svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4375 6.37085C14.6861 6.37085 14.9246 6.27208 15.1004 6.09626C15.2762 5.92045 15.375 5.68199 15.375 5.43335C15.375 5.18471 15.2762 4.94625 15.1004 4.77044C14.9246 4.59462 14.6861 4.49585 14.4375 4.49585H0.937499C0.688858 4.49585 0.450401 4.59462 0.274586 4.77044C0.0987701 4.94625 -9.53674e-07 5.18471 -9.53674e-07 5.43335C-9.53674e-07 5.68199 0.0987701 5.92045 0.274586 6.09626C0.450401 6.27208 0.688858 6.37085 0.937499 6.37085H14.4375Z" fill="white"/>
                            <path d="M9.93751 10.8709C10.0605 10.8714 10.1824 10.847 10.2958 10.7994C10.4092 10.7517 10.5118 10.6816 10.5975 10.5934L15.0975 6.09338C15.1855 6.00745 15.2554 5.9048 15.3032 5.79146C15.3509 5.67811 15.3755 5.55637 15.3755 5.43338C15.3755 5.31039 15.3509 5.18865 15.3032 5.07531C15.2554 4.96196 15.1855 4.85931 15.0975 4.77338L10.5975 0.273381C10.5108 0.186708 10.4079 0.117956 10.2947 0.0710492C10.1815 0.0241424 10.0601 9.13242e-10 9.93751 0C9.81493 -9.13243e-10 9.69356 0.0241424 9.58032 0.0710492C9.46708 0.117956 9.36418 0.186708 9.27751 0.273381C9.19084 0.360053 9.12208 0.462948 9.07518 0.576191C9.02827 0.689434 9.00413 0.810808 9.00413 0.933381C9.00413 1.05595 9.02827 1.17733 9.07518 1.29057C9.12208 1.40381 9.19084 1.50671 9.27751 1.59338L13.11 5.43338L9.27751 9.27338C9.14756 9.40447 9.0592 9.57099 9.0235 9.75209C8.9878 9.93318 9.00636 10.1208 9.07684 10.2914C9.14732 10.462 9.26659 10.608 9.41969 10.7111C9.5728 10.8141 9.75293 10.8697 9.93751 10.8709Z" fill="white"/>
                            </svg></a>
            <a href="#" className="main-btn two">contact us<svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4375 6.37085C14.6861 6.37085 14.9246 6.27208 15.1004 6.09626C15.2762 5.92045 15.375 5.68199 15.375 5.43335C15.375 5.18471 15.2762 4.94625 15.1004 4.77044C14.9246 4.59462 14.6861 4.49585 14.4375 4.49585H0.937499C0.688858 4.49585 0.450401 4.59462 0.274586 4.77044C0.0987701 4.94625 -9.53674e-07 5.18471 -9.53674e-07 5.43335C-9.53674e-07 5.68199 0.0987701 5.92045 0.274586 6.09626C0.450401 6.27208 0.688858 6.37085 0.937499 6.37085H14.4375Z" fill="white"/>
                            <path d="M9.93751 10.8709C10.0605 10.8714 10.1824 10.847 10.2958 10.7994C10.4092 10.7517 10.5118 10.6816 10.5975 10.5934L15.0975 6.09338C15.1855 6.00745 15.2554 5.9048 15.3032 5.79146C15.3509 5.67811 15.3755 5.55637 15.3755 5.43338C15.3755 5.31039 15.3509 5.18865 15.3032 5.07531C15.2554 4.96196 15.1855 4.85931 15.0975 4.77338L10.5975 0.273381C10.5108 0.186708 10.4079 0.117956 10.2947 0.0710492C10.1815 0.0241424 10.0601 9.13242e-10 9.93751 0C9.81493 -9.13243e-10 9.69356 0.0241424 9.58032 0.0710492C9.46708 0.117956 9.36418 0.186708 9.27751 0.273381C9.19084 0.360053 9.12208 0.462948 9.07518 0.576191C9.02827 0.689434 9.00413 0.810808 9.00413 0.933381C9.00413 1.05595 9.02827 1.17733 9.07518 1.29057C9.12208 1.40381 9.19084 1.50671 9.27751 1.59338L13.11 5.43338L9.27751 9.27338C9.14756 9.40447 9.0592 9.57099 9.0235 9.75209C8.9878 9.93318 9.00636 10.1208 9.07684 10.2914C9.14732 10.462 9.26659 10.608 9.41969 10.7111C9.5728 10.8141 9.75293 10.8697 9.93751 10.8709Z" fill="white"/>
                            </svg></a>
        </div>
        <div className="play-btn-area p-absolute">
             <a href="https://www.youtube.com/watch?v=zYRgrWtzpc0" className="video-play popup-video"><i className="fa-solid fa-play"></i>
            <b className="circle1"></b></a>
        </div>
            </div>
        </div>
        
    </section>
    {/*============ Contact End ============ */}
  
    {/*============ Expart Start ============ */}

       <section className="expart sec-pb-pt p-relative">
        <div className="container">
            <div className="sec-title text-center mb-60">
                <span className="sub-title"><i></i>Expert Attorneys <i></i></span>
                <h2 className="white-color">Meet Our Top Attorneys</h2>
            </div>
            <div className="row gx-0 ">
                <div className="col-lg-6">
                   <div className="expart-content expart-content-4 one">
                     <div className="expart-item four">
                        <div className="expart-img mega-hover fix cover">
                            <img  src="/demo-01/assets/img/expart/expart4.jpg" alt="" />
                        </div>
                        <div className="text four">
                            <a href="/demo-01/attorney-details" className="expart-item-title">Brooklyn Simmons</a>
                            <span className="highlight">Financial Lawyer</span>
                            <p>Please bring all relevant kinds contracts, correspondence a and a summary </p>
                            <div className="social-wrapper">
                                <a href="https://www.facebook.com/"> <i className="fa-brands fa-facebook-f"></i></a>
                                <a href="https://x.com/">
                             <i className="fa-brands fa-twitter"></i></a>
                                <a href="https://www.whatsapp.com/"> <i className="fa-brands fa-whatsapp"></i></a>
                                <a href="https://www.instagram.com/"> <i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="col-lg-6">
                    <div className="expart-content expart-content-4 two">
                        <div className="expart-item four ">
                        <div className="expart-img mega-hover fix cover">
                            <img  src="/demo-01/assets/img/expart/expart3.jpg" alt="" />
                        </div>
                        <div className="text four">
                            <a href="/demo-01/attorney-details" className="expart-item-title">Leslie Alexander</a>
                            <span className="highlight">Attorney</span>
                            <p>Please bring all relevant kinds contracts, correspondence a and a summary </p>
                           <div className="social-wrapper">
                                <a href="https://www.facebook.com/"> <i className="fa-brands fa-facebook-f"></i></a>
                                <a href="https://x.com/">
                                <i className="fa-brands fa-twitter"></i></a>
                                <a href="https://www.whatsapp.com/"> <i className="fa-brands fa-whatsapp"></i></a>
                                <a href="https://www.instagram.com/"> <i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className="col-lg-6">
                    <div className="expart-content expart-content-4 three">
                        <div className="expart-item four">
                        <div className="expart-img mega-hover fix cover">
                            <img  src="/demo-01/assets/img/expart/expart2.jpg" alt="" />
                        </div>
                        <div className="text four">
                            <a href="/demo-01/attorney-details" className="expart-item-title">Savannah Nguyen</a>
                            
                            <span className="highlight">Chief Justice</span>
                            <p>Please bring all relevant kinds contracts, correspondence a and a summary </p>
                            <div className="social-wrapper">
                                <a href="https://www.facebook.com/"> <i className="fa-brands fa-facebook-f"></i></a>
                                <a href="https://x.com/">
                                <i className="fa-brands fa-twitter"></i></a>
                                <a href="https://www.whatsapp.com/"> <i className="fa-brands fa-whatsapp"></i></a>
                                <a href="https://www.instagram.com/"> <i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className="col-lg-6">
                    <div className="expart-content expart-content-4 four">
                        <div className="expart-item four">
                        <div className="expart-img mega-hover fix cover">
                            <img  src="/demo-01/assets/img/expart/expart1.jpg" alt="" />
                        </div>
                        <div className="text four">
                            <a href="/demo-01/attorney-details" className="expart-item-title">Jonson Anderson</a>
                            <span className="highlight">Financial Lawyer</span>
                            <p>Please bring all relevant kinds contracts, correspondence a and a summary </p>
                            <div className="social-wrapper">
                                <a href="https://www.facebook.com/"> <i className="fa-brands fa-facebook-f"></i></a>
                                <a href="https://x.com/">
                                <i className="fa-brands fa-twitter"></i></a>
                                <a href="https://www.whatsapp.com/"> <i className="fa-brands fa-whatsapp"></i></a>
                                <a href="https://www.instagram.com/"> <i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        <div className="expart-vector1 p-absolute">
            <img  src="/demo-01/assets/img/expart/vector-2.png" alt="" />
        </div>
    </section>
    {/*============ Expart End ============ */}
    
    {/*============ FAQ Start ============ */}
    <section className="faq sec-pb-pt-120" data-bg-src="/demo-01/assets/img/faq/faq-bg-4.png">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="faq-thumb-wrapper">
                        <div className="faq-thumb fix cover">
                            <img  src="/demo-01/assets/img/faq/faq-thumb-3.jpg" alt="" />
                        </div>
                        <div className="faq-thumb fix cover">
                            <img  src="/demo-01/assets/img/faq/faq-thumb-2.jpg" alt="" />
                        </div>
                        <div className="faq-thumb fix cover">
                            <img  src="/demo-01/assets/img/faq/faq-thumb-1.jpg" alt="" />
                        </div>
                        <div className="faq-thumb p-relative ">
                            <img  src="/demo-01/assets/img/faq/customer.png" alt="" />
                            <div className="icon-box p-absolute">
                                <img  src="/demo-01/assets/img/faq/Icon-Box.svg" alt="" />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="faq-content four">
                        <div className="sec-title mb-60" >
                            <span className="sub-title">Frequently Asked Question</span>
                            <h2 className="white-color">Your Question, Answerd</h2>
                        </div>
                            <div className="faq-accordion" id="accordionExample">
                                <div className="faq-accordion-item four">
                                    <h2 className="faq-accordion-header" id="headingOne">
                                    <button className="faq-accordion-button four" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span>How long will it take to resolve my any case?</span>
                                        <i className="fa-regular fa-eye eye"></i>
                                        <i className="fa-regular fa-eye-slash eye-slash"></i>
                                    </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    role="region" data-bs-parent="#accordionExample">
                                    <div className="faq-accordion-body four">
                                        <span>The timeline depends on the complexity and nature of the case. We aim a to resolve matters efficiently while prioritizing your best interests legal an issue or making a significant decision, consulting a lawyer ensures you is understand your rights and options.</span>
                                        
                                    </div>
                                    </div>
                                </div>
                                <div className="faq-accordion-item four">
                                    <h2 className="faq-accordion-header" id="headingTwo">
                                    <button className="faq-accordion-button four collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span>What is your approach to resolving disputes?</span>
                                        <i className="fa-regular fa-eye eye"></i>
                                        <i className="fa-regular fa-eye-slash eye-slash"></i>
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" 
                                    role="region">
                                    <div className="faq-accordion-body four">
                                       <span>The timeline depends on the complexity and nature of the case. We aim a to resolve matters efficiently while prioritizing your best interests legal an issue or making a significant decision, consulting a lawyer ensures you is understand your rights and options.</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="faq-accordion-item four">
                                    <h2 className="faq-accordion-header" id="headingThree">
                                    <button className="faq-accordion-button four collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <span>Do you handle cases outside your local area?</span>
                                        <i className="fa-regular fa-eye eye"></i>
                                        <i className="fa-regular fa-eye-slash eye-slash"></i>
                                    </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" role="region">
                                    <div className="faq-accordion-body four">
                                       <span>The timeline depends on the complexity and nature of the case. We aim a to resolve matters efficiently while prioritizing your best interests legal an issue or making a significant decision, consulting a lawyer ensures you is understand your rights and options.</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*============ FAQ End ============ */}
     {/*============ Case-Studies Start ============ */}
    
    <section className="cases sec-pb-pt">
        <div className="container">
            <div className="row gx-0">
                <div className="col-lg-5  wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">
                    <div className="sec-title mb-60">
                <span className="sub-title">case studies</span>
                <h2 className="white-color">Our Latest Case Studies</h2>
                </div>
                
                </div>
                <div className="col-lg-7  wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.1s">
                    <ul className="cases-filters  four" id="myTab" role="tablist">
                        <li className="nav-item " role="presentation">
                            <button className=" filter-button active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all-tab-pane" type="button" role="tab" aria-controls="all-tab-pane" aria-selected="true">all</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="filter-button" id="copyright-tab" data-bs-toggle="tab" data-bs-target="#copyright-tab-pane" type="button" role="tab" aria-controls="copyright-tab-pane" aria-selected="false">Copyright</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="filter-button" id="creative-tab" data-bs-toggle="tab" data-bs-target="#creative-tab-pane" type="button" role="tab" aria-controls="creative-tab-pane" aria-selected="false">Creative</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="filter-button" id="patent-tab" data-bs-toggle="tab" data-bs-target="#patent-tab-pane" type="button" role="tab" aria-controls="patent-tab-pane" aria-selected="false">Patent</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="filter-button" id="trademark-tab" data-bs-toggle="tab" data-bs-target="#trademark-tab-pane" type="button" role="tab" aria-controls="trademark-tab-pane" aria-selected="false">Trademark</button>
                        </li>
                        </ul>
                        
                    
                </div>
                
            </div>
            
        </div>
            
        <div className="container container-s">
            <div className="tab-content cases-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="all-tab-pane" role="tabpanel" aria-labelledby="all-tab" tabIndex="0">
                                  <div className="swiper  cases-1">
                                <div className="swiper-wrapper ">
                                    <div className="swiper-slide wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.7s">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-1.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                                    </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-3.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="1.3s">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-4.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                                    </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="1.6s">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-5.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="1.9s">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-6.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="1.9s">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb   four cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-1.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="1.9s">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb   four cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-2.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="1.9s">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-3.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="1.9s">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-4.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="1.9s">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-5.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="1.9s">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-6.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                </div>
                                </div>
                        </div>
                        <div className="tab-pane fade" id="copyright-tab-pane" role="tabpanel" aria-labelledby="copyright-tab" tabIndex="0">
                              <div className="swiper  cases-1">
                                <div className="swiper-wrapper ">
                                    <div className="swiper-slide">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-4.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-5.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-6.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                </div>
                                </div>
                        </div>
                        <div className="tab-pane fade" id="creative-tab-pane" role="tabpanel" aria-labelledby="creative-tab" tabIndex="0">
                              <div className="swiper  cases-1">
                                <div className="swiper-wrapper ">
                                  
                                   
                                    <div className="swiper-slide">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-1.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-3.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                   
                                    <div className="swiper-slide">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-1.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-3.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                </div>
                                </div>
                        </div>
                        <div className="tab-pane fade" id="patent-tab-pane" role="tabpanel" aria-labelledby="patent-tab" tabIndex="0">
                              <div className="swiper  cases-1">
                                <div className="swiper-wrapper ">
                                   
                                    
                                    <div className="swiper-slide">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-6.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-1.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-3.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-4.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    
                                </div>
                                </div>
                        </div>
                        <div className="tab-pane fade" id="trademark-tab-pane" role="tabpanel" aria-labelledby="trademark-tab" tabIndex="0">
                              <div className="swiper  cases-1">
                                <div className="swiper-wrapper ">
                                   
                                    <div className="swiper-slide">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb  four  cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-1.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    
                                    <div className="swiper-slide">
                                        <div className="cases-item  ">
                                                <div className="cases-thumb   four cover">
                                                    <img  src="/demo-01/assets/img/case-studies/case-thumb-6.jpg" alt="" />
                                                    
                                                </div>
                                                 <div className="arrow-wrap four">
                                                    <a href="/demo-01/case-details"  className="arrow">
                                                     <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3681 8.08065C29.7592 7.69066 29.76 7.0575 29.37 6.66644L23.0147 0.293834C22.6247 -0.0972214 21.9916 -0.0980823 21.6005 0.291911C21.2095 0.681904 21.2086 1.31507 21.5986 1.70612L27.2478 7.37066L21.5832 13.0198C21.1922 13.4098 21.1913 14.043 21.5813 14.434C21.9713 14.8251 22.6045 14.8259 22.9955 14.436L29.3681 8.08065ZM-1.68488e-05 8.33362L28.6606 8.37258L28.6633 6.37259L0.0027024 6.33362L-1.68488e-05 8.33362Z"/>
                                </svg>
                                                </a>
                                                </div>
                                                <div className="cases-item-text">
                                                    <span>family law</span> 
                                                     <a href="/demo-01/case-details">initial consultation</a>
                                                </div>   
                                            
                                        </div> 
                                    </div>
                                    
                                </div>
                                </div>
                        </div>
                </div>
        </div>

                            
    </section>
    {/*============ Case-Studies End ============ */}
  
    {/*============ Blog Start ============ */}
    <section className="blog sec-pb-pt" data-bg-src="/demo-01/assets/img/blog/blog-bg-4.png">
        <div className="container">
            <div className="sec-title text-center mb-60">
                <span className="sub-title two">Blog & News</span>
                <h2 className="white-color">Latest New and Blog</h2>
            </div>
            <div className="row gx-xl-4 gx-lg-2 blog-1">
                <div className="col-lg-4">
                    <div className="blog-content">
                        <div className="blog-thumb mega-hover fix cover">
                            <img  src="/demo-01/assets/img/blog/blog-1.jpg" alt="" />
                        </div>
                        <div className="blog-content-text four">
                            <div className="date-admin">
                                <a href="/demo-01/blog-details"><i className="fa-solid fa-calendar-days"></i>10 April, 2024</a>
                                <a href="/demo-01/blog-details"><i className="fa-solid fa-user"></i>Admin</a>
                            </div>
                            <a href="/demo-01/blog-details" className="blog-content-title four">Turning Legal Challenges into Opportunities</a>
                            <a href="/demo-01/blog-details" className="blog-btn four"><span className="angels"><img  src="/demo-01/assets/img/icon/double-angle.svg" alt="" /></span> read more</a>

                            <div className="share-area">
                                <div className="share share-icon1">
                                    <i className="fa-solid fa-share-nodes"></i>
                                    <div className="social-wrapper  social-wrapper-toggle1">
                                    <a href="https://www.facebook.com/"> <i className="fa-brands fa-facebook-f"></i></a>
                                      <a href="https://x.com/">
                             <i className="fa-brands fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/"> <i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.behance.com/"> <i className="fa-brands fa-behance"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog-content">
                        <div className="blog-thumb mega-hover fix cover">
                            <img  src="/demo-01/assets/img/blog/blog-2.jpg" alt="" />
                        </div>
                        <div className="blog-content-text four">
                            <div className="date-admin">
                                <a href="/demo-01/blog-details"><i className="fa-solid fa-calendar-days"></i>10 April, 2024</a>
                                <a href="/demo-01/blog-details"><i className="fa-solid fa-user"></i>Admin</a>
                            </div>
                            <a href="/demo-01/blog-details" className="blog-content-title four">Timelines vary based on free complexity of the case</a>
                            <a href="/demo-01/blog-details" className="blog-btn four"><span className="angels"><img  src="/demo-01/assets/img/icon/double-angle.svg" alt="" /></span> read more</a>

                            <div className="share-area">
                                <div className="share share-icon2">
                                    <i className="fa-solid fa-share-nodes"></i>
                                    <div className="social-wrapper  social-wrapper-toggle2">
                                    <a href="https://www.facebook.com/"> <i className="fa-brands fa-facebook-f"></i></a>
                                      <a href="https://x.com/">
                             <i className="fa-brands fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/"> <i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.behance.com/"> <i className="fa-brands fa-behance"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog-content">
                        <div className="blog-thumb mega-hover fix cover">
                            <img  src="/demo-01/assets/img/blog/blog-3.jpg" alt="" />
                        </div>
                        <div className="blog-content-text four">
                            <div className="date-admin">
                                <a href="/demo-01/blog-details"><i className="fa-solid fa-calendar-days"></i>10 April, 2024</a>
                                <a href="/demo-01/blog-details"><i className="fa-solid fa-user"></i>Admin</a>
                            </div>
                            <a href="/demo-01/blog-details" className="blog-content-title four">We focus on achieving based amicable solutions </a>
                           <a href="/demo-01/blog-details" className="blog-btn four"><span className="angels"><img  src="/demo-01/assets/img/icon/double-angle.svg" alt="" /></span> read more</a>

                            <div className="share-area four">
                                <div className="share share-icon3">
                                    <i className="fa-solid fa-share-nodes"></i>
                                    <div className="social-wrapper   social-wrapper-toggle3">
                                    <a href="https://www.facebook.com/"> <i className="fa-brands fa-facebook-f"></i></a>
                                      <a href="https://x.com/">
                                    <i className="fa-brands fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/"> <i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.behance.com/"> <i className="fa-brands fa-behance"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    {/*============ Blog End ============ */}

     

        
    </main>

    <footer>
            <div className="footer" data-bg-src="/demo-01/assets/img/footer/Bg.png">
                
                <div className="footer-middle p-relative">
                    <div className="container">
                        <div className="footer-middle-top">
                            <div className="footer-logo">
                                <a href="/demo-01/index-2"><img  src="/demo-01/assets/img/footer/Logo-2.svg" alt="" /></a>
                            </div>
                            <div className="footer-middle-top-item d-flex">
                                <div className="icon">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.77246 19.5965C1.77246 20.6142 2.16995 21.5782 2.90009 22.3179C3.63251 23.04 4.5961 23.4379 5.61386 23.4379H19.3849C20.4027 23.4379 21.3663 23.04 22.1063 22.3102C22.8288 21.5782 23.2263 20.6142 23.2263 19.5965V8.88593C23.2072 8.63114 23.0922 8.39778 22.8899 8.24353L13.8483 1.98476C13.0411 1.42553 11.9577 1.42591 11.1505 1.98438L2.10892 8.24353C1.90658 8.39773 1.79156 8.63122 1.77246 8.88593V19.5965ZM21.0016 21.2055C20.5637 21.6373 19.9892 21.8754 19.3849 21.8754H5.61386C5.00961 21.8754 4.43512 21.6373 4.00482 21.2131C3.573 20.7752 3.33496 20.2011 3.33496 19.5965V10.6769L8.57125 15.5356L5.71991 18.3933C5.54443 18.5364 5.43304 18.7553 5.43304 19.0002C5.43304 19.4317 5.78629 19.7815 6.21811 19.7815C6.42563 19.7815 6.62476 19.6991 6.77124 19.5522L9.71762 16.5993L10.9056 17.7017C11.3519 18.116 11.9257 18.3231 12.4994 18.3231C13.0731 18.3231 13.6469 18.116 14.0939 17.7013L15.2813 16.5995L18.2275 19.5522C18.374 19.6991 18.5808 19.7815 18.7883 19.7815C19.2201 19.7815 19.5657 19.4317 19.5657 19.0002C19.5657 18.769 19.4643 18.5615 19.304 18.4185L16.4277 15.5358L21.6638 10.6769V19.5965C21.6638 20.2011 21.4258 20.7752 21.0016 21.2055ZM12.0401 3.26879C12.3148 3.07882 12.684 3.07843 12.9587 3.26917L21.2006 8.97472L13.0312 16.5558C12.7321 16.8327 12.2659 16.8323 11.9684 16.5561L3.79821 8.97472L12.0401 3.26879Z" fill="#C3922E"/>
                                    </svg>

                                </div>
                                <div className="info">
                                    <p>Send Email</p>
                                    <a href="https://workspace.google.com/intl/en-US/gmail/">help24/7info@Lawia.com</a>
                                </div>
                            </div>
                            <div className="footer-middle-top-item d-flex">
                                <div className="icon">
                                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2_421)">
                                    <path d="M18.3299 16.3516C18.1121 16.1331 17.8532 15.9597 17.5682 15.8414C17.2831 15.7231 16.9775 15.6623 16.6689 15.6623C16.3603 15.6623 16.0547 15.7231 15.7696 15.8414C15.4846 15.9597 15.2257 16.1331 15.0079 16.3516L13.8745 17.4844C12.5983 16.6749 11.416 15.7264 10.3492 14.6563C9.28079 13.588 8.33199 12.4065 7.51961 11.1328L8.65301 10C8.87163 9.78229 9.04508 9.52356 9.16344 9.23867C9.28179 8.95379 9.34272 8.64835 9.34272 8.33988C9.34272 8.03141 9.28179 7.72597 9.16344 7.44109C9.04508 7.1562 8.87163 6.89747 8.65301 6.67972L6.44093 4.4766C6.22615 4.25738 5.96947 4.08355 5.68614 3.96544C5.40281 3.84734 5.09861 3.78737 4.79163 3.7891C4.48247 3.78834 4.17622 3.84869 3.89048 3.96668C3.60475 4.08467 3.34518 4.25797 3.12671 4.4766L2.06365 5.53129C1.55696 6.07579 1.1788 6.72687 0.956959 7.43666C0.73512 8.14644 0.675246 8.89689 0.781739 9.63285C1.03187 12.5625 2.95474 16.086 5.91722 19.0547C8.87969 22.0235 12.444 23.9375 15.3753 24.2188C15.594 24.2305 15.8131 24.2305 16.0318 24.2188C16.6628 24.2453 17.2927 24.1456 17.8847 23.9256C18.4766 23.7055 19.0186 23.3696 19.4789 22.9375L20.5342 21.875C20.7529 21.6567 20.9263 21.3972 21.0444 21.1117C21.1624 20.8261 21.2228 20.52 21.222 20.211C21.2238 19.9042 21.1638 19.6001 21.0456 19.3169C20.9274 19.0338 20.7535 18.7772 20.5342 18.5625L18.3299 16.3516ZM19.432 20.7735L18.369 21.8282C17.9759 22.1556 17.5171 22.3948 17.0235 22.5295C16.5299 22.6643 16.0132 22.6916 15.5081 22.6094C12.9678 22.3907 9.7317 20.5938 7.05843 17.9219C4.38517 15.25 2.58736 12.0391 2.34505 9.50004C2.26076 8.99528 2.28699 8.47826 2.42193 7.98462C2.55688 7.49097 2.79733 7.03245 3.12671 6.64066L4.22884 5.57816C4.30188 5.50575 4.3885 5.44847 4.48373 5.40959C4.57897 5.37071 4.68095 5.351 4.78382 5.3516C4.88669 5.351 4.98867 5.37071 5.0839 5.40959C5.17913 5.44847 5.26575 5.50575 5.33879 5.57816L7.55088 7.81254C7.69646 7.95891 7.77818 8.15692 7.77818 8.36332C7.77818 8.56971 7.69646 8.76772 7.55088 8.9141L5.98757 10.4766C5.86524 10.5983 5.78663 10.757 5.76401 10.928C5.74138 11.099 5.77601 11.2726 5.8625 11.4219C6.79845 13.0145 7.93603 14.4797 9.24707 15.7813C10.5494 17.0917 12.0153 18.2286 13.6087 19.1641C13.7581 19.2505 13.9318 19.2852 14.1029 19.2625C14.274 19.2399 14.4328 19.1614 14.5545 19.0391L16.1178 17.4766C16.2643 17.3311 16.4624 17.2494 16.6689 17.2494C16.8754 17.2494 17.0735 17.3311 17.22 17.4766L19.432 19.6875C19.5045 19.7605 19.5618 19.8471 19.6007 19.9423C19.6396 20.0375 19.6593 20.1394 19.6587 20.2422C19.6538 20.4417 19.5727 20.6318 19.432 20.7735Z" fill="#C3922E"/>
                                    <path d="M20.7921 4.21096C19.7058 3.12109 18.4144 2.25693 16.9923 1.66829C15.5703 1.07965 14.0457 0.778186 12.5065 0.781273C12.2992 0.781273 12.1004 0.863583 11.9538 1.0101C11.8072 1.15661 11.7249 1.35532 11.7249 1.56252C11.7249 1.76972 11.8072 1.96844 11.9538 2.11495C12.1004 2.26146 12.2992 2.34377 12.5065 2.34377C13.8482 2.34373 15.1766 2.60925 16.4151 3.12501C17.6536 3.64077 18.7776 4.39657 19.7224 5.34879C20.6671 6.30101 21.4138 7.43079 21.9194 8.67294C22.4249 9.91509 22.6794 11.245 22.668 12.586C22.668 12.7932 22.7504 12.9919 22.897 13.1384C23.0436 13.2849 23.2424 13.3672 23.4497 13.3672C23.657 13.3672 23.8558 13.2849 24.0024 13.1384C24.149 12.9919 24.2313 12.7932 24.2313 12.586C24.2463 11.0312 23.9497 9.48922 23.359 8.05085C22.7684 6.61249 21.8955 5.30687 20.7921 4.21096Z" fill="#C3922E"/>
                                    <path d="M16.3449 8.67969C16.7885 9.12038 17.1394 9.64531 17.377 10.2236C17.6146 10.8018 17.7341 11.4218 17.7284 12.0469C17.7284 12.2541 17.8108 12.4528 17.9574 12.5993C18.104 12.7458 18.3028 12.8281 18.5101 12.8281C18.7174 12.8281 18.9162 12.7458 19.0628 12.5993C19.2094 12.4528 19.2917 12.2541 19.2917 12.0469C19.3021 11.2196 19.148 10.3984 18.8384 9.6311C18.5287 8.86378 18.0698 8.16553 17.4881 7.57687C16.9064 6.9882 16.2135 6.52083 15.4497 6.20186C14.6859 5.8829 13.8663 5.71869 13.0385 5.71875C12.8312 5.71875 12.6324 5.80106 12.4858 5.94757C12.3392 6.09409 12.2568 6.2928 12.2568 6.5C12.2568 6.7072 12.3392 6.90591 12.4858 7.05243C12.6324 7.19894 12.8312 7.28125 13.0385 7.28125C13.6545 7.28589 14.2636 7.41178 14.8309 7.65172C15.3982 7.89167 15.9127 8.24098 16.3449 8.67969Z" fill="#C3922E"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_2_421">
                                    <rect width="25.013" height="25" fill="white"/>
                                    </clipPath>
                                    </defs>
    </svg>

                                </div>
                                <div className="info">
                                    <p>Need Any Lawyer Help</p>
                                    <a href="tel:+(163)-5565-06979">+(163)-5565-06979</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-middle-wrapper">
                        {/* <div className=" footer-item footer-service">
                            <h3>our services</h3>
                            <ul>
                                <li><a href="/demo-01/about"><i className="fa-regular fa-angle-right"></i>Business Formation</a></li>
                                <li><a href="/demo-01/about"><i className="fa-regular fa-angle-right"></i>Corporate Law</a></li>
                                <li><a href="a"><i className="fa-regular fa-angle-right"></i>Employment Law</a></li>
                                <li><a href="/demo-01/about"><i className="fa-regular fa-angle-right"></i>Intellectual Property Law</a></li>
                                <li><a href="/demo-01/about"><i className="fa-regular fa-angle-right"></i>Real Estate Law</a></li>
                                
                            
                            </ul>
                        </div> */}
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
                        <div className=" footer-item footer-pages">
                            <h3>pages</h3>
                            <ul>
                                <li><a href="/demo-01/about"><i className="fa-regular fa-angle-right"></i>About Us</a></li>
                                <li><a href="/demo-01/practice"><i className="fa-regular fa-angle-right"></i>Services</a></li>
                                <li><a href="/demo-01/contact"><i className="fa-regular fa-angle-right"></i>Get In Touch</a></li>
                                <li><a href="/demo-01/contact"><i className="fa-regular fa-angle-right"></i>How It Work</a></li>
                                <li><a href="/demo-01/contact"><i className="fa-regular fa-angle-right"></i>Contact Us</a></li>
                                
                            
                            </ul>
                        </div>
                    
                        <div className="footer-item footer-gallery">
                            <h3> our gallery</h3>
                            <div className="gallery-content">
                                <a href="/demo-01/assets/img/footer/gallery(1).jpg" className="img gallery-popup fix cover">
                                    <img  src="/demo-01/assets/img/footer/gallery(1).jpg" alt="" />
                                </a>
                                <a href="/demo-01/assets/img/footer/gallery(2).jpg" className="img gallery-popup fix cover">
                                    <img  src="/demo-01/assets/img/footer/gallery(2).jpg" alt="" />
                                </a>
                                <a href="/demo-01/assets/img/footer/gallery(3).jpg" className="img gallery-popup fix cover">
                                    <img  src="/demo-01/assets/img/footer/gallery(3).jpg" alt="" />
                                </a>
                                <a href="/demo-01/assets/img/footer/gallery(4).jpg" className="img gallery-popup fix cover">
                                    <img  src="/demo-01/assets/img/footer/gallery(4).jpg" alt="" />
                                </a>
                                <a href="/demo-01/assets/img/footer/gallery(5).jpg" className="img gallery-popup fix cover">
                                    <img  src="/demo-01/assets/img/footer/gallery(5).jpg" alt="" />
                                </a>
                                <a href="/demo-01/assets/img/footer/gallery(6).jpg" className="img gallery-popup fix cover">
                                    <img  src="/demo-01/assets/img/footer/gallery(6).jpg" alt="" />
                                </a>
                            
                            
                            </div>
                        </div>
                        <div className="footer-item newsletter">
                            <h3> newsletter</h3>
                        <p>Sign Up to get updates & news about</p>
                        <div className="input-area p-relative">
                            <input  type="email" placeholder="Email Address" />
                            <button className="newsletter-btn p-absolute">
                                <img  src="/demo-01/assets/img/footer/plane.svg" alt="" />
                            </button>
                        </div>
                            <div className="footer-social">
                            <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://x.com/"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.behance.com/"><i className="fa-brands fa-behance"></i></a>
                        </div>
                        </div>
                        </div>
                    
                    </div>
                    <div className="footer-vector-1 p-absolute">
                        <img  src="/demo-01/assets/img/footer/vector-1.png" alt="" />
                    </div>
                    <div className="footer-vector-2 p-absolute">
                        <img  src="/demo-01/assets/img/footer/vector-2.png" alt="" />
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-wrapper">
                                <div className="footer-bottom-left">
                        <p>Copyright © 2026 <a className="highlight" href="/demo-01/index-2">Lawia</a>. All Rights Reserved By <a href="/demo-01/index-2" className="highlight">Vecuro</a>. </p>
                    </div>
                        <div className="footer-bottom-right">
                            <span>
                                <a href="#">Setting & Privacy</a> / 
                            <a href="#">FAQ </a> / 
                            <a href="#">Support</a>
                            </span>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    </footer>
   
    {/*===================
         ALL JS File
    ====================*/}
    {/* Jquery */}
     
       {/* bootstrap */}
    
    {/* Slick Slider */}
    
    {/* Swiper Slider */}
    
    {/* WOW Animation */}
    
   {/* Counter Up */}
    
    
    {/* Magnific Popup */}
    
    {/* Main Js File */}
    </>
  );
}
