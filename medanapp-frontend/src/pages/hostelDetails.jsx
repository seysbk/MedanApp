export default function HostelDetails (){
    return(
        <>
            <section className="gallery-grid">
            <img src={"https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"} className="main-img" alt="GreenHouse Main" />
            <div className="sub-img-stack">
                <img src={"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"} className="sub-img sub-img-top" alt="GreenHouse Interior" />
                <img src={"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"} className="sub-img sub-img-bottom" alt="GreenHouse Lounge" />
            </div>
        </section>

        <div className="content-layout">
            <div className="profile-card">
                <div className="profile-header">
                    <span className="amenity-tag red" style={{ display: "inline-block", marginBottom: "8px", padding: "6px 12px", fontSize: "12px", fontWeight: "700", borderRadius: "6px", background: "rgba(255, 59, 48, 0.1)", color: "var(--accent-primary)"}}>VERIFIED PARTNER</span>
                    <h1>GreenHouse Residence</h1>
                    <div className="location-meta">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                        Jl. Dr. Mansyur No. 45, Medan • 0.3 km from Engineering Faculty
                    </div>
                </div>

                <div className="description">
                    <h3 className="section-title">About this Hostel</h3>
                    <p style={{color: "var(--color-text-sec)", lineHeight: "1.6", fontSize: "15px"}}>
                        GreenHouse Residence offers a premium living experience specifically designed for students. Located just a 5-minute walk from the USU Engineering Faculty, we provide a quiet and productive environment. Every room is designed with natural lighting and modern minimalist furniture to ensure your comfort during your studies.
                    </p>
                </div>

                <div className="amenities-section">
                    <h3 className="section-title">Amenities</h3>
                    <div className="amenities-list">
                        <div className="amenity-item"><div className="amenity-icon">⚡</div> High-speed WiFi</div>
                        <div className="amenity-item"><div className="amenity-icon">❄️</div> Air Conditioning</div>
                        <div className="amenity-item"><div className="amenity-icon">🚿</div> Private Bathroom</div>
                        <div className="amenity-item"><div className="amenity-icon">🧺</div> Laundry Service</div>
                        <div className="amenity-item"><div className="amenity-icon">🛡️</div> 24/7 Security</div>
                        <div className="amenity-item"><div className="amenity-icon">🚗</div> Free Parking</div>
                    </div>
                </div>

                <div className="room-types-section">
                    <h3 className="section-title">Available Units</h3>
                    <div className="room-types">
                        <div className="room-card">
                            <div className="room-info">
                                <h4>Single Executive Room</h4>
                                <p>1 Bed • Private Bath • Window View</p>
                            </div>
                            <div style={{textAlign: "right"}}>
                                <div style={{fontWeight: "700"}}>$150/mo</div>
                                <span style={{fontSize: "11px", color: "var(--accent-tertiary)"}}>3 units left</span>
                            </div>
                        </div>
                        <div className="room-card">
                            <div className="room-info">
                                <h4>Shared Double Room</h4>
                                <p>2 Beds • Shared Bath • Study Desks</p>
                            </div>
                            <div style={{textAlign: "right"}}>
                                <div style={{fontWeight: "700"}}>$95/mo</div>
                                <span style={{fontSize: "11px", color: "var(--accent-tertiary)"}}>Available</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reviews-section">
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-md)"}}>
                        <h3 className="section-title" style={{marginBottom: "0"}}>Reviews (48)</h3>
                        <div className="rating">⭐ 4.9 Rating</div>
                    </div>
                    <div className="review-card">
                        <div className="review-header">
                            <div className="reviewer">
                                <img src={"https://i.pravatar.cc/100?img=12"} style={{width: "32px", height: "32px", borderRadius: "50%"}} alt="Reviewer" />
                                Michael Tan
                            </div>
                            <span style={{fontSize: "12px", color: "var(--color-text-sec)"}}>2 weeks ago</span>
                        </div>
                        <p style={{fontSize: "14px", color: "var(--color-text-sec)", lineHeight: "1.5"}}>
                            Best hostel I've stayed in Medan. The internet is actually fast enough for my online exams, and the owner is very kind.
                        </p>
                    </div>
                </div>
            </div>

            <aside className="booking-sidebar">
                <div className="price-hero">
                    <span className="price-amount">$150</span>
                    <span className="price-unit">/ month starting price</span>
                </div>

                <div className="booking-form">
                    <div className="form-group">
                        <label>Duration</label>
                        <select>
                            <option>6 Months (Semester)</option>
                            <option>12 Months (Yearly)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Check-in Date</label>
                        <input type="date" value="2024-08-15" />
                    </div>
                    <div className="form-group">
                        <label>Unit Type</label>
                        <select>
                            <option>Single Executive Room</option>
                            <option>Shared Double Room</option>
                        </select>
                    </div>
                </div>

                <div style={{borderTop: "1px solid #F0F0F2", paddingTop: "var(--space-md)"}}>
                    <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px"}}>
                        <span>Security Deposit</span>
                        <span>$150.00</span>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between", marginBottom: "16px", fontWeight: "700", fontSize: "18px"}}>
                        <span>Total First Payment</span>
                        <span>$300.00</span>
                    </div>
                </div>

                <button className="book-now-btn">Book for Tour / Rent</button>
                <p style={{fontSize: "11px", textAlign: "center", color: "var(--color-text-sec)"}}>No payment required until you visit the premises.</p>
                
                <div style={{height: "180px", width: "100%", borderRadius: "var(--radius-md)", overflow: "hidden", background: "#eee"}}>
                    <img src={"https://api.placeholder.com/400/200?text=Map+View+USU+Area"} style={{width: "100%", height: "100%", objectFit: "cover"}} alt="Map" />
                </div>
            </aside>
        </div>
        </>
    )
}