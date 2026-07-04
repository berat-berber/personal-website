import { useParams, Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getPostBySlug } from "../lib/posts"

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="shell">
        <section className="hero" style={{ borderTop: "none" }}>
          <h1>Not found</h1>
          <p className="bio">
            No post at this address. <Link to="/blog">Back to the blog →</Link>
          </p>
        </section>
      </div>
    )
  }

  return (
    <div className="shell">
      <div className="post-header">
        <span className="post-date mono">{post.date}</span>
        <h1>{post.title}</h1>
      </div>
      <div className="post-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </div>
  )
}
