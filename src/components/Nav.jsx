import { NavLink } from "react-router-dom"
import { site } from "../data/site"

export default function Nav() {
  return (
    <nav className="nav shell">
      <NavLink to="/" className="nav-brand">
        {site.name}
      </NavLink>
      <ul className="nav-links">
        <li>
          <NavLink to="/projects">projects</NavLink>
        </li>
        <li>
          <NavLink to="/blog">blog</NavLink>
        </li>
        <li>
          <NavLink to="/resume">resume</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
      </ul>
    </nav>
  )
}
