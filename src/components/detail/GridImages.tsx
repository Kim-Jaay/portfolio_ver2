import Image from 'next/image'
import type { GridSection } from '../../types/project'

interface GridImagesProps {
  section: GridSection
}

export default function GridImages({ section }: GridImagesProps) {
  return (
    <div className="gallery-section">
      <div className="gallery-section__grid">
        {section.images.map((src, index) => (
          <div key={index} className="gallery-section__grid-item">
            <Image
              src={src}
              alt=""
              width={720}
              height={540}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      {section.caption && (
        <p className="gallery-section__caption">{section.caption}</p>
      )}
    </div>
  )
}
