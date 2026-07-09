"use client";

import Link from "next/link";

const BASE = "/demo-03";

export default function LawyersFooter() {
  return (
    <footer id="footer-var2">
      <div id="footer-content">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-lg-4">
              <div className="foo-block">
                <h5 className="widgettitle" style={{ paddingBottom: "12px", color: "#ffffff" }}>About Lawyers</h5>
                <div className="textwidget">
                  <div className="textwidget">
                    <p style={{ color: "#ffffff" }}>Maecenas lorem mi, interdum id commodo ac, tincidunt vitae magna. In hac habitasse platea dictumst. Pellentesque quam justo, aliquam non accumsan a, aliquam id dolor.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Column 2 */}
            <div className="col-lg-4">
              <div className="foo-block">
                <h5 className="widgettitle" style={{ paddingBottom: "12px", color: "#ffffff" }}>Contact</h5>
                <div className="textwidget">
                  <div className="textwidget">
                    <p style={{ color: "#ffffff" }}>40 Park Ave, Brooklyn, New York,<br /> NY 10000, US</p>
                    <p style={{ color: "#ffffff" }}>+1 800 111 2222<br /> <a href="mailto:office@lawyers.com" style={{ color: "#ffffff" }}>office@lawyers.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            {/* Column 3 */}
            <div className="col-lg-4">
              <div className="foo-block">
                <h5 className="widgettitle" style={{ paddingBottom: "12px", color: "#ffffff" }}>Quick Links</h5>
                <div className="textwidget custom-html-widget">
                  <ul>
                    <li><Link href={`${BASE}`} style={{ color: "#ffffff" }}>Home</Link></li>
                    <li><Link href={`${BASE}/about-us`} style={{ color: "#ffffff" }}>About</Link></li>
                    <li><Link href={`${BASE}/practice-areas`} style={{ color: "#ffffff" }}>Practice Areas</Link></li>
                    <li><Link href={`${BASE}/contact`} style={{ color: "#ffffff" }}>Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ul className="footer-social alignc">
            <li><a className="social-facebook" href="#" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
            <li><a className="social-twitter" href="#" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
            <li><a className="social-linkedin" href="#" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
          </ul>
          <div className="foo-copyright alignc">Copyright &copy; 2019 Lawyers. Designed by MatchThemes</div>
        </div>
      </div>
    </footer>
  );
}
