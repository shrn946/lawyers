"use client";

import Link from "next/link";
import React from "react";
import { LawmasterHeader } from "@/components/demo05/LawmasterHeader";
import { LawmasterFooter } from "@/components/demo05/LawmasterFooter";
import { LawmasterPageBanner } from "@/components/demo05/LawmasterPageBanner";

export default function LawmasterBlogPage() {
  const blogs = [
    {
      id: 1,
      title: "The movie star the professor and Mary Ann here on Gilligans",
      date: "Sep",
      day: "15",
      image: "/demo-05/images/blog-1-column1.jpg",
      excerpt: "Took a whole lotta trying just to get up that hill. Here's the story of a lovely lady who was bringing up three very lovely girls We're gonna do it. On your mark get set and go now. Got a dream and we just know now we're gonna make our dream come true. I have always wanted to have a neighbor just like you.",
    },
    {
      id: 2,
      title: "You would see the biggest gift would be from attached me",
      date: "Oct",
      day: "03",
      image: "/demo-05/images/blog-1-column2.jpg",
      excerpt: "Make all our dreams come true for me and you. These Happy Days are yours and mine Happy Days. Michael Knight a young loner on a cru sade to champion the cause of the innocent. The helpless. The power less in a world of criminals who operate above the law. The Love Boat soon will be making another run.",
    },
    {
      id: 3,
      title: "If you have a problem if no one else can help and if you can help",
      date: "Nov",
      day: "15",
      image: "/demo-05/images/blog-1-column3.jpg",
      excerpt: "Californ'y is the place you ought to be So they loaded up the truck and moved to Beverly. Hills that is. Swimming pools movie stars. Love exciting and new. Come aboard were expecting you. Love life is sweetest reward Let it flow it floats back to you. Come and dance on our floor. Take a step that is new.",
    },
    {
      id: 4,
      title: "Skipper too will do their very best to make others comfortable",
      date: "Dec",
      day: "15",
      image: "/demo-05/images/blog-1-column4.jpg",
      excerpt: "Took a whole lotta trying just to get up that hill. Here's the story of a lovely lady who was bringing up three very lovely girls We're gonna do it. On your mark get set and go now. Got a dream and we just know now we're gonna make our dream come true. I have always wanted to have a neighbor just like you.",
    },
  ];

  return (
    <>
      {/* Site Loader */}
      <div id="site-loader" className="load-complete">
        <div className="loader-inner ball-clip-rotate">
          <div></div>
        </div>
      </div>

      <div className="main-container">
        <LawmasterHeader />

        <LawmasterPageBanner
          title="Blog Updates"
          description="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question."
          bannerClass="blog-banner"
          breadcrumbs={[
            { label: "home", url: "/demo-05" },
            { label: "Blog" },
          ]}
        />

        {/* Page Content */}
        <div className="container-fluid no-padding page-content blog-page-content">
          <div className="section-padding"></div>
          <div className="container">
            {/* Blog Area */}
            <div className="row">
              <div className="col-md-8 col-sm-8 col-xs-12">
                <div className="blog-block">
                  {blogs.map((blog) => (
                    <article key={blog.id} className="type-post blog-onecolumn format-image">
                      <div className="gridinner container-fluid no-padding">
                        <div className="col-md-5 col-sm-12 col-xs-12 no-padding">
                          <div className="entry-cover">
                            <Link href="/demo-05/blog-post">
                              <img src={blog.image} alt={blog.title} className="img-responsive" />
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-7 col-sm-12 col-xs-12 blog-content no-padding">
                          <div className="post-date">
                            <p>
                              {blog.date}
                              <span>{blog.day}</span>
                            </p>
                          </div>
                          <div className="entry-title">
                            <h3>
                              <Link href="/demo-05/blog-post" title={blog.title}>
                                {blog.title}
                              </Link>
                            </h3>
                          </div>
                          <div className="entry-content">
                            <p>{blog.excerpt}</p>
                          </div>
                          <Link href="/demo-05/blog-post" className="entry-footer">
                            Read More<i className="fa fa-angle-right"></i>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <nav className="blog-pagination">
                  <ul className="pagination">
                    <li className="active">
                      <a href="#" onClick={(e) => e.preventDefault()}>1</a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>2</a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>3</a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>...</a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>Next</a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Widget Area */}
              <div className="widget-area col-md-4 col-sm-4 col-xs-12">
                <aside className="widget widget-search">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </aside>

                <aside className="widget widget-catagories">
                  <div className="widget-title">
                    <h3>Categories</h3>
                  </div>
                  <ul>
                    <li>
                      <span>09</span>
                      <a href="#" title="Criminal Law" onClick={(e) => e.preventDefault()}>Criminal Law</a>
                    </li>
                    <li>
                      <span>10</span>
                      <a href="#" title="Civil Law" onClick={(e) => e.preventDefault()}>Civil Law</a>
                    </li>
                    <li>
                      <span>07</span>
                      <a href="#" title="Industrial Law" onClick={(e) => e.preventDefault()}>Industrial Law</a>
                    </li>
                    <li>
                      <span>11</span>
                      <a href="#" title="Counseling" onClick={(e) => e.preventDefault()}>Counseling</a>
                    </li>
                    <li>
                      <span>03</span>
                      <a href="#" title="Guidance" onClick={(e) => e.preventDefault()}>Guidance</a>
                    </li>
                    <li>
                      <span>07</span>
                      <a href="#" title="Bar Council" onClick={(e) => e.preventDefault()}>Bar Council</a>
                    </li>
                  </ul>
                </aside>

                <aside className="widget widget-posts">
                  <div className="widget-title">
                    <h3>Recent Posts</h3>
                  </div>
                  <div className="recent-content">
                    <Link href="/demo-05/blog-post">
                      <img src="/demo-05/images/recentpost1.jpg" alt="recentpost1" />
                    </Link>
                    <h3>
                      <Link href="/demo-05/blog-post">On my way to where the air is sweet</Link>
                    </h3>
                    <span>
                      <a href="#" onClick={(e) => e.preventDefault()}>29 May 2015</a>
                    </span>
                  </div>
                  <div className="recent-content">
                    <Link href="/demo-05/blog-post">
                      <img src="/demo-05/images/recentpost2.jpg" alt="recentpost2" />
                    </Link>
                    <h3>
                      <Link href="/demo-05/blog-post">Beats all you've ever saw been in trouble</Link>
                    </h3>
                    <span>
                      <a href="#" onClick={(e) => e.preventDefault()}>29 May 2015</a>
                    </span>
                  </div>
                  <div className="recent-content">
                    <Link href="/demo-05/blog-post">
                      <img src="/demo-05/images/recentpost3.jpg" alt="recentpost3" />
                    </Link>
                    <h3>
                      <Link href="/demo-05/blog-post">Now the world don't to just one drum</Link>
                    </h3>
                    <span>
                      <a href="#" onClick={(e) => e.preventDefault()}>29 May 2015</a>
                    </span>
                  </div>
                </aside>

                <aside className="widget widget-catagories">
                  <div className="widget-title">
                    <h3>Archives</h3>
                  </div>
                  <ul>
                    <li>
                      <span>10</span>
                      <a href="#" title="June 2015" onClick={(e) => e.preventDefault()}>June 2015</a>
                    </li>
                    <li>
                      <span>11</span>
                      <a href="#" title="May 2015" onClick={(e) => e.preventDefault()}>May 2015</a>
                    </li>
                    <li>
                      <span>08</span>
                      <a href="#" title="April 2015" onClick={(e) => e.preventDefault()}>April 2015</a>
                    </li>
                    <li>
                      <span>10</span>
                      <a href="#" title="March 2015" onClick={(e) => e.preventDefault()}>March 2015</a>
                    </li>
                    <li>
                      <span>14</span>
                      <a href="#" title="February" onClick={(e) => e.preventDefault()}>February</a>
                    </li>
                    <li>
                      <span>08</span>
                      <a href="#" title="january" onClick={(e) => e.preventDefault()}>January</a>
                    </li>
                  </ul>
                </aside>

                <aside className="widget widget-tag">
                  <div className="widget-title">
                    <h3>Popular Tags</h3>
                  </div>
                  <div className="tags">
                    <a href="#" title="Legal" onClick={(e) => e.preventDefault()}>Legal</a>
                    <a href="#" title="Attorney" onClick={(e) => e.preventDefault()}>Attorney</a>
                    <a href="#" title="Court" onClick={(e) => e.preventDefault()}>Court</a>
                    <a href="#" title="Law" onClick={(e) => e.preventDefault()}>Law</a>
                    <a href="#" title="Bar Council" onClick={(e) => e.preventDefault()}>Bar Council</a>
                    <a href="#" title="Justice" onClick={(e) => e.preventDefault()}>Justice</a>
                    <a href="#" title="Counseling" onClick={(e) => e.preventDefault()}>Counseling</a>
                    <a href="#" title="Advocates" onClick={(e) => e.preventDefault()}>Advocates</a>
                  </div>
                </aside>
              </div>
              {/* Widget-area /- */}
            </div>
          </div>
          <div className="section-padding"></div>
        </div>

        <LawmasterFooter />

        {/* Back To Top */}
        <a id="back-to-top" href="#" className="back-to-top" style={{ display: "none" }}>
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </>
  );
}
