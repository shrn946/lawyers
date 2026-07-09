"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

const BASE = "/demo-03";

export default function Attorneys4ColsPage() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="Attorneys 4 Cols" subtitle="in business since 1970" />

      
		<div className="page-holder custom-page-template page-full fullscreen-page clearfix">
		
		<section className="section-holder margin-b32">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-lg-3">
						<div className="lawyer-holder lawyer-3col">
							<a href="/demo-03/attorneys-single-page"><img src="/demo-03/assets/images/team/team-4.jpg" className="img-fluid" alt=""  style={{ maxWidth: '100%' }} /></a>
							<div className="lawyer-position">Founder</div>
							<h2 className="lawyer-title"><a href="/demo-03/attorneys-single-page">Sarah Barrett</a></h2>
							<div className="lawyer-excerpt">Integer imperdiet purus urna, a volutpat turpis feugiat vitae. Proin molestie in metus eu volutpat. Vestibulum vitae orci sit amet.</div>
							<ul className="lawyer-social">
								<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
								<li><a href="https://matchthemes.com/cdn-cgi/l/email-protection#a1" target="_blank"><i className="far fa-envelope"></i></a></li>
							</ul>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
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
					<div className="col-md-6 col-lg-3">
						<div className="lawyer-holder lawyer-3col">
							<a href="/demo-03/attorneys-single-page"><img src="/demo-03/assets/images/team/team-1.jpg" className="img-fluid" alt=""  style={{ maxWidth: '100%' }} /></a>
							<div className="lawyer-position">Lawyer</div>
							<h2 className="lawyer-title"><a href="/demo-03/attorneys-single-page">Teresa Perkins</a></h2>
							<div className="lawyer-excerpt">Integer imperdiet purus urna, a volutpat turpis feugiat vitae. Proin molestie in metus eu volutpat. Vestibulum vitae orci sit amet.</div>
							<ul className="lawyer-social">
								<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="https://matchthemes.com/cdn-cgi/l/email-protection#76" target="_blank"><i className="far fa-envelope"></i></a></li>
							</ul>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
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
		
		
		<section className="section-holder section-lawyers">
			<div className="container">
				<div className="row">
					<div className="col-lg-10 offset-lg-1 alignc">
						<span className="heading-subtitle">Work with Us</span>
						<h2 className="margin-b16">We are always looking for new partners</h2>
						<p>Lorem ipsum dolor sit amet, ut eius periculis eos, eu mea suscipit intellegam. Tota consequuntur cu pro, congue efficiantur eos id. Ius in percipit recusabo. Has ex agam audire, id dicat dolores.</p>
						<div className="view-more alignc"><a href="/demo-03/contact">Contact Us</a></div>
					</div>
				</div>
				
			</div>
			
		</section>
		
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
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
				</div>
				
			</div>
			
		</section>
		
		</div>

      <LawyersFooter />
      <div className="scrollup"> <a className="scrolltop" href="#"> <i className="fa fa-chevron-up"></i> </a></div>
    </>
  );
}
