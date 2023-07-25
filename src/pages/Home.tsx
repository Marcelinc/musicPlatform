import Footer from "../components/Footer"
import MobileApp from '/images/mobileapp2.png'
import '../resources/Home.css'
import PopularTracks from '../data/popularTracks.json'
import TopArtists from '../data/topArtists.json'
import SectionTracks from "../components/SectionList/SectionTracks"
import SectionArtists from "../components/SectionList/SectionArtists"


export const Home = () => {
  return (
    <div className="home-container">
      <section id="account">
        <p>
          Save tracks, follow artists, labels and build playlists. All for free.
        </p>
        <button>Sign up for free</button>
      </section>
      <SectionTracks title="Popular Tracks" list={PopularTracks}/>
      <SectionArtists title="Top artists of the Month" list={TopArtists}/>
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
