import React from "react";
import { NavLink, Outlet, Link } from "react-router";

function Layout() {
  return (
    <div>
    <header className="header">
        <div className="container header-content">
            <Link to="/">
                <h1 className="logo">Diego.dev</h1>
            </Link>
            <nav className="nav-content">
                <ul className="nav-list">
                    <li className="nav-item"><NavLink to="/" className="nav-link" end>Home</NavLink></li>
                    <li className="nav-item"><NavLink to="#about" className="nav-link" end>About</NavLink></li>
                    <li className="nav-item"><NavLink to="/" className="nav-link" end>Test 2</NavLink></li>
                    <li className="nav-item"><NavLink to="/" className="nav-link" end>Test 3</NavLink></li>
                    <li className="nav-item" onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}><NavLink to="/" className="nav-link" end>Test 4</NavLink></li>
                </ul>
            </nav>
            <a href="" className="btn">Contactez-moi</a>
        </div>
    </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2 className="footer-logo-heading">Diego.dev</h2>
                        <div className="copyright">© 2025 Diego.dev All Rights Reserved</div>
                    </div>
                    <nav className="footer-nav">
                        <h2 className="footer-nav-title">Links</h2>
                        <ul className="footer-link-list">
                            <li className="footer-nav-item"><NavLink to="/" className="footer-nav-link" end>Home</NavLink></li>
                            <li className="footer-nav-item"><NavLink to="/#about" className="footer-nav-link" end>About</NavLink></li>
                            <li className="footer-nav-item"><NavLink to="/" className="footer-nav-link" end>Test 2</NavLink></li>
                            <li className="footer-nav-item"><NavLink to="/" className="footer-nav-link" end>Test 3</NavLink></li>
                            <li className="footer-nav-item"><NavLink to="/" className="footer-nav-link" end>Test 4</NavLink></li>
                        </ul>
                    </nav>
                    <div className="footer-contact">
                        <h2 className="footer-nav-title">Contact</h2>
                        <p className="footer-contact">ddubois1780@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default Layout;