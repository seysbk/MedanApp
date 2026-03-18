export default function FilterSection({
  totalCount,
  campusName,
  activeFilter,
  onFilterChange,
  onReset,
}) {
  const filters = [
    { key: "all", label: "All" },
    { key: "under4k", label: "< 4K" },
    { key: "per_year", label: "Per Year" },
    { key: "per_sem", label: "Per Semester" },
    { key: "male", label: "Male Only" },
    { key: "female", label: "Female Only" },
    { key: "single_room", label: "1 in a room" },
  ];

  return (
    <section className="filter-section">
      <div className="filter-header">
        <span className="filter-title">
          {totalCount} Hostels Found near {campusName}
        </span>

        <button
          type="button"
          className="filter-action"
          onClick={onReset}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          Reset Filters
        </button>
      </div>

      <div className="pill-container">
        {filters.map((filter) => (
          <button
            key={filter.key}
            className={`filter-pill ${
              activeFilter === filter.key ? "active" : ""
            }`}
            onClick={() => onFilterChange(filter.key)}
          >
            {activeFilter === filter.key && (
              <span
                className="dot"
                style={{ background: "white" }}
              ></span>
            )}
            {filter.label}
          </button>
        ))}
      </div>
    </section>
  );
}