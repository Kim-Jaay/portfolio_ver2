import Sidebar from '../components/Sidebar'
import ProjectList from '../components/ProjectList'
import { getAllProjects } from '../lib/projects'

export default function WorkPage() {
  const projects = getAllProjects()

  return (
    <div className="layout">
      <Sidebar mode="list" />
      <main className="main">
        <ProjectList projects={projects} />
      </main>
    </div>
  )
}
