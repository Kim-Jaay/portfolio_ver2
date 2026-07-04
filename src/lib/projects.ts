import projectsData from '../../data/projects.json'
import type { Project } from '../types/project'
import { existsSync } from 'fs'
import path from 'path'

const projects: Project[] = projectsData as Project[]

function publicFileExists(src: string): boolean {
  return existsSync(path.join(process.cwd(), 'public', src.replace(/^\//, '')))
}

function withExistingDetailImages(project: Project): Project {
  return {
    ...project,
    sections: project.sections.map((section) => {
      if (section.type === 'full') {
        return {
          ...section,
          image: publicFileExists(section.image) ? section.image : project.thumbnail,
        }
      }

      const existingImages = section.images.filter(publicFileExists)

      return {
        ...section,
        images: existingImages.length > 0 ? existingImages : [project.thumbnail],
      }
    }),
  }
}

// 전체 프로젝트 목록 반환 (순서 유지 — JSON 맨 위가 최신)
export function getAllProjects(): Project[] {
  return projects
}

// slug로 단일 프로젝트 반환
export function getProjectBySlug(slug: string): Project | undefined {
  const project = projects.find((p) => p.slug === slug)
  return project ? withExistingDetailImages(project) : undefined
}

// Next.js generateStaticParams용 slug 목록
export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug)
}
