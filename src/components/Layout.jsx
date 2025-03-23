import React, { useState } from "react";
import { NavLink, Outlet, Link } from "react-router"; 
import { NavHashLink } from 'react-router-hash-link';

function Layout() {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };


    return (
        <div>
            <header className="header" id="header">
                <div className="container header-content">
                    <Link to="/">
                        <h1 className="logo">Diego.dev</h1>
                    </Link>
                    <nav className="nav-content">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <NavHashLink className="nav-link" smooth to="/#header">Accueil</NavHashLink>
                            </li>
                            <li className="nav-item">
                                <NavHashLink className="nav-link" smooth to="/#about">À Propos</NavHashLink>
                            </li>
                            <li className="nav-item">
                                <NavHashLink className="nav-link" smooth to="/#works">Projets</NavHashLink>
                            </li>
                            <li className="nav-item">
                                <NavHashLink className="nav-link" smooth to="/#footer">Contact</NavHashLink>
                            </li>
                        </ul>
                    </nav>
                    <Link to="https://github.com/Diegodbs17?tab=repositories" className="github-link"><i class="fa-brands fa-github"></i></Link>
                    <span className="btn-nav-responsive" onClick={openMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </span>
                    <div className={`nav-responsive-menu ${isOpen ? 'is-open' : ""}`}>
                        <span className="close-btn-responsive" onClick={closeMenu}>
                            <i className="fa-solid fa-xmark"></i>
                        </span>
                        <nav className="nav-content-responsive">
                            <ul className="nav-list-responsive">
                                <li className="nav-item-responsive" onClick={closeMenu}>
                                    <NavHashLink className="nav-link" smooth to="/#header">Accueil</NavHashLink>
                                </li>
                                <li className="nav-item-responsive" onClick={() => { closeMenu()}}>
                                    <NavHashLink className="nav-link" smooth to="/#about">À Propos</NavHashLink>
                                </li>
                                <li className="nav-item-responsive" onClick={() => { closeMenu()}}>
                                    <NavHashLink className="nav-link" smooth to="/#works">Projets</NavHashLink>
                                </li>
                                <li className="nav-item-responsive" onClick={() => { closeMenu()}}>
                                    <NavHashLink className="nav-link" smooth to="/#footer">Contact</NavHashLink>
                                </li>
                            </ul>
                        </nav>
                        <Link to="https://github.com/Diegodbs17?tab=repositories" className="github-link-responsive"><i class="fa-brands fa-github"></i></Link>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="footer" id="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <h2 className="footer-logo-heading">Diego.dev</h2>
                            <div className="copyright">© 2025 Diego.dev All Rights Reserved</div>
                        </div>
                        <nav className="footer-nav">
                            <h2 className="footer-nav-title">Liens</h2>
                            <ul className="footer-link-list">
                                <li className="footer-nav-item">
                                    <NavHashLink className="footer-nav-link" smooth to="/#header">Accueil</NavHashLink>
                                </li>
                                <li className="footer-nav-item">
                                    <NavHashLink className="footer-nav-link" smooth to="/#about">À Propos</NavHashLink>
                                </li>
                                <li className="footer-nav-item">
                                    <NavHashLink className="footer-nav-link" smooth to="/#about">Projets</NavHashLink>
                                </li>
                                <li className="footer-nav-item">
                                    <NavHashLink className="footer-nav-link" smooth to="/#footer">Contact</NavHashLink>
                                </li>
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