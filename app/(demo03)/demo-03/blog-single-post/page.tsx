"use client";

import Link from "next/link";
import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

const BASE = "/demo-03";

export default function BlogSinglePostPage() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="Blog Single Post" subtitle="in business since 1970" />

      
		<div className="page-holder custom-page-template page-full fullscreen-page clearfix">
		
		<section className="blog-single">
			<div className="container">
				<div className="row">
					<div className="col-lg-9 posts-holder post-sidebar ">
						<article className="single-article-container">
							<div className="post-image"> <img src="/demo-03/assets/images/blog/blog-1.jpg" className="img-fluid" alt="" style={{ maxWidth: '100%' }} /></div>
							<ul className="blog-date">
								<li className="meta-author"><i className="fa fa-user"></i> Sarah Barrett</li>
								<li className="meta-date">October 10, 2019</li>
								<li className="meta-categ"><a href="#" rel="category tag">Car Accidents</a> <a href="#" rel="category tag">News</a></li>
							</ul>
							<h2 className="blog-title">Thinking Out Of The Box After A Simple Car Accident</h2>
							<div className="post-content single-post-content single-article-page clearfix">
								<p> Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus eget 
									consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum 
									sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, 
									blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet 
									arcu aliquet luctus. Maecenas vehicula metus nisi, nec finibus justo 
									vulputate eget. Pellentesque porta felis id erat sodales condimentum. 
									Nam a lectus egestas, fermentum mi in, auctor lacus.
								</p>
								<p> Vestibulum eleifend gravida neque a bibendum. Vivamus viverra velit non 
									cursus elementum. Donec sit amet posuere ipsum. Mauris rutrum sagittis 
									sapien <a href="#">text link</a>.
									In vitae ipsum eleifend, auctor turpis in, vestibulum dui. Ut 
									vestibulum, lorem id eleifend mollis, urna augue imperdiet ante, vitae 
									aliquam turpis mauris eget nisi. Sed vel purus id velit molestie.
								</p>
								<h2>Heading Title</h2>
								<p> Pulvinar sit amet eget ante. Suspendisse eget augue eu elit mattis   ultrices eu ut lacus. Ut et metus sit amet erat tristique tincidunt sed   vel nibh. Sed quis lacus ut nisi ultrices faucibus.    Vivamus auctor  condimentum sem et gravida. Maecenas id enim pharetra,   sollicitudin  dui eget, blandit lorem. Nunc vitae blandit lectus. Donec   lacinia  magna sit amet arcu aliquet luctus.</p>
								<blockquote className="wp-block-quote">
									<p> The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.  Keep your eyes on the stars and your feet on the ground.</p>
									<cite> Marcel Proust </cite>
								</blockquote>
								<p> Lacus ut nisi ultrices faucibus. Pellentesque porta felis id <a href="#">erat sodales</a> condimentum. Nam a lectus egestas, fermentum mi in, auctor lacus. Fusce
									a enim vel neque.   Morbi facilisis justo sit amet urna feugiat 
									aliquam. Nullam faucibus   sodales mi. Vivamus nisl lorem, vulputate id 
									pellentesque non, tristique   ac leo. Quisque a convallis tortor, eu 
									facilisis erat. Proin tincidunt   aliquet mauris, in vestibulum arcu 
									bibendum ullamcorper.   Fusce commodo odio et leo tristique, in cursus 
									ipsum cursus. Etiam   nulla neque, volutpat vel enim in, mattis pulvinar
									mi. Nam ac est nec   tellus maximus gravida. Etiam ultricies sapien eu 
									sapien aliquet congue.   Sed porttitor tellus nec viverra egestas. Cras 
									vitae nisi non mauris   ultrices fermentum.
								</p>
							</div>
							
							<div className="tags-single-page"> <a href="#" rel="tag">accident</a> <a href="#" rel="tag">attorney</a> <a href="#" rel="tag">justice</a> <a href="#" rel="tag">lawyer</a> <a href="#" rel="tag">tax</a></div>
							<div className="author-single-page">
								<div className="author-avatar"> <img alt="" src="/demo-03/assets/images/gravatar.png" className="avatar photo" width="100" height="100" style={{ maxWidth: '100%' }} /></div>
								<div className="author-content">
									<h3><a href="#"> Sarah Barrett</a></h3>
									<div className="author-text"> Lorem ipsum dolor sit amet, usu et dissentias reformidans, dicta feugait et qui. Ad augue dignissim mel, sea eu pericula efficiendi, convenire laboramus mel ei. Pri assentior appellantur at, cum ne adhuc cetero rationibus, an augue euismod nec. Tota partem id eum, ut qui sint mandamus.</div>
								</div>
							</div>
						</article>
					</div>
					
					<div className="col-lg-3">
						<aside>
							<ul>
								<li className="widget">
									<h5 className="widgettitle">About Us</h5>
									<div className="textwidget">
										<p><img className="img-fluid" src="/demo-03/assets/images/home/about-feature3.jpg" alt="" style={{ maxWidth: '100%' }} /></p>
										<p>Hi, we’re Lawyers and we’re here to help with any legal issue. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
									</div>
								</li>
								<li className="widget">
									<form method="get" id="search-form" action="#"> <span><input type="text" name="s" id="search-string" placeholder="type and hit enter" /></span></form>
								</li>
								<li className="widget widget_recent_entries">
									<h5 className="widgettitle">Recent Posts</h5>
									<ul>
										<li> <a href="#">Thinking Out Of The Box After A Simple Car Accident</a></li>
										<li> <a href="#">Understanding Domestic Violence Defense</a></li>
										<li> <a href="#">How to Make a Claim Against an Airline</a></li>
										<li> <a href="#">Internship for Law Students</a></li>
										<li> <a href="#">Last Will and Testament</a></li>
									</ul>
								</li>
								<li className="widget widget_recent_entries">
									<h5 className="widgettitle">Categories</h5>
									<ul>
										<li className="cat-item"><a href="#">Business Law</a></li>
										<li className="cat-item"><a href="#">Car Accidents</a></li>
										<li className="cat-item"><a href="#">Divorce</a></li>
										<li className="cat-item"><a href="#">News</a></li>
									</ul>
								</li>
								<li className="widget">
									<h5 className="widgettitle">Tags</h5>
									<div className="tagcloud"><a href="#">accident</a> <a href="#">airplaine</a> <a href="#">attorney</a> <a href="#">business</a><a href="#">divorce</a><a href="#">family</a><a href="#">finance</a><a href="#">justice</a><a href="#">law</a><a href="#">legal</a><a href="#">rights</a><a href="#">tax</a><a href="#">testament</a></div>
								</li>
							</ul>
						</aside>
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
