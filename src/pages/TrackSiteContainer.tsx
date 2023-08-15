import { useParams } from 'react-router-dom'
import '../resources/TrackSite.css'

const TrackSiteContainer = () => {
    const {id} = useParams()
  return (
    <div className="track-container">Track {id}</div>
  )
}

export default TrackSiteContainer