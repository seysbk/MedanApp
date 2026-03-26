export default function Welcome () {
    return (
        <div className="welcome-container">
        
        <section className="hero-section">
            {/* <div className="logo-mark">MedanApp</div> */}
            
            <div className="hero-text">
                <h1>Your journey starts with a better stay.</h1>
                <p>The easiest way for students in Medan to find verified hostels near campus. Comfortable, safe, and close to where you belong.</p>
            </div>

            <div className="hero-bg-decoration">
                <div className="hero-bg-inner">
                    <svg className="hero-icon" viewBox="0 0 24 24">
                        <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"></path>
                    </svg>
                </div>
            </div>
            
            <div style={{fontSize: "14px", opacity: "0.8", fontWeight: "500"}}></div>
        </section>

        <section className="content-section">
            <div className="intro-card">
                <h2 style={{fontSize: "32px", fontWeight: "800", letterSpacing: "-1px", marginBottom: "8px"}}>Welcome Home</h2>
                <p style={{color: "var(--color-text-sec)", fontSize: "16px"}}>Let's find the perfect room for your student life.</p>

                <ul className="feature-list">
                    <li className="feature-item">
                        <div className="feature-icon-wrapper">
                            <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div className="feature-content">
                            <h3>Verified Listings</h3>
                            <p>Every hostel is physically checked by our team to ensure it matches the photos.</p>
                        </div>
                    </li>
                    <li className="feature-item">
                        <div className="feature-icon-wrapper">
                            <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <div className="feature-content">
                            <h3>Campus Proximity</h3>
                            <p>Filter by distance to your specific faculty or campus gate.</p>
                        </div>
                    </li>
                    <li className="feature-item">
                        <div className="feature-icon-wrapper">
                            <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                        </div>
                        <div className="feature-content">
                            <h3>Secure</h3>
                            <p>Avoid hostel-agent wahala.</p>
                        </div>
                    </li>
                </ul>

                <a href="#" className="btn-primary">Get Started</a>
                <button className="btn-secondary">I already have an account</button>

                <p className="footer-note">
                    By joining, you agree to our <span style={{textDecoration: "underline", cursor: "pointer"}}>Terms of Service</span> and <span style={{textDecoration: "underline", cursor: "pointer"}}>Privacy Policy</span>.
                </p>
            </div>
        </section>

    </div>
    )
}