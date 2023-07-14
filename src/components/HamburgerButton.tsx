import {useState} from 'react'
import { Link } from 'react-router-dom'
import '../resources/HamburgerButton.css'

const HamburgerButton = () => {

    const [active,setActive] = useState(false)

    const onClickHandler = () =>{
        setActive(!active)
        let lineOne = document.querySelector('#one')
        let lineTwo = document.querySelector('#two')
        let lineThree = document.querySelector('#three')
        if(!active){
            lineOne?.classList.add('active')
            lineTwo?.classList.add('active')
            lineThree?.classList.add('active')
        } else{
            lineOne?.classList.remove('active')
            lineTwo?.classList.remove('active')
            lineThree?.classList.remove('active')
        }
    }

  return (
    <div className="burger-container" onClick={onClickHandler}>
        <span className="line" id="one"></span>
        <span className="line" id="two"></span>
        <span className="line" id="three"></span>
        {active && <div id='burger-links'>
            <Link to='/'>Home</Link>
            <Link to='/artists'>Artists</Link>
            <Link to='/labels'>Labels</Link>
        </div>}
        
    </div>
  )
}

export default HamburgerButton