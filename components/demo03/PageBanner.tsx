const BASE = "/demo-03";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export default function PageBanner({ title, subtitle = "in business since 1970", bgImage = "images/home/slider-3.jpg" }: PageBannerProps) {
  const imageUrl = bgImage.startsWith("http") || bgImage.startsWith("/") ? bgImage : `${BASE}/assets/${bgImage}`;
  return (
    <div className="page-head" style={{ backgroundImage: `url('${imageUrl}')` }}>
      <div className="inner-desc">
        <div className="container">
          <h1 className="page-title">{title}</h1>
          <span className="post-subtitle page-subtitle">{subtitle}</span>
        </div>
      </div>
    </div>
  );
}
