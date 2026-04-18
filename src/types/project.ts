export type SectionType = 'full' | 'grid'

export interface FullSection {
  type: 'full'
  image: string
  caption?: string
}

export interface GridSection {
  type: 'grid'
  images: string[]
  caption?: string
}

export type Section = FullSection | GridSection

export interface Project {
  id: string
  slug: string
  title: string
  category: string
  thumbnail: string
  date: string           // 리스트에 표시 (예: 2026.01)
  period: string         // 상세에 표시 (예: 2026.01 - 2026.04)
  description: string
  url?: string           // View Page 링크 (없으면 버튼 숨김)
  sections: Section[]
}
