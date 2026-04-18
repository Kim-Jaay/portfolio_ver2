import type { Section } from '../../types/project'
import FullImage from './FullImage'
import GridImages from './GridImages'

interface DetailGalleryProps {
  sections: Section[]
}

export default function DetailGallery({ sections }: DetailGalleryProps) {
  return (
    <div className="detail-gallery">
      {sections.map((section, index) => {
        if (section.type === 'full') {
          return <FullImage key={index} section={section} />
        }
        if (section.type === 'grid') {
          return <GridImages key={index} section={section} />
        }
        return null
      })}
    </div>
  )
}
