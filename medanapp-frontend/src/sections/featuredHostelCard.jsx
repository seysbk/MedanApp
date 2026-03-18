import { Link } from "react-router-dom";

export default function FeaturedHostelCard({
  id,
  name,
  description,
  isVerified,
}) {
  return (
    <article className="card-featured">
      {isVerified && (
        <div className="featured-badge">Verified Partner</div>
      )}

      <div className="featured-image-abs">
        <svg viewBox="0 0 24 24" width="60" height="60" fill="var(--accent-primary)">
          <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
        </svg>
      </div>

      <div className="featured-content">
        <h2>{name}</h2>
        <p>{description}</p>

        <Link
          to={`/hostel/${id}`}
          style={{
            background: "white",
            color: "var(--accent-primary)",
            border: "none",
            padding: "12px 24px",
            borderRadius: "99px",
            fontWeight: "700",
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-block"
          }}
        >
          Check Availability
        </Link>
      </div>
    </article>
  );
}