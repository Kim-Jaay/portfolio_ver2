'use client'

import { useState } from 'react'
import type { Project } from '../types/project'
import ProjectCard from './ProjectCard'

const PAGE_SIZE = 12

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
      <section className="home-hero">
        <div className="home-hero__top">
          <p className="home-hero__eyebrow">Web Designer & Publisher</p>
          <p className="home-hero__meta">Seoul, Korea / Available for selected projects</p>
        </div>
        <h1 className="home-hero__title">Digital work for brands that need clarity, rhythm and a sharper web presence.</h1>
        <div className="home-hero__bottom">
          <p>Design direction, interface systems and front-end publishing for practical business websites.</p>
          <a href="#work">View work</a>
        </div>
      </section>

      <section className="home-intro" aria-label="Portfolio introduction">
        <p className="home-intro__label">(Selected approach)</p>
        <p className="home-intro__text">
          I turn business information into structured web experiences. The focus is simple: clear hierarchy, restrained visuals, fast publishing, and layouts that let the project speak first.
        </p>
      </section>

      <section id="work" className="work-section">
        <div className="work-section__header">
          <p>Selected Works</p>
          <p>{visibleProjects.length}/{projects.length}</p>
        </div>

        <div className="project-list">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

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
