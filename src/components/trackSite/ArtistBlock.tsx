import '../../resources/TrackSite/artistBlock.css'
type ArtistBlockProps = {
    artistImageSrc: string,
    artistName: string
}
const ArtistBlock = ({artistImageSrc, artistName} : ArtistBlockProps) => {
  return (
    <div className="artist-block-container">
        <div>
            <img src={artistImageSrc}/>
        </div>
        <span>{artistName}</span>
    </div>
  )
}

export default ArtistBlock