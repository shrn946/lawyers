"use client";

import Counter from "@/components/Counter";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />

  

  {/*===== WELCOME STARTS=======*/}
    <div className="welcome-inner-section-area" style={{"backgroundImage":"url(/assets/img/bacground/inner-bg.png)","backgroundPosition":"center","backgroundRepeat":"no-repeat","backgroundSize":"cover"}}>
      <img  src="/assets/img/elements/elementor40.png" alt="" className="elementor40 keyframe3 d-lg-block d-none" />
        <div className="container">
            <div className="row">
                <div className="col-lg-3 m-auto">
                    <div className="welcome-inner-header text-center">
                        <h1>About Us</h1>
                        <a href="/">Home <span><i className="fa-light fa-angle-right"></i></span> About Us</a>
                        <img  src="/assets/img/elements/elementor20.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  {/*===== WELCOME ENDS=======*/}

  {/*===== ABOUT STARTS=======*/}
  <div className="about3-section-area about-inner">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about3-textarea">
            <span>About Us</span>
            <h2>Navigating & Legal Maze with a Criminal Defense Expert</h2>
          <p>Service providers can differentiate themselves by offering high-quality and reliable services. Airlines, for instance, promote their safety records and.</p>
            <div className="about3-textarea-list">
              <ul>
                <li><a href="#"><img  src="/assets/img/icons/check-img2.svg" alt="" />Expertise & Knowledge</a></li>
                <li><a href="#"><img  src="/assets/img/icons/check-img2.svg" alt="" />Quality & Reliability</a></li>
              </ul>
              <ul>
                <li><a href="#"><img  src="/assets/img/icons/check-img2.svg" alt="" />Improved Efficiency</a></li>
                <li><a href="#"><img  src="/assets/img/icons/check-img2.svg" alt="" />Environment Benefits</a></li>
              </ul>
            </div>
            <div className="about3-pera-text">
              <p>Some services emphasize environmental sustainability as a benefit, Car-sharing services like Zipcar promote reduced emissions and the use of fewer vehicles, contributing to a greener environment.</p>
            </div>
            <div className="div">
              <a href="/about" className="casebtn1">Request Case Evolution <span><i className="fa-regular fa-arrow-right"></i></span></a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about3-images-area">
            <img  src="/assets/img/images/about-img3.png" alt="" />
            <div className="elementors21">
              <img  src="/assets/img/elements/elementor21.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*===== ABOUT ENDS=======*/}


  {/*===== SERVICE STARTS=======*/}
<div className="about-servce-section-area sp1">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-5">
                <div className="about-service-area">
                    <div className="about-img1">
                        <img  src="/assets/img/images/about-inner-img1.png" alt="" />
                    </div>
                    <div className="about-img2 aniamtion-key-1">
                        <img  src="/assets/img/images/about-inner-img2.png" alt=""  />
                    </div>
                    <div className="eleemntors30 d-lg-inline-block d-none">
                        <img  src="/assets/img/elements/elementor30.png" alt="" />
                    </div>
                    <div className="experiance-area">
                        <h4><Counter end={25} />+</h4>
                        <p>Years Of Experience</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-1">

            </div>
            <div className="col-lg-6">
                <div className="about-service-content">
                    <h2>Expert Criminal Best Defense Lawyers Protecting Future</h2>
                    <p>Welcome to Law Firm Name, where your rights, freedom, and future matter most. Our team comprises seasoned criminal defense attorneys dedicated to providing unwavering protection and strategic advocacy for every client.</p>
                    <p>Our commitment extends beyond the courtroom - we prioritize best lawyer communication, transparency, and personalized attention, ensuring you're informed & empowered every step of the way. Rest assured, with our Law.</p>
                    <div className="about3-textarea-list">
                        <ul>
                          <li><a href="#"><img  src="/assets/img/icons/check-img2.svg" alt="" />Expertise & Knowledge</a></li>
                          <li><a href="#"><img  src="/assets/img/icons/check-img2.svg" alt="" />Quality & Reliability</a></li>
                        </ul>
                        <ul>
                          <li><a href="#"><img  src="/assets/img/icons/check-img2.svg" alt="" />Improved Efficiency</a></li>
                          <li><a href="#"><img  src="/assets/img/icons/check-img2.svg" alt="" />Environment Benefits</a></li>
                        </ul>
                      </div>
                      <div className="div">
                        <a href="/service1" className="casebtn1">Secure Your Defense <span><i className="fa-regular fa-arrow-right"></i></span></a>
                      </div>
                </div>
            </div>
        </div>
    </div>
</div>
  {/*===== SERVICE ENDS=======*/}

  {/*===== ABOUT HISTORY STARTS=======*/}
<div className="about-history-sction-area sp1">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 m-auto">
                <div className="history-header text-center">
                    <span>Company History</span>
                    <h2>Our Lawsy History</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 m-auto">
                <div className="about-history-tabs">
                   <div className="row">
                    <div className="col-lg-10 m-auto">
                        <nav className="tabs-nav">
                            <a href="javascript:void(0);" data-tab="one" className="active">2017</a>
                            <a href="javascript:void(0);" data-tab="two">2018</a>
                            <a href="javascript:void(0);" data-tab="three">2019</a>
                            <a href="javascript:void(0);" data-tab="four">2020</a>
                            <a href="javascript:void(0);" data-tab="five">2021</a>
                            <a href="javascript:void(0);" data-tab="six">2022</a>
                            <a href="javascript:void(0);" data-tab="seven">2023</a>
                          </nav>
                    </div>
                   </div>
                      
                      <div className="tabContainer">
                      <div id="one" className="Tabcondent active">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="tabs-images">
                                    <img  src="/assets/img/images/history-img1.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tabs-history-content">
                                    <h2>2017 - Founded In Los Angeles</h2>
                                    <p><span>Drug Trafficking:</span>The distribution, manufacturing, or trafficking of the controlled substances, such as narcotics, cocaine, heroin, or lawsy law methamphetamine, in to be continue  violation of the Controlled.</p>
                                    <p><span>White-Collar Crimes:</span> These involve financial or economic crimes, such as fraud, embezzlement, insider trading, tax evasion, and money.</p>
                                    <p><span>Federal Conspiracy:</span> Engaging in a criminal conspiracy that spans multiple states or involves federal agencies can result in federal.</p>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div id="two" className="Tabcondent">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="tabs-images">
                                    <img  src="/assets/img/images/history-img2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tabs-history-content">
                                    <h2>2018 - Founded In Los Angeles</h2>
                                    <p><span>Drug Trafficking:</span>The distribution, manufacturing, or trafficking of the controlled substances, such as narcotics, cocaine, heroin, or lawsy law methamphetamine, in to be continue  violation of the Controlled.</p>
                                    <p><span>White-Collar Crimes:</span> These involve financial or economic crimes, such as fraud, embezzlement, insider trading, tax evasion, and money.</p>
                                    <p><span>Federal Conspiracy:</span> Engaging in a criminal conspiracy that spans multiple states or involves federal agencies can result in federal.</p>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div id="three" className="Tabcondent">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="tabs-images">
                                    <img  src="/assets/img/images/history-img3.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tabs-history-content">
                                    <h2>2019 - Founded In Los Angeles</h2>
                                    <p><span>Drug Trafficking:</span>The distribution, manufacturing, or trafficking of the controlled substances, such as narcotics, cocaine, heroin, or lawsy law methamphetamine, in to be continue  violation of the Controlled.</p>
                                    <p><span>White-Collar Crimes:</span> These involve financial or economic crimes, such as fraud, embezzlement, insider trading, tax evasion, and money.</p>
                                    <p><span>Federal Conspiracy:</span> Engaging in a criminal conspiracy that spans multiple states or involves federal agencies can result in federal.</p>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div id="four" className="Tabcondent">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="tabs-images">
                                    <img  src="/assets/img/images/history-img1.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tabs-history-content">
                                    <h2>2020 - Founded In Los Angeles</h2>
                                    <p><span>Drug Trafficking:</span>The distribution, manufacturing, or trafficking of the controlled substances, such as narcotics, cocaine, heroin, or lawsy law methamphetamine, in to be continue  violation of the Controlled.</p>
                                    <p><span>White-Collar Crimes:</span> These involve financial or economic crimes, such as fraud, embezzlement, insider trading, tax evasion, and money.</p>
                                    <p><span>Federal Conspiracy:</span> Engaging in a criminal conspiracy that spans multiple states or involves federal agencies can result in federal.</p>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div id="five" className="Tabcondent">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="tabs-images">
                                    <img  src="/assets/img/images/history-img2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tabs-history-content">
                                    <h2>2021 - Founded In Los Angeles</h2>
                                    <p><span>Drug Trafficking:</span>The distribution, manufacturing, or trafficking of the controlled substances, such as narcotics, cocaine, heroin, or lawsy law methamphetamine, in to be continue  violation of the Controlled.</p>
                                    <p><span>White-Collar Crimes:</span> These involve financial or economic crimes, such as fraud, embezzlement, insider trading, tax evasion, and money.</p>
                                    <p><span>Federal Conspiracy:</span> Engaging in a criminal conspiracy that spans multiple states or involves federal agencies can result in federal.</p>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div id="six" className="Tabcondent">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="tabs-images">
                                    <img  src="/assets/img/images/history-img3.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tabs-history-content">
                                    <h2>2022 - Founded In Los Angeles</h2>
                                    <p><span>Drug Trafficking:</span>The distribution, manufacturing, or trafficking of the controlled substances, such as narcotics, cocaine, heroin, or lawsy law methamphetamine, in to be continue  violation of the Controlled.</p>
                                    <p><span>White-Collar Crimes:</span> These involve financial or economic crimes, such as fraud, embezzlement, insider trading, tax evasion, and money.</p>
                                    <p><span>Federal Conspiracy:</span> Engaging in a criminal conspiracy that spans multiple states or involves federal agencies can result in federal.</p>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div id="seven" className="Tabcondent">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="tabs-images">
                                    <img  src="/assets/img/images/history-img1.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tabs-history-content">
                                    <h2>2023 - Founded In Los Angeles</h2>
                                    <p><span>Drug Trafficking:</span>The distribution, manufacturing, or trafficking of the controlled substances, such as narcotics, cocaine, heroin, or lawsy law methamphetamine, in to be continue  violation of the Controlled.</p>
                                    <p><span>White-Collar Crimes:</span> These involve financial or economic crimes, such as fraud, embezzlement, insider trading, tax evasion, and money.</p>
                                    <p><span>Federal Conspiracy:</span> Engaging in a criminal conspiracy that spans multiple states or involves federal agencies can result in federal.</p>
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
  {/*===== ABOUT HISTORY ENDS=======*/}

{/*===== TEAM STARTS=======*/}
<div className="team2-section-area sp3">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 m-auto">
          <div className="team1-header text-center">
            <span>Our Team</span>
            <h2>Our Expert Law Firm Team</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="team2-parent-boxarea">
            <div className="team2-boxarea">
              <div className="team2images">
                <img  src="/assets/img/images/team-inner2.png" alt="" />
              </div>
              <div className="team2-social-links">
                <ul>
                  <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="team2-textarea">
              <div className="teamsname">
                <a href="/team1">Alex Fargusion</a>
                <p>Senior Attorneys</p>
              </div>
              <div className="shareicon">
                <a href="#"><i className="fa-light fa-share-nodes"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="team2-parent-boxarea">
            <div className="team2-boxarea">
              <div className="team2images">
                <img  src="/assets/img/images/team-inner3.png" alt="" />
              </div>
              <div className="team2-social-links">
                <ul>
                  <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="team2-textarea">
              <div className="teamsname">
                <a href="/team1">Richad Stones</a>
                <p>Senior Attorneys</p>
              </div>
              <div className="shareicon">
                <a href="#"><i className="fa-light fa-share-nodes"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="team2-parent-boxarea">
            <div className="team2-boxarea">
              <div className="team2images">
                <img  src="/assets/img/images/team-inner4.png" alt="" />
              </div>
              <div className="team2-social-links">
                <ul>
                  <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="team2-textarea">
              <div className="teamsname">
                <a href="/team1">Pep Gurdiola</a>
                <p>Tax Analysis</p>
              </div>
              <div className="shareicon">
                <a href="#"><i className="fa-light fa-share-nodes"></i></a>
              </div>
            </div>
          </div>
        </div>


        <div className="col-lg-3 col-md-6">
          <div className="team2-parent-boxarea">
            <div className="team2-boxarea">
              <div className="team2images">
                <img  src="/assets/img/images/team-inner1.png" alt="" />
              </div>
              <div className="team2-social-links">
                <ul>
                  <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="team2-textarea">
              <div className="teamsname">
                <a href="/team1">Richad Stones</a>
                <p>Senior Attorneys</p>
              </div>
              <div className="shareicon">
                <a href="#"><i className="fa-light fa-share-nodes"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
{/*===== TEAM ENDS=======*/}

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
