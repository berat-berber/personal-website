export default function ReleaseCard({ project }) {
  return (
    <article className="release">
      <div className="release-top">
        <span className="release-version">{project.version}</span>
        <span className="release-status">{project.status}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="release-links">
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer">
            repo
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer">
            live
          </a>
        )}
      </div>
    </article>
  )
}
