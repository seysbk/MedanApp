import { NavLink } from "react-router-dom";

export default function Nav() {
  const navItems = [
    {
      label: "Home",
      path: "/",
      icon: (
        <svg className="icon" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
    },
    {
      label: "Explore",
      path: "/explore",
      icon: (
        <svg className="icon" viewBox="0 0 24 24">
          <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
        </svg>
      ),
    },
    {
      label: "Saved",
      path: "/saved",
      icon: (
        <svg className="icon" viewBox="0 0 24 24">
          <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 4.05 7.75 9.54 12.78.28.26.71.27.99.01C17.96 16.27 22 12.3 22 8.5 22 5.42 19.58 3 16.5 3z" />
        </svg>
      ),
    },
    {
      label: "Profile",
      path: "/profile",
      icon: (
        <svg className="icon" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="floating-dock">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `dock-item ${isActive ? "active" : ""}`
          }
        >
          {item.icon}
          <span className="dock-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}