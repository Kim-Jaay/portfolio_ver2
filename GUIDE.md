# JAYDAY Portfolio — 셋업 & 배포 가이드

## 1. 최초 셋업 (한 번만)

### 필요한 것
- Node.js 18 이상 (https://nodejs.org)
- VS Code (https://code.visualstudio.com)
- GitHub 계정 (https://github.com)
- Vercel 계정 (https://vercel.com) — GitHub으로 가입

### 설치 순서

```bash
# 1. 이 폴더를 열고 의존성 설치
npm install

# 2. 로컬에서 실행 확인
npm run dev
# → http://localhost:3000 에서 확인
```

---

## 2. GitHub 연동 (한 번만)

```bash
# GitHub에서 새 레포지토리 생성 후

git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

---

## 3. Vercel 배포 + 도메인 연결 (한 번만)

1. https://vercel.com 접속 → "Add New Project"
2. GitHub 레포지토리 선택 → "Deploy" 클릭
3. 자동 배포 완료 (약 1-2분)

### 도메인 연결
1. Vercel 프로젝트 → Settings → Domains
2. 구입한 도메인 입력 후 추가
3. 도메인 구입처(가비아, 후이즈 등)의 DNS 설정에서:
   - Type: CNAME
   - Name: www (또는 @)
   - Value: cname.vercel-dns.com
4. 보통 30분~1시간 내 적용

---

## 4. 분기별 업데이트 방법

### 새 프로젝트 추가

**Step 1 — 이미지 준비**
```
public/
└── images/
    └── 새프로젝트명/
        ├── thumb.jpg   ← 썸네일 (1200×525px 권장)
        ├── hero.jpg    ← 대표 이미지 (1440×810px 권장)
        ├── img1.jpg    ← 그리드 이미지
        └── img2.jpg
```

**Step 2 — data/projects.json 맨 앞에 추가**
```json
{
  "id": "newproject",
  "slug": "newproject",
  "title": "프로젝트 이름",
  "category": "Web Design | Publishing",
  "thumbnail": "/images/newproject/thumb.jpg",
  "date": "2026.07",
  "period": "2026.06 - 2026.07",
  "description": "프로젝트 설명",
  "url": "https://완성된사이트주소.com",
  "sections": [
    {
      "type": "full",
      "image": "/images/newproject/hero.jpg",
      "caption": "이미지 캡션"
    },
    {
      "type": "grid",
      "images": [
        "/images/newproject/img1.jpg",
        "/images/newproject/img2.jpg"
      ],
      "caption": "그리드 이미지 캡션"
    }
  ]
}
```

**Step 3 — 배포**
```bash
git add .
git commit -m "add new project: 프로젝트이름"
git push
```
→ Vercel이 자동으로 빌드 & 배포 (약 1-2분)

---

## 5. section 타입 종류

| type   | 설명                      | 필드                          |
|--------|---------------------------|-------------------------------|
| `full` | 가로 전체 이미지          | `image`, `caption`(선택)      |
| `grid` | 2열 그리드 이미지         | `images[]`, `caption`(선택)   |

caption에 줄바꿈이 필요하면 `\n` 사용:
```json
"caption": "첫 번째 줄\n두 번째 줄"
```

---

## 6. 자주 수정하는 부분

| 수정 내용               | 파일 위치                                    |
|-------------------------|----------------------------------------------|
| 프로젝트 추가/수정      | `data/projects.json`                         |
| 프로젝트 이미지         | `public/images/프로젝트명/`                  |
| 소셜 링크               | `src/components/Sidebar.tsx` → SOCIAL_LINKS  |
| About 내용              | `src/app/about/page.tsx`                     |
| Contact 내용            | `src/app/contact/page.tsx`                   |
| 카피라이트 연도         | `src/components/Sidebar.tsx` → SidebarBottom |
| SEO 메타데이터          | `src/app/layout.tsx` → metadata              |
| 도메인                  | `src/app/layout.tsx` → metadataBase          |
