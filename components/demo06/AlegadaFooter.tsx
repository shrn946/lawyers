"use client";

import Link from "next/link";
import React from "react";

export function AlegadaFooter() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link className="navbar-brand d-flex" href="/demo-06">
              <img src="/demo-06/assets/media/img/logo-footer.svg" alt="logo" />
              <span>Alegada</span>
            </Link>
            <div className="line-red"></div>
            <p className="footer-logo-text">
              Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullao mco laboris nisi aliquip.
            </p>
          </div>
          <div className="col-md-3">
            <h4 className="footer-head">Quick Links</h4>
            <div className="line-red-2"></div>
            <ul className="list-left list-footer">
              <li>
                <Link href="/demo-06">Alegada Law Firm</Link>
              </li>
              <li>
                <Link href="/demo-06/about">Lawyers Team</Link>
              </li>
              <li>
                <Link href="/demo-06/practice-areas-1">Recent Cases</Link>
              </li>
              <li>
                <Link href="/demo-06/blog">Court Legal News</Link>
              </li>
              <li>
                <Link href="/demo-06/contacts">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="footer-head">Practice Areas</h4>
            <div className="line-red-2"></div>
            <ul className="list-left list-footer">
              <li>
                <Link href="/demo-06/practice-areas-1">All Patents Cases</Link>
              </li>
              <li>
                <Link href="/demo-06/practice-areas-2">Real Estate Law</Link>
              </li>
              <li>
                <Link href="/demo-06/practice-single">Injury Cases</Link>
              </li>
              <li>
                <Link href="/demo-06/practice-single">Domestic Violence</Link>
              </li>
              <li>
                <Link href="/demo-06/practice-single">Family Matters</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="footer-head">Contact Alegada</h4>
            <div className="line-red-2"></div>
            <p className="footer-text-2">
              4328 White Avenue
              <br />
              Suite # 865 Sacramento
              <br />
              CA 95817 USA
              <br />
              Phone: 1-780-624-9821
            </p>
            <Link className="footer-map" href="/demo-06/contacts">
              Map & Directions
            </Link>
          </div>
          <div className="line-footer"></div>
          <div className="col-md-6">
            <h6 className="footer-alegada">
              Alegada Law Firm © {new Date().getFullYear()} - All rights reserved.
            </h6>
          </div>
          <div className="col-md-6">
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
        </div>
      </div>
    </footer>
  );
}
