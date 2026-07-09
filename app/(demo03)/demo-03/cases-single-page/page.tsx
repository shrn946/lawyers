"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

const BASE = "/demo-03";

export default function SingleCasePage() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="Single Case" subtitle="in business since 1970" />

      
		<div className="page-holder custom-page-template page-full fullscreen-page clearfix">
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-9">
						<h3>About the Business Law Case</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo sapien felis. Pellentes faucibus sollicitudin ante,at porta felisrutrum eget. Sed ut nisl urna,e get convallis purus pretium facilisis. Interdum et malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo sapien felis.</p>
						<p>Cras eu nibh non dui mattis pretium id vitae erat. Quisque justo nisi, malesuada eget lorem ac, posuere dictum justo. Vestibulum vitae scelerisque ante. Duis at mi vel odio fermentum accumsan at nec massa. Donec id velit porta, mattis lorem vitae, convallis nunc. Phasellus euismod vulputate lacus ac commodo. Pellentesque id fermentum enim, non aliquam libero. Fusce tincidunt dictum erat sit amet volutpat.</p>
						<img src="/demo-03/assets/images/blog/blog-4.jpg" className="img-fluid margin-b32" alt="" style={{ maxWidth: '100%' }} />
						<h3>The Challenge</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo sapien felis. Pellentes faucibus sollicitudin ante,at porta felisrutrum eget. Sed ut nisl urna,e get convallis purus pretium facilisis. Interdum et malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo sapien felis.</p>
						<blockquote><p>The foundation of justice is good faith.</p></blockquote>
						<h3>The Solution</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo sapien felis. Pellentes faucibus sollicitudin ante,at porta felisrutrum eget. Sed ut nisl urna,e get convallis purus pretium facilisis. Interdum et malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo sapien felis.</p>
						<h3>The Result</h3>
						<p>Eros sale has id, usu solet primis cetero in. Vel ex qualisque argumentum dissentiet, iusto omnes ornatus nec at. Vim definiebas neglegentur mediocritatem in, est expetendis incorrupte scripserit an. Qui ex quando antiopam mandamus, omnes nullam mel et. Pro no magna luptatum laboramus. Sea eu sint quodsi constituam. Usu quas quodsi utamur.</p>
					</div>
					<div className="col-lg-3">
						<aside>
					<ul>
					<li className="widget">
						<div className="case-info"><h5 className="white margin-b16">Case Info</h5>
						<ul className="case-info-list">
							<li><b>Category:</b> Finance</li>
							<li><b>Time:</b> 1 Year</li>
							<li><b>Lawyer:</b> Mike Holmes</li>
							<li><b>Result:</b> $50k</li>
						</ul>
						</div>
					</li>
					<li className="widget">
					<h5 className="widgettitle">Case Studies</h5>
					<div className="sidebar widget_recent_entries"><ul><li><a href="#">Tax Dispute</a></li><li><a href="#">Business Law</a></li><li><a href="#">Auto Accident</a></li><li><a href="#">Family Law</a></li><li><a href="#">Real Estate</a></li><li><a href="#">Domestic Violence</a></li><li><a href="#">Motocycle Security</a></li><li><a href="#">Medical Malpractice</a></li></ul></div>
					</li>
					<li className="widget">
						<div className="practice-contact" style={{ "backgroundImage": "url('images/practice/practice-banner.jpg')" }}><h5 className="white">Need help?</h5><p>Contact us today for a free consultation and our experts will help you.</p><p><strong>Phone:</strong> 1-800-000-111<br /><strong>Email:</strong> <a href="https://matchthemes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="187b77766c797b6c587d60797568747d367b7775">[email&#160;protected]</a></p><p><strong>Mon – Fri:</strong> 09:00 -17:00</p></div>
					</li>
					</ul>
				</aside>
					</div>
				</div>
				
				
			</div>
				
		</section>
		
		
		
		<section className="section-holder">
			<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2 alignc">
					<span className="heading-subtitle">Contact Us</span>
					<h2 className="section-heading-title">Get in Touch</h2>
				</div>
			</div>
			
			<div className="row">
			<div className="col-lg-4 alignc">
				<div className="icon-box-icon margin-none"><i className="fas fa-map-marker-alt"></i></div>
				<div className="icon-box-title">OFFICE</div>
				<p className="icon-box-description">40 Park Ave, Brooklyn, New York</p>
			</div>
			<div className="col-lg-4 alignc">
				<div className="icon-box-icon margin-none"><i className="fas fa-phone-alt"></i></div>
				<div className="icon-box-title">PHONE</div>
				<p className="icon-box-description">1-800-000-111</p>
			</div>
			<div className="col-lg-4 alignc">
				<div className="icon-box-icon margin-none"><i className="far fa-envelope"></i></div>
				<div className="icon-box-title">EMAIL</div>
				<p className="icon-box-description"><a href="https://matchthemes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="573438392336342317322f363a273b327934383a">[email&#160;protected]</a></p>
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
