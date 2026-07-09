"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";


const BASE = "/demo-03";

export default function HomeVideoPage() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      

      
		<div className="video-container"><video id="video" className="video" preload="metadata" playsInline="" autoPlay="" muted="" loop="" poster="images/home/video-img.jpg"> <source src="https://matchthemes.com/demowp/lawyers/wp-content/uploads/2019/08/video-lawyers.mp4" type="video/mp4" /></video><div className="slider-caption"><div className="slider-text"><h2>We provide legal<br />help for</h2><h4>Auto Accidents</h4> <a className="btn-white" href="#">Find More</a></div></div></div>
		
		
		
		<div className="page-holder custom-page-template page-full fullscreen-page home-page-content clearfix">
		
		
		<section className="section-holder section-home51">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 alignc">
						<span className="heading-subtitle white">Since 1970</span>
						<h2 className="section-heading-title margin-none white">Best Practice Attorneys that Solve Your Legal Problems</h2>
					</div>

				</div>
				
			</div>
			
		</section>
		
		
		
		
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<img className="img-fluid" src="/demo-03/assets/images/home/about-1.jpg" alt="" style={{ maxWidth: '100%' }} />
					</div>
					<div className="col-lg-4">
						<span className="heading-subtitle">BIO</span>
						<h2 className="section-heading-title margin-b16">About Us</h2>
						<p>Lorem ipsum dolor sit amet, qui saepe legendos patrioque ne. Vide qualisque an vel, pri cu movet adolescens. Ne elit clita sententiae eam, aeque saperet pertinacia nam cu. Augue erant quo ei, te error zril fuisset vix.</p>
						<p>Aenean facilisis, neque a varius porttitor, risus dui tempus libero, dictum aliquet justo enim vitae lorem. Aliquam lacinia lacinia mi ac convallis. Nulla et lacus et risus laoreet consectetur sed non magna.</p>
						<p>Magna laudem ex per, pro an porro animal temporibus. Enim facer forensibus quo no, dolor affert cotidieque sed cu.</p>
					</div>
					<div className="col-lg-4">
						<span className="heading-subtitle">Legal Help</span>
						<h2 className="section-heading-title margin-b16">Our Approach</h2>
						<p>Lorem ipsum dolor sit amet, qui saepe legendos patrioque ne. Vide qualisque an vel, pri cu movet adolescens. Ne elit clita sententiae eam, aeque saperet pertinacia nam cu. Augue erant quo ei, te error zril fuisset vix.</p>
						<p>Aenean facilisis, neque a varius porttitor, risus dui tempus libero, dictum aliquet justo enim vitae lorem. Aliquam lacinia lacinia mi ac convallis. Nulla et lacus et risus laoreet consectetur sed non magna.</p>
						<p>Magna laudem ex per, pro an porro animal temporibus. Enim facer forensibus quo no, dolor affert cotidieque sed cu.</p>
					</div>
				</div>
				
			</div>
			
		</section>
		
		
		
		<section className="no-parallax section-holder section-home52">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 alignc">
						<span className="heading-subtitle">Legal Help</span>
						<h2 className="section-heading-title">Practice Areas</h2>
					</div>
				</div>
				
				<div className="row practice-items-holder">
					<div className="col-md-6 col-lg-4 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="fas fa-truck"></i></div>
								<h3 className="practice-title">Auto Accidents</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 col-lg-4 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="fas fa-hard-hat"></i></div>
								<h3 className="practice-title">Construction Loans</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 col-lg-4 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="far fa-building"></i></div>
								<h3 className="practice-title">Real Estate</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 col-lg-4 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="far fa-chart-bar"></i></div>
								<h3 className="practice-title">Finance Law</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 col-lg-4 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="far fa-money-bill-alt"></i></div>
								<h3 className="practice-title">Tax Disputes</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 col-lg-4 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="far fa-meh"></i></div>
								<h3 className="practice-title">Child Abuse</h3>
							</div>
						</a>
					</div>
					
				</div>
				
				<div className="view-more alignc margin-t72"><a href="/demo-03/practice-areas">View More</a></div>
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
			<div className="row no-gutters section-home44">
				<div className="col-lg-6 section-home44-1" style={{ backgroundImage: `url('/demo-03/assets/images/blog/blog-7.jpg')` }}>
				</div>
				<div className="col-lg-6">
					<div className="section-home54-2">
						<span className="heading-subtitle">Legal Advice</span>
						<h2 className="section-heading-title margin-b16">Why Choose Us?</h2>
						<p>Vim possit eleifend forensibus ea, cibo antiopam pri ea, elit discere percipitur ad nec. At erant voluptatibus cum. Lorem ipsum dolor sit amet, qui saepe legendos patrioque ne. Vide qualisque an vel, pri cu movet adolescens. Ne elit clita sententiae eam, aeque saperet pertinacia nam cu. Augue erant quo ei, te error zril fuisset vix.</p>
						<p>An veri qualisque dissentias est, blandit praesent prodesset nec ne. Esse quaeque ei sit, ut eos wisi velit. Eos ad elit aperiri aliquando, vix ut clita utinam tractatos, ne fierent neglegentur qui. Mea ei sumo corrumpit. Magna laudem ex per, pro an porro animal temporibus. Enim facer forensibus quo no, dolor affert cotidieque sed cu. Ullum comprehensam no pri, per oblique epicurei te. Graece nemore at nam.</p>
						
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
				
				<div className="row section-home-blog">
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
								<li><a href="https://matchthemes.com/cdn-cgi/l/email-protection#07" target="_blank"><i className="far fa-envelope"></i></a></li>
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
								<li><a href="https://matchthemes.com/cdn-cgi/l/email-protection#1c" target="_blank"><i className="far fa-envelope"></i></a></li>
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
				
			</div>
				
		</section>
			
		
		
		<section className="section-holder">
			
				<div className="case-studies-holder cases-nomargin case-studies-short layout-masonry ">
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
				
				
				<div className="view-more margin-t72 alignc"><a href="#">Find More</a></div>
		
		</section>
			
		
		
		<section className="section-holder section-home58">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 alignc">
						<span className="heading-subtitle white">Expert Legal Advice</span>
						<h2 className="section-heading-title white">We will provide you with a FREE no obligation quotation</h2>
						
						<div className="view-more view-more-white"><a href="/demo-03/contact">Request Free Consultation</a></div>
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
