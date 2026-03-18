import { Link } from "react-router-dom";

export default function Footer({
  campusName,
  description,
}) {
  const exploreLinks = [
    { label: "Search Hostels", path: "/" },
    { label: "Verified Partners", path: "/verified" },
    { label: "Nearby Amenities", path: "/amenities" },
  ];

  const supportLinks = [
    { label: "Help Center", path: "/help" },
    { label: "Safety Guide", path: "/safety" },
    { label: "Contact Us", path: "/contact" },
  ];

  const legalLinks = [
    { label: "Terms of Service", path: "/terms" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Cookie Policy", path: "/cookies" },
  ];

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <div className="logo footer-logo">MedanApp</div>

          <p className="footer-description">
            {description ||
              `Making student life easier by finding the perfect home near ${campusName}.`}
          </p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="footer-links">
            {exploreLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul className="footer-links">
            {supportLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="footer-links">
            {legalLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}