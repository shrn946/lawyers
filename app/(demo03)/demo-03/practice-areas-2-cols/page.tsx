"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

const BASE = "/demo-03";

export default function PracticeAreas2ColsPage() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="Practice Areas 2 Cols" subtitle="in business since 1970" />

      
		<div className="page-holder custom-page-template page-full fullscreen-page clearfix">
		
		<section className="section-holder">
			<div className="container">
				<div className="row practice-items-holder">
					<div className="col-md-6 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="fas fa-truck"></i></div>
								<h3 className="practice-title">Auto Accidents</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="fas fa-hard-hat"></i></div>
								<h3 className="practice-title">Construction Loans</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="far fa-building"></i></div>
								<h3 className="practice-title">Real Estate</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="far fa-chart-bar"></i></div>
								<h3 className="practice-title">Finance Law</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="far fa-money-bill-alt"></i></div>
								<h3 className="practice-title">Tax Disputes</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="far fa-meh"></i></div>
								<h3 className="practice-title">Child Abuse</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="fas fa-medkit"></i></div>
								<h3 className="practice-title">Health Care</h3>
							</div>
						</a>
					</div>
					<div className="col-md-6 practice-item-4cols">
						<a href="/demo-03/practice-single-page">
							<div className="practice-item">
								<div className="practice-icon"><i className="fas fa-heart-broken"></i></div>
								<h3 className="practice-title">Divorce</h3>
							</div>
						</a>
					</div>
				</div>
				
			</div>
				
		</section>
		
		
		<section className="parallax section-holder" style={{ backgroundImage: `url('/demo-03/assets/images/blog/blog-7.jpg')` }}>
			<div className="container parallax-content">
				<div className="row">
					<div className="col-lg-10 offset-lg-1 alignc">
						<span className="heading-subtitle white">Legal Services</span>
						<h2 className="margin-b16">We help solve your legal issues</h2>
						<div className="view-more view-more-white alignc"><a href="/demo-03/contact">Make an Appointment</a></div>
					</div>
				</div>
				
			</div>
			
		</section>
		
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 alignc">
						<span className="heading-subtitle">Testimonials</span>
						<h2 className="section-heading-title">What Our Clients Say</h2>
					</div>
				</div>
				
				<div className="row">
					<div className="col-lg-4">
						<div className="testimonial-wrapper">
							<div className="testimonial-content">
								<h6>"Vocent utamur appareat ad his, eum volumus denique consectetuer id. Iusto affert mucius vix ei. Nec veritus epicurei tractatos at. Mel id posse nostrum."</h6>
							</div>
							<div className="icon-box-wrapper">
								<div className="icon-box-icon testimonial-client"><img src="/demo-03/assets/images/testimonials/client-2.jpg" alt="" style={{ maxWidth: '100%' }} /></div>
								<div className="icon-box-content">
									<div className="client-name">Jean Carlson</div>
									<p className="client-company">Leaf Inc.</p>
								</div>
							</div>
						</div>
					</div>
						
					<div className="col-lg-4">
						<div className="testimonial-wrapper">
							<div className="testimonial-content">
								<h6>"Sed sodales, odio eget adipiscing mattis, sapien purus dapibus felis, sit amet mollis velit dolor eu lorem. Vivamus condimentum nunc a quam lobortis tempus."</h6>
							</div>
							<div className="icon-box-wrapper">
								<div className="icon-box-icon testimonial-client"><img src="/demo-03/assets/images/testimonials/client-1.jpg" alt="" style={{ maxWidth: '100%' }} /></div>
								<div className="icon-box-content">
									<div className="client-name">Louis Rios</div>
									<p className="client-company">Medical Co.</p>
								</div>
							</div>
						</div>
					</div>
						
					<div className="col-lg-4">
						<div className="testimonial-wrapper">
							<div className="testimonial-content">
								<h6>"Eros sale has id, usu solet primis cetero in. Vel ex qualisque argumentum dissentiet, iusto omnes ornatus nec at. Vim definiebas neglegentur mediocritatem in, est."</h6>
							</div>
							<div className="icon-box-wrapper">
								<div className="icon-box-icon testimonial-client"><img src="/demo-03/assets/images/testimonials/client-3.jpg" alt="" style={{ maxWidth: '100%' }} /></div>
								<div className="icon-box-content">
									<div className="client-name">Michael Jonson</div>
									<p className="client-company">Jfirm</p>
								</div>
							</div>
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
