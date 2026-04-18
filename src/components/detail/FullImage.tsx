import Image from 'next/image'
import type { FullSection } from '../../types/project'

interface FullImageProps {
  section: FullSection
}

export default function FullImage({ section }: FullImageProps) {
  return (
    <div className="gallery-section">
      <div className="gallery-section__full">
        <Image
          src={section.image}
          alt=""
          width={1440}
          height={810}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      {section.caption && (
        <p className="gallery-section__caption">{section.caption}</p>
      )}
    </div>
  )
}
