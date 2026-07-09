
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";


export default function Page() {
  return (
    <>
      {/*============ Back to top Start============ */}
    <button id="back-to-top-btn"><i className="fa-solid fa-arrow-up-long"></i></button>
    {/*============ Back to top End============ */}
    {/*============ mobile menu Start============ */}
    <div className="mobile-menu ">
            <div className="mobile-menu-area p-relative">
                        <div className="mobile-menu-logo">
                            <a href="/demo-01/index-2">
                            <img  src="/demo-01/assets/img/header/logo.svg" alt="logo" />
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
    {/*============ Sidebar Start ============ */}
    {/* <div className="header-sidebar">
        <div className="header-sidebar-wrapper">
            <div className="logo">
                <a href="/demo-01" className=" cover">
                <img  src="/demo-01/assets/img/header/logo.svg" alt="" />
            </a>
            </div>
            <div className="social">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <div className="header-sidebar-info">
                <div className="item">
                    <span className="icon"><i className="fa-solid fa-clock"></i></span>
                    <span><p>Sunday - Friday: <br  /> 9.am - 8 pm</p></span>
                    
                </div>
                <div className="item">
                    <span className="icon"><i className=" fa-solid fa-envelope-open-text"></i></span>
                    <span><a href="#">lawialaw@gmail.com</a><br  />
                          <a href="#">lawialaw@gmail.com</a></span>

                </div>
                <div className="item">
                    <span className="icon"><i className="fa-solid fa-location-dot"></i></span>
                    <p>6391 Elgin  <br  />St. Delaware</p>
                </div>
              
            </div>
            <div className="latest-news">
                <h2>our latest news :</h2>
                <div className="item">
                        <a href="/demo-01/blog-details" className="img fix cover">
                            <img  src="/demo-01/assets/img/blog/group-contemporary-lawyers-gathered-by-table-paperwork.jpg" alt="" />
                        </a>
                        <div className="info">
                                 <a href="/demo-01/blog-details" className="title">Dedicated to Your Legal Success</a>
                                <a href="/demo-01/blog-details" className="date"> <i className="fa-regular fa-calendar"></i> 4 March. 2022</a>
                        </div>
                </div>
                <div className="item">
                        <a href="/demo-01/blog-details" className="img fix cover">
                        <img  src="/demo-01/assets/img/blog/italy-office-business-meeting-1.jpg" alt="" />
                        </a>
                        <div className="info">
                            <a href="/demo-01/blog-details" className="title">Estate planning and trust creation</a>
                            <a href="/demo-01/blog-details" className="date"> <i className="fa-regular fa-calendar"></i> 4 March. 2022</a>
                         </div>
                </div>
                <div className="item">
                        <a href="/demo-01/blog-details" className="img fix cover">
                            <img  src="/demo-01/assets/img/blog/two-bearded-men-wearing-old-fashioned-suits-talking-discuss-something-restaurant.jpg" alt="" />
                        </a>
                        <div className="info">
                            <a href="/demo-01/blog-details" className="title">When It’s Legal, We’re Your Team</a>
                            <a href="/demo-01/blog-details" className="date"> <i className="fa-regular fa-calendar"></i>10 december 2024</a>
                        </div>
                </div>
            </div>
            <button className="header-sidebar-close">
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div className="header-sidebar-overlay"></div>
    </div> */}
    {/*============ Sidebar End ============ */}
    {/*============ Header Start============ */}
     <header>
        <div className="header-top md-none">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="header-top-info" >
                                <span><i className="fa-solid fa-clock"></i>Sunday - Friday: 9.am - 8 pm</span>
                                <span><a href="https://www.gmail.com/"><i className="fa-solid fa-envelope-open-text"></i>lawialaw@gmail.com</a></span>
                                <span> <img  src="/demo-01/assets/img/header/Location-Icon.svg" alt="" />6391 Elgin St. Delaware</span>
                             
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="header-top-social d-flex justify-end">
                                <p>Follow Us On:</p>
                                <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="https://www.x.com/"><i className="fa-brands fa-x-twitter"></i></a>
                                <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                <a href="https://www.behance.com/"><i className="fa-brands fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="header p-absolute">
            <div className="header-menu-area">
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
                             <div className="header-menu ">
                                <nav>
                                    <ul >
                                        <li className="sub-menu"><a href="/demo-01/index-2">home <i className="fa-solid fa-plus plus"></i><i className="fa-solid fa-minus minus"></i>
                                        </a>
                                           <ul className="dropdown-menu">
                                                <li><a href="/demo-01/index-2"><i className="fa-regular fa-angle-right"></i> Home 01</a></li>
                                                <li><a href="/demo-01/index-3"><i className="fa-regular fa-angle-right"></i> Home 02</a></li>
                                                <li><a href="/demo-01/index-4"><i className="fa-regular fa-angle-right"></i> Home 03</a></li>
                                                <li><a href="/demo-01/index-5"><i className="fa-regular fa-angle-right"></i> Home 04</a></li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu  "><a href="/demo-01/about">about us
                                            <i className="fa-solid fa-plus plus"></i><i className="fa-solid fa-minus minus"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                                <li><a href="/demo-01/about"><i className="fa-regular fa-angle-right"></i> about us</a></li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu mega-menu-wrapper"><a href="/demo-01/index-2">pages
                                            <i className="fa-solid fa-plus plus"></i><i className="fa-solid fa-minus minus"></i>
                                        </a>
                                            <ul className=" dropdown-menu mega-menu flex justify-between">
                                                <li>
                                                    <span>pagelist one</span>
                                                     <ul>
                                                        <li><a href="/demo-01/index-2"><i className="fa-regular fa-angle-right"></i>home 01</a></li>
                                                        <li><a href="/demo-01/index-3"><i className="fa-regular fa-angle-right"></i>home 02</a></li>
                                                        <li><a href="/demo-01/index-4"><i className="fa-regular fa-angle-right"></i>home 03</a></li>
                                                        <li><a href="/demo-01/index-5"><i className="fa-regular fa-angle-right"></i>home 04</a></li>
                                                        <li><a href="/demo-01/about"><i className="fa-regular fa-angle-right"></i>about us</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span>pagelist two</span>
                                                     <ul>
                                                        <li><a href="/demo-01/practice"><i className="fa-regular fa-angle-right"></i>practice</a></li>
                                                        <li><a href="/demo-01/practice-details"><i className="fa-regular fa-angle-right"></i>practice details</a></li>
                                                        <li><a href="/demo-01/case"><i className="fa-regular fa-angle-right"></i>case</a></li>
                                                        <li><a href="/demo-01/case-details"><i className="fa-regular fa-angle-right"></i>case details</a></li>
                                                         <li><a href="/demo-01/attorney"><i className="fa-regular fa-angle-right"></i>attorney</a></li>
                                                        <li><a href="/demo-01/attorney-details"><i className="fa-regular fa-angle-right"></i>attorney details</a></li>
                                                        
                                                    </ul>
                                                    
                                                </li>
                                                <li>
                                                    <span>pagelist three</span>
                                                   <ul>
                                                        <li><a href="/demo-01/price"><i className="fa-regular fa-angle-right"></i>price</a></li>
                                                        <li><a href="/demo-01/faq"><i className="fa-regular fa-angle-right"></i>FAQ</a></li>
                                                        <li><a href="/demo-01/product"><i className="fa-regular fa-angle-right"></i>product</a></li>
                                                        <li><a href="/demo-01/product-details"><i className="fa-regular fa-angle-right"></i>product details</a></li>
                                                        <li><a href="/demo-01/cart"><i className="fa-regular fa-angle-right"></i>Cart</a></li>
                                                        <li><a href="/demo-01/checkout"><i className="fa-regular fa-angle-right"></i>checkout</a></li>
                                                        
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span>pagelist four</span>
                                                    <ul>
                                                        <li><a href="/demo-01/blog"><i className="fa-regular fa-angle-right"></i>blog</a></li>
                                                        <li><a href="/demo-01/blog-standard"><i className="fa-regular fa-angle-right"></i>blog standard</a></li>
                                                        <li><a href="/demo-01/blog-details"><i className="fa-regular fa-angle-right"></i>blog details</a></li>
                                                        <li><a href="/demo-01/contact"><i className="fa-regular fa-angle-right"></i>contact</a></li>
                                                        <li><a href="/demo-01/error"><i className="fa-regular fa-angle-right"></i>error 404</a></li>
                                                        
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu"><a href="/demo-01/case">case studies
                                            <i className="fa-solid fa-plus plus"></i><i className="fa-solid fa-minus minus"></i>
                                        </a>
                                             <ul className="dropdown-menu">
                                                <li><a href="/demo-01/case"><i className="fa-regular fa-angle-right"></i> case-studies</a></li>
                                                <li><a href="/demo-01/case-details"><i className="fa-regular fa-angle-right"></i> case details</a></li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu"><a href="/demo-01/blog">blog
                                            <i className="fa-solid fa-plus plus"></i><i className="fa-solid fa-minus minus"></i>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="/demo-01/blog"><i className="fa-regular fa-angle-right"></i> blog</a></li>
                                                <li><a href="/demo-01/blog-standard"><i className="fa-regular fa-angle-right"></i> blog standard</a></li>
                                                <li><a href="/demo-01/blog-details"><i className="fa-regular fa-angle-right"></i> blog details</a></li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu"><a href="/demo-01/contact">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="header-button text-right ">
                                <a href="/demo-01/contact" className="header-btn md-none">free consultation <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4375 6.37085C14.6861 6.37085 14.9246 6.27208 15.1004 6.09626C15.2762 5.92045 15.375 5.68199 15.375 5.43335C15.375 5.18471 15.2762 4.94625 15.1004 4.77044C14.9246 4.59462 14.6861 4.49585 14.4375 4.49585H0.937499C0.688858 4.49585 0.450401 4.59462 0.274586 4.77044C0.0987701 4.94625 -9.53674e-07 5.18471 -9.53674e-07 5.43335C-9.53674e-07 5.68199 0.0987701 5.92045 0.274586 6.09626C0.450401 6.27208 0.688858 6.37085 0.937499 6.37085H14.4375Z" />
                                <path d="M9.93751 10.8709C10.0605 10.8714 10.1824 10.847 10.2958 10.7994C10.4092 10.7517 10.5118 10.6816 10.5975 10.5934L15.0975 6.09338C15.1855 6.00745 15.2554 5.9048 15.3032 5.79146C15.3509 5.67811 15.3755 5.55637 15.3755 5.43338C15.3755 5.31039 15.3509 5.18865 15.3032 5.07531C15.2554 4.96196 15.1855 4.85931 15.0975 4.77338L10.5975 0.273381C10.5108 0.186708 10.4079 0.117956 10.2947 0.0710492C10.1815 0.0241424 10.0601 9.13242e-10 9.93751 0C9.81493 -9.13243e-10 9.69356 0.0241424 9.58032 0.0710492C9.46708 0.117956 9.36418 0.186708 9.27751 0.273381C9.19084 0.360053 9.12208 0.462948 9.07518 0.576191C9.02827 0.689434 9.00413 0.810808 9.00413 0.933381C9.00413 1.05595 9.02827 1.17733 9.07518 1.29057C9.12208 1.40381 9.19084 1.50671 9.27751 1.59338L13.11 5.43338L9.27751 9.27338C9.14756 9.40447 9.0592 9.57099 9.0235 9.75209C8.9878 9.93318 9.00636 10.1208 9.07684 10.2914C9.14732 10.462 9.26659 10.608 9.41969 10.7111C9.5728 10.8141 9.75293 10.8697 9.93751 10.8709Z"/>
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
    {/*============ Hero Start ============ */}
        <section className="hero">
            <div className="container h-100 p-relative">
                <div className="row gx-0">
                    <div className="col-lg-6">
                        <div className="hero-title sec-title">
                            <h1 className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s"><span className="highlight">Welcome</span> to our Lawyer Attorney & Law Firm <span className="highlight">!</span></h1>
                            <p className=" wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">We specialize in a range of services, including family law, corporate law personal injury, real estate, and criminal defense.</p>
                            <div className="hero-btn-area d-flex align-item-center wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">
                                <a href="/demo-01/contact" className="main-btn">contact us<svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4375 6.37085C14.6861 6.37085 14.9246 6.27208 15.1004 6.09626C15.2762 5.92045 15.375 5.68199 15.375 5.43335C15.375 5.18471 15.2762 4.94625 15.1004 4.77044C14.9246 4.59462 14.6861 4.49585 14.4375 4.49585H0.937499C0.688858 4.49585 0.450401 4.59462 0.274586 4.77044C0.0987701 4.94625 -9.53674e-07 5.18471 -9.53674e-07 5.43335C-9.53674e-07 5.68199 0.0987701 5.92045 0.274586 6.09626C0.450401 6.27208 0.688858 6.37085 0.937499 6.37085H14.4375Z" fill="white"/>
                                <path d="M9.93751 10.8709C10.0605 10.8714 10.1824 10.847 10.2958 10.7994C10.4092 10.7517 10.5118 10.6816 10.5975 10.5934L15.0975 6.09338C15.1855 6.00745 15.2554 5.9048 15.3032 5.79146C15.3509 5.67811 15.3755 5.55637 15.3755 5.43338C15.3755 5.31039 15.3509 5.18865 15.3032 5.07531C15.2554 4.96196 15.1855 4.85931 15.0975 4.77338L10.5975 0.273381C10.5108 0.186708 10.4079 0.117956 10.2947 0.0710492C10.1815 0.0241424 10.0601 9.13242e-10 9.93751 0C9.81493 -9.13243e-10 9.69356 0.0241424 9.58032 0.0710492C9.46708 0.117956 9.36418 0.186708 9.27751 0.273381C9.19084 0.360053 9.12208 0.462948 9.07518 0.576191C9.02827 0.689434 9.00413 0.810808 9.00413 0.933381C9.00413 1.05595 9.02827 1.17733 9.07518 1.29057C9.12208 1.40381 9.19084 1.50671 9.27751 1.59338L13.11 5.43338L9.27751 9.27338C9.14756 9.40447 9.0592 9.57099 9.0235 9.75209C8.9878 9.93318 9.00636 10.1208 9.07684 10.2914C9.14732 10.462 9.26659 10.608 9.41969 10.7111C9.5728 10.8141 9.75293 10.8697 9.93751 10.8709Z" fill="white"/>
                                </svg>
                                </a>
                                <div className="play-btn-area ml-20">
                                    <a href="https://www.youtube.com/watch?v=zYRgrWtzpc0" className="video-play popup-video"><i className="fa-solid fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                       <div className="hero-thumb-wrapper fix">
                         <div className="hero-thumb  wow tpFadeInUp" data-wow-duration="3s" data-wow-delay="0">
                            <img  src="/demo-01/assets/img/hero/hero-1-thumb.png" alt="" />
                        </div>
                         <div className="hero-thumb-vector  wow img-custom-anim-scale" data-wow-duration="3s" data-wow-delay="s">
                            <img  src="/demo-01/assets/img/hero/hero-1-vector.png" alt="" />
                        </div>
                         <div className="hero-experience  wow animate__backInRight" data-wow-duration="4s" data-wow-delay="0.1s">
                            <span>10</span>
                            <p>years of <br  /> expericece</p>
                        </div>
                       </div>
                    </div>
                </div>
                <div className="counter p-absolute bottom-0">
                    <div className="counter-item">
                        <span><span className="count">10</span> K+</span>
                        <p>Complete Project</p>
                    </div>
                    <div className="counter-item ">
                        <span><span className="count">212</span> +</span>
                        <p>Complete Project</p>
                    </div>
                    <div className="counter-item">
                        <span><span className="count">20</span> +</span>
                        <p>Complete Project</p>
                    </div>
                    <div className="counter-item">
                        <span><span className="count">4.9</span></span>
                        <p>Complete Project</p>
                    </div>
                </div>
            </div>
        </section>
      
    {/*============ Hero End ============ */}
    {/*============ About Start ============ */}

    <section className="about sec-pb-pt">
        <div className="container">
            <div className=" about-title sec-title wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">
                <span className="sub-title"> about us</span>
                <h2>We are the Leading Law Firm for Annual revenues</h2>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-6">
                    <div className="about-thumb mt-60 w-100 fix wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">
                        <img  src="/demo-01/assets/img/about/about-thumb.jpg" alt="" />
                    </div>
                </div>
                <div className=" col-xl-5 col-lg-6">
                    <div className="about-content mt-60 wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                        <p className="article">If you're unsure, we offer consultations to help determine any whether legal representation is necessary to resolve matters efficiently while prioritizing best interests.</p>
                        <div className="about-item">
                            <div className="icon">
                                <img  src="/demo-01/assets/img/about/icon-2.svg" alt="" />
                            </div>
                            <div className="text">
                                <h3>Excellence</h3>
                                <p>Please bring all relevant documents, records, or contracts related to your case.</p>
                            </div>
                        </div>
                        <div className="about-item">
                            <div className="icon">
                                <img  src="/demo-01/assets/img/about/icon-1.svg" alt="" />
                            </div>
                            <div className="text">
                                <h3>Clients Focuse</h3>
                                <p>We aim to resolve matters efficiently while is prioritizing your best interests.</p>
                            </div>
                        </div>
                        <div className="about-btn-area mt-40">
                            <a href="/demo-01/about" className="main-btn mr-20">more about<svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4375 6.37085C14.6861 6.37085 14.9246 6.27208 15.1004 6.09626C15.2762 5.92045 15.375 5.68199 15.375 5.43335C15.375 5.18471 15.2762 4.94625 15.1004 4.77044C14.9246 4.59462 14.6861 4.49585 14.4375 4.49585H0.937499C0.688858 4.49585 0.450401 4.59462 0.274586 4.77044C0.0987701 4.94625 -9.53674e-07 5.18471 -9.53674e-07 5.43335C-9.53674e-07 5.68199 0.0987701 5.92045 0.274586 6.09626C0.450401 6.27208 0.688858 6.37085 0.937499 6.37085H14.4375Z" fill="white"/>
                            <path d="M9.93751 10.8709C10.0605 10.8714 10.1824 10.847 10.2958 10.7994C10.4092 10.7517 10.5118 10.6816 10.5975 10.5934L15.0975 6.09338C15.1855 6.00745 15.2554 5.9048 15.3032 5.79146C15.3509 5.67811 15.3755 5.55637 15.3755 5.43338C15.3755 5.31039 15.3509 5.18865 15.3032 5.07531C15.2554 4.96196 15.1855 4.85931 15.0975 4.77338L10.5975 0.273381C10.5108 0.186708 10.4079 0.117956 10.2947 0.0710492C10.1815 0.0241424 10.0601 9.13242e-10 9.93751 0C9.81493 -9.13243e-10 9.69356 0.0241424 9.58032 0.0710492C9.46708 0.117956 9.36418 0.186708 9.27751 0.273381C9.19084 0.360053 9.12208 0.462948 9.07518 0.576191C9.02827 0.689434 9.00413 0.810808 9.00413 0.933381C9.00413 1.05595 9.02827 1.17733 9.07518 1.29057C9.12208 1.40381 9.19084 1.50671 9.27751 1.59338L13.11 5.43338L9.27751 9.27338C9.14756 9.40447 9.0592 9.57099 9.0235 9.75209C8.9878 9.93318 9.00636 10.1208 9.07684 10.2914C9.14732 10.462 9.26659 10.608 9.41969 10.7111C9.5728 10.8141 9.75293 10.8697 9.93751 10.8709Z" fill="white"/>
                            </svg>
                            </a>
                            <img  src="/demo-01/assets/img/about/Frame.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                    <div className="about-thumb2 w-100 fix cover one wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.9s">
                        <img  src="/demo-01/assets/img/about/about-thumb2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*============ About End ============ */}
    {/*============ Banner Start ============ */}
    <div className="banner one">
        <div className="container">
            <div className="banner-slider">
                <div className="slider slider-1">
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-1.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-3.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-4.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-1.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-5.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-2.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-3.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-5.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-1.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-3.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-5.png" alt="" />
                  </div>
                   
                    
                   
                </div>
                <div aria-hidden className="slider slider-2">
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-1.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-3.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-4.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-1.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-5.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-2.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-3.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-5.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-1.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-3.png" alt="" />
                  </div>
                  <div className="img">
                    <img  src="/demo-01/assets/img/banner/banner-5.png" alt="" />
                  </div>
                   
            </div>
            
        </div>
        </div>
    </div>
    {/*============ Banner End ============ */}
    {/*============ Practice Start ============ */}
    <section className="service sec-pb-pt" data-bg-src="/demo-01/assets/img/Service/practice-bg-1.png">
        <div className="container">
            <div className="row gx-0 ">
                <div className="col-xl-6 col-lg-7">
                    <div className="sec-title two wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">
                        <span className="sub-title"> area of practice</span>
                        <h2>We Specialize In All Aspects‍ Of Family Law</h2>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-5 wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.1s">
                    <div className="service-btn w-100  mt-40">
                        <a href="/demo-01/practice-details" className="main-btn">More Services<svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4375 6.37085C14.6861 6.37085 14.9246 6.27208 15.1004 6.09626C15.2762 5.92045 15.375 5.68199 15.375 5.43335C15.375 5.18471 15.2762 4.94625 15.1004 4.77044C14.9246 4.59462 14.6861 4.49585 14.4375 4.49585H0.937499C0.688858 4.49585 0.450401 4.59462 0.274586 4.77044C0.0987701 4.94625 -9.53674e-07 5.18471 -9.53674e-07 5.43335C-9.53674e-07 5.68199 0.0987701 5.92045 0.274586 6.09626C0.450401 6.27208 0.688858 6.37085 0.937499 6.37085H14.4375Z" fill="white"/>
                        <path d="M9.93751 10.8709C10.0605 10.8714 10.1824 10.847 10.2958 10.7994C10.4092 10.7517 10.5118 10.6816 10.5975 10.5934L15.0975 6.09338C15.1855 6.00745 15.2554 5.9048 15.3032 5.79146C15.3509 5.67811 15.3755 5.55637 15.3755 5.43338C15.3755 5.31039 15.3509 5.18865 15.3032 5.07531C15.2554 4.96196 15.1855 4.85931 15.0975 4.77338L10.5975 0.273381C10.5108 0.186708 10.4079 0.117956 10.2947 0.0710492C10.1815 0.0241424 10.0601 9.13242e-10 9.93751 0C9.81493 -9.13243e-10 9.69356 0.0241424 9.58032 0.0710492C9.46708 0.117956 9.36418 0.186708 9.27751 0.273381C9.19084 0.360053 9.12208 0.462948 9.07518 0.576191C9.02827 0.689434 9.00413 0.810808 9.00413 0.933381C9.00413 1.05595 9.02827 1.17733 9.07518 1.29057C9.12208 1.40381 9.19084 1.50671 9.27751 1.59338L13.11 5.43338L9.27751 9.27338C9.14756 9.40447 9.0592 9.57099 9.0235 9.75209C8.9878 9.93318 9.00636 10.1208 9.07684 10.2914C9.14732 10.462 9.26659 10.608 9.41969 10.7111C9.5728 10.8141 9.75293 10.8697 9.93751 10.8709Z" fill="white"/>
                        </svg>

                        </a>
                    </div>
                </div>
                <div className="row gx-0 service-1">
                    <div className="col-lg-4"> 
                    <div className="service-content one">
                        <div className="service-text one">
                            <div className="icon">
                                <img  src="/demo-01/assets/img/Service/icon-3.svg" alt="" />
                            </div>
                            <a href="/demo-01/practice-details" className="service-content-title">Business Taxation</a>
                            <p>If you're unsure, we offer consultations a help determine any whether legal representation is  prioritizing best interests.</p>
                            <a href="/demo-01/practice-details" className="arrow-btn">
                                <svg className="arrow" width="19" height="19" viewBox="0 0 19 19" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                                <path className="arrow-path" d="M18.957 1C18.957 0.447716 18.5093 3.0857e-07 17.957 5.56884e-08L8.95703 8.56479e-07C8.40475 5.19304e-07 7.95703 0.447716 7.95703 1C7.95703 1.55229 8.40475 2 8.95703 2L16.957 2L16.957 10C16.957 10.5523 17.4047 11 17.957 11C18.5093 11 18.957 10.5523 18.957 10L18.957 1ZM1.41414 18.9571L18.6641 1.70711L17.2499 0.292894L-7.55191e-05 17.5429L1.41414 18.9571Z"/>
                                </svg>

                            </a>
                        </div>
                        <div  className="service-thumb  one">
                            <div className="img mega-hover fix cover">
                            <img  src="/demo-01/assets/img/Service/practice-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="service-content two ">
                         <div  className="service-thumb mega-hover two">
                            <div className="img mega-hover fix cover">
                            <img  src="/demo-01/assets/img/Service/practice-3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="service-text two">
                            <div className="icon">
                                <img  src="/demo-01/assets/img/Service/icon-2.svg" alt="" />
                            </div>
                            <a href="/demo-01/practice-details" className="service-content-title">Law Intellectual</a>

                            <p>If you're unsure, we offer consultations a help determine any whether legal representation is  prioritizing best interests.</p>
                             <a href="/demo-01/practice-details" className="arrow-btn">
                                <svg className="arrow" width="19" height="19" viewBox="0 0 19 19" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                                <path className="arrow-path" d="M18.957 1C18.957 0.447716 18.5093 3.0857e-07 17.957 5.56884e-08L8.95703 8.56479e-07C8.40475 5.19304e-07 7.95703 0.447716 7.95703 1C7.95703 1.55229 8.40475 2 8.95703 2L16.957 2L16.957 10C16.957 10.5523 17.4047 11 17.957 11C18.5093 11 18.957 10.5523 18.957 10L18.957 1ZM1.41414 18.9571L18.6641 1.70711L17.2499 0.292894L-7.55191e-05 17.5429L1.41414 18.9571Z"/>
                                </svg>

                            </a>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="service-content three">
                        <div className="service-text three">
                            <div className="icon">
                                <img  src="/demo-01/assets/img/Service/icon-1.svg" alt="" />
                            </div>
                             <a href="/demo-01/practice-details" className="service-content-title">Health Care Law</a>
                            <p>If you're unsure, we offer consultations a help determine any whether legal representation is  prioritizing best interests.</p>
                          <a href="/demo-01/practice-details" className="arrow-btn">
                                <svg className="arrow" width="19" height="19" viewBox="0 0 19 19" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                                <path className="arrow-path" d="M18.957 1C18.957 0.447716 18.5093 3.0857e-07 17.957 5.56884e-08L8.95703 8.56479e-07C8.40475 5.19304e-07 7.95703 0.447716 7.95703 1C7.95703 1.55229 8.40475 2 8.95703 2L16.957 2L16.957 10C16.957 10.5523 17.4047 11 17.957 11C18.5093 11 18.957 10.5523 18.957 10L18.957 1ZM1.41414 18.9571L18.6641 1.70711L17.2499 0.292894L-7.55191e-05 17.5429L1.41414 18.9571Z"/>
                                </svg>

                            </a>
                        </div>
                         <div  className="service-thumb mega-hover  three">
                            <div className="img mega-hover fix  cover">
                            <img  src="/demo-01/assets/img/Service/practice-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    </section>
    
    {/*============ Practice End ============ */}
    {/*============ Expart Start ============ */}

    <section className="expart sec-pb-pt">
        <div className="container">
            <div className="sec-title text-center mb-50 wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">
                <span className="sub-title two">Expert Attorneys</span>
                <h2>Meet Our Top Attorneys</h2>
            </div>
            <div className="row gx-0 ">
                <div className="col-lg-6 wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">
                   <div className="expart-content one">
                     <div className="expart-item ">
                        <div className="expart-img mega-hover fix cover">
                            <img  src="/demo-01/assets/img/expart/expart4.jpg" alt="" />
                        </div>
                        <div className="text">
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
                <div className="col-lg-6 wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.8s">
                    <div className="expart-content two">
                        <div className="expart-item ">
                        <div className="expart-img mega-hover fix cover">
                            <img  src="/demo-01/assets/img/expart/expart3.jpg" alt="" />
                        </div>
                        <div className="text">
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
                <div className="col-lg-6 wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">
                    <div className="expart-content three">
                        <div className="expart-item ">
                        <div className="expart-img mega-hover fix cover">
                            <img  src="/demo-01/assets/img/expart/expart2.jpg" alt="" />
                        </div>
                        <div className="text">
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
                <div className="col-lg-6 wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.8s">
                    <div className="expart-content four">
                        <div className="expart-item">
                        <div className="expart-img mega-hover fix cover">
                            <img  src="/demo-01/assets/img/expart/expart1.jpg" alt="" />
                        </div>
                        <div className="text">
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
    </section>
    {/*============ Expart End ============ */}
    {/*============ Testimonial Start ============ */}
     <section className="testimonial sec-pb-pt fix" data-bg-src="/demo-01/assets/img/testimonial/test1-bg.png">
        <div className="container p-relative">
             <div className=" testimonial-title sec-title wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">
            <span className="sub-title">Testimonial</span>
            <h2 className="white-color">Our happy Clients say about us</h2>
             
        
        </div>
           <div className="testimonial-btn-wrap md-none p-absolute">
          
        <button className="testimonial-prev-btn">
            <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292893 8.07106C-0.0976314 7.68054 -0.0976315 7.04737 0.292892 6.65685L6.65685 0.292886C7.04738 -0.0976382 7.68054 -0.0976383 8.07107 0.292886C8.46159 0.68341 8.46159 1.31658 8.07107 1.7071L2.41421 7.36395L8.07107 13.0208C8.46159 13.4113 8.46159 14.0445 8.07107 14.435C7.68054 14.8255 7.04738 14.8255 6.65686 14.435L0.292893 8.07106ZM22.0454 7.36395L22.0454 8.36395L11.5227 8.36395L11.5227 7.36395L11.5227 6.36395L22.0454 6.36395L22.0454 7.36395ZM11.5227 7.36395L11.5227 8.36395L1 8.36395L1 7.36395L1 6.36395L11.5227 6.36395L11.5227 7.36395Z"/>
            </svg>

        </button>
                   <button className="testimonial-next-btn">
                <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.7525 8.07106C22.143 7.68054 22.143 7.04737 21.7525 6.65685L15.3886 0.292886C14.998 -0.0976382 14.3649 -0.0976383 13.9743 0.292886C13.5838 0.68341 13.5838 1.31658 13.9743 1.7071L19.6312 7.36395L13.9743 13.0208C13.5838 13.4113 13.5838 14.0445 13.9743 14.435C14.3649 14.8255 14.998 14.8255 15.3886 14.435L21.7525 8.07106ZM-8.74228e-08 8.36395L21.0454 8.36395L21.0454 6.36395L8.74228e-08 6.36395L-8.74228e-08 8.36395Z" />
            </svg>
        </button>
            </div>
        </div>
         <div className="testimonial-wrapper test-1 mt-60">
        
                <div>
                <div className="testimonial-item">
                        <div className="testimonial-client">
                            <div className="testimonial-client-thumb">
                                <img  src="/demo-01/assets/img/testimonial/test-thumb-1.png" alt="" />
                            </div>
                            <div className="testimonial-client-info">
                                <span>Savannah Nguyen</span>
                                <p>Managing Director</p>
                            </div>
                        </div>
                        <div className="testimonial-review">
                            <div className="rating">
                                <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            </div>
                            <div className="quote">
                                <img  src="/demo-01/assets/img/testimonial/quote.svg" alt="" />
                            </div>
                        </div>
                        <p className="text">
                            “High water bills, mold or mildew growth kinds musty odors, and unexplained water that any  require professional attentions
                        </p>
                        <div className="vector">
                            <img  src="/demo-01/assets/img/testimonial/vector.png" alt="" />
                        </div>
                </div> 
                 </div>              
                <div>
                <div className="testimonial-item">
                        <div className="testimonial-client">
                            <div className="testimonial-client-thumb">
                                <img  src="/demo-01/assets/img/testimonial/test-thumb-2.png" alt="" />
                            </div>
                            <div className="testimonial-client-info">
                                <span>Brooklyn Simmons</span>
                                <p>Client Manager</p>
                            </div>
                        </div>
                        <div className="testimonial-review">
                            <div className="rating">
                                <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            </div>
                            <div className="quote">
                                <img  src="/demo-01/assets/img/testimonial/quote.svg" alt="" />
                            </div>
                        </div>
                        <p className="text">
                            “High water bills, mold or mildew growth kinds musty odors, and unexplained water that any  require professional attentions
                        </p>
                        <div className="vector">
                            <img  src="/demo-01/assets/img/testimonial/vector.png" alt="" />
                        </div>
                </div> 
                </div>              
                <div>
                <div className="testimonial-item">
                       <div className="testimonial-client">
                            <div className="testimonial-client-thumb">
                                <img  src="/demo-01/assets/img/testimonial/test-thumb-3.png" alt="" />
                            </div>
                            <div className="testimonial-client-info">
                                <span>Esther Howard</span>
                                <p>UI/UX Designer</p>
                            </div>
                        </div>
                        <div className="testimonial-review">
                            <div className="rating">
                                <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            </div>
                            <div className="quote">
                                <img  src="/demo-01/assets/img/testimonial/quote.svg" alt="" />
                            </div>
                        </div>
                        <p className="text">
                            “High water bills, mold or mildew growth kinds musty odors, and unexplained water that any  require professional attentions
                        </p>
                        <div className="vector">
                            <img  src="/demo-01/assets/img/testimonial/vector.png" alt="" />
                        </div>
                        
                </div> 
                </div>              
                <div>
                <div className="testimonial-item">
                        <div className="testimonial-client">
                            <div className="testimonial-client-thumb">
                                <img  src="/demo-01/assets/img/testimonial/test-thumb-4.png" alt="" />
                            </div>
                            <div className="testimonial-client-info">
                                <span>Leslie Alexander</span>
                                <p>UI/UX Designer</p>
                            </div>
                        </div>
                        <div className="testimonial-review">
                            <div className="rating">
                                <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            </div>
                            <div className="quote">
                                <img  src="/demo-01/assets/img/testimonial/quote.svg" alt="" />
                            </div>
                        </div>
                        <p className="text">
                            “High water bills, mold or mildew growth kinds musty odors, and unexplained water that any  require professional attentions
                        </p>
                        <div className="vector">
                            <img  src="/demo-01/assets/img/testimonial/vector.png" alt="" />
                        </div>
                </div> 
                </div>              
                <div>
                <div className="testimonial-item">
                        <div className="testimonial-client">
                            <div className="testimonial-client-thumb">
                                <img  src="/demo-01/assets/img/testimonial/test-thumb-5.png" alt="" />
                            </div>
                            <div className="testimonial-client-info">
                                <span>Ralph Edwards</span>
                                <p>Ceo of Company</p>
                            </div>
                        </div>
                        <div className="testimonial-review">
                            <div className="rating">
                                <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            </div>
                            <div className="quote">
                                <img  src="/demo-01/assets/img/testimonial/quote.svg" alt="" />
                            </div>
                        </div>
                        <p className="text">
                            “High water bills, mold or mildew growth kinds musty odors, and unexplained water that any  require professional attentions
                        </p>
                        <div className="vector">
                            <img  src="/demo-01/assets/img/testimonial/vector.png" alt="" />
                        </div>
                </div> 
                </div>       
                            
        </div>
      
       
    </section>
    {/*============ Testimonial End ============ */}
    {/*============ Price Start ============ */}
    <section className="price sec-pb-pt">
        <div className="container">
            <div className="sec-title text-center wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">
                <span className="sub-title two">Pricing Package</span>
                <h2>We are here to help you <br  /> get sealift</h2>

                <div className="price-switch-wrapper mt-30 mb-60 wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.6s">
                    <span className="monthly monthly-highlight"> monthly </span>
                    <button className="price-switch">
                        <span className="price-switch-toggle"></span>
                    </button>
                    <span className="yearly"> yearly </span>
                </div>
            </div>
            <div className="price-wrapper p-relative">
                <div className="row gx-0  price-monthly price-monthly-active">
                   <div className="col-lg-4 wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">
                    <div className="price-item one">
                        <h3>basic plan</h3>
                        <p>Exclusive for Lawyer Attorney</p>
                        <div className="price-rate-area">
                            <span className="price-rate"><span className="price">$10.25</span>/Month</span>
                        </div>
                        <ul className="price-list">
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />24/7 Access to lawyer phone</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Upfront cost and expectancy</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Contract drafting and review</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Court representation</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Contract drafting and review</li>
                        </ul>
                         <div className="price-btn">
                            <a href="/demo-01/price"><span>Choose your Plan</span></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                    <div className="price-item two price-item-active">
                        <h3>Standard Rate</h3>
                        <p>Exclusive for Lawyer Attorney</p>
                        <div className="price-rate-area p-relative">
                            <span className="price-rate"><span className="price">$20.45</span>/Month</span>
                            
                        </div>
                        <ul className="price-list">
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />24/7 Access to lawyer phone</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Upfront cost and expectancy</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Contract drafting and review</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Court representation</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Contract drafting and review</li>
                        </ul>
                         <div className="price-btn">
                            <a href="/demo-01/price"><span>Choose your Plan</span></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.9s">
                    <div className="price-item three">
                        <h3>Premium rate</h3>
                        <p>Exclusive for Lawyer Attorney</p>
                        <div className="price-rate-area p-relative">
                           
                            <span className="price-rate"><span className="price">$45.15</span>/Month</span>
                        </div>
                        <ul className="price-list">
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />24/7 Access to lawyer phone</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Upfront cost and expectancy</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Contract drafting and review</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Court representation</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Contract drafting and review</li>
                        </ul>
                         <div className="price-btn">
                            <a href="/demo-01/price"><span>Choose your Plan</span></a>
                        </div>
                    </div>
                </div>
               
                </div>
                <div className="row gx-0 price-yearly p-absolute">
                   <div className="col-lg-4">
                    <div className="price-item one">
                        <h3>basic plan</h3>
                        <p>Exclusive for Lawyer Attorney</p>
                        <div className="price-rate-area p-relative">
                            <span className="price-rate "><span className="price">$120.25</span>/Year</span>
                            
                        </div>
                        <ul className="price-list">
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Contract drafting and review</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Upfront cost and expectancy</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />24/7 Access to lawyer phone</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Contract drafting and review</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Court representation</li>
                        </ul>
                         <div className="price-btn">
                            <a href="/demo-01/price"><span>Choose your Plan</span></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="price-item two price-item-active">
                        <h3>Standard Rate</h3>
                        <p>Exclusive for Lawyer Attorney</p>
                        <div className="price-rate-area p-relative">
                            <span className="price-rate price-rate-yearly"><span className="price">$230.45</span>/Year</span>
                            
                        </div>
                        <ul className="price-list">
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Upfront cost and expectancy</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />24/7 Access to lawyer phone</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Contract drafting and review</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Contract drafting and review</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Court representation</li>
                        </ul>
                         <div className="price-btn">
                            <a href="/demo-01/price"><span>Choose your Plan</span></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="price-item three">
                        <h3>Premium rate</h3>
                        <p>Exclusive for Lawyer Attorney</p>
                        <div className="price-rate-area p-relative">
                            <span className="price-rate"><span className="price">$500.00</span>/Year</span>
                            
                        </div>
                        <ul className="price-list">
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />24/7 Access to lawyer phone</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Court representation</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Upfront cost and expectancy</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Contract drafting and review</li>
                            <li><img  src="/demo-01/assets/img/icon/circle-angel.svg" alt="" />Contract drafting and review</li>
                        </ul>
                         <div className="price-btn">
                            <a href="/demo-01/price"><span>Choose your Plan</span></a>
                        </div>
                    </div>
                </div>
               
                </div>
            </div>
            
        </div>
    </section>
    {/*============ Price End ============ */}
    {/*============ Process Start ============ */}
    <section className="process p-relative" >
                <div className="process-video cover p-relative wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.1s" >
                        <img  src="/demo-01/assets/img/process/process-1.png" alt="" />
                        <div className="play-btn-area ml-32 mt-13 p-absolute">
                            <a href="https://www.youtube.com/watch?v=3kqlq-sYVjU" className="video-play popup-video"><i className="fa-solid fa-play"></i>
                            <b className="circle1"></b></a>
                    </div>
                </div>
                <div className="process-content wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">
                    <div className="sec-title">
                        <span className="sub-title"><i></i>Why Go With Our Legal Company</span>
                        <h2 className="white-color">Protection of right to life & personal liberty </h2>
                        <p>Our fees vary based on the complexity of the case. We offer competitive kind rates and flexible payment plans for your convenience sometimes nationally, depending on the type of legal matter.</p>
                    </div>
                    <div className="process-content-item d-flex">
                        <span className="number">01</span>
                        <div className="text">
                            <h3>Crafting Justice, Case by Case</h3>
                            <p>We offer competitive rates and flexible payment plans is convenience bono assistance.</p>
                        </div>
                    </div>
                    <div className="process-content-item d-flex">
                        <span className="number">02</span>
                        <div className="text">
                            <h3>Defending Your Future</h3>
                            <p>Our fees vary depending on the complexity and nature a of the legal services required offer transparent pricing.</p>
                        </div>
                    </div>
                    <div className="process-content-item d-flex">
                        <span className="number">03</span>
                        <div className="text">
                            <h3>Shield in the Legal Battle</h3>
                            <p>We provide a wide range of legal services, including kinds family law, corporate advisory, criminal.</p>
                        </div>
                    </div>
                   
                </div>
                <div className="process-content-bg">
                        <img  src="/demo-01/assets/img/process/right-bg.png" alt="" />
                </div>
    </section>
    {/*============ Process End ============ */}
    {/*============ Blog Start ============ */}

    <section className="blog sec-pb-pt" data-bg-src="/demo-01/assets/img/blog/blog-bg.png">
        <div className="container">
            <div className="sec-title text-center mb-60 wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">
                <span className="sub-title two">Blog & News</span>
                <h2>Latest New and Blog</h2>
            </div>
            <div className="row gx-xl-4 gx-lg-2  blog-1">
                <div className="col-lg-4 wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                    <div>
                        <div className="blog-content">
                        <div className="blog-thumb mega-hover fix cover">
                            <img  src="/demo-01/assets/img/blog/blog-1.jpg" alt="" />
                        </div>
                        <div className="blog-content-text">
                            <div className="date-admin">
                                <a href="/demo-01/blog-details"><i className="fa-solid fa-calendar-days"></i>10 April, 2024</a>
                                <a href="/demo-01/blog-details"><i className="fa-solid fa-user"></i>Admin</a>
                            </div>
                            <a href="/demo-01/blog-details" className="blog-content-title">Turning Legal Challenges into Opportunities</a>
                            <a href="/demo-01/blog-details" className="blog-btn"><span className="angels"><img  src="/demo-01/assets/img/icon/double-angle.svg" alt="" /></span> read more</a>

                            <div className="share-area">
                                <div className="share share-icon1">
                                    <i className="fa-solid fa-share-nodes"></i>
                                    <div className="social-wrapper  social-wrapper-toggle1">
                                  <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="https://www.x.com/"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.behance.com/"><i className="fa-brands fa-behance"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </div>
                </div>
                <div className="col-lg-4 wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                    <div className="blog-content">
                        <div className="blog-thumb mega-hover fix cover">
                            <img  src="/demo-01/assets/img/blog/blog-2.jpg" alt="" />
                        </div>
                        <div className="blog-content-text">
                            <div className="date-admin">
                                <a href="/demo-01/blog-details"><i className="fa-solid fa-calendar-days"></i>10 April, 2024</a>
                                <a href="/demo-01/blog-details"><i className="fa-solid fa-user"></i>Admin</a>
                            </div>
                            <a href="/demo-01/blog-details" className="blog-content-title">Timelines vary based on free complexity of the case</a>
                            <a href="/demo-01/blog-details" className="blog-btn"><span className="angels"><img  src="/demo-01/assets/img/icon/double-angle.svg" alt="" /></span> read more</a>

                            <div className="share-area">
                                <div className="share share-icon2">
                                    <i className="fa-solid fa-share-nodes"></i>
                                    <div className="social-wrapper  social-wrapper-toggle2">
                                  <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="https://www.x.com/"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.behance.com/"><i className="fa-brands fa-behance"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
                    <div className="blog-content">
                        <div className="blog-thumb mega-hover fix cover">
                            <img  src="/demo-01/assets/img/blog/blog-3.jpg" alt="" />
                        </div>
                        <div className="blog-content-text">
                            <div className="date-admin">
                                <a href="/demo-01/blog-details"><i className="fa-solid fa-calendar-days"></i>10 April, 2024</a>
                                <a href="/demo-01/blog-details"><i className="fa-solid fa-user"></i>Admin</a>
                            </div>
                            <a href="/demo-01/blog-details" className="blog-content-title">We focus on achieving based amicable solutions </a>
                            <a href="/demo-01/blog-details" className="blog-btn"><span className="angels"><img  src="/demo-01/assets/img/icon/double-angle.svg" alt="" /></span> read more</a>

                            <div className="share-area">
                                <div className="share share-icon3">
                                    <i className="fa-solid fa-share-nodes"></i>
                                    <div className="social-wrapper  social-wrapper-toggle3">
                                  <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="https://www.x.com/"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.behance.com/"><i className="fa-brands fa-behance"></i></a>
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
        <div className="footer-top">
              <div className="container">
                <div className="footer-top-wrapper">
                       <div className="footer-social wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">
                    <a href="http://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="http://www.x.com/"><i className="fa-brands fa-twitter"></i></a>
                    <a href="http://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="http://www.behance.com/"><i className="fa-brands fa-behance"></i></a>
                </div>
                <div className="footer-logo cover wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">
                    <a href="/demo-01/index-2">
                        <img  src="/demo-01/assets/img/header/logo.svg" alt="logo" />
                    </a>
                </div>
                <div className="footer-subscribe wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">
                    <input  type="email" placeholder="enter your email" />
                    <button className="subscribe-btn">subscribe</button>
                </div>
                </div>
              </div>
              
        </div>
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
                {/* <div className="footer-service wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                    <h3>our services</h3>
                    <ul>
                        <li><a href="/demo-01/practice"><i className="fa-regular fa-angle-right"></i>Business Formation</a></li>
                        <li><a href="/demo-01/practice"><i className="fa-regular fa-angle-right"></i>Corporate Law</a></li>
                        <li><a href="/demo-01/practice"><i className="fa-regular fa-angle-right"></i>Employment Law</a></li>
                        <li><a href="/demo-01/practice"><i className="fa-regular fa-angle-right"></i>Intellectual Property La</a></li>
                        <li><a href="/demo-01/practice"><i className="fa-regular fa-angle-right"></i>Real Estate Law</a></li>
                       
                    </ul>
                </div> */}
                <div className="footer-pages wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.7s">
                    <h3>pages</h3>
                    <ul>
                        <li><a href="/demo-01/about"><i className="fa-regular fa-angle-right"></i>About Us</a></li>
                        <li><a href="/demo-01/practice"><i className="fa-regular fa-angle-right"></i>Services</a></li>
                        <li><a href="/demo-01/about"><i className="fa-regular fa-angle-right"></i>Get In Touch</a></li>
                        <li><a href="/demo-01/about"><i className="fa-regular fa-angle-right"></i>How It Work</a></li>
                        <li><a href="/demo-01/contact"><i className="fa-regular fa-angle-right"></i>Contact Us</a></li>
                        
                       
                    </ul>
                </div>
                <div className="footer-contact wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="1.1s">
                    <h3> contact us</h3>
                    <div className="item d-flex">
                        <div className="icon">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="text">
                            <p>Musaffah - M-6 - Abu Dhabi</p>
                            <p>United Arab Emirates</p>
                        </div>
                    </div>
                    <div className="item d-flex">
                        <div className="icon">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="text">
                            <a href="tel:+(163)556506979">+(163)-5565-06979</a>
                            <a href="tel:+(163)-5565-06979">+(163)-5565-07989</a>
                        </div>
                    </div>
                    <div className="item d-flex">
                        <div className="icon">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="text">
                           <a href="https://www.gmail.com/">help24/7info@Lawia.com</a>
                        </div>
                    </div>
                </div>
                <div className="footer-gallery wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="1.5s">
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
