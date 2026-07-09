"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";


const BASE = "/demo-03";

export default function TopHeader2Page() {
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
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<div className="intro-msg margin-b108">
							<div className="intro-normal">Our firm recovered</div>
							<div className="intro-2"><span className="intro-small-italic">over</span> <span className="intro-big-italic">$100.000.000</span></div>
							<div className="intro-year">Since 1970</div>
						</div>
					</div>
				</div>
				
				<div className="row">
					<div className="col-lg-4 margin-bm32">
						<p><span className="dropcap">W</span>e are passionate advocates for victims of serious accidents. Donec suscipit lobortis ornare. Aenean vel varius odio. Cras ligula odio, congue vel adipiscing non, congue vitae neque. Pellentesque adipiscing ultricies risus, auctor ullamcorper.</p>
					</div>
					<div className="col-lg-4 margin-bm32">
						<p>Sed elit nulla, varius vitae lacus hendrerit, pulvinar tincidunt lacus. Suspendisse quis purus ultrices, convallis felis ac, pulvinar tortor. Etiam adipiscing enim diam, vitae lacinia ipsum volutpat id. Sed varius nisl quis justo feugiat, a tempor enim pellentesque.</p>
					</div>
					<div className="col-lg-4">
						<p>Nullam at ligula at velit adipiscing malesuada et venenatis enim. Praesent lacinia volutpat imperdiet. Integer ultricies aliquam auctor. Etiam gravida sagittis ipsum nec dictum. Nunc pretium est quis placerat congue. Nam dui lectus, pretium get elit.</p>
					</div>
				</div>
				
			</div>
			
		</section>
		
		
		<section className="section-holder">
			<div className="row no-gutters">
				<div className="col-md-6">
					<img className="img-fluid" src="/demo-03/assets/images/home/office-1-1.jpg" alt=""/>
				</div>
				<div className="col-md-6">
					<img className="img-fluid" src="/demo-03/assets/images/home/office-2-1.jpg" alt=""/>
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
				
				<div className="row practice-items-holder">
					<div className="col-md-6 col-lg-3 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="fas fa-truck"></i></div>
								<h3 className="practice-title">Auto Accidents</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 col-lg-3 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="fas fa-hard-hat"></i></div>
								<h3 className="practice-title">Construction Loans</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 col-lg-3 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="far fa-building"></i></div>
								<h3 className="practice-title">Real Estate</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 col-lg-3 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="far fa-chart-bar"></i></div>
								<h3 className="practice-title">Finance Law</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 col-lg-3 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="far fa-money-bill-alt"></i></div>
								<h3 className="practice-title">Tax Disputes</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 col-lg-3 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="far fa-meh"></i></div>
								<h3 className="practice-title">Child Abuse</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 col-lg-3 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="fas fa-medkit"></i></div>
								<h3 className="practice-title">Health Care</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 col-lg-3 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="fas fa-heart-broken"></i></div>
								<h3 className="practice-title">Divorce</h3>
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
					<div className="col-lg-8">
						<span className="heading-subtitle white">Legal Help</span>
						<h2 className="section-heading-title">Why Choose Us?</h2>
					</div>
				</div>
				
				<div className="row margin-b72">
					<div className="col-lg-6 margin-bm32">
						<p>Lorem ipsum dolor sit amet, debet dolore consectetuer eum eu, has no dicta munere gloriatur. Ea ubique atomorum nec. At eam phaedrum oportere. Mei brute primis omnium at, ius odio suscipit honestatis ut, dissentias dissentiet et usu. Sed errem noluisse comprehensam ei, eum no eripuit deserunt laboramus, te sea mentitum. </p>
					</div>
					<div className="col-lg-6">
						<p>Harum saperet, ius paulo noluisse dignissim eu. Inimicus scripserit accommodare has ei, cum ut aliquam delicata. Ipsum etiam sit ad, salutatus tincidunt signiferumque in has, an mea vocent delicata. Eos enim dictas invenire ex. Amet eius cu vim, admodum mandamus imperdiet pro an, ei lorem tincidunt.</p>
					</div>
				</div>
				
				<div className="row alignc">
					<div className="col-sm-6 col-lg-3 margin-bm32">
						<div className="facts-title">10k</div>
						<p className="pcolor">Global Customers</p>
					</div>
					<div className="col-sm-6 col-lg-3 margin-bm32">
						<div className="facts-title">30</div>
						<p className="pcolor">Years of Experience</p>
					</div>
					<div className="col-sm-6 col-lg-3 margin-bm32">
						<div className="facts-title">24</div>
						<p className="pcolor">Team Experts</p>
					</div>
					<div className="col-sm-6 col-lg-3 margin-bm32">
						<div className="facts-title">17</div>
						<p className="pcolor">Awards & Honors</p>
					</div>
				</div>
				
			</div>
			
		</section>
		
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 alignc">
						<span className="heading-subtitle">Our Attorneys</span>
						<h2 className="section-heading-title">Professional Team</h2>
					</div>
				</div>
				
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="lawyer-holder lawyer-3col">
							<a href="/demo-03/attorneys-single-page"><img src="/demo-03/assets/images/team/team-4.jpg" className="img-fluid" alt=""  style={{ maxWidth: '100%' }} /></a>
							<div className="lawyer-position">Founder</div>
							<h2 className="lawyer-title"><a href="/demo-03/attorneys-single-page">Sarah Barrett</a></h2>
							<div className="lawyer-excerpt">Integer imperdiet purus urna, a volutpat turpis feugiat vitae. Proin molestie in metus eu volutpat. Vestibulum vitae orci sit amet.</div>
							<ul className="lawyer-social">
								<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
								<li><a href="https://matchthemes.com/cdn-cgi/l/email-protection#7d" target="_blank"><i className="far fa-envelope"></i></a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
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
					<div className="col-lg-4 col-md-6">
						<div className="lawyer-holder lawyer-3col">
							<a href="/demo-03/attorneys-single-page"><img src="/demo-03/assets/images/team/team-1.jpg" className="img-fluid" alt=""  style={{ maxWidth: '100%' }} /></a>
							<div className="lawyer-position">Lawyer</div>
							<h2 className="lawyer-title"><a href="/demo-03/attorneys-single-page">Teresa Perkins</a></h2>
							<div className="lawyer-excerpt">Integer imperdiet purus urna, a volutpat turpis feugiat vitae. Proin molestie in metus eu volutpat. Vestibulum vitae orci sit amet.</div>
							<ul className="lawyer-social">
								<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="https://matchthemes.com/cdn-cgi/l/email-protection#be" target="_blank"><i className="far fa-envelope"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				
				<div className="view-more alignc"><a href="/demo-03/about-us">View More</a></div>
			</div>
				
		</section>
			
		
		<section className="no-parallax section-holder section-home16">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
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
			
		
		<section className="parallax section-holder" style={{ backgroundImage: `url('/demo-03/assets/images/blog/blog-7.jpg')` }}>
			<div className="container parallax-content">
				<div className="row">
					<div className="col-lg-10 offset-lg-1 alignc">
						<span className="heading-subtitle white">Legal Services</span>
						<h2 className="margin-b16">Did we mention first consultation is free?</h2>
						<p>Appareat reformidans his te. Mundi erroribus ad eum, mea ut dicam nostro copiosae. Eligendi accusamus nec ex. Et usu ludus vitae tritani, suas deleniti pertinacia et quo. Duo veritus mediocrem ex, vidit fabellas vis ea.</p>
						<div className="view-more view-more-white margin-t54 alignc"><a href="/demo-03/contact">Make an Appointment</a></div>
					</div>
				</div>
				
			</div>
			
		</section>
		
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 margin-bm54">
						<span className="heading-subtitle">Contact Us</span>
						<h2 className="section-heading-title margin-b16">Free Case Evaluation</h2>
						<p>Aenean facilisis, neque a varius porttitor, risus dui tempus libero, dictum aliquet justo enim vitae lorem. Aliquam lacinia lacinia mi ac convallis. Nulla et lacus et risus laoreet consectetur.</p>
						<div className="icon-box-wrapper">
							<div className="icon-box-icon"><i className="fas fa-map-marker-alt"></i></div>
							<div className="icon-box-content">
								<div className="icon-box-title">OFFICE</div>
								<p className="icon-box-description">40 Park Ave, Brooklyn, New York</p>
							</div>
						</div>
						
						<div className="icon-box-wrapper">
							<div className="icon-box-icon"><i className="fas fa-phone-alt"></i></div>
							<div className="icon-box-content">
								<div className="icon-box-title">PHONE</div>
								<p className="icon-box-description">1-800-000-111</p>
							</div>
						</div>
						
						<div className="icon-box-wrapper">
							<div className="icon-box-icon"><i className="far fa-envelope"></i></div>
							<div className="icon-box-content">
								<div className="icon-box-title">EMAIL</div>
								<p className="icon-box-description"><a href="https://matchthemes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c4a7abaab0a5a7b084a1bca5a9b4a8a1eaa7aba9">[email&#160;protected]</a></p>
							</div>
						</div>
						
						<div className="gmaps margin-t54">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.9762977047603!2d-73.96009086693977!3d40.69651965846399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bc1f922373f%3A0x398427d98fba822e!2sPark+Ave%2C+Brooklyn%2C+NY%2C+USA!5e0!3m2!1sen!2sro!4v1471514814808">
							</iframe>
						</div>
					</div>
					<div className="col-lg-6">
						<div id="contact-form-holder">
							<form method="post" id="contact-form" action='https://matchthemes.com/demohtml/lawyers/include/contact-process.php'>
								<div className="margin-b32"><label>Name</label><input type="text" name="name" className="comm-field"/></div>
								<div className="margin-b32"><label>Email</label><input type="text" name="email" className="comm-field"/> </div>
								<div className="margin-b32"><label>Subject</label><input type="text" name="subject" className="comm-field" /> </div>
								<div className="margin-b32"><label>Message</label><textarea name="message" id="msg-contact" rows="5" ></textarea></div>
								<p className="antispam">Leave this empty: <input type="text" name="url" /></p>
								<p><input type="submit" value="Send message" id="submit"/></p>
							</form>
						</div>
						
						<div id="output-contact"></div>
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
