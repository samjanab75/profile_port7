import { NavLink } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Skills", "/skills"],
  ["Projects", "/projects"],
  ["Education", "/education"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Main navigation">
        <NavLink className="brand" to="/" onClick={close}>
          <span className="brand-mark"><Sparkles size={18} /></span>
          <span>Samjana<span className="brand-dot">.</span></span>
        </NavLink>
        <div className="desktop-nav">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{label}</NavLink>
          ))}
        </div>
        <NavLink className="nav-cta" to="/contact" onClick={close}>Let’s connect <span>↗</span></NavLink>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && <div className="mobile-nav container">
        {links.map(([label, to]) => <NavLink key={to} to={to} end={to === "/"} onClick={close} className={({ isActive }) => isActive ? "active" : ""}>{label}</NavLink>)}
      </div>}
    </header>
  );
}