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
                        <h1>Contact Us</h1>
                        <a href="/">Home <span><i className="fa-light fa-angle-right"></i></span> Contact Us</a>
                        <img  src="/assets/img/elements/elementor20.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
{/*===== WELCOME ENDS =======*/}

{/*===== CONTACT STARTS =======*/}
<div className="contact1-section-area sp1">
    <div className="container">
        <div className="row">
            <div className="col-lg-5 m-auto">
                <div className="contact3-header text-center">
                    <h2>Connect with Our Lawsy Lawyer Legal Team Today</h2>
                    <p>When legal issues arise, having a dedicated & experienced legal team by your side can make all the difference. At Law Firm Name, we prioritize your .</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="contact-auhtor-area contact2">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="contact-submit-area">
                                <h3>Send Us A Message</h3>
                                <p>Our response time is within 30 minutes during business hours</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="contact-inner">
                                            <input  type="text" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact-inner">
                                            <input  type="text" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact-inner">
                                            <input  type="number" placeholder="Phone NUmber" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact-inner">
                                            <input  type="email" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-inner">
                                            <input  type="text" placeholder="Service Type" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-inner">
                                            <textarea placeholder="Message" cols={30} rows={10}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-inner">
                                          <button type="submit">Free Case Evulation <i className="fa-light fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-content-area">
                                <img  src="/assets/img/images/contact-inner-img1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space60"></div>
            <div className="col-lg-12">
                <div className="map-section-area">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd" width="600" height="450" style={{"border":"0"}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        </div>    
                </div>
            </div>
        </div>
    </div>
</div>
{/*===== CONTACT ENDS =======*/}

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
