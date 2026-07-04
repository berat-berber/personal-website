import { useEffect } from "react"
import { Link } from "react-router-dom"
import { site } from "../data/site"
import { projects } from "../data/projects"
import StatusBar from "../components/StatusBar"
import ReleaseCard from "../components/ReleaseCard"

export default function Home() {
  useEffect(() => { document.title = "berat berber" }, [])
  const recentProjects = projects.slice(0, 2)

  return (
    <div className="shell">
      <StatusBar />

      <section className="hero" style={{ borderTop: "none" }}>
        <span className="role">{site.role}</span>
        <h1>{site.name}</h1>
        <p className="bio">{site.bio}</p>
        <div className="links-row">
          <Link to="/projects">see projects →</Link>
          <Link to="/resume">resume →</Link>
        </div>
      </section>

      <section>
        <div className="section-label">recent releases</div>
        {recentProjects.map((p) => (
          <ReleaseCard project={p} key={p.slug} />
        ))}
      </section>


    </div>
  )
}
