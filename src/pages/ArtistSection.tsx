import '../resources/ArtistSection.css'
import Footer from "../components/Footer"
import { useEffect, useState } from 'react'
import SectionArtists from '../components/SectionList/SectionArtists';
import useGeolocation from '../hooks/useGeolocation';

import mostPopularArtists from '../data/mostPopularArtists.json';

type GeolocationType = {
  country: String,
  countryCode: String
}

export const ArtistSection = () => {

  const [artists,setArtists] = useState([]);
  const [mostPopularArtists,setMostPopularArtists] = useState([]);
  const [mostListenedArtists,setMostListenedArtists] = useState([]);
  const [mostPopularInCountry,setMostPopularInCountry] = useState([]);
  var location: GeolocationType = useGeolocation();

  useEffect(() => {
    setMostPopularArtists(mostPopularArtists);
    console.log('Geolocation',location);
    setArtists([])
  },[])

    return (
      <div className="artistSection-container">
        <main id="artistSection-content">
          <div className='searchBar'>

          </div>
          <div id='artistlist-container'>
            <SectionArtists sectionTitle='Most popular' artistsList={mostPopularArtists}/>
            <SectionArtists sectionTitle='Most Listened' artistsList={mostListenedArtists}/>
            {location && <SectionArtists sectionTitle={'Most Popular in '+location.country} artistsList={mostPopularInCountry}/>}
          </div>
        </main>
        <Footer/>
      </div>
    )
  }