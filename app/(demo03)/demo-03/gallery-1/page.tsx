"use client";

import LawyersHeader from "@/components/demo03/LawyersHeader";
import LawyersFooter from "@/components/demo03/LawyersFooter";
import PageBanner from "@/components/demo03/PageBanner";

const BASE = "/demo-03";

const galleryImages = [
  "office-8.jpg",
  "office-7.jpg",
  "office-6.jpg",
  "office-5.jpg",
  "office-4.jpg",
  "office-3.jpg",
  "office-2.jpg",
  "office-1.jpg"
];

export default function GalleryPage() {
  return (
    <>
      <LawyersHeader headerType="header-1" />
      <PageBanner title="Gallery" subtitle="Pellentesque quam justo" bgImage="images/top-bkgs/about.jpg" />

      <div className="page-holder custom-page-template page-full fullscreen-page clearfix">
        <section className="section-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="gallery-holder gallery-4col clearfix d-flex flex-wrap">
                  {galleryImages.map((img, i) => (
                    <div key={i} className="gallery-post gal-img col-md-3 col-sm-6 mb-30" style={{ padding: "0 10px" }}>
                      <a href={`${BASE}/assets/images/gallery/${img}`} className="lightbox" onClick={(e) => e.preventDefault()}>
                        <div className="item-content-bkg gallery-bkg" style={{ position: "relative", overflow: "hidden" }}>
                          <img src={`${BASE}/assets/images/gallery/${img}`} className="img-fluid w-100" alt="" />
                          <div className="gallery-post-desc position-absolute w-100 h-100" style={{ top: 0, left: 0, background: "rgba(191, 161, 95, 0.9)", opacity: 0, transition: "opacity 0.3s", display: "flex", justifyContent: "center", alignEItems: "center" }}>
                            <div className="gallery-mglass"><i className="fa fa-eye text-white" style={{ fontSize: "24px" }}></i></div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
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
