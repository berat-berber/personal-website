import { useEffect } from "react"

export default function Blog() {
  useEffect(() => { document.title = "berat berber — blog" }, [])
  return (
    <div className="shell">
      <section className="hero" style={{ borderTop: "none" }}>
        <h1>Blog</h1>
        <p className="bio">Posts coming soon.</p>
      </section>
    </div>
  )
}
