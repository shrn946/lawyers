"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />

{/*===== MOBILE HAEDER STARTS=======*/}
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
{/*===== MOBILE HEADER ENDS=======*/}

{/*===== WELCOME STARTS=======*/}
    <div className="welcome-inner-section-area" style={{"backgroundImage":"url(/assets/img/bacground/inner-bg.png)","backgroundPosition":"center","backgroundRepeat":"no-repeat","backgroundSize":"cover"}}>
      <img  src="/assets/img/elements/elementor40.png" alt="" className="elementor40 keyframe3 d-lg-block d-none" />
      <div className="container">
            <div className="row">
                <div className="col-lg-11 m-auto">
                    <div className="welcome-inner-header text-center">
                        <h1>Criminal Defense Good Legal Lawyers And Ready to Fight for Your Rights</h1>
                        <a href="/">Home <span><i className="fa-light fa-angle-right"></i></span> Our Blog Details</a>
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
            <div className="col-lg-4">
                <div className="blog-leftber-area">
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
                    <div className="recent-blog-area">
                        <h3>Our Recent Blog</h3>
                        <div className="recent-content-area">
                            <div className="recent-img">
                                <img  src="/assets/img/images/recent-blog-img1.png" alt="" />
                            </div>
                            <div className="recent-content">
                                <a href="#"><img  src="/assets/img/icons/calender1.svg" alt="" />05 June 2024</a>
                                <a href="/blog-single" className="recent-single">Building Robust Defenses: <br /> Advocates for Justice</a>
                            </div>
                        </div>
                        <div className="recent-content-area">
                            <div className="recent-img">
                                <img  src="/assets/img/images/recent-blog-img2.png" alt="" />
                            </div>
                            <div className="recent-content">
                                <a href="#"><img  src="/assets/img/icons/calender1.svg" alt="" />05 June 2024</a>
                                <a href="/blog-single" className="recent-single">Our Expertise: Championing <br /> Your Lawyer Legal Battles</a>
                            </div>
                        </div>
                        <div className="recent-content-area">
                            <div className="recent-img">
                                <img  src="/assets/img/images/recent-blog-img3.png" alt="" />
                            </div>
                            <div className="recent-content">
                                <a href="#"><img  src="/assets/img/icons/calender1.svg" alt="" />05 June 2024</a>
                                <a href="/blog-single" className="recent-single">Defenses: Advocates for Law <br /> Lawyer Justice and Freedom</a>
                            </div>
                        </div>
                        <div className="recent-content-area">
                            <div className="recent-img">
                                <img  src="/assets/img/images/recent-blog-img4.png" alt="" />
                            </div>
                            <div className="recent-content">
                                <a href="#"><img  src="/assets/img/icons/calender1.svg" alt="" />05 June 2024</a>
                                <a href="/blog-single" className="recent-single">Our Priority: Aggressive Law <br /> Lawyer Legal Representation</a>
                            </div>
                        </div>
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
                </div>
            </div>

            <div className="col-lg-8">
                <div className="blog-left-details">
                    <div className="blog-left-images">
                        <div className="blog-img">
                            <img  src="/assets/img/images/blog-left-img1.png" alt="" />
                            <img  src="/assets/img/elements/elementor21.png" alt="" className="elementor21" />
                        </div>
                        <div className="blog-auhtor-area">
                            <div className="blog-auhtor-img1">
                                <a href="/team1"><img  src="/assets/img/images/blog-auhtor-img1.png" alt="" />Alex Robertson</a>
                            </div>
                            <div className="date-img">
                                <a href="#"><img  src="/assets/img/icons/calender1.svg" alt="" />05 June 2024</a>
                            </div>
                            <div className="date-img">
                                <a href="#"><img  src="/assets/img/icons/tag1.svg" alt="" />Legal Defense Expert</a>
                            </div>
                            <div className="date-img after">
                                <a href="#"><img  src="/assets/img/icons/comments.svg" alt="" />2 Comments</a>
                            </div>
                        </div>
                        <div className="blog-left-content-area">
                            <h2>Criminal Defense Good Legal Lawyers And Ready to Fight for Your Rights</h2>
                            <p>In the realm of criminal defense law, our practice stands as a steadfast guardian of justice, offering a panoramic array of expertise to navigate the intricacies of the legal landscape. With a legacy steeped in dedication and prowess, we extend a robust shield of defense across an expansive spectrum legal.</p>
                            <p> intricacies of domestic violence cases to the gravity of homicide defense, our seasoned attorneys law bring forth a reservoir of experience and unwavering commitment to every client's cause. </p>
                        </div>
                        <div className="blog-left-content-area2">
                            <h3>Our team assists in navigating through various traffic violations, ensuring your rights & legal  are upheld.</h3>
                            <p>Our commitment to each client is unwavering, as we labor tirelessly to craft robust defenses, drawing upon our vast experience and profound understanding of the law. With compassion and unwavering</p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="blog-left-row">
                                        <img  src="/assets/img/images/blog-auhtor-img2.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="blog-left-row">
                                        <img  src="/assets/img/images/blog-auhtor-img3.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-auhtor-area3">
                            <h3>We understand the complexities of DUI/DWI charges:</h3>
                            <p>In our pursuit of justice, we stand resolute, honoring the trust placed in us by those seeking guidance through the labyrinth of legal intricacies. We are more than legal practitioners; we are guardians.</p>
                        </div>
                        <div className="blog-nav-area">
                            <div className="qutio-img">
                                <img  src="/assets/img/icons/quito7.svg" alt="" />
                            </div>
                            <div className="quito-content">
                                <p>"Navigating the complexities of divorce law requires a lawyer legal compassionate advocate who understands your unique law to best service situation, our dedicated divorce lawyers are here to guide</p>
                                <div className="nav-img-area">
                                    <div className="nav-img">
                                        <img  src="/assets/img/images/nav-img1.png" alt="" />
                                    </div>
                                    <div className="nav-content-area">
                                        <a href="#">Alexander Arnold</a>
                                        <p>Owner Lawsy Lawyer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tags-share-area">
                            <div className="share-area">
                                <h5>Our Tags:</h5>
                                <div className="tags">
                                    <a href="#">#Legal Warriors</a>
                                    <a href="#">#Legal Defense Expert</a>
                                </div>
                            </div>
                            <div className="share-area">
                                <h5>Share:</h5>
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-google-plus-g"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="comment-section-area">
                            <h3>Comments(2)</h3>
                           <div className="comment-auhtor-area">
                            <div className="comments-area">
                                <div className="comment-imgages">
                                    <div className="img1">
                                        <img  src="/assets/img/images/comment-img1.png" alt="" />
                                    </div>
                                    <div className="img-content">
                                        <a href="#">Matthew Larson</a>
                                        <a href="#" className="date">15 March, 2024</a>
                                    </div>
                                </div>
                                <div className="reply-content">
                                    <a href="#"><i className="fa-solid fa-reply"></i>Reply</a>
                                </div>
                            </div>
                            <p>In the realm of defense, our proficiency transcends the mere understanding of statutes; it delves into the nuanced artistry of legal advocacy. We are architects of defense, sculpting compelling narratives that resonate with judges and juries, compelling them to see beyond the surface.</p>
                           </div>

                           <div className="comment-auhtor-area margin">
                            <div className="comments-area">
                                <div className="comment-imgages">
                                    <div className="img1">
                                        <img  src="/assets/img/images/comment-img2.png" alt="" />
                                    </div>
                                    <div className="img-content">
                                        <a href="#">Ben Ducket</a>
                                        <a href="#" className="date">15 March, 2024</a>
                                    </div>
                                </div>
                                <div className="reply-content">
                                    <a href="#"><i className="fa-solid fa-reply"></i>Reply</a>
                                </div>
                            </div>
                            <p>In the realm of defense, our proficiency transcends the mere understanding of statutes; it delves into the nuanced artistry of legal advocacy. We are architects of defense, sculpting compelling narratives that resonate with judges and juries, compelling them to see beyond the surface.</p>
                           </div>
                        </div>

                        <div className="blog-contact-area">
                            <h3>Leave A Comment</h3>
                            <div className="blog-auhtor-contact">
                                <h4>Send us a message</h4>
                                <p>Provide clear contact information, including phone number, email, and address.</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input-area">
                                            <input  type="text" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-area">
                                            <input  type="text" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-area">
                                            <input  type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-area">
                                            <input  type="number" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-area">
                                            <input  type="text" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-area">
                                            <textarea placeholder="Message" cols={30} rows={10}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-area">
                                           <button type="submit">Submit Now <i className="fa-light fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

   <div className="blog5-section-area footer sp3">
    <div className="container">
        <div className="row">
            <div className="col-lg-7 m-auto">
                <div className="blog-left-header text-center">
                    <h2>Read More Our Recent Blogs</h2>
                </div>
            </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
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
  
          <div className="col-lg-4 col-md-6">
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
  
          <div className="col-lg-4 col-md-6">
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
