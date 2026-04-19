'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Project } from '../types/project'

// 소셜 아이콘 SVG (카카오톡, 인스타그램, 이메일, 전화)
// 실제 URL은 아래 SOCIAL_LINKS 객체에서 수정하세요
const SOCIAL_LINKS = {
  kakao: 'https://open.kakao.com/your-link',
  instagram: 'https://instagram.com/your-handle',
  email: 'mailto:your@email.com',
  phone: 'tel:+821012345678',
}

// ─── 아이콘 컴포넌트 ──────────────────────────────────────────────


function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

// ─── 공통 하단 (소셜 + 카피라이트) ───────────────────────────────
function SidebarBottom() {
  return (
    <div className="sidebar__bottom">
      <div className="sidebar__social">
        <a href={SOCIAL_LINKS.kakao} target="_blank" rel="noreferrer" aria-label="KakaoTalk">
          <i className="xi-kakao"></i>
        </a>
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
          <i className="xi-instagram"></i>
        </a>
        <a href={SOCIAL_LINKS.email} aria-label="Email">
          <i className="xi-mail"></i>
        </a>
        <a href={SOCIAL_LINKS.phone} aria-label="Phone">
          <i className="xi-call"></i>
        </a>
      </div>
      <p className="sidebar__copyright">© 2022-2026 Jay. All Rights Reserved.</p>
    </div>
  )
}

// ─── Props 타입 ───────────────────────────────────────────────────
interface SidebarListProps {
  mode: 'list'
}

interface SidebarDetailProps {
  mode: 'detail'
  project: Project
}

type SidebarProps = SidebarListProps | SidebarDetailProps

// ─── Sidebar 컴포넌트 ─────────────────────────────────────────────
export default function Sidebar(props: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="sidebar">
      {/* 로고 */}
      <Link href="/" className="sidebar__logo">
        JAYDAY
      </Link>

      {/* 모드별 중간 콘텐츠 */}
      {props.mode === 'list' ? (
        // ── 리스트 모드: 네비게이션 ──
        <nav className="sidebar__nav">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
            Work
          </Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
            About
          </Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </nav>
      ) : (
        // ── 상세 모드: 프로젝트 정보 ──
        <div>
          <p className="sidebar__project-name">{props.project.title}</p>
          <p className="sidebar__project-category">{props.project.category}</p>
          <p className="sidebar__project-desc">{props.project.description}</p>
          <p className="sidebar__project-period">{props.project.period}</p>
          {props.project.url && (
            <a
              href={props.project.url}
              target="_blank"
              rel="noreferrer"
              className="sidebar__view-link"
            >
              View Page
            </a>
          )}
        </div>
      )}

      {/* 하단 소셜 + 카피라이트 */}
      <SidebarBottom />
    </aside>
  )
}
