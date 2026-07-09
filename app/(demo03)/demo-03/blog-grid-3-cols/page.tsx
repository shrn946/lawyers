"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

const BASE = "/demo-03";

export default function BlogGrid3ColsPage() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="Blog Grid 3 Cols" subtitle="in business since 1970" />

      
		<div className="page-holder custom-page-template page-full fullscreen-page clearfix">
		
		<section className="blog-1col-list-left">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 posts-holder post-sidebar ">
						<div className="row layout-masonry">
							<div className="col-md-6 col-lg-4 blog-item-masonry">
								<article className="blog-item blog-item-2col-grid">
									<a href="/demo-03/blog-single-post">
										<div className="post-image"> <img src="/demo-03/assets/images/blog/blog-1.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
									</a>
									<div className="post-holder">
										<ul className="blog-date">
											<li className="meta-date">October 10, 2019</li>
											<li className="meta-categ"><a href="#" rel="category tag">Car Accidents</a> <a href="#" rel="category tag">News</a></li>
										</ul>
										<h2 className="blog-title"><a href="/demo-03/blog-single-post">Thinking Out Of The Box After A Simple Car Accident</a></h2>
										<div className="article-excerpt"> Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra...</div>
									</div>
								</article>
							</div>
							<div className="col-md-6 col-lg-4 blog-item-masonry">
								<article className="blog-item blog-item-2col-grid">
									<a href="/demo-03/blog-single-post">
										<div className="post-image"> <img src="/demo-03/assets/images/blog/blog-2.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
									</a>
									<div className="post-holder">
										<ul className="blog-date">
											<li className="meta-date">October 9, 2019</li>
											<li className="meta-categ"><a href="#" rel="category tag">Divorce</a> <a href="#" rel="category tag">News</a></li>
										</ul>
										<h2 className="blog-title"><a href="/demo-03/blog-single-post">Understanding Domestic Violence Defense</a></h2>
										<div className="article-excerpt"> Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra...</div>
									</div>
								</article>
							</div>
							<div className="col-md-6 col-lg-4 blog-item-masonry">
								<article className="blog-item blog-item-2col-grid">
									<a href="/demo-03/blog-single-post">
										<div className="post-image"> <img src="/demo-03/assets/images/blog/blog-9.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
									</a>
									<div className="post-holder">
										<ul className="blog-date">
											<li className="meta-date">October 8, 2019</li>
											<li className="meta-categ"> <a href="#" rel="category tag">News</a></li>
										</ul>
										<h2 className="blog-title"><a href="/demo-03/blog-single-post">How to Make a Claim Against an Airline</a></h2>
										<div className="article-excerpt"> Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra...</div>
									</div>
								</article>
							</div>
							<div className="col-md-6 col-lg-4 blog-item-masonry">
								<article className="blog-item blog-item-2col-grid">
									<a href="/demo-03/blog-single-post">
										<div className="post-image"> <img src="/demo-03/assets/images/blog/blog-7.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
									</a>
									<div className="post-holder">
										<ul className="blog-date">
											<li className="meta-date">October 7, 2019</li>
											<li className="meta-categ"> <a href="#" rel="category tag">Business</a><a href="#" rel="category tag">News</a></li>
										</ul>
										<h2 className="blog-title"><a href="/demo-03/blog-single-post">Internship for Law Students</a></h2>
										<div className="article-excerpt"> Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra...</div>
									</div>
								</article>
							</div>
							<div className="col-md-6 col-lg-4 blog-item-masonry">
								<article className="blog-item blog-item-2col-grid">
									<a href="/demo-03/blog-single-post">
										<div className="post-image"> <img src="/demo-03/assets/images/blog/blog-6.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
									</a>
									<div className="post-holder">
										<ul className="blog-date">
											<li className="meta-date">October 6, 2019</li>
											<li className="meta-categ"> <a href="#" rel="category tag">Divorce</a></li>
										</ul>
										<h2 className="blog-title"><a href="/demo-03/blog-single-post">Custody Battles and Divorce</a></h2>
										<div className="article-excerpt"> Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra...</div>
									</div>
								</article>
							</div>
							<div className="col-md-6 col-lg-4 blog-item-masonry">
								<article className="blog-item blog-item-2col-grid">
									<a href="/demo-03/blog-single-post">
										<div className="post-image"> <img src="/demo-03/assets/images/blog/blog-5.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
									</a>
									<div className="post-holder">
										<ul className="blog-date">
											<li className="meta-date">October 5, 2019</li>
											<li className="meta-categ"> <a href="#" rel="category tag">News</a></li>
										</ul>
										<h2 className="blog-title"><a href="/demo-03/blog-single-post">Last Will and Testament</a></h2>
										<div className="article-excerpt"> Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra...</div>
									</div>
								</article>
							</div>
						</div>
						
						<div className="prev-next"><span className="nav-page"></span><span className="page-numbers current-page">1</span> <a className="page-numbers" href="#">2</a> <a className="page-numbers" href="#">3</a> <span className="nav-page"><a href="#">&gt;</a></span></div>
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
