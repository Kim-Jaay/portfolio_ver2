import projectsData from '../../data/projects.json'
import type { Project } from '../types/project'

const projects: Project[] = projectsData as Project[]

// 전체 프로젝트 목록 반환 (순서 유지 — JSON 맨 위가 최신)
export function getAllProjects(): Project[] {
  return projects
}

// slug로 단일 프로젝트 반환
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

// Next.js generateStaticParams용 slug 목록
export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug)
}
