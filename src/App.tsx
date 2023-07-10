import './resources/App.css'
import { ArtistSection } from './pages/ArtistSection'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { LabelSection } from './pages/LabelSection'
import { Navbar } from './components/Navbar'
import UserProfile from './pages/UserProfile'
import LabelSite from './pages/LabelSite'

function App() {

  return (
    <>
    <Navbar username='Username' loggedIn={true}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/artists' element={<ArtistSection/>} />
        <Route path='/labels' element={<LabelSection/>} />
        <Route path='/label/:name/:submenu?' element={<LabelSite/>}/>
        <Route path='/me' element={<UserProfile/>}/>
      </Routes>
    </>
  )
}

export default App
