import '../resources/ArtistSection.css'
import Footer from "../components/Footer"
import { useEffect, useState } from 'react'
import SectionArtists from '../components/SectionList/SectionArtists';
import useGeolocation from '../hooks/useGeolocation';
import { GeolocationType } from '../data/geolocationType';

type responseObject = {
  artist: {
    _id:number,
    artistName:string,
    image: string
}
}

export const ArtistSection = () => {

  //const [artists,setArtists] = useState([]);
  const [mostPopularArtists,setMostPopularArtists] = useState<responseObject[]>([]);
  const [mostListenedArtists,setMostListenedArtists] = useState([]);
  const [mostPopularInCountry,setMostPopularInCountry] = useState([]);
  var location: GeolocationType = useGeolocation();

  useEffect(() => {
    setMostPopularArtists([]);
    console.log('Geolocation',location);
    //setArtists([])
    setMostListenedArtists([]);
    setMostPopularInCountry([]);
  },[])

    return (
      <div className="artistSection-container">
        <main id="artistSection-content">
          <div className='searchBar'>

          </div>
          <div id='artistlist-container'>
            <SectionArtists sectionTitle='Most popular' dataList={mostPopularArtists}/>
            <SectionArtists sectionTitle='Most Listened' dataList={mostListenedArtists}/>
            {location && <SectionArtists sectionTitle={'Most Popular in '+location.country} dataList={mostPopularInCountry}/>}
          </div>
        </main>
        <Footer/>
      </div>
    )
  }