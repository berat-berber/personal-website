import { site } from "../data/site"

export default function About() {
  return (
    <div className="shell">
      <section className="hero" style={{ borderTop: "none" }}>
        <h1>About</h1>
        <p className="bio">{site.bio}</p>
        <div className="links-row">
          {site.socials.map((s) => (
            <a href={s.url} target="_blank" rel="noreferrer" key={s.label}>
              {s.label}
            </a>
          ))}
        </div>
      </section>

      <section style={{ borderTop: "none" }}>
        <div className="section-label">get in touch</div>

        {/* Netlify Forms: this works with zero backend once deployed on Netlify.
            The name="contact" + data-netlify="true" pair is what registers the form. */}
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />

          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required />
          </div>

          <button className="btn" type="submit">
            Send
          </button>
        </form>
      </section>
    </div>
  )
}
