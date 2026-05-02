import Sidebar from '../../components/Sidebar'

export default function AboutPage() {
  return (
    <div className="layout">
      <Sidebar mode="list" />
      <main className="main">
        <div className="page-content">
          <h1>About</h1>
          {/* ── 아래 내용을 자유롭게 수정하세요 ── */}
          <p>
            안녕하세요, 웹 디자이너 & 퍼블리셔 Jay입니다.
          </p>
          <p>
            브랜드의 아이덴티티를 화면에 담는 작업을 합니다.<br/>
            UI/UX 설계부터 HTML/CSS 퍼블리싱까지 전 과정을 진행합니다.
          </p>
          <p>
            문의:{' '}
            <a href="mailto:woo_boo@naver.com">woo_boo@naver.com</a>
          </p>
        </div>
      </main>
    </div>
  )
}
