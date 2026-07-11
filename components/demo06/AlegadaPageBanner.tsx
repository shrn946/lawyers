"use client";

import React from "react";

interface AlegadaPageBannerProps {
  title: string;
  subtitle: string;
}

export function AlegadaPageBanner({ title, subtitle }: AlegadaPageBannerProps) {
  return (
    <section className="section-pr1-back">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-text">
              <h5>{subtitle}</h5>
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
