"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

const BASE = "/demo-03";

export default function CaseStudies3ColsPage() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="Case Studies 3 Cols" subtitle="in business since 1970" />

      
		<div className="page-holder custom-page-template page-full fullscreen-page clearfix">
		
		<section className="section-holder margin-b32">
			<div className="container">
				<div className="row">
					<div className="col-lg-10 offset-lg-1">
						<ul className="portfolio-filter"><li><a className="read-more current" href="#" data-filter="*">Show All</a></li><li><a className="view-more" href="#" data-filter=".finance">Finance</a></li><li><a className="view-more" href="#" data-filter=".health-care">Health Care</a></li><li><a className="view-more" href="#" data-filter=".injuries">Injuries</a></li></ul>
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
					<div className="case-study case-3col blog-item-masonry injuries health-care ">
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
					
					<div className="case-study case-3col blog-item-masonry health-care">
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
				
				
				
			</div>
				
		</section>
		
		
		</div>

      <LawyersFooter />
      <div className="scrollup"> <a className="scrolltop" href="#"> <i className="fa fa-chevron-up"></i> </a></div>
    </>
  );
}
