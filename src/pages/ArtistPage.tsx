import { useNavigate, useParams } from 'react-router-dom'
import '../resources/ArtistPage.css'
import { useEffect, useState } from 'react'
import {IoMdHeart} from 'react-icons/io'
import {FaLocationDot} from 'react-icons/fa6'
import ContentBlock from '../components/ContentBlock'
import Footer from '../components/Footer'
import { artistType } from '../data/artistType'
import { apiResponseType } from '../data/apiResponseType'

const ArtistPage = () => {

  const {id} = useParams()
  const navigate = useNavigate();
  const [artist,setArtist] = useState<artistType>({
    id: 0,
    artistName:'',
    image:'',
    location:{
      name: '',
      countryCode: '',
    },
    followers:0,
    about: '',
    latest: null,
    tracks:[],
    playlists:[],
    popularTracks:[]
  })
  const apiUrl: string | undefined = import.meta.env.VITE_APP_SERVER_API;

  useEffect(() => {
    //fetch artist data
    fetch(apiUrl+'/artist/'+id,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((res: apiResponseType) => {
      console.log(res?.data)
      if(res?.message === 'Success'){
        setArtist(res.data);
      }
    })
    .catch(err => console.log(err))
  },[])

  return (
    <div className="artistPage-container">
      <section id='artist-banner'>
        <div id='artist-img'>
          <img src={artist.image} alt='Artist Image'/>
        </div>
        <div id='artist-info-container'>
          <div id='artist-info'>
            <span id='artistName'>{artist.artistName}</span>
            {artist.location ? <span id='location'>
              <FaLocationDot/> {artist.location.name}</span> : 
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
            <div className='section-list'>
              {/*artist.popularTracks.length > 0 ? artist.popularTracks.slice(0,4).map(track => <ContentBlock key={track.trackId} contentType='track' contentName={track.trackName} contentId={track.trackId} imgUrl={track.trackImg}/>) : 'No tracks'*/}
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
            {artist.playlists.length > 4 && <span className='section-more'>See more</span>}
            <div className='section-list'>
              {artist.playlists.length > 0 ? artist.playlists.slice(0,4).map(playlist => <ContentBlock key={playlist.playlistId} contentType='playlist' contentName={playlist.playlistName}
                contentId={playlist.playlistId} imgUrl={playlist.playlistImg}/>) : 'No playlists'}
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
            <img src={artist.latest?.trackImg} alt={artist.latest?.trackName} onClick={() => navigate('/track/'+artist.latest?.trackId)}/>
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
      <Footer/>
    </div>
  )
}

export default ArtistPage