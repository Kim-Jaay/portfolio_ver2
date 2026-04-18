import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import Sidebar from '../../../components/Sidebar'
import DetailGallery from '../../../components/detail/DetailGallery'
import CloseButton from '../../../components/detail/CloseButton'
import { getProjectBySlug, getAllSlugs } from '../../../lib/projects'

// ─── 정적 경로 생성 ───────────────────────────────────────────────
// Next.js가 빌드 시 모든 slug 페이지를 미리 생성합니다.
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

// ─── SEO 메타데이터 ───────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}

  return {
    title: `${project.title} — JAYDAY`,
    description: project.description,
    openGraph: {
      title: `${project.title} — JAYDAY`,
      description: project.description,
      images: [project.thumbnail],
    },
  }
}

// ─── 페이지 컴포넌트 ──────────────────────────────────────────────
export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = getProjectBySlug(params.slug)

  // slug가 없으면 404
  if (!project) notFound()

  return (
    <div className="layout">
      {/* 좌측 사이드바 — 프로젝트 정보 모드 */}
      <Sidebar mode="detail" project={project} />

      {/* 우측 갤러리 */}
      <main className="main detail">
        {/* X 닫기 버튼 */}
        <CloseButton />

        {/* 이미지 섹션들 */}
        <DetailGallery sections={project.sections} />
      </main>
    </div>
  )
}
