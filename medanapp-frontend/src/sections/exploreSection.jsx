import { useEffect, useState } from "react";
import HostelCard from "../components/hostelCard";

export default function ExploreSection() {
  const [hostels, setHostels] = useState([]);
  const [nextUrl, setNextUrl] = useState("/api/hostels/");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadHostels();
  }, []);

  async function loadHostels(url = "/api/hostels/") {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to load hostels: ${res.status}`);
      }
      const data = await res.json();
      const nextBatch = Array.isArray(data.results) ? data.results : Array.isArray(data) ? data : [];
      setHostels((prev) => {
        const merged = [...prev, ...nextBatch];
        const uniqueById = Array.from(new Map(merged.map((h) => [h.id, h])).values());
        return uniqueById;
      });
      setNextUrl(data.next);
      setHasMore(!!data.next);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleLoadMore() {
    if (nextUrl) {
      loadHostels(nextUrl);
    }
  }

  return (
    <section>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Explore Hostels</h2>
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
      <div className="results-grid">
        {hostels.map((hostel) => (
          <HostelCard
            key={hostel.id}
            id={hostel.id}
            name={hostel.name}
            coverImage={hostel.images?.[0]?.image_url || "https://via.placeholder.com/400x260?text=No+Hostel+Image"}
            distance={hostel.minutes_to_campus || 0}
            isVerified={hostel.is_verified}
            type={hostel.gender_policy === 1 ? "Male" : hostel.gender_policy === 2 ? "Female" : "Mixed"}
            price={hostel.min_price || 0}
          />
        ))}
      </div>
      {hasMore && (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            style={{
              background: "var(--accent-primary)",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "var(--radius-pill)",
              fontSize: "16px",
              cursor: isLoading ? "not-allowed" : "pointer",
            }}
          >
            {isLoading ? "Loading..." : "Load More Hostels"}
          </button>
        </div>
      )}
      {!hasMore && hostels.length > 0 && (
        <p style={{ textAlign: "center", marginTop: "2rem", color: "var(--color-text-sec)" }}>
          No more hostels to load.
        </p>
      )}
    </section>
  );
}