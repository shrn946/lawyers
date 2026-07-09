
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
            <div className=" wow img-custom-anim-scale" data-wow-duration="1s" data-wow-delay="0s">
                <h2 className="breadcumb-title">faq</h2>
            <p className="breadcumb-text"><a href="/demo-01/index-2">home </a> <i className="fa-regular fa-angles-right"></i>faq</p>
            </div>
    </section>
    {/*============ Breadcumb End============ */}
    {/*============ FAQ Start ============ */}
    <section className="faq faq-inner sec-pb-pt">
        <div className="container">
            <div className="row lg-reverse">
                <div className="col-xl-4 col-lg-5">
                    <div className="widget-categories faq wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s"> 
                               <ul className="content">
                                <li><a href="#"><i className="fa-solid fa-folder-open folder"></i>Basic<i className="fa-solid fa-arrow-right arrow">
                                </i></a>
                                </li>
                                <li><a href="#"><i className="fa-solid fa-folder-open folder"></i>Lawyers <i className="fa-solid fa-arrow-right arrow">
                                </i></a>
                                </li>
                                <li><a href="#"><i className="fa-solid fa-folder-open folder"></i>Health Care <i className="fa-solid fa-arrow-right arrow">
                                </i></a>
                                </li>
                                <li><a href="#"><i className="fa-solid fa-folder-open folder"></i>Benefit <i className="fa-solid fa-arrow-right arrow">
                                </i></a>
                                </li>
                                <li><a href="#"><i className="fa-solid fa-folder-open folder"></i>Fess<i className="fa-solid fa-arrow-right arrow">
                                </i></a>
                                </li>
                               </ul>
                    </div>
                    <div className="faq-contact wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                        <h3>Need Any Help?</h3>
                        <p>Need Any Help, Call Us  24/7 For Support </p>
                        <div className="faq-contact-item">
                            <div className="icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="info">
                                <span>Call Us</span>
                                <a href="tel:+(163)556506979">+(163)-5565-06979</a>
                            </div>
                        </div>
                        <div className="faq-contact-item">
                            <div className="icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="info">
                                <span>Mail Us</span>
                                <a href="https://www.gmail.com/">help24/7info@Lawia.com</a>
                            </div>
                        </div>
                        <div className="faq-contact-item">
                            <div className="icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="info">
                                <span>Office Address</span>
                                <a href="https://www.google.com/maps/place/Musaffah+-+M6+-+Abu+Dhabi+-+United+Arab+Emirates/@24.3710607,54.5110078,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e40d6ffdd0791:0xe9bbb8f72df6a4c9!8m2!3d24.3710126!4d54.5120768!16s%2Fg%2F1v76y38s?entry=ttu&amp;g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D">Musaffah - M-6 - Abu Dhabi</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-7 wow tpFadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                    <div className="faq-content">
                        <div className="faq-accordion" id="accordionExample">
                                <div className="faq-accordion-item inner">
                                    <h2 className="faq-accordion-header" id="headingOne">
                                    <button className="faq-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span>How long will it take to resolve my any case?</span>
                                        <i className="fa-regular fa-eye eye"></i>
                                        <i className="fa-regular fa-eye-slash eye-slash"></i>
                                    </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" role="region" data-bs-parent="#accordionExample">
                                    <div className="faq-accordion-body">
                                        <span>The timeline depends on the complexity and nature of the case. We aim a to resolve matters efficiently while prioritizing your best interests legal an issue or making a significant decision, consulting a lawyer ensures you is understand your rights and options.</span>
                                        
                                    </div>
                                    </div>
                                </div>
                                <div className="faq-accordion-item inner">
                                    <h2 className="faq-accordion-header" id="headingTwo">
                                    <button className="faq-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span>What type of cases does your law firm handle?</span>
                                        <i className="fa-regular fa-eye eye"></i>
                                        <i className="fa-regular fa-eye-slash eye-slash"></i>
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" role="region" data-bs-parent="#accordionExample">
                                    <div className="faq-accordion-body">
                                       <span>The timeline depends on the complexity and nature of the case. We aim a to resolve matters efficiently while prioritizing your best interests legal an issue or making a significant decision, consulting a lawyer ensures you is understand your rights and options.</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="faq-accordion-item inner">
                                    <h2 className="faq-accordion-header" id="headingThree">
                                    <button className="faq-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <span>What should I bring to the first consultation?</span>
                                        <i className="fa-regular fa-eye eye"></i>
                                        <i className="fa-regular fa-eye-slash eye-slash"></i>
                                    </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" role="region" data-bs-parent="#accordionExample">
                                    <div className="faq-accordion-body">
                                       <span>The timeline depends on the complexity and nature of the case. We aim a to resolve matters efficiently while prioritizing your best interests legal an issue or making a significant decision, consulting a lawyer ensures you is understand your rights and options.</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="faq-accordion-item inner">
                                    <h2 className="faq-accordion-header" id="headingFour">
                                    <button className="faq-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <span>Do you offer payment plans for legal fees?</span>
                                        <i className="fa-regular fa-eye eye"></i>
                                        <i className="fa-regular fa-eye-slash eye-slash"></i>
                                    </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" role="region" data-bs-parent="#accordionExample">
                                    <div className="faq-accordion-body">
                                       <span>The timeline depends on the complexity and nature of the case. We aim a to resolve matters efficiently while prioritizing your best interests legal an issue or making a significant decision, consulting a lawyer ensures you is understand your rights and options.</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="faq-accordion-item inner">
                                    <h2 className="faq-accordion-header" id="headingFive">
                                    <button className="faq-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <span>What should I bring to my first with an attorney?</span>
                                        <i className="fa-regular fa-eye eye"></i>
                                        <i className="fa-regular fa-eye-slash eye-slash"></i>
                                    </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" role="region" data-bs-parent="#accordionExample">
                                    <div className="faq-accordion-body">
                                       <span>The timeline depends on the complexity and nature of the case. We aim a to resolve matters efficiently while prioritizing your best interests legal an issue or making a significant decision, consulting a lawyer ensures you is understand your rights and options.</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="faq-accordion-item inner">
                                            <h2 className="faq-accordion-header" id="headingSix">
                                            <button className="faq-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                <span>What is your approach to resolving disputes?</span>
                                                <i className="fa-regular fa-eye eye"></i>
                                                <i className="fa-regular fa-eye-slash eye-slash"></i>
                                            </button>
                                            </h2>
                                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" role="region" data-bs-parent="#accordionExample">
                                            <div className="faq-accordion-body">
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
                            contact us <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    
    {/* WOW Animation */}
    
   {/* Counter Up */}
    
    
    {/* Magnific Popup */}
    
    {/* Main Js File */}
    </>
  );
}
