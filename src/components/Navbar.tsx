import '../resources/Navbar.css'
import {Link} from 'react-router-dom'
import Searchbar from './Searchbar'

type NavbarProps = {
    username: string,
    loggedIn: boolean
}

export const Navbar = ({username,loggedIn}: NavbarProps) => {
  return (
    <nav className="navbar-container">
        <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/artists'>Artists</Link>
            <Link to='/labels'>Labels</Link>
        </div>
        <Searchbar/>
        {loggedIn ? <Link to='/me'>{username}</Link> : <Link to='/logIn'>Log in</Link>}
        
    </nav>
  )
}
