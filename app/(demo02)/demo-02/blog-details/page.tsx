"use client";
import Link from "next/link";
import LawgneHeader from "@/components/demo02/LawgneHeader";
import LawgneFooter from "@/components/demo02/LawgneFooter";
import PageBanner from "@/components/demo02/PageBanner";

const BASE = "/demo-02";

export default function BlogDetailsPage() {
  return (
    <>
      <div className="preloader"><div className="loader"><img src={`${BASE}/assets/images/loader.png`} alt="loader" /></div></div>
      <LawgneHeader activeMenu="blog" />
      <PageBanner title="Blog details" breadcrumbs={[{ label: "Home", href: `${BASE}` }, { label: "Blog details" }]} />

      <div className="blog-area pt-130 pb-80">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="blog-details-container mb-50">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <img src={`${BASE}/assets/images/blog/blog-grid-1.jpg`} alt="blog" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta top-meta">
                      <ul>
                        <li><img src={`${BASE}/assets/images/blog/user-1.jpg`} alt="author" style={{ width: "30px", height: "30px", borderRadius: "50%" }} /> <span>Derek L. Coronado</span></li>
                        <li><span><i className="fal fa-calendar-alt"></i><a href="#">25 Jan 2021</a></span></li>
                        <li><span><i className="fal fa-comments"></i><a href="#">Com (05)</a></span></li>
                        <li><span><i className="fal fa-link"></i><a href="#">(03)</a></span></li>
                      </ul>
                    </div>
                    <h3 className="title">Perspective Using Story Structure To Stand Wast Your User&apos;s Shoes Growth.</h3>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</p>
                    <blockquote>
                      <h4>Smashing Podcast Episode Pauloag Conversion Optimization Inspired Design Decisions</h4>
                      <h5>Bailey Dobson</h5>
                    </blockquote>
                    <p>These cases are perfectly simple and easy to distinguish. In a free hour when our power of choice untrammelled, and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</p>

                    {/* Share & Tags */}
                    <div className="post-share-tag">
                      <div className="row align-items-center">
                        <div className="col-lg-8">
                          <div className="post-tags">
                            <span>Popular Tags:</span>
                            {["lawyer", "Cosmetics", "Beauty"].map((tag, i) => (
                              <a key={i} href="#">{tag}</a>
                            ))}
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="post-share text-lg-right">
                            <span>Share :</span>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-behance"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Author Box */}
                <div className="post-author-box mt-60 d-flex align-items-center">
                  <div className="author-thumb">
                    <img src={`${BASE}/assets/images/blog/user-1.jpg`} alt="author" style={{ width: "90px", height: "90px", borderRadius: "50%" }} />
                  </div>
                  <div className="author-content pl-20">
                    <h4>Nathan George</h4>
                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate esse quam molestiae consequatu voluptas nulla pariatur</p>
                    <div className="author-social">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-behance"></i></a>
                      <a href="#"><i className="fab fa-dribbble"></i></a>
                    </div>
                  </div>
                </div>

                {/* Post Navigation */}
                <div className="post-nav-area">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="post-nav prev-post d-flex align-items-center">
                        <div className="nav-thumb">
                          <img src={`${BASE}/assets/images/blog/blog-grid-1.jpg`} alt="prev" style={{ width: "80px" }} />
                        </div>
                        <div className="nav-content pl-15">
                          <h6><Link href={`${BASE}/blog-details`}>Seamless Spreadshet Import Experie</Link></h6>
                          <span><i className="far fa-calendar-alt"></i> 25 May 2021</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="post-nav next-post text-md-right d-flex align-items-center justify-content-end">
                        <div className="nav-content pr-15">
                          <h6><Link href={`${BASE}/blog-details`}>Online Environme Work Older See</Link></h6>
                          <span><i className="far fa-calendar-alt"></i> 25 May 2021</span>
                        </div>
                        <div className="nav-thumb">
                          <img src={`${BASE}/assets/images/blog/blog-grid-2.jpg`} alt="next" style={{ width: "80px" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comments */}
                <div className="comments-area">
                  <h4>People Comments</h4>
                  {[
                    { img: "user-1.jpg", name: "John F. Medina", date: "25 May, 2021" },
                    { img: "user-2.jpg", name: "Jeffrey T. Kelly", date: "25 May, 2021" },
                    { img: "user-3.jpg", name: "Richard B. Zellmer", date: "25 May, 2021" },
                  ].map((comment, i) => (
                    <div key={i} className="comment-item d-flex align-items-start mt-30">
                      <div className="comment-avatar">
                        <img src={`${BASE}/assets/images/blog/${comment.img}`} alt="" style={{ width: "60px", height: "60px", borderRadius: "50%" }} />
                      </div>
                      <div className="comment-content pl-20">
                        <div className="comment-header d-flex justify-content-between align-items-center">
                          <h5>{comment.name}</h5>
                          <span>{comment.date}</span>
                          <a href="#" className="reply-btn">Reply</a>
                        </div>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium totam rem aperiam</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comment Form */}
                <div className="comments-respond">
                  <h4>Leave A Message</h4>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form_group mb-20">
                          <input type="text" className="form_control" placeholder="Full Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form_group mb-20">
                          <input type="tel" className="form_control" placeholder="Phone Number" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form_group mb-20">
                          <input type="email" className="form_control" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form_group mb-20">
                          <select className="form_control">
                            <option>Select</option>
                            <option>Customer Support</option>
                            <option>Support Ticket</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form_group mb-20">
                          <textarea className="form_control" placeholder="Write Message" rows={5}></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button className="main-btn arrow-btn">post comment</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar - Same as blog-standard */}
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget search-widget mb-50">
                  <h4 className="widget-title">Search Here</h4>
                  <form>
                    <div className="form_group">
                      <input type="email" className="form_control" placeholder="Keywords" />
                      <button className="search-btn"><i className="fa fa-search"></i></button>
                    </div>
                  </form>
                </div>
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
                <div className="widget banner-widget bg_cover mb-50" style={{ backgroundImage: `url(${BASE}/assets/images/widget/banner-1.jpg)` }}>
                  <div className="banner-content text-center">
                    <span>Get a Quote</span>
                    <h3>Ready to Get Free Consultation For Cases</h3>
                    <Link href={`${BASE}/contact`} className="main-btn">Get a quote</Link>
                  </div>
                </div>
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
      </div>

      <LawgneFooter />
      <a href="#" className="back-to-top"><i className="fas fa-angle-up"></i></a>
    </>
  );
}
