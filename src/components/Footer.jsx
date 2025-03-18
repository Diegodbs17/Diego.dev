import React from 'react'

function Footer() {
  return (
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
                        <a href="" className="footer-nav-link"><li className="footer-nav-item">Accueil</li></a>
                        <a href="" className="footer-nav-link"><li className="footer-nav-item">Accueil</li></a>
                        <a href="" className="footer-nav-link"><li className="footer-nav-item">Accueil</li></a>
                        <a href="" className="footer-nav-link"><li className="footer-nav-item">Accueil</li></a>
                        <a href="" className="footer-nav-link"><li className="footer-nav-item">Accueil</li></a>
                    </ul>
                </nav>
                <div className="footer-contact">
                    <h2 className="footer-nav-title">Contact</h2>
                    <p className="footer-contact">ddubois1780@gmail.com</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer