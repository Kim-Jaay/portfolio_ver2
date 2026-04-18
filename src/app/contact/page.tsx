import Sidebar from '../../components/Sidebar'

export default function ContactPage() {
  return (
    <div className="layout">
      <Sidebar mode="list" />
      <main className="main">
        <div className="page-content">
          <h1>Contact</h1>
          {/* ── 아래 내용을 자유롭게 수정하세요 ── */}
          <p>
            프로젝트 문의, 협업 제안은 언제든 환영합니다.
          </p>
          <p>
            Email: <a href="mailto:your@email.com">your@email.com</a>
          </p>
          <p>
            KakaoTalk:{' '}
            <a href="https://open.kakao.com/your-link" target="_blank" rel="noreferrer">
              오픈 채팅
            </a>
          </p>
          <p>
            Instagram:{' '}
            <a href="https://instagram.com/your-handle" target="_blank" rel="noreferrer">
              @your-handle
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
