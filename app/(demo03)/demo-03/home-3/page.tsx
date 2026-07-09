"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";


const BASE = "/demo-03";

export default function Home3Page() {
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
		
		<section className="section-holder alignc">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<span className="heading-subtitle">Since 1970</span>
						<h2 className="section-heading-title margin-b16">We are Lawyers</h2>
						<p>Lorem ipsum dolor sit amet, qui ex laudem adolescens. Eripuit tibique adipisci ne nam, quo modus assum in. Elitr senserit vis ad, ridens malorum insolens in has, eros deseruisse ius cu. Labores oporteat ex est. Delenit copiosae similique ius cu, sea et persius mnesarchum inciderint, id usu soluta oblique salutatus, has tota.</p>
						<div className="view-more margin-t54"><a href="/demo-03/contact">Contact Us</a></div>
					</div>
				</div>
				
			</div>
			
		</section>
		
		
		<section className="section-holder">
			<div className="row practice-items-holder-v2">
				<div className="col-lg-4 col-md-6">
					<div className="practice-item-v2">
						<a href="/demo-03/practice-single-page">
							<div className="post-image"><img src="/demo-03/assets/images/practice/practice-1.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
						</a>
						<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Auto Accidents</a></h5>
						<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
						<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="practice-item-v2">
						<a href="/demo-03/practice-single-page">
							<div className="post-image"><img src="/demo-03/assets/images/practice/practice-10.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
						</a>
						<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Construction Loans</a></h5>
						<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
						<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="practice-item-v2">
						<a href="/demo-03/practice-single-page">
							<div className="post-image"><img src="/demo-03/assets/images/practice/practice-5.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
						</a>
						<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Real Estate</a></h5>
						<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
						<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="practice-item-v2">
						<a href="/demo-03/practice-single-page">
							<div className="post-image"><img src="/demo-03/assets/images/practice/practice-12.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
						</a>
						<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Finance Law</a></h5>
						<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
						<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="practice-item-v2">
						<a href="/demo-03/practice-single-page">
							<div className="post-image"><img src="/demo-03/assets/images/practice/practice-4.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
						</a>
						<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Tax Disputes</a></h5>
						<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
						<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="practice-item-v2">
						<a href="/demo-03/practice-single-page">
							<div className="post-image"><img src="/demo-03/assets/images/practice/practice-6.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
						</a>
						<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Child Abuse</a></h5>
						<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
						<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="practice-item-v2">
						<a href="/demo-03/practice-single-page">
							<div className="post-image"><img src="/demo-03/assets/images/practice/practice-7.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
						</a>
						<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Health Care</a></h5>
						<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
						<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="practice-item-v2">
						<a href="/demo-03/practice-single-page">
							<div className="post-image"><img src="/demo-03/assets/images/practice/practice-9.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
						</a>
						<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Divorce</a></h5>
						<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
						<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="practice-item-v2">
						<a href="/demo-03/practice-single-page">
							<div className="post-image"><img src="/demo-03/assets/images/practice/practice-8.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
						</a>
						<h5 className="practice-title-v2"><a href="/demo-03/practice-single-page">Aviation</a></h5>
						<div className="practice-excerpt">Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta.</div>
						<a className="read-more" href="/demo-03/practice-single-page">Learn More</a>
					</div>
				</div>
			</div>
			
			<div className="container">
				<div className="row alignc margin-t108">
					<div className="col-sm-6 col-lg-3 margin-bm32">
						<div className="facts-title black">10k</div>
						<p className="pcolor">Global Customers</p>
					</div>
					<div className="col-sm-6 col-lg-3 margin-bm32">
						<div className="facts-title black">30</div>
						<p className="pcolor">Years of Experience</p>
					</div>
					<div className="col-sm-6 col-lg-3 margin-bm32">
						<div className="facts-title black">24</div>
						<p className="pcolor">Team Experts</p>
					</div>
					<div className="col-sm-6 col-lg-3 margin-bm32">
						<div className="facts-title black">17</div>
						<p className="pcolor">Awards & Honors</p>
					</div>
				</div>
				
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
					<div className="col-lg-5 margin-bm54">
						<span className="heading-subtitle">Our Team</span>
						<h2 className="section-heading-title margin-b16">Meet the Lawyers</h2>
						<div className="margin-b32">Aenean facilisis, neque a varius porttitor, risus dui tempus libero, dictum aliquet justo enim vitae lorem. Aliquam lacinia lacinia mi ac convallis. Nulla et lacus et risus laoreet consectetur sed non magna.</div>
						<ul className="list-items">
							<li>Trusted Advisors</li>
							<li>Professional Support</li>
							<li>Focus &amp; Performance</li>
						</ul>
						<div className="view-more"><a href="#">Find More</a></div>
					</div>
					<div className="col-lg-7">
						<div className="row section-home-blog">
							<div className="col-md-6">
								<div className="lawyer-holder lawyer-3col">
									<a href="/demo-03/attorneys-single-page"><img src="/demo-03/assets/images/team/team-4.jpg" className="img-fluid" alt=""  style={{ maxWidth: '100%' }} /></a>
									<div className="lawyer-position">Founder</div>
									<h2 className="lawyer-title"><a href="/demo-03/attorneys-single-page">Sarah Barrett</a></h2>
									<ul className="lawyer-social">
										<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
										<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
										<li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
										<li><a href="https://matchthemes.com/cdn-cgi/l/email-protection#0c" target="_blank"><i className="far fa-envelope"></i></a></li>
									</ul>
								</div>
							</div>
							<div className="col-md-6">
								<div className="lawyer-holder lawyer-3col">
									<a href="/demo-03/attorneys-single-page"><img src="/demo-03/assets/images/team/team-6.jpg" className="img-fluid" alt=""  style={{ maxWidth: '100%' }} /></a>
									<div className="lawyer-position">Senior Partner</div>
									<h2 className="lawyer-title"><a href="/demo-03/attorneys-single-page">Mike Holmes</a></h2>
									<ul className="lawyer-social">
										<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
										<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
						
					</div>
				</div>
				
			</div>
				
		</section>
			
		
		<section className="parallax section-holder section-home35" style={{ backgroundImage: `url('/demo-03/assets/images/blog/blog-7.jpg')` }}>
			<div className="container parallax-content">
				<div className="row">
					<div className="col-lg-10 offset-lg-1 alignc">
						<span className="heading-subtitle white">Contact Us</span>
						<h2 className="section-heading-title">Free Case Evaluation</h2>
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
				</div>
				
			</div>
			
		</section>
		
		<section className="maps-fullwidth">
			<div className="gmaps">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.9762977047603!2d-73.96009086693977!3d40.69651965846399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bc1f922373f%3A0x398427d98fba822e!2sPark+Ave%2C+Brooklyn%2C+NY%2C+USA!5e0!3m2!1sen!2sro!4v1471514814808">
				</iframe>
			</div>
		</section>
		
		</div>
		

      <LawyersFooter />
      <div className="scrollup"> <a className="scrolltop" href="#"> <i className="fa fa-chevron-up"></i> </a></div>
    </>
  );
}
