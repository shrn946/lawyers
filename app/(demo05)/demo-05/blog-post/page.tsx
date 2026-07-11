"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LawmasterHeader } from "@/components/demo05/LawmasterHeader";
import { LawmasterFooter } from "@/components/demo05/LawmasterFooter";
import { LawmasterPageBanner } from "@/components/demo05/LawmasterPageBanner";

export default function LawmasterBlogPostPage() {
  const [commentForm, setCommentForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentForm.name && commentForm.email && commentForm.message) {
      setSubmitted(true);
      setCommentForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

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
            { label: "Blog", url: "/demo-05/blog" },
            { label: "Blog Post" },
          ]}
        />

        {/* Page Content */}
        <div className="container-fluid no-padding page-content blog-page-content">
          <div className="section-padding"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-8 col-xs-12 singleblog-block">
                <article className="type-post single-blog blog-onecolumn format-image">
                  <div className="gridinner container-fluid no-padding">
                    <div className="entry-cover">
                      <img src="/demo-05/images/blog-feature.jpg" alt="blog-feature" className="img-responsive" />
                    </div>
                    <div className="entry-content">
                      <div className="entry-header">
                        <div className="post-date">
                          <p>
                            Sep<span>15</span>
                          </p>
                        </div>
                        <div className="entry-title">
                          <h3>
                            <a href="#" onClick={(e) => e.preventDefault()} title="The movie star the professor and Mary Ann">
                              The movie star the professor and Mary Ann
                            </a>
                          </h3>
                        </div>
                        <div className="entry-meta">
                          <div className="byline">
                            <a href="#" onClick={(e) => e.preventDefault()}>By Admin</a>
                          </div>
                          <div className="like">
                            <a href="#" onClick={(e) => e.preventDefault()}>15 like</a>
                          </div>
                          <div className="comment">
                            <a href="#" onClick={(e) => e.preventDefault()}>4 Comments</a>
                          </div>
                        </div>
                      </div>
                      <p>Took a whole lotta trying just to get up that hill. Here's the story of a lovely lady who was bringing up three very lovely girls We're gonna do it. On your mark get set and go now. Got a dream and we just know now we're gonna make our dream come true. I have always wanted to have a neighbor just like you. Love exciting and new. Come aboard were expecting you. Love life's sweetest reward Let it flow it floats back to you.</p>
                      <p>Flying away on a wing and a prayer. Who could it be. Believe it or not its just me. Makin' your way in the world today takes everything you've got. Taking a break from all your worries sure would help a lot! We're gonna do it. On your mark get set and go now. Got a dream and we just know now we are gonna make our dream come true.</p>
                      <blockquote>
                        <p>Explore strange new worlds to seek out new life and new civilizations to boldly go where no man</p>
                      </blockquote>
                      <p>Got a dream and we just know now we're gonna make our dream come true. I have always wanted to have a neighbor just like you. Love exciting and new. Come aboard were expecting you. Love life's sweetest reward Let it flow it floats back to you.Flying away on a wing and a prayer. Who could it be. Believe it or not its just me.</p>
                      <p>
                        <img src="/demo-05/images/blog-content.jpg" className="align-right" alt="blog-content" />
                        I have always wanted to have a neighbor just like you. Love exciting and new. Come aboard were expecting you. Love life's sweetest reward Let it flow it floats back to you. Took a whole lotta trying just to get up that hill. Here's the story of a lovely lady who was bringing up three very lovely girls We're gonna do it. On your mark get set and go now. Got a dream and we just know now we're gonna make. This time there's no stopping us. Thank you for being a friend down the road and back again. Your heart is true you're a pal and a confidant wondered whatever became.
                      </p>
                      <p>Come aboard were expecting you. Love life's sweetest reward Let it flow it floats back to you.Flying away on a wing and a prayer. Who could it be. Believe it or not its just me. Got a dream and we just know now we're gonna make our dream come true. I have always wanted to have a neighbor just like you. Love exciting and new.</p>
                    </div>
                  </div>
                </article>

                <div className="social-share">
                  <h3>Share</h3>
                  <ul>
                    <li>
                      <a href="#" title="Facebook">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Twitter">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Google+">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Tumblr">
                        <i className="fa fa-tumblr"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="tags pull-right">
                    <a href="#" title="Seaway">Lawyer,</a>
                    <a href="#" title="Roadway">Court,</a>
                    <a href="#" title="Cargo">Legal</a>
                  </div>
                </div>

                <div className="about-author">
                  <div className="author-intro">
                    <img src="/demo-05/images/blog-author1.jpg" alt="blog-author1" />
                    <p>On your mark get set and go now. Got a dream and we just know now we're gonna make our dream come true. No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as can be. Well we're movin' on up to the east side. To a deluxe apartment in the sky.</p>
                    <a href="#" onClick={(e) => e.preventDefault()}>John Smith</a>
                    <ul className="pull-right">
                      <li>
                        <a href="#" title="Facebook">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Twitter">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Google+">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Tumblr">
                          <i className="fa fa-tumblr"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Post Comment */}
                <div className="post-comment">
                  <h3>Comments (3)</h3>
                  <div className="media">
                    <div className="media-left">
                      <a href="#" title="Media img" onClick={(e) => e.preventDefault()}>
                        <img className="media-object" src="/demo-05/images/blog-comment1.jpg" alt="single-blog-5" />
                      </a>
                    </div>
                    <div className="media-body">
                      <div className="media-content">
                        <h4 className="media-heading">
                          William alfred<span>Aug 07, 2015 at 11:00 pm</span>
                        </h4>
                        <p>Thank you for being a friend. Travelled down the road and back again. Your heart is true you're a pal and a confidant. Here's the story of a lovely lady who was bringing up three very lovely girls. They were four men living all together yet they were all alone.</p>
                        <a className="btn btn-default reply-btn" href="#" role="button" onClick={(e) => e.preventDefault()}>
                          Reply
                        </a>
                      </div>
                      <div className="media media-even">
                        <div className="media-left">
                          <a href="#" title="Media img" onClick={(e) => e.preventDefault()}>
                            <img className="media-object" src="/demo-05/images/blog-comment2.jpg" alt="blog-comment2.jpg" />
                          </a>
                        </div>
                        <div className="media-body">
                          <div className="media-content">
                            <h4 className="media-heading">
                              Kennedy<span>Aug 07, 2015 at 11:00 pm</span>
                            </h4>
                            <p>Those were the days. Doin' it our way. Nothin's gonna turn us back now. Straight ahead and on the track now. We're gonna make our dreams come true. Goodbye gray sky hello blue.</p>
                            <a className="btn btn-default reply-btn" href="#" role="button" onClick={(e) => e.preventDefault()}>
                              Reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <a href="#" title="Media img" onClick={(e) => e.preventDefault()}>
                        <img className="media-object" src="/demo-05/images/blog-comment3.jpg" alt="blog-comment3.jpg" />
                      </a>
                    </div>
                    <div className="media-body">
                      <div className="media-content">
                        <h4 className="media-heading">
                          David<span>Aug 07, 2015 at 11:00 pm</span>
                        </h4>
                        <p>Flipper lives in a world full of wonder flying there-under under the sea. That this group would somehow form a family that's the way we all became the Brady Bunch. Now were up in the big leagues getting our turn at bat. Making your way in the world today.</p>
                        <a className="btn btn-default reply-btn" href="#" role="button" onClick={(e) => e.preventDefault()}>
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Post Comment /- */}

                <div className="comment-form">
                  <h3>Post A Comment</h3>
                  <form className="row" onSubmit={handleSubmitComment}>
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={commentForm.name}
                        onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        value={commentForm.email}
                        onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        className="form-control"
                        rows={10}
                        placeholder="Write Message"
                        value={commentForm.message}
                        onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
                        required
                      ></textarea>
                    </div>
                    <div className="col-md-12">
                      <input type="submit" title="Post comment" name="submit" value="Post comment" />
                    </div>
                  </form>
                  {submitted && (
                    <p style={{ color: "#d9ab22", marginTop: "15px" }}>Comment submitted successfully and is awaiting moderation!</p>
                  )}
                </div>
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
