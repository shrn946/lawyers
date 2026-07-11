"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AlegadaHeader } from "@/components/demo06/AlegadaHeader";
import { AlegadaFooter } from "@/components/demo06/AlegadaFooter";
import { AlegadaPageBanner } from "@/components/demo06/AlegadaPageBanner";

export default function AlegadaPostDetailsPage() {
  const [commentForm, setCommentForm] = useState({ name: "", email: "", comment: "" });
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentForm.name && commentForm.email && commentForm.comment) {
      setCommentSubmitted(true);
      setCommentForm({ name: "", email: "", comment: "" });
      setTimeout(() => setCommentSubmitted(false), 5000);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <>
      <div id="page-preloader">
        <span className="spinner border-t_second_b border-t_prim_a"></span>
      </div>

      <AlegadaHeader />

      <AlegadaPageBanner title="News Details" subtitle="Licensed & Certified to Practice Law" />

      {/* Article Wrap */}
      <section className="article-wrap">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="article-item">
                <img src="/demo-06/assets/media/img/article-1.jpg" alt="article" className="img-fluid mb-20" />
                <div className="artical-blog">
                  <div className="d-flex justify-content-start space-50 mb-15">
                    <div className="author d-flex line-right-data mr-3">
                      By <span className="ml-1 font-weight-bold"> Admin </span> Sep 25
                    </div>
                    <div className="legal line-right-data mr-3">Legal Solutions</div>
                    <div className="comment">
                      <i className="far fa-comment mr-1"></i>36 Comments
                    </div>
                  </div>
                  <h4>Court seeks to help with documents</h4>
                  <p className="par">
                    Without gosh gazelle blankly smug broada the jaguar far jeepers wow the darn lokak that and then before froze ullac laboris nisi ut aliquip aute irure dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedo eiusmod tempor incididunt utm labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comd consequat. Duis aute irure dolor in reprehenderit in voluptate.
                    <br />
                    <br />
                    Ese cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt culpa qui officia deserut mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium totm rem aperiam, eaque ipsa quae ab illo inventore veritatiset quasi architecto beatae vitae dicta sunt explicab. Nemo enim ipsac voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
                  </p>
                  <div className="row mt-30 mb-30" style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                    <div className="col-md-6">
                      <img className="par-img img-fluid" src="/demo-06/assets/media/img/pr2.png" alt="success reasons" />
                    </div>
                    <div className="col-md-6">
                      <h4 className="par-head-h4 normal">Success Reasons</h4>
                      <p className="par-p">
                        Parrot and gosh withdrew less a darn overheard foolish ran forward some drink. Atm less more past.
                      </p>
                      <div className="par-list">
                        <ul className="list-left">
                          <li>Innovative Law Solutions with Legal Notices</li>
                          <li>Fair Business Climate &amp; Protection of Properties</li>
                          <li>Experienced Advisors &amp; Law Assessments</li>
                          <li>Smarter Global Service with Discounted Prices</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="par-p2">
                    Eos qui ratione voluptatem sequi nesciunt neque porro quisquam estaz, qui dolorem ipsum quia dolor sit amet dolore conset adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.
                  </p>
                  <div className="artical-blog article-select-quote mb-30">
                    <div className="quote d-flex justify-content-between">
                      <i className="fas fa-quote-left mr-3"></i>
                      <h4>
                        We’re committed to success &amp; genuine provider of legal Services exercitation ullamco laboris nisi ut aliquip dolor sed ipsum in reprehenderit velit.
                      </h4>
                    </div>
                    <div className="article-buttons d-flex justify-content-between align-items-center">
                      <div className="article-buttons-line">
                        <span>Matts Hazard</span>
                        <span className="new-line ml-1 text-muted">senior lawyer</span>
                      </div>
                    </div>
                    <div className="space-50"></div>
                  </div>
                  <p className="par-p2">
                    Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comd consequat. Duis aute irure dolor in reprehenderit in voluptate. Ese cillum dolore eu fugiat nulla pariatur excepteur sint occaec at cupidatat non proident, sunt culpa qui officia deserut mollit.
                  </p>
                  <div className="article-buttons d-flex justify-content-between align-items-center mb-40">
                    <div className="tag-wrap d-flex justify-content-start flex-wrap">
                      <span className="tag-button">Courts</span>
                      <span className="tag-button">Lawyers</span>
                      <span className="tag-button">Consultation</span>
                    </div>
                    <a href="#">
                      <i className="fas fa-share-alt"></i>
                    </a>
                  </div>
                  <div className="line-break normal-line-break"></div>
                </div>

                {/* Comments */}
                <h4 className="font-head">Comments</h4>
                <div className="line-red-2 normal-line"></div>
                <div className="comment-wrap d-flex mb-30">
                  <div className="comment-img">
                    <img src="/demo-06/assets/media/img/comment-men-1.jpg" alt="user1" />
                  </div>
                  <div className="comment-text">
                    <div className="comment-header d-flex justify-content-between">
                      <div className="comment-head">
                        <h4>Smith Clark</h4>
                        <h5>September 23, 2018 at 9:00am</h5>
                      </div>
                      <a href="#">
                        <i className="fas fa-reply"></i>Reply
                      </a>
                    </div>
                    <div className="comment-text-main">
                      <p>
                        Without gosh gazelle blankly smug broada the jaguar far jeepers wow the darn lokak that then before froze nisi ut aliquip aute irure dolor lorem ipsum dolor sit amet adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="line-break normal-line-break"></div>
                <div className="comment-wrap d-flex mb-40">
                  <div className="comment-img">
                    <img src="/demo-06/assets/media/img/comment-men-2.jpg" alt="user2" />
                  </div>
                  <div className="comment-text">
                    <div className="comment-header d-flex justify-content-between">
                      <div className="comment-head">
                        <h4>Nick Darren</h4>
                        <h5>September 23, 2018 at 9:00am</h5>
                      </div>
                      <a href="#">
                        <i className="fas fa-reply"></i>Reply
                      </a>
                    </div>
                    <div className="comment-text-main">
                      <p>
                        Without gosh gazelle blankly smug broada the jaguar far jeepers wow the darn lokak that then before froze nisi ut aliquip aute irure dolor lorem ipsum dolor sit amet adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Leave a Reply */}
                <div className="comment-form">
                  <h4 className="font-head space-70">Leave a Reply</h4>
                  <div className="line-red-2 normal-line"></div>
                  <div className="comment-form-inputs">
                    <form onSubmit={handleCommentSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            className="name w-100"
                            type="text"
                            placeholder="Your name"
                            value={commentForm.name}
                            onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            className="name w-100"
                            type="email"
                            placeholder="Email"
                            value={commentForm.email}
                            onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                            required
                          />
                        </div>
                        <div className="col-md-12">
                          <textarea
                            name="comment"
                            id="tacomment"
                            cols={90}
                            rows={7}
                            placeholder="Comment"
                            value={commentForm.comment}
                            onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
                            required
                          ></textarea>
                          <input className="comment-button" type="submit" value="Post Comment" />
                        </div>
                      </div>
                    </form>
                    {commentSubmitted && (
                      <p style={{ color: "#d12a2a", marginTop: "15px" }}>Comment submitted successfully! It will appear after moderation.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="blog-wrap-right">
                <div className="article-search d-flex">
                  <input type="text" placeholder="Search" id="search-text" />
                  <input type="submit" id="image-button" value="" />
                </div>
                <div className="blog-about">
                  <h4 class="font-head">About Alegada</h4>
                  <div className="line-red-2"></div>
                  <img src="/demo-06/assets/media/img/men-2.jpg" alt="about-men" className="img-fluid mb-15" />
                  <p>
                    One some ouch winke far playful that you showed yellow recipr locating pend at without gosh gazelle blankly for this esimoud sed ipsum.
                  </p>
                </div>
                <div className="blog-social">
                  <h4 class="font-head">We Are Social</h4>
                  <div className="line-red-2"></div>
                  <div className="footer-social">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div className="category blog-social">
                  <h4 class="font-head">Practice Areas</h4>
                  <div className="line-red-2"></div>
                  <ul>
                    <li>
                      <Link href="/demo-06/practice-single">Domestic Violence</Link>
                    </li>
                    <li>
                      <Link href="/demo-06/practice-single">Fraud Protection</Link>
                    </li>
                    <li>
                      <Link href="/demo-06/practice-single">Dispute Resolution</Link>
                    </li>
                    <li>
                      <Link href="/demo-06/practice-single">Executors &amp; Trustees</Link>
                    </li>
                    <li>
                      <Link href="/demo-06/practice-single">Insurance Matters</Link>
                    </li>
                    <li>
                      <Link href="/demo-06/practice-single">Drug Crimes &amp; Laws</Link>
                    </li>
                    <li>
                      <Link href="/demo-06/practice-single">Medical Negligence</Link>
                    </li>
                  </ul>
                </div>
                <div className="banner">
                  <h4>Wealth of knowledge &amp; experience</h4>
                  <Link href="/demo-06/contacts">Get a Consultation</Link>
                  <h5>Call us for support</h5>
                  <h3>1-780-624-9821</h3>
                </div>
                <div className="latest-posts space-60">
                  <h4 class="font-head">Latest Posts</h4>
                  <div className="line-red-2 normal-line"></div>
                  <div className="latest-posts-item d-flex mb-20">
                    <img src="/demo-06/assets/media/img/post1.jpg" alt="post1" style={{ marginRight: "10px" }} />
                    <div className="latest-post-text">
                      <h5>
                        <Link href="/demo-06/post">Lawyer shares for grant is to starting the practice</Link>
                      </h5>
                      <h6>
                        By <span>Admin</span> Sep 25, 2018
                      </h6>
                    </div>
                  </div>
                  <div className="latest-posts-item d-flex mb-20">
                    <img src="/demo-06/assets/media/img/post2.jpg" alt="post2" style={{ marginRight: "10px" }} />
                    <div className="latest-post-text">
                      <h5>
                        <Link href="/demo-06/post">Seeking to keep 125,000 docs from prosecuters</Link>
                      </h5>
                      <h6>
                        By <span>Admin</span> Sep 25, 2018
                      </h6>
                    </div>
                  </div>
                  <div className="latest-posts-item d-flex">
                    <img src="/demo-06/assets/media/img/post3.jpg" alt="post3" style={{ marginRight: "10px" }} />
                    <div className="latest-post-text">
                      <h5>
                        <Link href="/demo-06/post">Lawyer shares for grant is to starting the practice</Link>
                      </h5>
                      <h6>
                        By <span>Admin</span> Sep 25, 2018
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="tags space-60">
                  <h4 class="font-head">Tags</h4>
                  <div className="line-red-2 normal-line"></div>
                  <div className="tag-wrap d-flex justify-content-start flex-wrap">
                    <a href="#" className="tag-button">Legal</a>
                    <a href="#" className="tag-button">Courts</a>
                    <a href="#" className="tag-button">Wealth</a>
                    <a href="#" className="tag-button">Accidents</a>
                    <a href="#" className="tag-button">Practice Areas</a>
                    <a href="#" className="tag-button">Consult</a>
                    <a href="#" className="tag-button">Injury</a>
                    <a href="#" className="tag-button">Law</a>
                    <a href="#" className="tag-button">Lawyers</a>
                    <a href="#" className="tag-button">Litigation</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13 */}
      <section className="section-13 logo-back">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="text-block-section d-flex align-items-center">
                <h5>
                  Stay updated with news
                  <br />
                  Subscribe to our Newsletter
                </h5>
              </div>
            </div>
            <div className="col-md-7">
              <form onSubmit={handleSubscribe}>
                <div className="subscribe d-flex align-items-center">
                  <input
                    type="email"
                    placeholder="Email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <input type="submit" value="Subscribe" />
                </div>
              </form>
              {subscribed && (
                <p style={{ color: "#d12a2a", marginTop: "10px" }}>Subscribed successfully!</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <AlegadaFooter />
    </>
  );
}
