"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />

{/*===== MOBILE HEADER STARTS=======*/}

     <div className="mobile-header mobile-header-4 d-block d-lg-none">
      <div className="container-fluid">
        <div className="col-12">
          <div className="mobile-header-elements">
            <div className="mobile-logo">
              <a href="/"><img  src="/assets/img/logo/logo5.png" alt="" /></a>
            </div>
            <div className="mobile-nav-icon dots-menu">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mobile-sidebar sidebar3">
      <div className="logosicon-area">
        <div className="logos">
          <img  src="/assets/img/logo/logo5.png" alt="" />
        </div>
        <div className="menu-close">
          <i className="fa-solid fa-xmark"></i>
        </div>
       </div>
      <div className="mobile-nav">

        <ul className="mobile-nav-list">
          <li><a href="#" >Home </a>
            <ul className="sub-menu">
              <li><a href="/" >Home One</a></li>
              <li><a href="/index1" >Home Two</a></li>
              <li><a href="/index2" >Home Three</a></li>
              <li><a href="/index3" >Home Four</a></li>
              <li><a href="/index4" >Home Five</a></li>
              <li><a href="/index5" >Home Six</a></li>
              <li><a href="/index6" >Home Seven</a></li>
              <li><a href="/index-rtl-1" >RTL</a></li>
            </ul>
          </li>
          <li><a href="#" >Pages</a>
            <ul className="sub-menu">
              <li><a href="/about" >About</a></li>
              <li><a href="/team1" >Our Team 01</a></li>
              <li><a href="/team2" >Our Team 02</a></li>
              <li><a href="/testimonial1" >Testimonial 01 </a></li>
              <li><a href="/testimonial2" >Testimonial 02 </a></li>
              <li><a href="/testimonial3" >Testimonial 03 </a></li>
            </ul>
          </li>
          <li><a href="#" >Practice Areas</a>
            <ul className="sub-menu">
              <li><a href="/service1" >Service One</a></li>
              <li><a href="/service2" >Service Two</a></li>
             <li><a href="/service-left" >Service Left Side</a></li>
             <li><a href="/service-right" >Service Right Side</a></li>
             <li><a href="/service-single" >Service Single</a></li>
         </ul>
          </li>

          <li><a href="#" >Blogs </a>
            <ul className="sub-menu">
              <li><a href="/blog1" >Blog One</a></li>
              <li><a href="/blog2" >Blog Two</a></li>
              <li><a href="/blog3" >Blog Three</a></li>
              <li><a href="/blog4" >Blog Four</a></li>
              <li><a href="/blog-left" >Blog Left Side</a></li>
              <li><a href="/blog-left-details" >Blog Details Left</a></li>
              <li><a href="/blog-right" >Blog RIght Side</a></li>
              <li><a href="/blog-right-details" >Blog Details Right </a></li>
              <li><a href="/blog-single" >Blog Single </a></li>
         </ul>
          </li>
              <li><a href="/contact1" >Contact</a>
                <ul className="sub-menu">
                  <li><a href="/contact1" >Contact 01</a></li>
                 <li><a href="/contact2" >Contact 02</a></li>
                 <li><a href="/contact3" >Contact 03</a></li>
             </ul>
            </li>
        </ul>

        <div className="allmobilesection">
          <a href="/contact1" className="casebtn1" >Get Started</a>
          <div className="single-footer single-footer-menu single-footer4">
            <h3 >Contact Info</h3>
            <div className="footer4-contact-info">
              <div className="contact-info-single">
                <div className="contact-info-icon">
                  <img  src="/assets/img/icons/footer-phn.svg" alt="" />
                </div>
                <div className="contact-info-text">
                  <a href="tel:+3(924)4596512">+3(924)4596512</a>
                </div>
              </div>

              <div className="contact-info-single">
                <div className="contact-info-icon">
                  <img  src="/assets/img/icons/footer-email2.svg" alt="" />
                </div>
                <div className="contact-info-text">
                  <a href="mailto:info@example.com">info@example.com</a>
                </div>
              </div>

              <div className="single-footer single-footer-menu single-footer4">
                <h3 >Our Location</h3>

                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <img  src="/assets/img/icons/footer-location1.svg" alt="" />
                  </div>
                  <div className="contact-info-text">
                    <a href="mailto:info@example.com">55 East Birchwood Ave.Brooklyn, <br /> New York 11201,United States</a>
                  </div>
                </div>

              </div>
              <div className="single-footer">
                <h3 >Social Links</h3>

                <div className="social-links-mobile-menu2">
                  <ul>
                    <li>
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a  href="#"><i className="fa-brands fa-x-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </li>
                    <li>
                      <a  href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

          </div>
         </div>
      </div>
    </div>
{/*===== MOBILE HEADER STARTS=======*/}

{/*===== WELCOME STARTS=======*/}
    <div className="welcome-inner-section-area" style={{"backgroundImage":"url(/assets/img/bacground/inner-bg.png)","backgroundPosition":"center","backgroundRepeat":"no-repeat","backgroundSize":"cover"}}>
      <img  src="/assets/img/elements/elementor40.png" alt="" className="elementor40 keyframe3 d-lg-block d-none" />
      <div className="container">
            <div className="row">
                <div className="col-lg-5 m-auto">
                    <div className="welcome-inner-header text-center">
                        <h1>Our Blog Sidebar</h1>
                        <a href="/">Home <span><i className="fa-light fa-angle-right"></i></span> Our Blog Sidebar</a>
                        <img  src="/assets/img/elements/elementor20.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
{/*===== WELCOME ENDS =======*/}

  
{/*===== BLOG STARTS=======*/}
<div className="blog5-section-area sp3">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="blog-left-area">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="blog5-boxarea">
                            <div className="blog5-imgeas">
                              <img  src="/assets/img/images/blog5-img1.png" alt="" />
                            </div>
                            <div className="blog5-content-area">
                              <div className="tags-area">
                               <a href="#">#Legal Assessment</a>
                              </div>
                              <a href="/blog-single">Navigating Co-Parenting Law Challenges After Divorce</a>
                              <p>Child custody is a central concern in many to divorces, We'll explore the different Lawyers.</p>
                              <a href="/blog-single" className="readmore">Read More <i className="fa-light fa-arrow-right"></i></a>
                            </div>
                          </div>
                        </div>
                
                        <div className="col-lg-6 col-md-6">
                          <div className="blog5-boxarea">
                            <div className="blog5-imgeas">
                              <img  src="/assets/img/images/blog5-img2.png" alt="" />
                            </div>
                            <div className="blog5-content-area">
                              <div className="tags-area">
                               <a href="#">#Property Division</a>
                              </div>
                              <a href="/blog-single">The Different Types of Divorce: Which One Is Right for You?"</a>
                              <p>Child custody is a central concern in many to divorces, We'll explore the different Lawyers.</p>
                              <a href="/blog-single" className="readmore">Read More <i className="fa-light fa-arrow-right"></i></a>
                            </div>
                          </div>
                        </div>
                
                        <div className="col-lg-6 col-md-6">
                          <div className="blog5-boxarea">
                            <div className="blog5-imgeas">
                              <img  src="/assets/img/images/blog5-img3.png" alt="" />
                            </div>
                            <div className="blog5-content-area">
                              <div className="tags-area">
                               <a href="#">#Child Custody & Support</a>
                              </div>
                              <a href="/blog-single">Divorce and Child Custody: The Putting Children First</a>
                              <p>Child custody is a central concern in many to divorces, We'll explore the different Lawyers.</p>
                              <a href="/blog-single" className="readmore">Read More <i className="fa-light fa-arrow-right"></i></a>
                            </div>
                          </div>
                        </div>
              
                        <div className="col-lg-6 col-md-6">
                          <div className="blog5-boxarea">
                            <div className="blog5-imgeas">
                              <img  src="/assets/img/images/blog3-inner-img1.png" alt="" />
                            </div>
                            <div className="blog5-content-area">
                              <div className="tags-area">
                               <a href="#">#Legal Assessment</a>
                              </div>
                              <a href="/blog-single">Expert Criminal Defense Law Attorneys by Your Side</a>
                              <p>Child custody is a central concern in many to divorces, We'll explore the different Lawyers.</p>
                              <a href="/blog-single" className="readmore">Read More <i className="fa-light fa-arrow-right"></i></a>
                            </div>
                          </div>
                        </div>
                
                        <div className="col-lg-6 col-md-6">
                          <div className="blog5-boxarea">
                            <div className="blog5-imgeas">
                              <img  src="/assets/img/images/blog3-inner-img2.png" alt="" />
                            </div>
                            <div className="blog5-content-area">
                              <div className="tags-area">
                               <a href="#">#Legal Law</a>
                              </div>
                              <a href="/blog-single">Trustworthy Criminal Lawyers Protecting Your Rights</a>
                              <p>Child custody is a central concern in many to divorces, We'll explore the different Lawyers.</p>
                              <a href="/blog-single" className="readmore">Read More <i className="fa-light fa-arrow-right"></i></a>
                            </div>
                          </div>
                        </div>
                
                        <div className="col-lg-6 col-md-6">
                          <div className="blog5-boxarea">
                            <div className="blog5-imgeas">
                              <img  src="/assets/img/images/blog3-inner-img3.png" alt="" />
                            </div>
                            <div className="blog5-content-area">
                              <div className="tags-area">
                               <a href="#">#Legal Advisory</a>
                              </div>
                              <a href="/blog-single">Criminal Defense Good Lawyers Ready to Fight for Your Rights</a>
                              <p>Child custody is a central concern in many to divorces, We'll explore the different Lawyers.</p>
                              <a href="/blog-single" className="readmore">Read More <i className="fa-light fa-arrow-right"></i></a>
                            </div>
                          </div>
                        </div>
                          
                        <div className="col-lg-12 m-auto">
                          <div className="pagination-area">
                              <nav aria-label="Page navigation example">
                                  <ul className="pagination">
                                    <li className="page-item">
                                      <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true"><i className="fa-regular fa-angle-left"></i></span>
                                      </a>
                                    </li>
                                    <li className="page-item"><a className="page-link active" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                                    <li className="page-item"><a className="page-link" href="#">12</a></li>
                                    <li className="page-item">
                                      <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true"><i className="fa-regular fa-angle-right"></i></span>
                                      </a>
                                    </li>
                                  </ul>
                                </nav>
                          </div>
                      </div>
                
                      </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="blog-leftber-area right">
                    <div className="search-area">
                        <h3>Search</h3>
                        <form action="#">
                            <input  type="text" placeholder="Search....." />
                            <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
                        </form>
                    </div>

                    <div className="blog-categories">
                        <h3>Blog Category</h3>
                        <ul>
                            <li><a href="#"> Homicide/Murder Defense <i className="fa-regular fa-angle-right"></i></a></li>
                            <li><a href="#"> Internet and Cyber Crimes <i className="fa-regular fa-angle-right"></i></a></li>
                            <li><a href="#"> Professional License Defense <i className="fa-regular fa-angle-right"></i></a></li>
                            <li><a href="#"> Immigration-Related Crimes <i className="fa-regular fa-angle-right"></i></a></li>
                            <li><a href="#"> Pre-Charge Representation <i className="fa-regular fa-angle-right"></i></a></li>
                            <li><a href="#"> Asset Forfeiture Defense <i className="fa-regular fa-angle-right"></i></a></li>
                        </ul>
                    </div>
                    <div className="author-area">
                        <h3>Our Author</h3>
                        <ul>
                            <li><img  src="/assets/img/images/auhtor-img1.png" alt="" /></li>
                            <li><img  src="/assets/img/images/author-img2.png" alt="" /></li>
                            <li><img  src="/assets/img/images/auhtor-img3.png" alt="" /></li>
                            <li><img  src="/assets/img/images/author-img4.png" alt="" /></li>
                            <li><img  src="/assets/img/images/auhtor-img5.png" alt="" /></li>
                        </ul>
                    </div>
                    <div className="popular-tags-area">
                        <h3>Our Popular Tags</h3>
                       <div className="first-tags">
                        <a href="#">#Legal Warriors</a>
                        <a href="#">#Legal Defense Expert</a>
                       </div>
                       <div className="second-tags">
                        <a href="#">#Your Legal Guardians</a>
                        <a href="#">#Legal Shield</a>
                       </div>
                       <div className="third-tags">
                        <a href="#">#Strong Legal Defense</a>
                        <a href="#">#Legal Lawyers</a>
                       </div>
                    </div>
                    <div className="phone-area">
                        <h3>If You Need Any Help <br /> Contact With Us</h3>
                        <a href="tel:+917052101786"> <img  src="/assets/img/icons/call-img4.svg" alt="" />+91 705 2101 786</a>
                    </div>
                </div>
            </div>


        </div>
    </div>
  </div>
{/*===== BLOG ENDS=======*/}

{/*===== CTA STARTS=======*/}
  <div className="ca3-scetion-area sp4">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 m-auto">
          <div className="cta3-header text-center">
            <h2>Ready to Fight for Your Rights?</h2>
            <p>With years of experience, we've successfully defended countless clients, To be securing their rights and helping them navigate the legal system.</p>
           <div className="div">
            <a href="/contact1" className="cta3-btn1">Free Case Evulation</a>
            <a href="/contact2" className="cta3-btn2">Contact Us</a>
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/*===== CTA ENDS=======*/}

<Footer />
    </>
  );
}
