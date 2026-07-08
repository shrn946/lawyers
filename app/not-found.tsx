"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="error-section-area sp1 text-center" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="error-content-area">
                <h1 style={{ fontSize: "120px", fontWeight: "bold", margin: "0" }}>404</h1>
                <h2 style={{ fontSize: "36px", margin: "20px 0" }}>Page Not Found</h2>
                <p style={{ margin: "20px 0 40px" }}>
                  The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link href="/" className="casebtn1">
                  Back To Home <i className="fa-regular fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
