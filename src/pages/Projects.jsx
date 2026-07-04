import { useEffect } from "react"
import { projects } from "../data/projects"
import ReleaseCard from "../components/ReleaseCard"

export default function Projects() {
  useEffect(() => { document.title = "berat berber — projects" }, [])
  return (
    <div className="shell">
      <section className="hero" style={{ borderTop: "none" }}>
        <h1>Projects</h1>
        <p className="bio">Everything I've shipped, tagged with its current status.</p>
      </section>
      <section style={{ borderTop: "none" }}>
        {projects.map((p) => (
          <ReleaseCard project={p} key={p.slug} />
        ))}
      </section>
    </div>
  )
}
