import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HostelDetails from "../components/hostelDetails";

export default function HostelDetailsPage() {
  const { id } = useParams();
  const [hostel, setHostel] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadHostel() {
      setIsLoading(true);
      setError(null);

      try {
        const [hostelRes, ratingsRes] = await Promise.all([
          fetch(`/api/hostels/${id}/`),
          fetch(`/api/hostels/${id}/ratings/`),
        ]);

        if (!hostelRes.ok) throw new Error(`Failed to load hostel (${hostelRes.status})`);
        if (!ratingsRes.ok) throw new Error(`Failed to load ratings (${ratingsRes.status})`);

        const hostelData = await hostelRes.json();
        const ratingsData = await ratingsRes.json();
        setHostel({ ...hostelData, ratings: ratingsData });
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (id) loadHostel();
  }, [id]);

  if (isLoading) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading details...</p>;
  if (error) return <p style={{ textAlign: "center", marginTop: "2rem", color: "red" }}>{error}</p>;
  if (!hostel) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Hostel not found.</p>;

  return <HostelDetails hostel={hostel} />;
}

