import ProjectList from '../components/ProjectList'
import { getAllProjects } from '../lib/projects'

export default function WorkPage() {
  const projects = getAllProjects()

  return (
    <div className="layout home-layout">
      <header className="home-nav">
        <a href="/" className="home-nav__brand">JAYDAY</a>
        <nav className="home-nav__links" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main className="home-main">
        <ProjectList projects={projects} />
      </main>
    </div>
  )
}
