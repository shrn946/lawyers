"use client";
import Link from "next/link";
import LawgneHeader from "@/components/demo02/LawgneHeader";
import LawgneFooter from "@/components/demo02/LawgneFooter";
import PageBanner from "@/components/demo02/PageBanner";

const BASE = "/demo-02";

export default function BlogStandardPage() {
  return (
    <>
      <div className="preloader"><div className="loader"><img src={`${BASE}/assets/images/loader.png`} alt="loader" /></div></div>
      <LawgneHeader activeMenu="blog" />
      <PageBanner title="Blog Standard" breadcrumbs={[{ label: "Home", href: `${BASE}` }, { label: "Blog Standard" }]} />

      <section className="blog-area pt-130 pb-90">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              {/* Post 1 - Standard */}
              <div className="blog-post-item blog-post-item-six mb-30">
                <div className="post-thumbnail">
                  <img src={`${BASE}/assets/images/blog/blog-grid-1.jpg`} alt="blog" />
                  <Link href={`${BASE}/blog-details`} className="icon-btn"><i className="far fa-arrow-right"></i></Link>
                </div>
                <div className="entry-content">
                  <div className="post-admin">
                    <img src={`${BASE}/assets/images/blog/user-3.jpg`} alt="author" />
                    <span>Derek L. Coronado</span>
                  </div>
                  <h3 className="title"><Link href={`${BASE}/blog-details`}>Perspective Using Story Structure To Stand Wast Your User&apos;s Shoes Growth.</Link></h3>
                  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms</p>
                  <div className="post-meta">
                    <ul>
                      <li><span><i className="fal fa-calendar-alt"></i><a href="#">25 Jan 2021</a></span></li>
                      <li><span><i className="fal fa-comments"></i><a href="#">Com (05)</a></span></li>
                      <li><span><i className="fal fa-link"></i><a href="#">(03)</a></span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Post 2 - Video */}
              <div className="blog-post-item blog-post-item-six mb-30">
                <div className="post-thumbnail">
                  <img src={`${BASE}/assets/images/blog/blog-grid-2.jpg`} alt="blog" />
                  <Link href={`${BASE}/blog-details`} className="icon-btn"><i className="far fa-arrow-right"></i></Link>
                  <div className="video-play">
                    <a href="https://www.youtube.com/watch?v=wbnaHgSttVo&t=5s" className="video-popup">
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <div className="post-admin">
                    <img src={`${BASE}/assets/images/blog/user-3.jpg`} alt="author" />
                    <span>Derek L. Coronado</span>
                  </div>
                  <h3 className="title"><Link href={`${BASE}/blog-details`}>Perspective Using Story Structure To Stand Wast Your User&apos;s Shoes Growth.</Link></h3>
                  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms</p>
                  <div className="post-meta">
                    <ul>
                      <li><span><i className="fal fa-calendar-alt"></i><a href="#">25 Jan 2021</a></span></li>
                      <li><span><i className="fal fa-comments"></i><a href="#">Com (05)</a></span></li>
                      <li><span><i className="fal fa-link"></i><a href="#">(03)</a></span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Post 3 - Background Image Post */}
              <div className="blog-post-item blog-post-item-six blog-post-bg mb-30">
                <div className="entry-content bg_cover" style={{ backgroundImage: `url(${BASE}/assets/images/blog/blog-grid-3.jpg)` }}>
                  <div className="post-admin">
                    <img src={`${BASE}/assets/images/blog/user-3.jpg`} alt="author" />
                    <span>Derek L. Coronado</span>
                  </div>
                  <h3 className="title"><Link href={`${BASE}/blog-details`}>Perspective Using Story Structure To Stand Wast Your User&apos;s Shoes Growth.</Link></h3>
                  <div className="post-meta">
                    <ul>
                      <li><span><i className="fal fa-calendar-alt"></i><a href="#">25 Jan 2021</a></span></li>
                      <li><span><i className="fal fa-comments"></i><a href="#">Com (05)</a></span></li>
                      <li><span><i className="fal fa-link"></i><a href="#">(03)</a></span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Post 4 - Text Only */}
              <div className="blog-post-item blog-post-item-six mb-30">
                <div className="entry-content text-post">
                  <h3 className="title"><Link href={`${BASE}/blog-details`}>Perspective Using Story Structure To Stand Wast Your User&apos;s Shoes Growth.</Link></h3>
                  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms</p>
                  <div className="post-meta">
                    <ul>
                      <li><span><i className="fal fa-calendar-alt"></i><a href="#">25 Jan 2021</a></span></li>
                      <li><span><i className="fal fa-comments"></i><a href="#">Com (05)</a></span></li>
                      <li><span><i className="fal fa-link"></i><a href="#">(03)</a></span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="lawgne-pagination mt-60 mb-40">
                <ul>
                  <li className="active"><a href="#">01</a></li>
                  <li><a href="#">02</a></li>
                  <li><a href="#">03</a></li>
                  <li><a href="#">04</a></li>
                  <li><a href="#"><i className="far fa-angle-right"></i></a></li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                {/* Search Widget */}
                <div className="widget search-widget mb-50">
                  <h4 className="widget-title">Search Here</h4>
                  <form>
                    <div className="form_group">
                      <input type="email" className="form_control" placeholder="Keywords" />
                      <button className="search-btn"><i className="fa fa-search"></i></button>
                    </div>
                  </form>
                </div>

                {/* Categories Widget */}
                <div className="widget categories-widget mb-45">
                  <h4 className="widget-title">Categories</h4>
                  <ul>
                    <li><a href="#">Lifestyle <span>(05)</span></a></li>
                    <li><a href="#">Travel <span>(34)</span></a></li>
                    <li><a href="#">Fashion <span>(89)</span></a></li>
                    <li><a href="#">Music <span>(96)</span></a></li>
                    <li><a href="#">Branding <span>(78)</span></a></li>
                  </ul>
                </div>

                {/* Recent Post Widget */}
                <div className="widget recent-post-widget mb-60">
                  <h4 className="widget-title">Latest News</h4>
                  <ul className="post-widget-list">
                    {[
                      { img: "thumb-4.jpg", title: "Build Seamless Spreadshet Import Experience", date: "25 May 2021" },
                      { img: "thumb-5.jpg", title: "Creating Online Environme Work Well Older", date: "25 May 2021" },
                      { img: "thumb-6.jpg", title: "Signs Website Feels More Haunted House", date: "25 May 2021" },
                    ].map((post, i) => (
                      <li key={i} className="post-thumbnail-content">
                        <img src={`${BASE}/assets/images/widget/${post.img}`} className="img-fluid" alt="" />
                        <div className="post-title-date">
                          <h6><Link href={`${BASE}/blog-details`}>{post.title}</Link></h6>
                          <span className="posted-on"><i className="far fa-calendar-alt"></i><a href="#">{post.date}</a></span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Banner Widget */}
                <div className="widget banner-widget bg_cover mb-50" style={{ backgroundImage: `url(${BASE}/assets/images/widget/banner-1.jpg)` }}>
                  <div className="banner-content text-center">
                    <span>Get a Quote</span>
                    <h3>Ready to Get Free Consultation For Cases</h3>
                    <Link href={`${BASE}/contact`} className="main-btn">Get a quote</Link>
                  </div>
                </div>

                {/* Tag Cloud Widget */}
                <div className="widget tag-cloud-widget mb-50">
                  <h4 className="widget-title">Popular Tags</h4>
                  <div className="tags">
                    {["Lawyer", "business", "attorney", "consultancy", "Law farms", "farms", "management", "planning"].map((tag, i) => (
                      <a key={i} href="#">{tag}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LawgneFooter />
      <a href="#" className="back-to-top"><i className="fas fa-angle-up"></i></a>
    </>
  );
}
