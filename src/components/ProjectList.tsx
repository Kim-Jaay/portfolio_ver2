'use client'

import { useState } from 'react'
import type { Project } from '../types/project'
import ProjectCard from './ProjectCard'

const PAGE_SIZE = 5

interface ProjectListProps {
  projects: Project[]
}

export default function ProjectList({ projects }: ProjectListProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [isLoading, setIsLoading] = useState(false)

  const visibleProjects = projects.slice(0, visibleCount)
  const hasMore = visibleCount < projects.length

  const loadMore = () => {
    if (isLoading || !hasMore) return
    setIsLoading(true)
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, projects.length))
      setIsLoading(false)
    }, 600)
  }

  return (
    <>
      <div className="project-list">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {hasMore && (
        <div className="project-list__more">
          <button
            className="project-list__more-btn"
            onClick={loadMore}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="project-list__dots">
                <span /><span /><span />
              </span>
            ) : (
              'More'
            )}
          </button>
        </div>
      )}
    </>
  )
}
