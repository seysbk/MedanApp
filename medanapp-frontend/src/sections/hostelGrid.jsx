import FeaturedHostelCard from "./featuredHostelCard";
import HostelCard from "../components/hostelCard";

export default function HostelGrid({ hostels = [] }) {
  if (!hostels.length) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>No hostels found.</p>;
  }

  return (
    <main className="hostel-grid">
      <FeaturedHostelCard
        id={hostels[0]?.id || 1}
        name={hostels[0]?.name || "Featured Hostel"}
        description={
          hostels[0]?.description || "Top rated and closest to campus with great student reviews."
        }
        isVerified={hostels[0]?.isVerified || true}
      />

      {hostels.map((item) => (
        <HostelCard
          key={item.id}
          id={item.id}
          name={item.name}
          coverImage={item.images?.[0]?.image_url || "https://via.placeholder.com/400x260?text=No+Hostel+Image"}
          distance={item.minutes_to_campus || 0}
          isVerified={item.is_verified}
          type={item.gender_policy === 1 ? "Male" : item.gender_policy === 2 ? "Female" : "Mixed"}
          price={item.min_price || 0}
        />
      ))}
    </main>
  );
}
