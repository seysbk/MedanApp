import { Link } from "react-router-dom";

export default function HostelCard({
  id,
  name,
  coverImage,
  distance,
  isVerified,
  type,
  price,
  currency = "GHS",
}) {
  return (
    <article className="hostel-card">
      <div className="card-image-container">
        <img src={coverImage} alt={name} className="card-image" />

        {isVerified && (
          <span className="amenity-tag red" style={{ position: "absolute", top: 10, left: 10 }}>
            Verified
          </span>
        )}
      </div>

      <div className="card-content">
        <h3 className="card-title">{name}</h3>

        <div className="card-meta">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span>{distance} km from campus</span>
        </div>

        <div className="amenity-row">
          <span className="amenity-tag blue">{type}</span>
        </div>

        <div className="card-footer">
          <div>
            <span className="price-tag">
              {currency === "GHS" ? "₵" : currency}
              {price}
            </span>
            <span className="price-period">/year</span>
          </div>

          <Link to={`/details/${id}`} className="action-btn">
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}