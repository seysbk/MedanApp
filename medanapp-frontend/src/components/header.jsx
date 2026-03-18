import { Link } from "react-router-dom";

export default function Header({
  appName,
  searchValue,
  onSearchChange,
  onSearchSubmit,
  user,
}) {
  return (
    <header>
      <div className="logo-container">
        <Link to="/" className="logo">
          {appName || "MedanApp"}
        </Link>
      </div>

      <div className="search-container">
        <svg
          className="icon search-icon"
          viewBox="0 0 24 24"
          width="20"
        >
          <path d="M21.71 20.29l-5.01-5.01C17.54 13.68 18 11.91 18 10c0-4.41-3.59-8-8-8S2 5.59 2 10s3.59 8 8 8c1.91 0 3.68-.46 5.28-1.28l5.01 5.01c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.42zM4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" />
        </svg>

        <input
          type="text"
          className="search-input"
          placeholder="Search by area, price, or name..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSearchSubmit();
          }}
        />
      </div>

      <div className="user-actions">
        {user ? (
          <>
            <button className="icon-btn">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
              </svg>
            </button>

            <div className="user-container">
              <img
                className="user"
                src={user.avatar || "https://i.pravatar.cc/100"}
                alt={user.first_name}
              />
            </div>
          </>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}