"use client";
import Link from "next/link";
import LawgneHeader from "@/components/demo02/LawgneHeader";
import LawgneFooter from "@/components/demo02/LawgneFooter";
import PageBanner from "@/components/demo02/PageBanner";

const BASE = "/demo-02";

const galleryItems = [
  { img: "gallery-1.jpg", title: "Family Violence", subtitle: "Violence Areas" },
  { img: "gallery-2.jpg", title: "Giving Million Air", subtitle: "Giving Million Air" },
  { img: "gallery-3.jpg", title: "Accident Insurance", subtitle: "Accident Insurance" },
  { img: "gallery-4.jpg", title: "Corporate Violence", subtitle: "Making Sure Closed" },
  { img: "gallery-5.jpg", title: "Making Sure Closed", subtitle: "Business Violence" },
  { img: "gallery-6.jpg", title: "Business Violence", subtitle: "Corporate Violence" },
  { img: "gallery-7.jpg", title: "Corporate Violence", subtitle: "Family Violence" },
  { img: "gallery-8.jpg", title: "Family Violence", subtitle: "Public Company" },
  { img: "gallery-9.jpg", title: "Public Company", subtitle: "Matix Tax Invation" },
  { img: "gallery-10.jpg", title: "Matix Tax Invation", subtitle: "Making Sure Closed" },
  { img: "gallery-11.jpg", title: "Making Sure Closed", subtitle: "Business Violence" },
  { img: "gallery-12.jpg", title: "Corporate Violence", subtitle: "Violence Areas" },
];

export default function GalleryPage() {
  return (
    <>
      <div className="preloader"><div className="loader"><img src={`${BASE}/assets/images/loader.png`} alt="loader" /></div></div>
      <LawgneHeader activeMenu="pages" />
      <PageBanner title="Our Gallery" breadcrumbs={[{ label: "Home", href: `${BASE}` }, { label: "Gallery" }]} />

      <section className="gallery-area pt-130 pb-120">
        <div className="container">
          <div className="row">
            {galleryItems.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                <div className="gallery-item gallery-item-one mb-30">
                  <div className="gallery-img">
                    <img src={`${BASE}/assets/images/gallery/${item.img}`} alt={item.title} />
                    <div className="gallery-overlay">
                      <a href={`${BASE}/assets/images/gallery/${item.img}`} className="img-popup icon-btn">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="gallery-content text-center">
                    <h4>{item.title}</h4>
                    <span className="sm-title">{item.subtitle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-40">
            <Link href={`${BASE}/gallery`} className="main-btn arrow-btn">View More gallery</Link>
          </div>
        </div>
      </section>

      <LawgneFooter />
      <a href="#" className="back-to-top"><i className="fas fa-angle-up"></i></a>
    </>
  );
}
