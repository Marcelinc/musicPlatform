import { useNavigate } from 'react-router-dom'
import '../../resources/TrackSite/artistBlock.css'
type ArtistBlockProps = {
    artistImageSrc: string,
    artistName: string,
    artistId: number
}
const ArtistBlock = ({artistImageSrc, artistName, artistId} : ArtistBlockProps) => {

  const navigate = useNavigate();

  return (
    <div className="artist-block-container" onClick={() => navigate('/artist/'+artistId)}>
        <div>
            <img src={artistImageSrc}/>
        </div>
        <span>{artistName}</span>
    </div>
  )
}

export default ArtistBlock