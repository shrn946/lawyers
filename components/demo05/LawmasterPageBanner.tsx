"use client";

import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface PageBannerProps {
  title: string;
  description: string;
  bannerClass: string;
  breadcrumbs: BreadcrumbItem[];
}

export function LawmasterPageBanner({
  title,
  description,
  bannerClass,
  breadcrumbs,
}: PageBannerProps) {
  return (
    <div className={`page-banner ${bannerClass} container-fluid no-padding`}>
      {/* Container */}
      <div className="container">
        <div className="col-md-5 no-padding">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="col-md-3 breadcrumb-shape pull-right no-padding">
          <ol className="breadcrumb">
            {breadcrumbs.map((item, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              if (isLast) {
                return (
                  <li key={idx} className="active">
                    {item.label}
                  </li>
                );
              }
              return (
                <li key={idx}>
                  <Link href={item.url || "/demo-05"}>{item.label}</Link>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      {/* Container /- */}
    </div>
  );
}
