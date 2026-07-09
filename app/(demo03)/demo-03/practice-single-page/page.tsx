"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

const BASE = "/demo-03";

export default function SinglePracticePage() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="Single Practice" subtitle="in business since 1970" />

      
		<div className="page-holder custom-page-template page-full fullscreen-page clearfix">
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-9">
						<img src="/demo-03/assets/images/blog/blog-1.jpg" className="img-fluid margin-b16" alt="" />
						<h3>Choosing the Right Attorney for Your Case</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo sapien felis. Pellentes faucibus sollicitudin ante,at porta felisrutrum eget. Sed ut nisl urna,e get convallis purus pretium facilisis. Interdum et malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo sapien felis.</p>
						<p>Cras eu nibh non dui mattis pretium id vitae erat. Quisque justo nisi, malesuada eget lorem ac, posuere dictum justo. Vestibulum vitae scelerisque ante. Duis at mi vel odio fermentum accumsan at nec massa. Donec id velit porta, mattis lorem vitae, convallis nunc. Phasellus euismod vulputate lacus ac commodo. Pellentesque id fermentum enim, non aliquam libero. Fusce tincidunt dictum erat sit amet volutpat.</p>
						<h3>Our experienced attorneys are willing to tackle the most complex of cases on your behalf</h3>
						<p>Fusce commodo iaculis pulvinar. Cras faucibus facilisis aliquet. Morbi lorem nulla, bibendum vel bibendum id, aliquet ut ipsum. Praesent est diam, porta eget vestibulum pulvinar, mattis sit amet ante. Donec non malesuada nisi, id rutrum dolor. Nullam vel dignissim velit. Nunc ligula tellus, iaculis et vehicula.</p>
						<p>Duis at mi vel odio fermentum accumsan at nec massa. Donec id velit porta, mattis lorem vitae, convallis nunc. Phasellus euismod vulputate lacus ac commodo. Pellentesque id fermentum enim, non aliquam libero. Fusce tincidunt dictum erat sit amet volutpat.</p>
					</div>
					
					<div className="col-lg-3">
						<aside>
							<ul>
								<li className="widget">
									<h5 className="widgettitle">Practice Areas</h5>
									<div className="sidebar widget_recent_entries">
										<ul>
											<li><a href="#">Auto Accidents</a></li>
											<li><a href="#">Construction Loans</a></li>
											<li><a href="#">Real Estate</a></li>
											<li><a href="#">Finance Law</a></li>
											<li><a href="#">Tax Disputes</a></li>
											<li><a href="#">Child Abuse</a></li>
											<li><a href="#">Health Care</a></li>
											<li><a href="#">Divorce</a></li>
											<li><a href="#">Aviation</a></li>
											<li><a href="#">Burn Injuries</a></li>
											<li><a href="#">Environmental Law</a></li>
											<li><a href="#">Medical Abuse</a></li>
										</ul>
									</div>
								</li>
								<li className="widget">
									<div className="practice-contact" style={{ "backgroundImage": "url('images/practice/practice-banner.jpg')" }}>
										<h5 className="white">Need help?</h5>
										<p>Contact us today for a free consultation and our experts will help you.</p>
										<p><strong>Phone:</strong> 1-800-000-111<br /><strong>Email:</strong> <a href="https://matchthemes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f4979b9a80959780b4918c9599849891da979b99">[email&#160;protected]</a></p>
										<p><strong>Mon – Fri:</strong> 09:00 -17:00</p>
									</div>
								</li>
							</ul>
						</aside>
					</div>
					
				</div>
				
			</div>
				
		</section>
		
		
		<section className="parallax section-about5" style={{ backgroundImage: `url('/demo-03/assets/images/top-bkgs/contact.jpg')` }}>
			<div className="container parallax-content">
				<div className="row">
					<div className="col-lg-10 offset-lg-1 alignc">
						<span className="heading-subtitle white">Contact Us</span>
						<h2 className="margin-b16">We're here to help you</h2>
						<p>Call Now : 1-800-000-111 and make an appointment with one of our legal experts.</p>
						<div className="view-more view-more-white margin-t54 alignc"><a href="/demo-03/contact">Make an Appointment</a></div>
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
