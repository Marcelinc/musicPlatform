import Footer from "../components/Footer"
import MobileApp from '/images/mobileapp2.png'
import '../resources/Home.css'
import PopularTracks from '../data/popularTracks.json'
import SectionTracks from "../components/SectionList/SectionTracks"
import SectionArtists from "../components/SectionList/SectionArtists"
import { useEffect, useState } from "react"
import { apiResponseType } from "../data/apiResponseType"
import Loading from "../components/Loading"

type responseObject = {
  artist: {
    _id:number,
    artistName:string,
    image: string
}
}

export const Home = () => {

  const [topArtists, setTopArtists] = useState<responseObject[]>([]);
  const month = new Date().getMonth();
  const monthList = ["January", "February", "March", "April", "May","June", "July", "August", "September","October","November","December"];
  const [loadingArtists,setLoadingArtists] = useState<Boolean>(true);

  useEffect(() => {
    //fetch data
    //@@artists of the month
    fetch(import.meta.env.VITE_APP_SERVER_API+'/artists/monthtop',{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((res: apiResponseType)  => {
      console.log('response',res?.data)
      if(res?.message === 'Success'){
        setTopArtists(res.data)
      }
    })
    .catch(err => console.log(err))
    .finally(() => {
      setLoadingArtists(false);
    });
  },[])

  return (
    <div className="home-container">
      <section id="account">
        <p>
          Save tracks, follow artists, labels and build playlists. All for free.
        </p>
        <button>Sign up for free</button>
      </section>
      {loadingArtists ? <Loading/> : <>
        <SectionTracks sectionTitle="Popular Tracks" tracksList={PopularTracks}/>
        <SectionArtists sectionTitle={"Top artists of the "+monthList[month]} dataList={topArtists}/>
      </>}
      <section id="mobileapp">
        <div id="mobileApp-img">
          <img src={MobileApp} alt="MobileApp Screen"/>
        </div>
        <div className="mobileApp-content">
          <p>Take music with you anywhere you go</p>
          <a href="https://dribbble.com/shots/6898748-RLING-Music-App-UI-Kit-Free-Download" target="_blank">Try our app</a>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
