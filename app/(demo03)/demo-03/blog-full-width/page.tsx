"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

const BASE = "/demo-03";

export default function BlogFullWidthPage() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="Blog Full Width" subtitle="in business since 1970" />

      
		<div className="page-holder custom-page-template page-full fullscreen-page clearfix">
		
		<section className="blog-1col-list-left">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 posts-fullwidth">
						<section id="wrap-content" className="blog-1col layout-1col-fw">
						<article className="blog-item blog-item-1col">
							<a href="/demo-03/blog-single-post">
								<div className="post-image"> <img src="/demo-03/assets/images/blog/blog-1.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
							</a>
							<div className="post-holder post-holder-all">
								<ul className="blog-date">
									<li className="meta-author"><i className="fa fa-user"></i> Sarah Barrett</li>
									<li className="meta-date">October 10, 2019</li>
									<li className="meta-categ"><a href="#" rel="category tag">Car Accidents</a> <a href="#" rel="category tag">News</a></li>
								</ul>
								<h2 className="blog-title"><a href="/demo-03/blog-single-post">Thinking Out Of The Box After A Simple Car Accident</a></h2>
								<div className="article-excerpt">
									<p>Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet arcu…</p>
								</div>
								<div className="blog-button"><a href="/demo-03/blog-single-post">Continue Reading</a></div>
							</div>
						</article>
						<article className="blog-item blog-item-1col">
							<a href="/demo-03/blog-single-post">
								<div className="post-image"> <img src="/demo-03/assets/images/blog/blog-2.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
							</a>
							<div className="post-holder post-holder-all">
								<ul className="blog-date">
									<li className="meta-author"><i className="fa fa-user"></i> Sarah Barrett</li>
									<li className="meta-date">October 9, 2019</li>
									<li className="meta-categ"><a href="#" rel="category tag">Divorce</a> <a href="#" rel="category tag">News</a></li>
								</ul>
								<h2 className="blog-title"><a href="/demo-03/blog-single-post">Understanding Domestic Violence Defense</a></h2>
								<div className="article-excerpt">
									<p>Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet arcu…</p>
								</div>
								<div className="blog-button"><a href="/demo-03/blog-single-post">Continue Reading</a></div>
							</div>
						</article>
						<article className="blog-item blog-item-1col">
							<a href="/demo-03/blog-single-post">
								<div className="post-image"> <img src="/demo-03/assets/images/blog/blog-9.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
							</a>
							<div className="post-holder post-holder-all">
								<ul className="blog-date">
									<li className="meta-author"><i className="fa fa-user"></i> Sarah Barrett</li>
									<li className="meta-date">October 8, 2019</li>
									<li className="meta-categ"> <a href="#" rel="category tag">News</a></li>
								</ul>
								<h2 className="blog-title"><a href="/demo-03/blog-single-post">How to Make a Claim Against an Airline</a></h2>
								<div className="article-excerpt">
									<p>Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet arcu…</p>
								</div>
								<div className="blog-button"><a href="/demo-03/blog-single-post">Continue Reading</a></div>
							</div>
						</article>
						<div className="prev-next"><span className="nav-page"></span><span className="page-numbers current-page">1</span> <a className="page-numbers" href="#">2</a> <a className="page-numbers" href="#">3</a> <span className="nav-page"><a href="#">&gt;</a></span></div>
						
						</section>
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
