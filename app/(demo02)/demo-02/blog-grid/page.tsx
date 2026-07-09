"use client";
import Link from "next/link";
import LawgneHeader from "@/components/demo02/LawgneHeader";
import LawgneFooter from "@/components/demo02/LawgneFooter";
import PageBanner from "@/components/demo02/PageBanner";

const BASE = "/demo-02";

const posts = [
  { img: "blog-grid-1.jpg", author: "user-1.jpg", authorName: "Derek L. Coronado", title: "Users Perspective Using Story Structure To Stand User" },
  { img: "blog-grid-2.jpg", author: "user-2.jpg", authorName: "Jeremy A. Edney", title: "Privacy UX Common Concerns And Privacy Web Forms" },
  { img: "blog-grid-3.jpg", author: "user-3.jpg", authorName: "Derek L. Coronado", title: "Better Notifications Permission Requests Users Perspective" },
  { img: "blog-grid-4.jpg", author: "user-1.jpg", authorName: "Derek L. Coronado", title: "Users Perspective Using Story Structure To Stand User" },
  { img: "blog-grid-5.jpg", author: "user-2.jpg", authorName: "Jeremy A. Edney", title: "Privacy UX Common Concerns And Privacy Web Forms" },
  { img: "blog-grid-6.jpg", author: "user-3.jpg", authorName: "Derek L. Coronado", title: "Better Notifications Permission Requests Users Perspective" },
  { img: "blog-grid-7.jpg", author: "user-1.jpg", authorName: "Derek L. Coronado", title: "Users Perspective Using Story Structure To Stand User" },
  { img: "blog-grid-8.jpg", author: "user-2.jpg", authorName: "Jeremy A. Edney", title: "Privacy UX Common Concerns And Privacy Web Forms" },
  { img: "blog-grid-9.jpg", author: "user-3.jpg", authorName: "Derek L. Coronado", title: "Better Notifications Permission Requests Users Perspective" },
];

export default function BlogGridPage() {
  return (
    <>
      <div className="preloader"><div className="loader"><img src={`${BASE}/assets/images/loader.png`} alt="loader" /></div></div>
      <LawgneHeader activeMenu="blog" />
      <PageBanner title="Blog Grid" breadcrumbs={[{ label: "Home", href: `${BASE}` }, { label: "Blog Grid" }]} />

      <section className="blog-area pt-130 pb-80">
        <div className="container">
          <div className="row">
            {posts.map((post, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                <div className="blog-post-item blog-post-item-five mb-50">
                  <div className="post-thumbnail">
                    <img src={`${BASE}/assets/images/blog/${post.img}`} alt="blog" />
                    <Link href={`${BASE}/blog-details`} className="icon-btn"><i className="far fa-arrow-right"></i></Link>
                  </div>
                  <div className="entry-content">
                    <div className="post-admin">
                      <img src={`${BASE}/assets/images/blog/${post.author}`} alt="author" />
                      <span>{post.authorName}</span>
                    </div>
                    <h3 className="title"><Link href={`${BASE}/blog-details`}>{post.title}</Link></h3>
                    <div className="post-meta">
                      <ul>
                        <li><span><i className="fal fa-calendar-alt"></i><a href="#">25 Jan 2021</a></span></li>
                        <li><span><i className="fal fa-comments"></i><a href="#">Com (05)</a></span></li>
                        <li><span><i className="fal fa-link"></i><a href="#">(03)</a></span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LawgneFooter />
      <a href="#" className="back-to-top"><i className="fas fa-angle-up"></i></a>
    </>
  );
}
