import './resources/App.css'
import { ArtistSection } from './pages/ArtistSection'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { LabelSection } from './pages/LabelSection'
import { Navbar } from './components/Navbar'
import UserProfile from './pages/UserProfile'
import LabelSite from './pages/LabelSite'
import LabelOverall from './components/labelSite/LabelOverall'
import LabelArtists from './components/labelSite/LabelArtists'
import LabelTracks from './components/labelSite/LabelTracks'
import TrackSiteContainer from './pages/TrackSiteContainer'
import ArtistPage from './pages/ArtistPage'
import PlaylistPage from './pages/PlaylistPage'
import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <>
    <Navbar username='Username' loggedIn={false}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/artists' element={<ArtistSection/>} />
        <Route path='/labels' element={<LabelSection/>} />
        <Route path='/label/:name' element={<LabelSite/>}>
          <Route path='' element={<LabelOverall/>}/>
          <Route path='artists' element={<LabelArtists/>}/>
          <Route path='tracks' element={<LabelTracks/>}/>
        </Route>
        <Route path='/track/:id' element={<TrackSiteContainer/>}/>
        <Route path='/playlist/:id' element={<PlaylistPage/>}/>
        <Route path='/artist/:id' element={<ArtistPage/>}/>
        <Route path='/me' element={<UserProfile/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}

export default App
