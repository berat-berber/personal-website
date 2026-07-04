import { site } from "../data/site"

export default function StatusBar() {
  return (
    <div className="status-bar shell">
      <span className="status-dot" aria-hidden="true" />
      <span>{site.availability}</span>
      <span className="status-sep">·</span>
      <span>{site.location}</span>
      <span className="status-sep">·</span>
      <span>{site.stack.join(" / ")}</span>
    </div>
  )
}
