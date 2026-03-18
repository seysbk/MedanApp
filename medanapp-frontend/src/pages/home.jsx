import { useEffect, useState } from "react";
import HostelGrid from "../sections/hostelGrid";
import FilterSection from "../sections/filterSection";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hostels, setHostels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHostels() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/hostels/");
        if (!res.ok) {
          throw new Error(`Failed to load hostels: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setHostels(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchHostels();
  }, []);

  return (
    <main>
      <FilterSection
        totalCount={hostels.length}
        campusName="UCC"
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        onReset={() => setActiveFilter("all")}
      />

      {isLoading && <p style={{ textAlign: "center" }}>Loading hostels...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
      {!isLoading && !error && <HostelGrid hostels={hostels} />}
      {!isLoading && !error && hostels.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          No hostels yet. Add one from admin or via hostel manager API.
        </p>
      )}
    </main>
  );
}
