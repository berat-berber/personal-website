import { useEffect } from "react"
import { site } from "../data/site"

export default function Resume() {
  useEffect(() => { document.title = "berat berber — resume" }, [])
  return (
    <div className="shell">
      <section className="hero" style={{ borderTop: "none" }}>
        <h1>Resume</h1>
        <p className="bio">{site.role}</p>
        <a className="btn" href="/Mustafa_Berat_Berber_CV.pdf" target="_blank" rel="noreferrer">
          View Resume
        </a>
      </section>

      <section style={{ borderTop: "none" }}>
        <div className="resume-block">
          <div className="section-label">education</div>
          <div className="resume-entry">
            <div className="resume-entry-top">
              <h3>B.S. in Computer Science</h3>
              <span className="resume-period mono">2023 — ongoing</span>
            </div>
            <p>Dokuz Eylul University, Turkey</p>
          </div>
        </div>

        <div className="resume-block">
          <div className="section-label">stack</div>
          <div className="tags">
            {site.stack.map((s) => (
              <span className="tag" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
