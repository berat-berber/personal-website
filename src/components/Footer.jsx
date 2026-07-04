import { site } from "../data/site"

export default function Footer() {
  return (
    <footer className="shell">
      © {new Date().getFullYear()} {site.name}
    </footer>
  )
}
