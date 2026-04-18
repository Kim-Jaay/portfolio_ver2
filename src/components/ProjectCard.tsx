import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="project-card">
      {/* 썸네일 */}
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

      {/* 제목 + 날짜 */}
      <div className="project-card__info">
        <span className="project-card__title">{project.title}</span>
        <span className="project-card__date">{project.date}</span>
      </div>
    </Link>
  )
}
