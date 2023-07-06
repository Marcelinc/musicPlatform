import {IoMdSearch} from 'react-icons/io'
import '../resources/Searchbar.css'

const Searchbar = () => {
  return (
    <div className="searchbar-container">
        <input type='text' placeholder='Search'></input>
        <div className='icon-container'>
            <IoMdSearch size='1.4em' style={{position: 'absolute', right: '0.2em', top:'0.2em'}}/>
        </div>
    </div>
  )
}

export default Searchbar