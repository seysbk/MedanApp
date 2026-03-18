export default function HostelDetails({ hostel }) {
    const data = hostel || {};
    const gallery = data.images || [];
    const locationText = data.location_name || data.location || "Unknown location";

    return (
        <>
            {/* IMAGE GALLERY */}
            <section className="gallery-grid">
                {gallery.length > 0 ? (
                    <>
                        <img src={gallery[0].image_url} className="main-img" alt={data.name || "Hostel"} />
                        <div className="sub-img-stack">
                            {gallery.slice(1, 3).map((img, i) => (
                                <img key={i} src={img.image_url} className="sub-img" alt={data.name || "Hostel"} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="main-img" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#f3f3f3" }}>
                        No gallery images yet
                    </div>
                )}
            </section>

            <div className="content-layout">
                {/* LEFT SIDE */}
                <div className="profile-card">
                    <div className="profile-header">
                        {data.is_verified ? <span>Verified</span> : <span>Not Verified</span>}

                        <h1>{data.name || "Hostel"}</h1>

                        <div className="location-meta">
                            📍 {locationText} • {data.minutes_to_campus || "N/A"} mins to campus
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                                    <div className="description">
                        <h3 className="section-title">About this Hostel</h3>
                        <p>{data.description || "No description yet."}</p>
                    </div>

                    {/* ROOM TYPES */}
                    <div className="room-types-section">
                        <h3 className="section-title">Available Rooms</h3>

                        {data.room_types?.length > 0 ? (
                            data.room_types.map((room) => (
                                <div key={room.id} className="room-card">
                                    <div className="room-info">
                                        <h4>{room.name}</h4>
                                        <p>{room.capacity} person(s)</p>
                                    </div>
                                    <div style={{ textAlign: "right" }}>
                                        <div style={{ fontWeight: "700" }}>
                                            GHS {room.price}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No room types available yet.</p>
                        )}
                    </div>

                    {/* REVIEWS */}
                    <div className="reviews-section">
                        <h3 className="section-title">Reviews</h3>

                        {data.ratings?.length > 0 ? (
                            data.ratings.map((review) => (
                                <div key={review.id} className="review-card">
                                    <strong>{review.user_name || "Anonymous"}</strong>
                                    <div>⭐ {review.rating}</div>
                                    <p>{review.comment}</p>
                                </div>
                            ))
                        ) : (
                            <p>No reviews yet.</p>
                        )}
                    </div>
                </div>

                {/* RIGHT SIDE → CONTACT (NOT BOOKING) */}
                <aside className="booking-sidebar">
                    <div className="price-hero">
                        <span className="price-amount">
                            GHS {data.min_price || "N/A"} - {data.max_price || "N/A"}
                        </span>
                        <span className="price-unit">
                            {data.price_period === 1 ? "/ semester" : "/ year"}
                        </span>
                    </div>

                    {/* CONTACT MANAGER */}
                    <div className="contact-section">
                        <h3>Contact Manager</h3>

                        {data.contact_phone ? <p>📞 {data.contact_phone}</p> : <p>No phone available</p>}

                        {data.contact_whatsapp && <p>💬 WhatsApp: {data.contact_whatsapp}</p>}
                        {data.contact_email && <p>📧 {data.contact_email}</p>}
                    </div>

                    {/* LOCATION */}
                    <div style={{ marginTop: "16px" }}>
                        <p><strong>Digital Address:</strong> {data.digital_address || "N/A"}</p>
                    </div>

                    {/* MAP (simple MVP) */}
                    <div style={{ height: "180px", marginTop: "12px" }}>
                        <a
                            href={`https://www.google.com/maps?q=${data.latitude || 0},${data.longitude || 0}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View on Map
                        </a>
                    </div>
                </aside>
            </div>
        </>
    );
}