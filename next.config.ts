import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 외부 이미지 도메인 허용 (필요 시 추가)
  images: {
    // 외부 URL 이미지를 쓰는 경우 여기에 도메인 추가
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'example.com' },
    // ],

    // /public/images 로컬 이미지만 쓴다면 설정 불필요
  },

  // 정적 파일 출력 (Vercel은 필요 없음 — GitHub Pages는 'export' 사용)
  // output: 'export',
}

export default nextConfig
