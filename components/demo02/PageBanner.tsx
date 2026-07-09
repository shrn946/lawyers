import Link from "next/link";

const BASE = "/demo-02";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  return (
    <section className="hero-area">
      <div
        className="breadcrumbs-area bg_cover bg-with-overlay"
        style={{ backgroundImage: `url(${BASE}/assets/images/bg/breadcrumbs-bg.jpg)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="page-title">
                <h1 className="title">{title}</h1>
                <ul className="breadcrumbs-link">
                  {breadcrumbs.map((item, i) =>
                    item.href ? (
                      <li key={i}><Link href={item.href}>{item.label}</Link></li>
                    ) : (
                      <li key={i} className="">{item.label}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
