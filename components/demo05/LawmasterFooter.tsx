"use client";

import Link from "next/link";
import React, { useState } from "react";

export function LawmasterFooter() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() !== "") {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="footer-main container-fluid no-padding">
      {/* Container */}
      <div className="container">
        {/* Contact Detail */}
        <div className="contact-details">
          <div className="col-md-4 col-sm-4 address-box detail-box">
            <h4>Law firm address</h4>
            <p>189 Design Street, Web Corner</p>
            <p>Melbourne - 005</p>
          </div>
          <div className="col-md-4 col-sm-4 phone-box detail-box">
            <h4>Free consultation</h4>
            <p>Mobile: (+1) 800 433 633</p>
            <p>Toll Free : (+1) 800 123 456</p>
          </div>
          <div className="col-md-4 col-sm-4 mail-box detail-box">
            <h4>Mailing details</h4>
            <p>
              <a href="mailto:Info@Masterlawgroup.com">Info@Masterlawgroup.com</a>
            </p>
            <p>
              <a href="mailto:Support@Masterlawgroup.com">Support@Masterlawgroup.com</a>
            </p>
          </div>
        </div>
        {/* Contact Detail /- */}

        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <aside className="widget widget-about">
              <h3 className="widget-title">Master law firm</h3>
              <img src="/demo-05/images/icon/section-border.png" alt="section-border" />
              <p>Aqui blanditiis praesentium voluptatum delenitia atque corrupti quos.</p>
              <div className="time-schedule">
                <p>
                  Monday - Friday <span>8.00 - 18.00</span>
                </p>
                <p>
                  Saturday <span>8.00 - 18.00</span>
                </p>
                <p>
                  Sunday <span>8.00 - 13.00</span>
                </p>
              </div>
            </aside>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <aside className="widget widget-links">
              <h3 className="widget-title">Practice areas</h3>
              <img src="/demo-05/images/icon/section-border.png" alt="section-border" />
              <ul>
                <li>
                  <Link href="/demo-05/services" title="Criminal Law">Criminal Law</Link>
                </li>
                <li>
                  <Link href="/demo-05/services" title="Family Law">Family Law</Link>
                </li>
                <li>
                  <Link href="/demo-05/services" title="Insurance Law">Insurance Law</Link>
                </li>
                <li>
                  <Link href="/demo-05/services" title="Business Law">Business Law</Link>
                </li>
                <li>
                  <Link href="/demo-05/services" title="Accident Law">Accident Law</Link>
                </li>
                <li>
                  <Link href="/demo-05/services" title="Investment Law">Investment Law</Link>
                </li>
                <li>
                  <Link href="/demo-05/services" title="Inquest Law">Inquest Law</Link>
                </li>
                <li>
                  <Link href="/demo-05/services" title="Licensing Law">Licensing Law</Link>
                </li>
                <li>
                  <Link href="/demo-05/services" title="Appeal Law">Appeal Law</Link>
                </li>
                <li>
                  <Link href="/demo-05/services" title="Commercial Law">Commercial Law</Link>
                </li>
                <li>
                  <Link href="/demo-05/services" title="Employment Law">Employment Law</Link>
                </li>
                <li>
                  <Link href="/demo-05/services" title="Judicial Law">Judicial Law</Link>
                </li>
              </ul>
            </aside>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <aside className="widget widget-newsletter">
              <h3 className="widget-title">Newsletter</h3>
              <img src="/demo-05/images/icon/section-border.png" alt="section-border" />
              <p>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium quas molestias except.</p>
              <form onSubmit={handleSubscribe} className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <i className="fa fa-send-o"></i>
                  </button>
                </span>
              </form>
              {subscribed && (
                <p style={{ color: "#d9ab22", marginTop: "10px" }}>Thank you for subscribing!</p>
              )}
              <div className="social">
                <h6>Stay Connected</h6>
                <ul>
                  <li>
                    <a href="#" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Google+">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="instagram">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Tumblr">
                      <i className="fa fa-tumblr"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
      {/* Container /- */}
      {/* Bottom Footer */}
      <div className="container-fluid no-padding bottom-footer">
        <p>&copy; {new Date().getFullYear()} Master Law Firm. All Rights Reserved.</p>
      </div>
      {/* Bottom Footer /- */}
    </footer>
  );
}
