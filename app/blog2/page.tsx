"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />



{/*===== WELCOME STARTS =======*/}
    <div className="welcome-inner-section-area" style={{"backgroundImage":"url(/assets/img/bacground/inner-bg.png)","backgroundPosition":"center","backgroundRepeat":"no-repeat","backgroundSize":"cover"}}>
      <img  src="/assets/img/elements/elementor40.png" alt="" className="elementor40 keyframe3 d-lg-block d-none" />
      <div className="container">
            <div className="row">
                <div className="col-lg-3 m-auto">
                    <div className="welcome-inner-header text-center">
                        <h1>Our Blog</h1>
                        <a href="/">Home <span><i className="fa-light fa-angle-right"></i></span> Our BLog</a>
                        <img  src="/assets/img/elements/elementor20.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
{/*===== WELCOME ENDS =======*/}

{/*===== BLOG STARTS =======*/}
<div className="blog4-section-area sp1">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="blog4-boxarea">
            <div className="blog4-images">
              <img  src="/assets/img/images/blog4-img1.png" alt="" />
            </div>
            <div className="blog4-content-area">
              <div className="blog4-date-area">
                <div className="date4-img">
                  <img  src="/assets/img/icons/date-img1.svg" alt="" />
                </div>
                <a href="#">10 October 2024</a>
              </div>
              <a href="/blog-single">Your Shield in Legal Battles: Premier Criminal Law & Lawyer Defense Counsel at Service</a>
              <p>Our team of dedicated criminal defense attorneys is here to has provide unwavering support and expert legal guidance lawyer.</p>
              <a href="/blog-single" className="readmore">Learn More <i className="fa-light fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
  
        <div className="col-lg-6 col-md-6">
          <div className="blog4-boxarea">
            <div className="blog4-images">
              <img  src="/assets/img/images/blog4-img2.png" alt="" />
            </div>
            <div className="blog4-content-area">
              <div className="blog4-date-area">
                <div className="date4-img">
                  <img  src="/assets/img/icons/date-img1.svg" alt="" />
                </div>
                <a href="#">8 October 2024</a>
              </div>
              <a href="/blog-single">Empowering Your Defense: Trustworthy Law Criminal Lawyers Protecting Your Rights</a>
              <p>Our team of dedicated criminal defense attorneys is here to has provide unwavering support and expert legal guidance lawyer.</p>
              <a href="/blog-single" className="readmore">Read More <i className="fa-light fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
            <div className="blog4-boxarea">
              <div className="blog4-images">
                <img  src="/assets/img/images/blog2-inner-img1.png" alt="" />
              </div>
              <div className="blog4-content-area">
                <div className="blog4-date-area">
                  <div className="date4-img">
                    <img  src="/assets/img/icons/date-img1.svg" alt="" />
                  </div>
                  <a href="#">10 October 2024</a>
                </div>
                <a href="/blog-single">Defending Futures: Seasoned Criminal Lawyer Defense Lawyers Ready to Fight for You</a>
                <p>Our team of dedicated criminal defense attorneys is here to has provide unwavering support and expert legal guidance lawyer.</p>
                <a href="/blog-single" className="readmore">Learn More <i className="fa-light fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
    
          <div className="col-lg-6 col-md-6">
            <div className="blog4-boxarea">
              <div className="blog4-images">
                <img  src="/assets/img/images/blog2-inner-img2.png" alt="" />
              </div>
              <div className="blog4-content-area">
                <div className="blog4-date-area">
                  <div className="date4-img">
                    <img  src="/assets/img/icons/date-img1.svg" alt="" />
                  </div>
                  <a href="#">8 October 2024</a>
                </div>
                <a href="/blog-single">Navigating Legal Storms: Premier Criminal Defense Lawyers Ensuring Your Rights</a>
                <p>Our team of dedicated criminal defense attorneys is here to has provide unwavering support and expert legal guidance lawyer.</p>
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
{/*===== BLOG ENDS =======*/}
  
{/*===== CTA STARTS =======*/}
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
{/*===== CTA ENDS =======*/}

<Footer />
    </>
  );
}
