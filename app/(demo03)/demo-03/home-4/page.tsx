"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";


const BASE = "/demo-03";

export default function Home4Page() {
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
		
		<section className="section-holder section-home41">
			
				
				<div className="row no-gutters">
					<div className="col-md-4 simple-box simple-box1 margin-bm32">
						<div className="simple-icon"> <i className="fas fa-gavel"></i></div>
						<h3 className="simple-title">Excellence</h3>
						
						<p>In pri dico propriae, ad epicurei reprehendunt pro. Eu per postulant repudiandae, te vim falli nemore, cum agam tation honestatis id.</p>
					</div>
					<div className="col-md-4 simple-box simple-box2 margin-bm32">
						<div className="simple-icon"> <i className="fas fa-shield-alt"></i></div>
						<h3 className="simple-title">Commitment</h3>
						
						<p>In pri dico propriae, ad epicurei reprehendunt pro. Eu per postulant repudiandae, te vim falli nemore, cum agam tation honestatis id.</p>
					</div>
					<div className="col-md-4 simple-box simple-box3">
						<div className="simple-icon"> <i className="fas fa-trophy"></i></div>
						<h3 className="simple-title">Professionalism</h3>
						
						<p>In pri dico propriae, ad epicurei reprehendunt pro. Eu per postulant repudiandae, te vim falli nemore, cum agam tation honestatis id.</p>
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
						
						<ul className="list-items"><li>Trusted Advisors</li><li>Professional Support</li><li>Focus &amp; Performance</li></ul>
						
						
				<div className="view-more"><a href="#">Find More</a></div>
					
					</div>
					<div className="col-lg-6 alignr">
						<img className="img-fluid" src="/demo-03/assets/images/home/about-home4.jpg" alt="" style={{ maxWidth: '100%' }} />
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
					<div className="col-lg-3 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="fas fa-truck"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Auto Accidents</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="fas fa-hard-hat"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Construction Loans</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="far fa-building"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Real Estate</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="far fa-chart-bar"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Finance Law</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="far fa-money-bill-alt"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Tax Disputes</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="far fa-meh"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Child Abuse</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="fas fa-medkit"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Health Care</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="practice-item-v2">
							<a href="/demo-03/practice-single-page">
								<div className="practice-circle"><i className="fas fa-heart-broken"></i></div>
							</a>
							<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Divorce</a></h5>
							<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
							<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
						</div>
					</div>
				
				</div>
				
				<div className="view-more alignc margin-t72"><a href="/demo-03/practice-areas">View More</a></div>
			</div>
				
		</section>
		
		
		
		<section className="section-holder">
			<div className="row no-gutters section-home44">
				<div className="col-lg-6 section-home44-1" style={{ backgroundImage: `url('/demo-03/assets/images/home/office-1-1.jpg')` }}>
				</div>
				<div className="col-lg-6">
					<div className="section-home44-2">
						<span className="heading-subtitle">Skills</span>
						<h2 className="section-heading-title margin-b16">Expert Legal Advice</h2>
						<p>Vim possit eleifend forensibus ea, cibo antiopam pri ea, elit discere percipitur ad nec. At erant voluptatibus cum.</p>
						
						<div className="progress">
  <div className="progress-bar" role="progressbar" style={{ "width": "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span className="progress-text">Family Law</span><span className="progress-percentage">85%</span></div>
</div>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{ "width": "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"><span className="progress-text">Business Law</span><span className="progress-percentage">95%</span></div>
</div>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{ "width": "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><span className="progress-text">Personal Injury</span><span className="progress-percentage">90%</span></div>
</div>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{ "width": "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span className="progress-text">Employment Law</span><span className="progress-percentage">80%</span></div>
</div>
					</div>
					
				</div>
			</div>
			
		</section>
		
		
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 alignc">
						<span className="heading-subtitle">Cases</span>
						<h2 className="section-heading-title">Recent Case Studies</h2>
					</div>
				</div>
				
				<div className="case-studies-holder case-studies-short layout-masonry ">
					<div className="case-study case-4col blog-item-masonry finance ">
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
					<div className="case-study case-4col blog-item-masonry finance ">
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
					<div className="case-study case-4col blog-item-masonry health-care  injuries ">
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
					<div className="case-study case-4col blog-item-masonry health-care  injuries ">
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
					<div className="case-study case-4col blog-item-masonry finance ">
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
					<div className="case-study case-4col blog-item-masonry injuries ">
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
					<div className="case-study case-4col blog-item-masonry injuries ">
						<div className="case-img-holder">
							<a href="/demo-03/cases-single-page">
								<div className="case-img" style={{ "backgroundImage": "url(/demo-03/assets/images/cases/case-6.jpg)" }}></div>
							</a>
						</div>
						<div className="case-content-v1">
							<ul className="case-categ">
							<li>Health Care</li>
								<li>Injuries</li>
							</ul>
							<h4><a href="/demo-03/cases-single-page">Motocycle Security</a></h4>
							<div className="case-plus"><i className="fas fa-angle-double-right"></i></div>
						</div>
					</div>
					<div className="case-study case-4col blog-item-masonry injuries ">
						<div className="case-img-holder">
							<a href="/demo-03/cases-single-page">
								<div className="case-img" style={{ "backgroundImage": "url(/demo-03/assets/images/cases/case-7.jpg)" }}></div>
							</a>
						</div>
						<div className="case-content-v1">
							<ul className="case-categ">
							<li>Health Care</li>
							</ul>
							<h4><a href="/demo-03/cases-single-page">Medical Malpractice</a></h4>
							<div className="case-plus"><i className="fas fa-angle-double-right"></i></div>
						</div>
					</div>
				</div>
				
				
				<div className="view-more alignc margin-t72"><a href="/demo-03/case-studies">View More</a></div>
				
			</div>
				
		</section>
			
		
		
		<section className="parallax section-holder" style={{ backgroundImage: `url('/demo-03/assets/images/home/home-bkg-1.jpg')` }}>
			<div className="container parallax-content">
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<div className="testimonials-container white">
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
					<div className="col-md-6">
						<div className="lawyer-holder lawyer-3col">
							<a href="/demo-03/attorneys-single-page"><img src="/demo-03/assets/images/team/team-4.jpg" className="img-fluid" alt=""  style={{ maxWidth: '100%' }} /></a>
							<div className="lawyer-position">Founder</div>
							<h2 className="lawyer-title"><a href="/demo-03/attorneys-single-page">Sarah Barrett</a></h2>
							<div className="lawyer-excerpt">Integer imperdiet purus urna, a volutpat turpis feugiat vitae. Proin molestie in metus eu volutpat. Vestibulum vitae orci sit amet.</div>
							<ul className="lawyer-social">
								<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
								<li><a href="https://matchthemes.com/cdn-cgi/l/email-protection#6e" target="_blank"><i className="far fa-envelope"></i></a></li>
							</ul>
						</div>
					</div>
					<div className="col-md-6">
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
			
		
		
		<section className="no-parallax section-holder section-home48">
			<div className="container">
				<div className="row margin-b72">
					<div className="col-md-4 margin-bm32">
						<div className="contact-city">LONDON</div>
						<div className="contact-info"><i className="fas fa-home"></i> 12 ComHill St, Suite 2 London 22222</div>
						<div className="contact-info"><i className="fas fa-phone-alt"></i> 1-800-000-111 </div>
						<div className="contact-info"><i className="far fa-envelope"></i> <a href="https://matchthemes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="beddd1d0cadfddcafedbc6dfd3ced2db90ddd1d3">[email&#160;protected]</a> </div>
					</div>
					<div className="col-md-4 margin-bm32">
						<div className="contact-city">NEW YORK</div>
						<div className="contact-info"><i className="fas fa-home"></i> 45 Ralph Ave, Suite 5 New York 11111</div>
						<div className="contact-info"><i className="fas fa-phone-alt"></i> 1-800-000-111 </div>
						<div className="contact-info"><i className="far fa-envelope"></i> <a href="https://matchthemes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="dcbfb3b2a8bdbfa89cb9a4bdb1acb0b9f2bfb3b1">[email&#160;protected]</a> </div>
					</div>
					<div className="col-md-4 margin-bm32">
						<div className="contact-city">PARIS</div>
						<div className="contact-info"><i className="fas fa-home"></i> 30 George V St, Suite 1 Paris 33333 </div>
						<div className="contact-info"><i className="fas fa-phone-alt"></i> 1-800-000-111 </div>
						<div className="contact-info"><i className="far fa-envelope"></i> <a href="https://matchthemes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="81e2eeeff5e0e2f5c1e4f9e0ecf1ede4afe2eeec">[email&#160;protected]</a> </div>
					</div>
				</div>
				
				
				<div className="row">
					<div className="col-lg-6 margin-bm54">
						<span className="heading-subtitle white">Contact Us</span>
						<h2 className="section-heading-title white margin-b16">Free Case Evaluation</h2>
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
						<div className="gmaps gmaps-home4">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.9762977047603!2d-73.96009086693977!3d40.69651965846399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bc1f922373f%3A0x398427d98fba822e!2sPark+Ave%2C+Brooklyn%2C+NY%2C+USA!5e0!3m2!1sen!2sro!4v1471514814808">
				</iframe>
						</div>
					</div>
				</div>
				
				
			</div>
			
		</section>
		
		
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 alignc">
						<span className="heading-subtitle">Legal Help</span>
						<h2 className="section-heading-title">Latest News</h2>
					</div>
				</div>
				
				<div className="row section-home-blog">
					<div className="col-md-4">
						<article className="blog-item blog-item-2col-grid blog-item-3col-grid">
							<a href="/demo-03/blog-single-post">
								<div className="post-image"><img src="/demo-03/assets/images/blog/blog-1.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
							</a>
							<ul className="blog-date">
								<li className="meta-date">October 10, 2019</li>
								<li className="meta-categ"> <a href="#">Car Accidents</a> <a href="#">News</a></li>
							</ul>
							<div className="post-holder">
								<h2 className="blog-title"><a href="/demo-03/blog-single-post">Thinking Out Of The Box After A Simple Car Accident</a></h2>
								<div className="article-excerpt">Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra.</div>
							</div>
						</article>
					</div>
					<div className="col-md-4">
						<article className="blog-item blog-item-2col-grid blog-item-3col-grid">
							<a href="/demo-03/blog-single-post">
								<div className="post-image"><img src="/demo-03/assets/images/blog/blog-2.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
							</a>
							<ul className="blog-date">
								<li className="meta-date">October 9, 2019</li>
								<li className="meta-categ"> <a href="#">Divorce</a> <a href="#">News</a></li>
							</ul>
							<div className="post-holder">
								<h2 className="blog-title"><a href="/demo-03/blog-single-post">Understanding Domestic Violence Defense</a></h2>
								<div className="article-excerpt">Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra.</div>
							</div>
						</article>
					</div>
					<div className="col-md-4">
						<article className="blog-item blog-item-2col-grid blog-item-3col-grid">
							<a href="/demo-03/blog-single-post">
								<div className="post-image"><img src="/demo-03/assets/images/blog/blog-9.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
							</a>
							<ul className="blog-date">
								<li className="meta-date">October 9, 2019</li>
								<li className="meta-categ"> <a href="#">News</a></li>
							</ul>
							<div className="post-holder">
								<h2 className="blog-title"><a href="/demo-03/blog-single-post">How to Make a Claim Against an Airline</a></h2>
								<div className="article-excerpt">Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra.</div>
							</div>
						</article>
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
