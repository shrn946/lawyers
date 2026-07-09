"use client";

import Counter from "@/components/Counter";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />



{/*===== WELCOME STARTS =======*/}
  <div className="welcome-section-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-3" data-aos="fade-right" data-aos-duration="600">
          <div className="welcome-header-author-area aniamtion-key-1">
            <div className="img1">
              <img  src="/assets/img/images/header-img1.png" alt="" />
            </div>
            <div className="elementors-img1">
              <img  src="/assets/img/elements/elementor1.png" alt="" className="keyframe3" />
            </div>
            <div className="elementors-img2">
              <img  src="/assets/img/elements/elementor2.png" alt="" className="keyframe4" />
            </div>
            <div className="elemenors-image">
              <img  src="/assets/img/images/tax-text.png" alt="" />
            </div>
            <div className="elemenors-image1">
              <img  src="/assets/img/elements/elementor7.png" alt="" />
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="welcome-main-area text-center">
            <span className="spantext" data-aos="fade-up" data-aos-duration="500" data-aos-easing="linear">
              We provide the experience you need
            </span>
            <h1 data-aos="fade-up" data-aos-duration="700" data-aos-easing="linear">We Are Handle Every
              Case<img  src="/assets/img/images/pera-img1.png" alt="" /> Professionally <span className="quito"><img  src="/assets/img/elements/quito.png" alt="" /></span></h1>
              <p data-aos="fade-up" data-aos-duration="900" data-aos-easing="linear">With a track record of successfully resolving a wide range of tax-related issues, we're committed to protecting your financial interests and helping achieve </p>

              <div className="tax-services-btn" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="linear">
                <a href="/service1" className="tax-services">Discover Tax Services</a>
                <a href="/contact1" className="tax-services1">Learn More</a>
              </div>

          </div>
        </div>
        <div className="col-lg-3" data-aos="fade-left" data-aos-duration="600">
           <div className="welcome-header-author-area1 aniamtion-key-1">
            <div className="img1">
              <img  src="/assets/img/images/header-img2.png" alt="" />
            </div>
            <div className="elementors-img1">
              <img  src="/assets/img/elements/elementor1.png" alt="" className="keyframe3" />
            </div>
            <div className="elementors-img2">
              <img  src="/assets/img/elements/elementor2.png" alt="" className="keyframe4" />
            </div>
            <div className="elementors-images5">
              <img  src="/assets/img/elements/elementor5.png" alt="" />
            </div>
            <div className="elementors-images6">
              <img  src="/assets/img/elements/elementor6.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="arrow-down-area">
    <div className="arrow-down">
      <a href="#about"><i className="fa-light fa-arrow-down"></i></a>
    </div>
  </div>
{/*===== WELCOME ENDS =======*/}

{/*===== ABOUT STARTS =======*/}
  <div className="about1-section-area" id="about">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-imageas-area text-center" data-aos="zoom-out" data-aos-duration="800" >
            <div className="about-img1">
                <img  src="/assets/img/images/about-img1.png" alt="" />
              </div>
              <div className="elementors-7">
                <img  src="/assets/img/elements/elementor8.png" alt="" className="keyframe4" />
              </div>
              <div className="elementors-8">
                <img  src="/assets/img/elements/elementor9.png" alt="" className="keyframe3" />
              </div>
              <div className="elementors10">
                <img  src="/assets/img/elements/elementors10.png" alt="" className="aniamtion-key-1" />
              </div>

            </div>
        </div>

        <div className="col-lg-6">
          <div className="about-textarea-section">
            <span  data-aos="fade-left" data-aos-duration="600">About Us</span>
            <h3 data-aos="fade-left" data-aos-duration="800">Your Trusted Tax Attorney, <img  src="/assets/img/elements/quito.png" alt="" /> <br /> Solve Tax Issues Together</h3>
            <p data-aos="fade-left" data-aos-duration="900">Whether you're facing a tax audit, need assistance with tax compliance, or are looking for ways to maximize tax benefits, we have knowledge.</p>
            <p data-aos="fade-left" data-aos-duration="1000">Explore our website to learn more about our services and get to know our team of tax attorneys. When you're ready to take control of tax.</p>
            <div className="counter-area" data-aos="fade-left" data-aos-duration="1200">
              <div className="counter-setion">
                <h3><Counter end={98} />%</h3>
                <p>Successful Cases</p>
              </div>
              <div className="counter-setion">
                <h3><Counter end={1} />M+</h3>
                <p>Tax Return Field</p>
              </div>
              <div className="counter-setion">
                <h3><Counter end={50} />M+</h3>
                <p>Trade Value Filled</p>
              </div>
            </div>
            <div className="tax-services-btn" data-aos="fade-left" data-aos-duration="800" data-aos-easing="linear">
              <a href="/about" className="tax-services">Begin Your Tax Journey</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/*===== ABOUT ENDS =======*/}

{/*===== SERVICES STARTS =======*/}
   <div className="services1-scetion-area sp1">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 m-auto">
          <div className="services1-header text-center">
            <span>Practices Area</span>
            <h2>Tackling Your Toughest Tax Solution <img  src="/assets/img/elements/quito.png" alt="" /></h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration="800">
          <div className="service2-boxarea">
            <div className="services-icon">
              <img  src="/assets/img/icons/service-law1.svg" alt="" />
            </div>
            <div className="service-textarea">
              <a href="/service-single" className="single-link">Criminal Tax Law</a>
              <p>Our team of experienced tax attorneys and experts is here to provide you with valuable.</p>
              <a href="/service-single">Read More <i className="fa-regular fa-arrow-right"></i></a>
            </div>
            <div className="service-check-icon">
              <a href="/service-single"> <span><img  src="/assets/img/icons/arrow_right.svg" alt="" /></span></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration="1000">
          <div className="service2-boxarea">
            <div className="services-icon">
              <img  src="/assets/img/icons/service-law2.svg" alt="" />
            </div>
            <div className="service-textarea">
              <a href="/service-single" className="single-link">Estate Planning & Taxation</a>
              <p>Our team of experienced tax attorneys and experts is here to provide you with valuable.</p>
              <a href="/service-single">Read More <i className="fa-regular fa-arrow-right"></i></a>
            </div>
            <div className="service-check-icon">
              <a href="/service-single"> <span><img  src="/assets/img/icons/arrow_right.svg" alt="" /></span></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration="1200">
          <div className="service2-boxarea">
            <div className="services-icon">
              <img  src="/assets/img/icons/service-law3.svg" alt="" />
            </div>
            <div className="service-textarea">
              <a href="/service-single" className="single-link">State & Local Taxation</a>
              <p>Our team of experienced tax attorneys and experts is here to provide you with valuable.</p>
              <a href="/service-single">Read More <i className="fa-regular fa-arrow-right"></i></a>
            </div>
            <div className="service-check-icon">
              <a href="/service-single"> <span><img  src="/assets/img/icons/arrow_right.svg" alt="" /></span></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6" data-aos="fade-left" data-aos-duration="1200">
          <div className="service2-boxarea">
            <div className="services-icon">
              <img  src="/assets/img/icons/service-law4.svg" alt="" />
            </div>
            <div className="service-textarea">
              <a href="/service-single" className="single-link">Tax Planning & Compliance</a>
              <p>Our team of experienced tax attorneys and experts is here to provide you with valuable.</p>
              <a href="/service-single">Read More <i className="fa-regular fa-arrow-right"></i></a>
            </div>
            <div className="service-check-icon">
              <a href="/service-single"> <span><img  src="/assets/img/icons/arrow_right.svg" alt="" /></span></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6" data-aos="fade-left" data-aos-duration="1000">
          <div className="service2-boxarea">
            <div className="services-icon">
              <img  src="/assets/img/icons/service-law5.svg" alt="" />
            </div>
            <div className="service-textarea">
              <a href="/service-single" className="single-link">International Taxation</a>
              <p>Our team of experienced tax attorneys and experts is here to provide you with valuable.</p>
              <a href="/service-single">Read More <i className="fa-regular fa-arrow-right"></i></a>
            </div>
            <div className="service-check-icon">
              <a href="/service-single"> <span><img  src="/assets/img/icons/arrow_right.svg" alt="" /></span></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6" data-aos="fade-left" data-aos-duration="800">
          <div className="service2-boxarea">
            <div className="services-icon">
              <img  src="/assets/img/icons/service-law6.svg" alt="" />
            </div>
            <div className="service-textarea">
              <a href="/service-single" className="single-link">Property Taxes</a>
              <p>Our team of experienced tax attorneys and experts is here to provide you with valuable.</p>
              <a href="/service-single">Read More <i className="fa-regular fa-arrow-right"></i></a>
            </div>
            <div className="service-check-icon">
              <a href="/service-single"> <span><img  src="/assets/img/icons/arrow_right.svg" alt="" /></span></a>
            </div>
          </div>
        </div>
        <div className="col-lg-12" data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear">
          <div className="tax-services-btn text-center">
            <a href="/service1" className="tax-services">View More Services</a>
          </div>
        </div>
      </div>

   </div>
  </div>
{/*===== SERVICES ENDS =======*/}

{/*===== WORKS STARTS =======*/}
  <div className="work-sectigon-area sp1">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 m-auto">
          <div className="works-header text-center">
            <span>How It Works</span>
            <h2>Tax Resolution Starts Here <img  src="/assets/img/elements/quito.png" alt="" /></h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5">
        <div className="collapse-navtabs">
          <div className="d-flex align-items-start">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" data-aos="fade-up" data-aos-duration="800">
                <span>Initial Consultation</span>
                <span className="button-pera">We aim to simplify the intricacies of tax law, making it accessible and relevant to Tax.</span>
                <img  src="/assets/img/elements/polygon1.png" alt="" className="polygon1" />
                <img  src="/assets/img/elements/polygon2.png" alt="" className="polygon2" />

              </button>
              <button className="nav-link fade" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" data-aos="fade-up" data-aos-duration="1000">
                <span>Information & Recources</span>
                  <span className="button-pera">We aim to simplify the intricacies of tax law, making it accessible and relevant to Tax.</span>
                  <img  src="/assets/img/elements/polygon1.png" alt="" className="polygon1" />
                  <img  src="/assets/img/elements/polygon2.png" alt="" className="polygon2" />
              </button>
              <button className="nav-link fade" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" data-aos="fade-up" data-aos-duration="1200">
                  <span>Best Ongoing Support</span>
                  <span className="button-pera">We aim to simplify the intricacies of tax law, making it accessible and relevant to Tax.</span>
                  <img  src="/assets/img/elements/polygon1.png" alt="" className="polygon1" />
                  <img  src="/assets/img/elements/polygon2.png" alt="" className="polygon2" />
            </button>
            </div>
          </div>
        </div>
      </div>
           <div className="col-lg-7 align-items-center" data-aos="fade-left" data-aos-duration="1000">
            <img  src="/assets/img/elements/elementors10.png" alt="" className="elementors-service1 aniamtion-key-1" />
            <img  src="/assets/img/elements/elementor5.png" alt=""  className="elementors-service2 aniamtion-key-1" />
            <div className="tabs-author-area">
              <div className="tab-content" id="v-pills-tabContent">

                <div className="tab-pane show active fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <div className="tabs-author-images1">
                    <img  src="/assets/img/images/tabs-img1.png" alt="" className="tabs-img1" />
                    <div className="elementors-images">
                      <div className="elementors10">
                        <img  src="/assets/img/elements/elementor2.png" alt="" className="keyframe3" />
                      </div>
                      <div className="elementors11">
                        <img  src="/assets/img/elements/elementor3.png" alt="" className="keyframe4" />
                      </div>
                    </div>
                  </div>


                  <div className="tabs-author-images1 space1">
                    <img  src="/assets/img/images/tabs-img2.png" alt="" className="tabs-img1" />
                    <div className="elementors-images">
                      <div className="elementors10">
                        <img  src="/assets/img/elements/elementor2.png" alt="" className="keyframe3" />
                      </div>
                      <div className="elementors11">
                        <img  src="/assets/img/elements/elementor3.png" alt="" className="keyframe4" />
                      </div>
                    </div>
                  </div>

                  <div className="tabs-author-images2 space2 d-lg-inline-block d-none">
                    <img  src="/assets/img/images/tabs-img3.png" alt="" className="tabs-img1" />
                    <div className="elementors-images">
                      <div className="elementors12">
                        <img  src="/assets/img/elements/elementor2.png" alt="" className="keyframe3" />
                      </div>
                      <div className="elementors13">
                        <img  src="/assets/img/elements/elementor3.png" alt="" className="keyframe4" />
                      </div>
                    </div>
                  </div>
                </div>


                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  <div className="tabs-author-images1">
                    <img  src="/assets/img/images/tabs-img3.png" alt="" className="tabs-img1" />
                    <div className="elementors-images">
                      <div className="elementors10">
                        <img  src="/assets/img/elements/elementor2.png" alt="" className="keyframe3" />
                      </div>
                      <div className="elementors11">
                        <img  src="/assets/img/elements/elementor3.png" alt="" className="keyframe4" />
                      </div>
                    </div>
                  </div>


                  <div className="tabs-author-images1 space1">
                    <img  src="/assets/img/images/tabs-img2.png" alt="" className="tabs-img1" />
                    <div className="elementors-images">
                      <div className="elementors10">
                        <img  src="/assets/img/elements/elementor2.png" alt="" className="keyframe3" />
                      </div>
                      <div className="elementors11">
                        <img  src="/assets/img/elements/elementor3.png" alt="" className="keyframe4" />
                      </div>
                    </div>
                  </div>

                  <div className="tabs-author-images2 space2">
                    <img  src="/assets/img/images/tabs-img4.png" alt="" className="tabs-img1" />
                    <div className="elementors-images">
                      <div className="elementors12">
                        <img  src="/assets/img/elements/elementor2.png" alt="" className="keyframe3" />
                      </div>
                      <div className="elementors13">
                        <img  src="/assets/img/elements/elementor3.png" alt="" className="keyframe4" />
                      </div>
                    </div>
                  </div>
                </div>


                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                  <div className="tabs-author-images1">
                    <img  src="/assets/img/images/tabs-img1.png" alt="" className="tabs-img1" />
                    <div className="elementors-images">
                      <div className="elementors10">
                        <img  src="/assets/img/elements/elementor2.png" alt="" className="keyframe3" />
                      </div>
                      <div className="elementors11">
                        <img  src="/assets/img/elements/elementor3.png" alt="" className="keyframe4" />
                      </div>
                    </div>
                  </div>


                  <div className="tabs-author-images1 space1">
                    <img  src="/assets/img/images/tabs-img3.png" alt="" className="tabs-img1" />
                    <div className="elementors-images">
                      <div className="elementors10">
                        <img  src="/assets/img/elements/elementor2.png" alt="" className="keyframe3" />
                      </div>
                      <div className="elementors11">
                        <img  src="/assets/img/elements/elementor3.png" alt="" className="keyframe4" />
                      </div>
                    </div>
                  </div>
                  <div className="tabs-author-images2 space2">
                    <img  src="/assets/img/images/tabs-img5.png" alt="" className="tabs-img1" />
                    <div className="elementors-images">
                      <div className="elementors12">
                        <img  src="/assets/img/elements/elementor2.png" alt="" className="keyframe3" />
                      </div>
                      <div className="elementors13">
                        <img  src="/assets/img/elements/elementor3.png" alt="" className="keyframe4" />
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
{/*===== WROKS ENDS =======*/}

{/*===== TEAM STARTS =======*/}
    <div className="team1-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="team1-header text-center">
              <span data-aos="fade-up" data-aos-duration="800">Our Team</span>
              <h2 data-aos="fade-up" data-aos-duration="1000">Our Expert Tax law Team <img  src="/assets/img/elements/quito.png" alt="" /></h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="800">
            <div className="team-author-area text-center">
              <div className="team-author-image">
                <img  src="/assets/img/images/team1.png" alt="" />
              </div>
              <a href="/team1">Robert Henry</a>
              <p>Tax Attorney</p>
              <div className="team-links-area">
                <ul>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000">
            <div className="team-author-area text-center">
              <div className="team-author-image">
                <img  src="/assets/img/images/team-img2.png" alt="" />
              </div>
              <a href="/team1">Alexis Putellas</a>
              <p>Tax Attorney</p>
              <div className="team-links-area">
                <ul>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1200">
            <div className="team-author-area text-center">
              <div className="team-author-image">
                <img  src="/assets/img/images/team-img3.png" alt="" />
              </div>
              <a href="/team1">Robert Henry</a>
              <p>Tax Attorney</p>
              <div className="team-links-area">
                <ul>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1400">
            <div className="team-author-area text-center">
              <div className="team-author-image">
                <img  src="/assets/img/images/team-img4.png" alt="" />
              </div>
              <a href="/team1">Robert Henry</a>
              <p>Tax Attorney</p>
              <div className="team-links-area">
                <ul>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
{/*===== TEAM ENDS =======*/}

{/*===== TESTIMONIAL STARTS =======*/}
    <div className="testimonial1-scertion-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="testimonial1-header text-center">
              <span data-aos="fade-up" data-aos-duration="800">Testimonials</span>
              <h2 data-aos="fade-up" data-aos-duration="1000">Client Success Story <img  src="/assets/img/elements/quito.png" alt="" /></h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="all-section-area">
                <div className="product-slider">
                  <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="product-slider-single1 owl-carousel">
                      <div className="single-product-slider-single">
                       <div className="testimonial-author-area">
                        <ul className="star-list">
                          <li><i className="fa-duotone fa-star"></i></li>
                          <li><i className="fa-duotone fa-star"></i></li>
                          <li><i className="fa-duotone fa-star"></i></li>
                          <li><i className="fa-duotone fa-star"></i></li>
                          <li><i className="fa-duotone fa-star"></i></li>
                        </ul>
                        <p>"I was stressed about my complex tax situation, but your tax attorneys provided clarity and professionalism. They resolved my issues efficiently, and I couldn't be happier with the results."</p>
                        <div className="testimonial-mans-infoarea">
                          <div className="testimonial-man-info">
                            <div className="man-img">
                              <img  src="/assets/img/images/product-img1.png" alt="" />
                            </div>
                            <div className="img-text">
                              <a href="/team1">Ben Stoks</a>
                              <p>Owner Taxfirm</p>
                            </div>
                          </div>
                          <img  src="/assets/img/icons/qutio.svg" alt="" className="quito-img2" />
                        </div>
                       </div>
                      </div>
                      <div className="single-product-slider-single">
                        <div className="testimonial-author-area">
                          <ul className="star-list">
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                          </ul>
                          <p>"I was stressed about my complex tax situation, but your tax attorneys provided clarity and professionalism. They resolved my issues efficiently, and I couldn't be happier with the results."</p>
                          <div className="testimonial-mans-infoarea">
                            <div className="testimonial-man-info">
                              <div className="man-img">
                                <img  src="/assets/img/images/product-img2.png" alt="" />
                              </div>
                              <div className="img-text">
                                <a href="/team1">Ben Stoks</a>
                                <p>Owner Taxfirm</p>
                              </div>
                            </div>
                            <img  src="/assets/img/icons/qutio.svg" alt="" className="quito-img2" />
                          </div>
                         </div>
                      </div>
                      <div className="single-product-slider-single">
                        <div className="testimonial-author-area">
                          <ul className="star-list">
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                          </ul>
                          <p>"I was stressed about my complex tax situation, but your tax attorneys provided clarity and professionalism. They resolved my issues efficiently, and I couldn't be happier with the results."</p>
                          <div className="testimonial-mans-infoarea">
                            <div className="testimonial-man-info">
                              <div className="man-img">
                                <img  src="/assets/img/images/product-img3.png" alt="" />
                              </div>
                              <div className="img-text">
                                <a href="/team1">Finn Allen</a>
                                <p>Owner Taxf</p>
                              </div>
                            </div>
                            <img  src="/assets/img/icons/qutio.svg" alt="" className="quito-img2" />
                          </div>
                         </div>
                      </div>
                      <div className="single-product-slider-single">
                        <div className="testimonial-author-area">
                          <ul className="star-list">
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                          </ul>
                          <p>"I was stressed about my complex tax situation, but your tax attorneys provided clarity and professionalism. They resolved my issues efficiently, and I couldn't be happier with the results."</p>
                          <div className="testimonial-mans-infoarea">
                            <div className="testimonial-man-info">
                              <div className="man-img">
                                <img  src="/assets/img/images/product-img4.png" alt="" />
                              </div>
                              <div className="img-text">
                                <a href="/team1">Breat Lyon</a>
                                <p>Owner Taxfirm</p>
                              </div>
                            </div>
                            <img  src="/assets/img/icons/qutio.svg" alt="" className="quito-img2" />
                          </div>
                         </div>
                      </div>

                      <div className="single-product-slider-single">
                        <div className="testimonial-author-area">
                          <ul className="star-list">
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                          </ul>
                          <p>"I was stressed about my complex tax situation, but your tax attorneys provided clarity and professionalism. They resolved my issues efficiently, and I couldn't be happier with the results."</p>
                          <div className="testimonial-mans-infoarea">
                            <div className="testimonial-man-info">
                              <div className="man-img">
                                <img  src="/assets/img/images/product-img2.png" alt="" />
                              </div>
                              <div className="img-text">
                                <a href="/team1">Ben Stoks</a>
                                <p>Owner Taxfirm</p>
                              </div>
                            </div>
                            <img  src="/assets/img/icons/qutio.svg" alt="" className="quito-img2" />
                          </div>
                         </div>
                      </div>

                      <div className="single-product-slider-single">
                        <div className="testimonial-author-area">
                          <ul className="star-list">
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                          </ul>
                          <p>"I was stressed about my complex tax situation, but your tax attorneys provided clarity and professionalism. They resolved my issues efficiently, and I couldn't be happier with the results."</p>
                          <div className="testimonial-mans-infoarea">
                            <div className="testimonial-man-info">
                              <div className="man-img">
                                <img  src="/assets/img/images/product-img3.png" alt="" />
                              </div>
                              <div className="img-text">
                                <a href="/team1">Finn Allen</a>
                                <p>Owner Taxfirm</p>
                              </div>
                            </div>
                            <img  src="/assets/img/icons/qutio.svg" alt="" className="quito-img2" />
                          </div>
                         </div>
                      </div>

                      <div className="single-product-slider-single">
                        <div className="testimonial-author-area">
                          <ul className="star-list">
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                            <li><i className="fa-duotone fa-star"></i></li>
                          </ul>
                          <p>"I was stressed about my complex tax situation, but your tax attorneys provided clarity and professionalism. They resolved my issues efficiently, and I couldn't be happier with the results."</p>
                          <div className="testimonial-mans-infoarea">
                            <div className="testimonial-man-info">
                              <div className="man-img">
                                <img  src="/assets/img/images/product-img4.png" alt="" />
                              </div>
                              <div className="img-text">
                                <a href="/team1">Breat Lyon</a>
                                <p>Owner Taxfirm</p>
                              </div>
                            </div>
                            <img  src="/assets/img/icons/qutio.svg" alt="" className="quito-img2" />
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
    </div>
{/*===== TESTIMONIAL ENDS =======*/}

{/*===== BLOG STARTS =======*/}
    <div className="blog1-section-area sp3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="blog-header text-center">
              <span data-aos="fade-up" data-aos-duration="800">Our Blogs</span>
              <h2 data-aos="fade-up" data-aos-duration="1000">Our Latest Blog Posts <img  src="/assets/img/elements/quito.png" alt="" /></h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6" data-aos-duration="800" data-aos="fade-up">
            <div className="blog-boxarea">
              <div className="blog-images">
                <img  src="/assets/img/images/blog-img1.png" alt="" />
                <div className="date-img">
                  <img  src="/assets/img/images/date.png" alt="" />
                </div>
              </div>
             <div className="blog-all-textarea">
              <div className="blog-text-area">
                <div className="blog-name-area">
                  <img  src="/assets/img/icons/contact-img1.svg" alt="" />
                  <a href="#"><p>Henry Nicolls</p></a>
                </div>
                <div className="blog-name-area">
                  <img  src="/assets/img/icons/tax-img1.svg" alt="" />
                  <a href="#"><p>Tax Lawyer</p></a>
                </div>
              </div>
              <a href="/blog-single">Experience Matters: Your Tax Your & Resolution Starts Here</a>
              <p>As a small business owner, you're well aware of the numerous financial responsibilities.</p>
              <a href="/blog-single" className="readmore">Read More <i className="fa-light fa-arrow-right"></i></a>
             </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000">
            <div className="blog-boxarea">
              <div className="blog-images">
                <img  src="/assets/img/images/blog-img2.png" alt="" />
                <div className="date-img">
                  <img  src="/assets/img/images/date3.png" alt="" />
                </div>
              </div>
             <div className="blog-all-textarea">
              <div className="blog-text-area">
                <div className="blog-name-area">
                  <img  src="/assets/img/icons/contact-img1.svg" alt="" />
                  <a href="#"><p>Henry Nicolls</p></a>
                </div>
                <div className="blog-name-area">
                  <img  src="/assets/img/icons/tax-img1.svg" alt="" />
                  <a href="#"><p>Tax Lawyer</p></a>
                </div>
              </div>
              <a href="/blog-single">Experience Matters: Your Tax Your & Resolution Starts Here</a>
              <p>As a small business owner, you're well aware of the numerous financial responsibilities.</p>
              <a href="/blog-single" className="readmore">Read More <i className="fa-light fa-arrow-right"></i></a>
             </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200">
            <div className="blog-boxarea">
              <div className="blog-images">
                <img  src="/assets/img/images/blog-img3.png" alt="" />
                <div className="date-img">
                  <img  src="/assets/img/images/date4.png" alt="" />
                </div>
              </div>
             <div className="blog-all-textarea">
              <div className="blog-text-area">
                <div className="blog-name-area">
                  <img  src="/assets/img/icons/contact-img1.svg" alt="" />
                  <a href="#"><p>Henry Nicolls</p></a>
                </div>
                <div className="blog-name-area">
                  <img  src="/assets/img/icons/tax-img1.svg" alt="" />
                  <a href="#"><p>Tax Lawyer</p></a>
                </div>
              </div>
              <a href="/blog-single">Experience Matters: Your Tax Your & Resolution Starts Here</a>
              <p>As a small business owner, you're well aware of the numerous financial responsibilities.</p>
              <a href="/blog-single" className="readmore">Read More <i className="fa-light fa-arrow-right"></i></a>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
{/*===== BLOG ENDS =======*/}

{/*===== CTA STARTS =======*/}
    <div className="cta1-section-area sp5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="cta-textarea">
              <h2 data-aos="fade-right" data-aos-duration="800">Schedule A Free Consultation</h2>
              <p data-aos="fade-right" data-aos-duration="1000">At your firm name, Our experienced tax attorneys are here to help you <br /> navigate the complexities of tax law, save you money, & ensure.</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-2"></div>
          <div className="col-lg-4 col-md-4">
            <div className="cta-images">
              <img  src="/assets/img/images/cta-img1.png" alt="" />
              <div className="consultant-btn">
                <a href="/contact1" className="consultation" style={{"backgroundImage":"url(/assets/img/elements/bg1.png)"}}>Schedule A Consultation</a>
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
