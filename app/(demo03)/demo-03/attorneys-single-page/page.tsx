"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

const BASE = "/demo-03";

export default function SingleAttorneyPage() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="Single Attorney" subtitle="in business since 1970" />

      
		<div className="page-holder custom-page-template page-full fullscreen-page clearfix">
		
		<section className="section-holder">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<img src="/demo-03/assets/images/team/team-4.jpg" className="img-fluid margin-b32" alt="" style={{ maxWidth: '100%' }} />
						<div className="pcolor margin-b16">Founder</div>
						<h5 className="widgettitle">Sarah Barrett</h5>
						<hr/>
						<p><em><a href="https://matchthemes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f794989983969483b7928f969a879b92d994989a">[email&#160;protected]</a></em><br /><em>1-800-000-111</em></p>
						<ul className="about-social">
							<li><a className="social-facebook" href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
							<li><a className="social-twitter" href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
							<li><a className="social-linkedin" href="#" target="_blank"><i className="fab fa-linkedin"></i></a></li>
						</ul>
						<hr/>
						<h5 className="widgettitle">Practice Areas</h5>
						<div className="sidebar widget_recent_entries">
							<ul>
								<li>Personal Injury</li>
								<li>Auto Incidents</li>
								<li>Family Law &amp; Divorces</li>
								<li>Business Law</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-8">
						<h3>Bio</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo sapien felis. Pellentes faucibus sollicitudin ante,at porta felisrutrum eget. Sed ut nisl urna,e get convallis purus pretium facilisis. Interdum et malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo sapien felis.</p>
						<p>Cras eu nibh non dui mattis pretium id vitae erat. Quisque justo nisi, malesuada eget lorem ac, posuere dictum justo. Vestibulum vitae scelerisque ante. Duis at mi vel odio ermentum accumsan at nec massa.</p>
						<h3>Education &amp; Bar Admission</h3>
						<p>Utinam maiestatis quo cu. Id libris patrioque eos, pro soluta dignissim splendide ei, vim in iudico facilis. Usu te liber repudiare. Mea option apeirian periculis et, ex vis graece intellegam, option omittam id quo.</p>
						<p>Ius doctus voluptua referrentur at. Eu iudico causae facilisi qui, his ex tale inciderint, his augue ocurreret eloquentiam an. Est ex augue vitae scriptorem. Ad quando invidunt assueverit his, enim consulatu est ne. Mel salutatus laboramus ad, vel te adhuc doctus. Te eripuit omittam eligendi vix, oratio facete torquatos vel ea, ex illud accusamus eam.</p>
						<blockquote>
							<p>The foundation of justice is good faith.</p>
						</blockquote>
						<h3>Awards &amp; Honors</h3>
						<p>Cras eu nibh non dui mattis pretium id vitae erat. Quisque justo nisi, malesuada eget lorem ac, posuere dictum justo.</p>
						<div className="sidebar widget_recent_entries">
							<ul>
								<li><em>2018 Top Ten Lawyers, California</em></li>
								<li><em>2017 New York Area’s Best Lawyers</em></li>
								<li><em>2017 Lawyer of the Year</em></li>
								<li><em>2016 Superlawyers</em></li>
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
