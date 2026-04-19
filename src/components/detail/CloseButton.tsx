'use client'

import { useRouter } from 'next/navigation'

export default function CloseButton() {
  const router = useRouter()

  return (
    <button
      className="detail__close"
      onClick={() => router.push('/')}
      aria-label="목록으로 돌아가기"
    >
     <i className="xi-close"></i>
    </button>
  )
}
