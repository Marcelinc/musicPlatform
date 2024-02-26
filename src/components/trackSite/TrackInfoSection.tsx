import React from "react"
import '../../resources/TrackSite/trackInfoSection.css'

type TrackInfoSectionProps = {
    title: string,
    children: React.ReactNode
} 

const TrackInfoSection = ({children,title}: TrackInfoSectionProps) => {
  return (
    <section className="section-container">
      <p className="section-line"></p>
      <h3 className="section-title">{title}</h3>
      <div className="section-content">
          {children}
      </div>
    </section>
  )
}

export default TrackInfoSection