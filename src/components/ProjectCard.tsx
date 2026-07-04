'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const element = cardRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          observer.unobserve(element)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.2 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <Link
      href={`/work/${project.slug}`}
      className="project-card"
      ref={cardRef}
      style={{ transitionDelay: `${Math.min(index % 2, 1) * 90}ms` }}
    >
      <div className="project-card__aside">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span>{project.date}</span>
      </div>

      <div className="project-card__image">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={1200}
          height={525}
          priority={false}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className="project-card__info">
        <h2 className="project-card__title">{project.title}</h2>
        <p className="project-card__category">{project.category}</p>
        <span className="project-card__cta">Open project</span>
      </div>
    </Link>
  )
}
