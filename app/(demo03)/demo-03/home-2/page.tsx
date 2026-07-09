"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";


const BASE = "/demo-03";

export default function Home2Page() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      

      
		<div className="slider-container">
			<div className="owl-carousel owl-theme home-slider">
				<div className="slider-post slider-item-box">
					<img className="img-fluid" src="/demo-03/assets/images/home/slider-1.jpg" alt="" style={{ maxWidth: '100%' }} />
					<div className="slider-caption">
						<div className="slider-text">
							<h2>We provide legal<br />help for</h2>
							<h4>Auto Accidents</h4>
							<a className="btn-white" href="/demo-03/practice-image-3-cols">Find More</a>
						</div>
					</div>
				</div>
				<div className="slider-post slider-item-box">
					<img className="img-fluid" src="/demo-03/assets/images/home/slider-2.jpg" alt="" style={{ maxWidth: '100%' }} />
					<div className="slider-caption">
						<div className="slider-text">
							<h2>We provide legal<br />help for</h2>
							<h4>Tax Disputes</h4>
							<a className="btn-white" href="/demo-03/practice-image-3-cols">Find More</a>
						</div>
					</div>
				</div>
				<div className="slider-post slider-item-box">
					<img className="img-fluid" src="/demo-03/assets/images/home/slider-3.jpg" alt="" style={{ maxWidth: '100%' }} />
					<div className="slider-caption">
						<div className="slider-text">
							<h2>We provide legal<br />help for</h2>
							<h4>Work Injury</h4>
							<a className="btn-white" href="/demo-03/practice-image-3-cols">Find More</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		
		<div className="page-holder custom-page-template page-full fullscreen-page home-page-content clearfix">
		
		<section className="no-parallax section-holder section-home21">
			<div className="container">
				<div className="row">
					<div className="col-md-4 simple-box margin-bm32">
						<div className="simple-icon"> <i className="fas fa-gavel"></i></div>
						<h3 className="simple-title">Excellence</h3>
						<p>In pri dico propriae, ad epicurei reprehendunt pro. Eu per postulant repudiandae, te vim falli nemore, cum agam tation honestatis id.</p>
					</div>
					<div className="col-md-4 simple-box margin-bm32">
						<div className="simple-icon"> <i className="fas fa-shield-alt"></i></div>
						<h3 className="simple-title">Commitment</h3>
						<p>In pri dico propriae, ad epicurei reprehendunt pro. Eu per postulant repudiandae, te vim falli nemore, cum agam tation honestatis id.</p>
					</div>
					<div className="col-md-4 simple-box">
						<div className="simple-icon"> <i className="fas fa-trophy"></i></div>
						<h3 className="simple-title">Professionalism</h3>
						<p>In pri dico propriae, ad epicurei reprehendunt pro. Eu per postulant repudiandae, te vim falli nemore, cum agam tation honestatis id.</p>
					</div>
				</div>
				
			</div>
			
		</section>
		
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 margin-bm54">
						<span className="heading-subtitle">About Us</span>
						<h2 className="section-heading-title margin-b16">International law firm based in New York</h2>
						<div className="margin-b32">Aenean facilisis, neque a varius porttitor, risus dui tempus libero, dictum aliquet justo enim vitae lorem. Aliquam lacinia lacinia mi ac convallis. Nulla et lacus et risus laoreet consectetur sed non magna.</div>
						<ul className="list-items">
							<li>Trusted Advisors</li>
							<li>Professional Support</li>
							<li>Focus &amp; Performance</li>
						</ul>
						<div className="view-more"><a href="#">Find More</a></div>
					</div>
					<div className="col-lg-6 alignr">
						<img className="img-fluid" src="/demo-03/assets/images/home/about-feature3.jpg" alt="" style={{ maxWidth: '100%' }} />
					</div>
				</div>
				
			</div>
				
		</section>
			
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 margin-bm54">
						<img className="img-fluid" src="/demo-03/assets/images/home/about-feature2.jpg" alt="" style={{ maxWidth: '100%' }} />
					</div>
					<div className="col-lg-6">
						<span className="heading-subtitle">What We Do</span>
						<h2 className="section-heading-title margin-b16">In-depth legal experience</h2>
						<div className="margin-b32">Vim possit eleifend forensibus ea, cibo antiopam pri ea, elit discere percipitur ad nec. At erant voluptatibus cum, vim vivendum expetenda erroribus ad. Mel at numquam delicata, ut ius veri molestie. Et pro amet unum.</div>
						<ul className="list-items">
							<li>Trusted Advisors</li>
							<li>Professional Support</li>
							<li>Focus &amp; Performance</li>
						</ul>
						<div className="view-more"><a href="#">Find More</a></div>
					</div>
				</div>
				
			</div>
				
		</section>
			
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 alignc">
						<span className="heading-subtitle">Legal Help</span>
						<h2 className="section-heading-title">Practice Areas</h2>
					</div>
				</div>
				
				<div className="row practice-items-holder-v2">
					<div className="col-lg-4 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="fas fa-truck"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Auto Accidents</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="fas fa-hard-hat"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Construction Loans</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="far fa-building"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Real Estate</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="far fa-chart-bar"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Finance Law</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="far fa-money-bill-alt"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Tax Disputes</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="far fa-meh"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Child Abuse</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="fas fa-medkit"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Health Care</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="fas fa-heart-broken"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Divorce</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="fas fa-plane"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Aviation</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
				</div>
				
				<div className="view-more alignc margin-t72"><a href="/demo-03/practice-areas">View More</a></div>
			</div>
				
		</section>
		
		
		<section className="section-holder">
			<div className="row no-gutters">
				<div className="col-lg-6 section-home25 margin-bm54">
					<div className="testimonials-container">
						<div className="owl-carousel owl-theme testimonials-slider">
							<div className="testimonial-item">
								<div className="testimonial-desc">
									<i className="fas fa-quote-left"></i>
									<h5>Curabitur sit amet ligula vitae lorem consequat condimentum id in mauris. Vivamus pretium aliquet sapien, ut commodo risus. Fusce erat orci, tempus vitae mi ac, interdum sollicitudin felis. Suspendisse elementum turpis vitae libero lobortis laoreet raesent lacinia volutpat.</h5>
								</div>
								<div className="testimonial-client"> <img src="/demo-03/assets/images/testimonials/client-1.jpg" alt="" style={{ maxWidth: '100%' }} /></div>
								<div className="client-name">John Doe</div>
								<div className="client-company">Company Name</div>
							</div>
							<div className="testimonial-item">
								<div className="testimonial-desc">
									<i className="fas fa-quote-left"></i>
									<h5>Sed sodales, odio eget adipiscing mattis, sapien purus dapibus felis, sit amet mollis velit dolor eu lorem. Vivamus condimentum nunc a quam lobortis tempus. Integer porttitor, elit vestibulum facilisis accumsan, tortor nisl volutpat sem, ac laoreet ligula metus ut felis.</h5>
								</div>
								<div className="testimonial-client"> <img src="/demo-03/assets/images/testimonials/client-2.jpg" alt="" style={{ maxWidth: '100%' }} /></div>
								<div className="client-name">Giulia Doe</div>
								<div className="client-company">Company Name</div>
							</div>
							<div className="testimonial-item">
								<div className="testimonial-desc">
									<i className="fas fa-quote-left"></i>
									<h5>Cras eu nibh non dui mattis pretium id vitae erat. Quisque justo nisi, malesuada eget lorem ac, posuere dictum justo. Vestibulum vitae scelerisque ante. Duis at mi vel odio fermentum accumsan at nec massa. Donec id velit porta, mattis lorem vitae, convallis nunc.</h5>
								</div>
								<div className="testimonial-client"> <img src="/demo-03/assets/images/testimonials/client-3.jpg" alt="" style={{ maxWidth: '100%' }} /></div>
								<div className="client-name">Paul Doe</div>
								<div className="client-company">Company Name</div>
							</div>
							<div className="testimonial-item">
								<div className="testimonial-desc">
									<i className="fas fa-quote-left"></i>
									<h5>Proin at venenatis dui. Morbi posuere ullamcorper libero in posuere. Proin quis est consectetur, varius diam ut, fringilla orci. Nunc ac lacus id ligula egestas ultricies nec id odio. Maecenas lectus mauris, ultricies ac aliquet at, fermentum eget leo.</h5>
								</div>
								<div className="testimonial-client"> <img src="/demo-03/assets/images/testimonials/client-4.jpg" alt="" style={{ maxWidth: '100%' }} /></div>
								<div className="client-name">Mary Doe</div>
								<div className="client-company">Company Name</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="section-home25-2">
						<span className="heading-subtitle">Testimonials</span>
						<h2 className="section-heading-title margin-b16">What Clients Say</h2>
						<div className="margin-b32">Aenean facilisis, neque a varius porttitor, risus dui tempus libero, dictum aliquet justo enim vitae lorem. Aliquam lacinia lacinia mi ac convallis. Nulla et lacus et risus laoreet consectetur.</div>
					</div>
					<img className="img-fluid" src="/demo-03/assets/images/home/office-2-1.jpg" alt=""/>
				</div>
			</div>
			
		</section>
		
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 alignc">
						<span className="heading-subtitle">Our Team</span>
						<h2 className="section-heading-title">Meet the Lawyers</h2>
					</div>
				</div>
				
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="lawyer-holder lawyer-3col">
							<a href="/demo-03/attorneys-single-page"><img src="/demo-03/assets/images/team/team-4.jpg" className="img-fluid" alt=""  style={{ maxWidth: '100%' }} /></a>
							<div className="lawyer-position">Founder</div>
							<h2 className="lawyer-title"><a href="/demo-03/attorneys-single-page">Sarah Barrett</a></h2>
							<div className="lawyer-excerpt">Integer imperdiet purus urna, a volutpat turpis feugiat vitae. Proin molestie in metus eu volutpat. Vestibulum vitae orci sit amet.</div>
							<ul className="lawyer-social">
								<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
								<li><a href="https://matchthemes.com/cdn-cgi/l/email-protection#0b" target="_blank"><i className="far fa-envelope"></i></a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="lawyer-holder lawyer-3col">
							<a href="/demo-03/attorneys-single-page"><img src="/demo-03/assets/images/team/team-6.jpg" className="img-fluid" alt=""  style={{ maxWidth: '100%' }} /></a>
							<div className="lawyer-position">Senior Partner</div>
							<h2 className="lawyer-title"><a href="/demo-03/attorneys-single-page">Mike Holmes</a></h2>
							<div className="lawyer-excerpt">Integer imperdiet purus urna, a volutpat turpis feugiat vitae. Proin molestie in metus eu volutpat. Vestibulum vitae orci sit amet.</div>
							<ul className="lawyer-social">
								<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="lawyer-holder lawyer-3col">
							<a href="/demo-03/attorneys-single-page"><img src="/demo-03/assets/images/team/team-1.jpg" className="img-fluid" alt=""  style={{ maxWidth: '100%' }} /></a>
							<div className="lawyer-position">Lawyer</div>
							<h2 className="lawyer-title"><a href="/demo-03/attorneys-single-page">Teresa Perkins</a></h2>
							<div className="lawyer-excerpt">Integer imperdiet purus urna, a volutpat turpis feugiat vitae. Proin molestie in metus eu volutpat. Vestibulum vitae orci sit amet.</div>
							<ul className="lawyer-social">
								<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="https://matchthemes.com/cdn-cgi/l/email-protection#b4" target="_blank"><i className="far fa-envelope"></i></a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="lawyer-holder lawyer-3col">
							<a href="/demo-03/attorneys-single-page"><img src="/demo-03/assets/images/team/team-5.jpg" className="img-fluid" alt=""  style={{ maxWidth: '100%' }} /></a>
							<div className="lawyer-position">Legal Advisor</div>
							<h2 className="lawyer-title"><a href="/demo-03/attorneys-single-page">Samuel Johnson</a></h2>
							<div className="lawyer-excerpt">Integer imperdiet purus urna, a volutpat turpis feugiat vitae. Proin molestie in metus eu volutpat. Vestibulum vitae orci sit amet.</div>
							<ul className="lawyer-social">
								<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				
				<div className="badge-wrapper">
					<div className="badge-img">
						<img src="/demo-03/assets/images/team/law-badge-1.png" className="img-fluid" alt="" width="95" height="95"  style={{ maxWidth: '100%' }} />
					</div>
					<div className="badge-img">
						<img src="/demo-03/assets/images/team/law-badge-2.png" className="img-fluid" alt="" width="95" height="95"  style={{ maxWidth: '100%' }} />
					</div>
					<div className="badge-img">
						<img src="/demo-03/assets/images/team/law-badge-3.png" className="img-fluid" alt="" width="95" height="95"  style={{ maxWidth: '100%' }} />
					</div>
					<div className="badge-img">
						<img src="/demo-03/assets/images/team/law-badge-4.png" className="img-fluid" alt="" width="95" height="95"  style={{ maxWidth: '100%' }} />
					</div>
					<div className="badge-img">
						<img src="/demo-03/assets/images/team/law-badge-5.png" className="img-fluid" alt="" width="95" height="95"  style={{ maxWidth: '100%' }} />
					</div>
					<div className="badge-img">
						<img src="/demo-03/assets/images/team/law-badge-6.png" className="img-fluid" alt="" width="95" height="95"  style={{ maxWidth: '100%' }} />
					</div>
					<div className="badge-img">
						<img src="/demo-03/assets/images/team/law-badge-7.png" className="img-fluid" alt="" width="95" height="95"  style={{ maxWidth: '100%' }} />
					</div>
				</div>
			</div>
				
		</section>
			
		
		<section className="section-holder section-home27">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6">
						<h2 className="section-heading-title white margin-none">Have a Legal Problem?</h2>
					</div>
					<div className="col-md-6">
						<div className="view-more view-more-white alignr"><a href="/demo-03/contact">Request Consultation</a></div>
					</div>
				</div>
				
			</div>
			
		</section>
		
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 alignc">
						<span className="heading-subtitle">Our Cases</span>
						<h2 className="section-heading-title">Recent Case Studies</h2>
					</div>
				</div>
				
				<div className="case-studies-holder case-studies-short layout-masonry ">
					<div className="case-study case-3col blog-item-masonry finance ">
						<div className="case-img-holder">
							<a href="/demo-03/cases-single-page">
								<div className="case-img" style={{ "backgroundImage": "url(/demo-03/assets/images/cases/case-1.jpg)" }}></div>
							</a>
						</div>
						<div className="case-content-v1">
							<ul className="case-categ">
								<li>Finance</li>
							</ul>
							<h4><a href="/demo-03/cases-single-page">Tax Dispute</a></h4>
							<div className="case-plus"><i className="fas fa-angle-double-right"></i></div>
						</div>
					</div>
					<div className="case-study case-3col blog-item-masonry finance ">
						<div className="case-img-holder">
							<a href="/demo-03/cases-single-page">
								<div className="case-img" style={{ "backgroundImage": "url(/demo-03/assets/images/cases/case-2.jpg)" }}></div>
							</a>
						</div>
						<div className="case-content-v1">
							<ul className="case-categ">
								<li>Finance</li>
							</ul>
							<h4><a href="/demo-03/cases-single-page">Business Law</a></h4>
							<div className="case-plus"><i className="fas fa-angle-double-right"></i></div>
						</div>
					</div>
					<div className="case-study case-3col blog-item-masonry health-care  injuries ">
						<div className="case-img-holder">
							<a href="/demo-03/cases-single-page">
								<div className="case-img" style={{ "backgroundImage": "url(/demo-03/assets/images/practice/practice-1.jpg)" }}></div>
							</a>
						</div>
						<div className="case-content-v1">
							<ul className="case-categ">
								<li>Health Care</li>
								<li>Injuries</li>
							</ul>
							<h4><a href="/demo-03/cases-single-page">Auto Accident</a></h4>
							<div className="case-plus"><i className="fas fa-angle-double-right"></i></div>
						</div>
					</div>
					<div className="case-study case-3col blog-item-masonry health-care  injuries ">
						<div className="case-img-holder">
							<a href="/demo-03/cases-single-page">
								<div className="case-img" style={{ "backgroundImage": "url(/demo-03/assets/images/cases/case-4.jpg)" }}></div>
							</a>
						</div>
						<div className="case-content-v1">
							<ul className="case-categ">
								<li>Health Care</li>
								<li>Injuries</li>
							</ul>
							<h4><a href="/demo-03/cases-single-page">Family Law</a></h4>
							<div className="case-plus"><i className="fas fa-angle-double-right"></i></div>
						</div>
					</div>
					<div className="case-study case-3col blog-item-masonry finance ">
						<div className="case-img-holder">
							<a href="/demo-03/cases-single-page">
								<div className="case-img" style={{ "backgroundImage": "url(/demo-03/assets/images/cases/case-3.jpg)" }}></div>
							</a>
						</div>
						<div className="case-content-v1">
							<ul className="case-categ">
								<li>Finance</li>
							</ul>
							<h4><a href="/demo-03/cases-single-page">Real Estate</a></h4>
							<div className="case-plus"><i className="fas fa-angle-double-right"></i></div>
						</div>
					</div>
					<div className="case-study case-3col blog-item-masonry injuries ">
						<div className="case-img-holder">
							<a href="/demo-03/cases-single-page">
								<div className="case-img" style={{ "backgroundImage": "url(/demo-03/assets/images/cases/case-5.jpg)" }}></div>
							</a>
						</div>
						<div className="case-content-v1">
							<ul className="case-categ">
								<li>Injuries</li>
							</ul>
							<h4><a href="/demo-03/cases-single-page">Domestic Violence</a></h4>
							<div className="case-plus"><i className="fas fa-angle-double-right"></i></div>
						</div>
					</div>
				</div>
				
			</div>
				
		</section>
			
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 margin-bm54">
						<span className="heading-subtitle">Contact Us</span>
						<h2 className="section-heading-title margin-b16">Let's Discuss Your Case</h2>
						<div id="contact-form-holder">
							<form method="post" id="contact-form" action='https://matchthemes.com/demohtml/lawyers/include/contact-process.php'>
								<div className="row">
									<div className="col-lg-4 margin-b32"><input type="text" name="name" className="comm-field" placeholder="Name"/></div>
									<div className="col-lg-4 margin-b32"><input type="text" name="email" className="comm-field" placeholder="Email"/> </div>
									<div className="col-lg-4 margin-b32"><input type="text" name="subject" className="comm-field" placeholder="Subject" /> </div>
								</div>
								<div className="margin-b32"><textarea name="message" id="msg-contact" rows="5" placeholder="Message"></textarea></div>
								<p className="antispam">Leave this empty: <input type="text" name="url" /></p>
								<p><input type="submit" value="Send message" id="submit"/></p>
							</form>
						</div>
						
						<div id="output-contact"></div>
					</div>
					<div className="col-lg-6">
						<div className="margin-l32">
							<p>Vim possit eleifend forensibus ea, cibo antiopam pri ea, elit discere percipitur ad nec. At erant voluptatibus cum, vim vivendum expetenda erroribus.</p>
							<ul className="faq-list">
								<li>
									<h5 className="faq-title"><a href="#faq1">Why our lawyers firm?</a></h5>
									<div id="faq1" className="faq-section">
										<p>Lorem ipsum dolor sit amet, mea in tacimates electram. Diam facilis cum ei, ei novum accusamus scribentur per. Ei agam necessitatibus ius. Ius ei dolorem constituto. Vel sale repudiandae no, harum putent vivendum ne ius. Quo ex unum iisque. </p>
									</div>
								</li>
								<li>
									<h5 className="faq-title"><a href="#faq2">How does it work?</a></h5>
									<div id="faq2" className="faq-section">
										<p>Sale vivendum senserit an eum, ubique noster ex pro, at vel accommodare ullamcorper. Cu duo minim vocibus menandri, at omittam voluptatum usu. Fabulas docendi iracundia ex cum, viris putant dissentiunt ex cum. Id vim tale mutat, eu vide velit oporteat pri. Mollis vidisse saperet. </p>
									</div>
								</li>
								<li>
									<h5 className="faq-title"><a href="#faq3">Is first consultation free?</a></h5>
									<div id="faq3" className="faq-section">
										<p>Eam ei suscipit partiendo, nam modus vocibus cotidieque eu, semper apeirian laboramus sit ne. Qui apeirian tacimates at, has errem possim an, eligendi pericula delicatissimi per ad. At pro essent aliquip qualisque, vis splendide posidonium ex. Nec et error quodsi deleniti. Dicit nobis latine qui an, per duis summo impetus an, eam ne perfecto intellegat persequeris.  </p>
									</div>
								</li>
								<li>
									<h5 className="faq-title"><a href="#faq4">How can we help?</a></h5>
									<div id="faq4" className="faq-section">
										<p>In cibo aperiri evertitur vis, sit autem facete cotidieque cu, omnesque voluptua voluptatibus mea ut. Cum ea omnes percipitur cotidieque, propriae suavitate te qui, laudem voluptatibus ne ius. Ut eam lorem consul. Eam bonorum percipit explicari in, efficiendi scripserit ex sed. Usu soluta integre fastidii eu. Et mei ipsum sensibus delicata, ius eu choro solet denique. Populo facilisi. </p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				
			</div>
				
		</section>
			
		</div>
		

      <LawyersFooter />
      <div className="scrollup"> <a className="scrolltop" href="#"> <i className="fa fa-chevron-up"></i> </a></div>
    </>
  );
}
