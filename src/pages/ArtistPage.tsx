import { useParams } from 'react-router-dom'
import '../resources/ArtistPage.css'
import { useEffect, useState } from 'react'
import Artists from '../data/artists.json'
import {IoMdHeart} from 'react-icons/io'
import {FaLocationDot} from 'react-icons/fa6'
import ContentBlock from '../components/ContentBlock'

type ArtistType = {
  id:number,
  artistName:string,
  image:string,
  location:string,
  followers:number,
  about: string,
  latest: {
    trackId: number,
    trackName:string,
    trackImg:string,
  } | null,
  tracks: {
    trackId: number,
    trackName:string,
    trackImg:string,
  }[] | [],
}

const ArtistPage = () => {

  const {id} = useParams()
  const [artist,setArtist] = useState<ArtistType>({
    id: 0,
    artistName:'',
    image:'',
    location:'',
    followers:0,
    about: '',
    latest: null,
    tracks:[]
  })

  useEffect(() => {
    let artist = Artists.find(art => art.id+'' === id)
    console.log(artist)
    if(artist){
      setArtist(artist)
    }
  },[])

  return (
    <div className="container">
      <section id='artist-banner'>
        <div id='artist-img'>
          <img src={artist.image} alt='Artist Image'/>
        </div>
        <div id='artist-info-container'>
          <div id='artist-info'>
            <span id='artistName'>{artist.artistName}</span>
            {artist.location ? <span id='location'>
              <FaLocationDot/> {artist.location}</span> : 
            <span id='location'></span>}
          </div>
          <div id='artist-follow'>
            <span id='followers-count'>{artist.followers} <IoMdHeart color='darkred'/></span>
            <button disabled={true}>Follow</button>
          </div>
        </div>
      </section>
      <div id='artist-main-content'>
        <div id='artist-content'>
          <section className='artist-section'>
            <h2 className='section-header'>Popular</h2>
            <span className='section-more'>See more</span>
            <div>
              No tracks
            </div>
          </section>
          <section className='artist-section'>
            <h2 className='section-header'>Tracks</h2>
            {artist.tracks.length > 4 && <span className='section-more'>See more</span>}
            <div className='section-list'>
              {artist.tracks.length > 0 ? artist.tracks.slice(0,4).map(track => <ContentBlock key={track.trackId} contentType='track' contentName={track.trackName}
                contentId={track.trackId} imgUrl={track.trackImg}/>) : 'No tracks'}
            </div>
          </section>
          <section className='artist-section'>
            <h2 className='section-header'>Playlists</h2>
            <span className='section-more'>See more</span>
            <div className='artist-section-list'>
              No tracks
            </div>
          </section>
        </div>
        <div id='artist-aside'>
          <section id='artist-about'>
            <h2>About</h2>
            {artist.about}
          </section>
          <section id='artist-latest'>
            <h2>Latest</h2>
            <img src={artist.latest?.trackImg} alt={artist.latest?.trackName}/>
            <span>{artist.latest?.trackName}</span>
          </section>
          <section id='artist-socials'>
            <h2>Socials</h2>
            <div id='social-links'>
              <span className='fb'>Facebook</span>
              <span className='inst'>Instagram</span>
              <span className='yt'>Youtube</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ArtistPage