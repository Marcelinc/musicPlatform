import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../resources/TrackSite.css'
import TrackList from '../data/tracks.json'
import { FaPlay, FaPause, FaHeart, FaShareFromSquare } from 'react-icons/fa6'
import { MdPlaylistAdd } from 'react-icons/md'
import ActionButton from '../components/trackSite/ActionButton'
import MusicTag from '../components/MusicTag'
import TrackInfoSection from '../components/trackSite/TrackInfoSection'
import ArtistBlock from '../components/trackSite/ArtistBlock'

const TrackSiteContainer = () => {
  const {id} = useParams()
  //const navigate = useNavigate()
  const [track,setTrack] = useState<typeof TrackList[0]>()
  const [playingTrack,setPlayingTrack] = useState(false)

  useEffect(() => {
    let trackObject;
    if(id){
      //find track with given id
      trackObject = TrackList.find(track => track.id == +id);
      setTrack(trackObject);

      //redirect to error page if there is no track user is looking for
      //if(!trackObject)
       // navigate('/errorPage');
    }
  },[])

  const onPlay = () => {
    setPlayingTrack(!playingTrack)
  }

  return (
    <div className="track-container">
      <section className='track-banner'>
        <div className='banner-img' onClick={onPlay}>
          <img src={track?.imgUrl} alt={track?.name}/>
          {!playingTrack && <FaPlay className='playerIcon'/>}
          {playingTrack && <FaPause className='playerIcon'/>}
        </div>
        <div className='banner-desc'>
          <p className='track-name'>{track?.name}</p>
          <div className='trackPath'>Not available</div>
        </div>
      </section>
      <section className='action-container'>
        <div className='action-bar'>
          <ActionButton title='Like' icon={<FaHeart/>}/>
          <ActionButton title='Share' icon={<FaShareFromSquare/>}/>
          <ActionButton title='Add to playlist' icon={<MdPlaylistAdd size={25}/>}/>
        </div>
        <div className='action-info'>
          <FaPlay/> {track?.plays}
        </div>
      </section>
      <section className='track-genres'>
        {track?.genre.map(g => <MusicTag key={g.key} tagKey={g.key} tagName={g.value}/>)}
      </section>
      <TrackInfoSection title="Artist">
        {track?.artist.map(a => <ArtistBlock key={a.id} artistName={a.artistName} artistImageSrc={a.artistImageSrc}/>)}
      </TrackInfoSection>
      {track?.publisher !== "" && <TrackInfoSection title="Publisher">
        <p>{track?.publisher}</p>
      </TrackInfoSection>}
      <TrackInfoSection title="Release date">
        <p>{track?.releaseDate}</p>
      </TrackInfoSection>
      <TrackInfoSection title={`More from ${track?.artist[0].artistName}`}>
        <p>{}</p>
      </TrackInfoSection>
    </div>
  )
}

export default TrackSiteContainer