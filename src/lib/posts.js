// Loads every .md file in src/content/blog at build time and parses
// its frontmatter. No backend, no CMS — just files in the repo.

const files = import.meta.glob("/src/content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
})

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const [, frontmatter, content] = match
  const data = {}

  frontmatter.split("\n").forEach((line) => {
    const idx = line.indexOf(":")
    if (idx === -1) return
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()

    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean)
    } else {
      value = value.replace(/^["']|["']$/g, "")
    }

    data[key] = value
  })

  return { data, content: content.trim() }
}

function slugFromPath(path) {
  return path.split("/").pop().replace(/\.md$/, "")
}

export function getAllPosts() {
  return Object.entries(files)
    .map(([path, raw]) => {
      const { data, content } = parseFrontmatter(raw)
      return {
        slug: slugFromPath(path),
        title: data.title || slugFromPath(path),
        date: data.date || "",
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        content,
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug) {
  return getAllPosts().find((p) => p.slug === slug)
}
