import { useEffect, useState } from "react"
import LabelsData from '../data/labels.json'
import { Link, Outlet, useParams, useOutletContext} from "react-router-dom"
import '../resources/LabelSite/LabelPage.css'
import Border from "../components/Border"
import {IoMdHeart} from 'react-icons/io'
import {ImFacebook, ImSoundcloud, ImSpotify, ImYoutube} from 'react-icons/im'
import Footer from "../components/Footer"

interface Label {
    id: number,
    name: string,
    key: string,
    followers: number,
    description: string,
    imgUrl: string,
    tags: {key: string,value: string}[]
}
type ContextType = {
    labelDesc: string
}

const LabelSite = () => {

    const [loading,setLoading] = useState(true)
    const [label,setLabel] = useState<Label>({id: 0,
        name: '',
        key: '',
        followers: 0,
        description: '',
        imgUrl: '',
        tags: [{key: '',value: ''}]})

    const labelKey = useParams()

    useEffect(() => {
        var labelData = LabelsData.find(label => label.key === labelKey.name)
        if(labelData){
            setLabel(labelData)
        }
        setLoading(false)
    },[])

  return (
    <div className="labelSite-container">
        <main id="labelSite-content">
            {loading ? <div className="loading">
                Loading
            </div> : <>
                <div className="leftbar">
                    <div className="label-img-container">
                        <img src={label.imgUrl} alt={label.name}/>
                    </div>
                    <span className="labelname">{label.name}</span>
                    <Border/>
                    <div className="label-followers">
                        <span><IoMdHeart color='red'/> {label.followers}</span>
                        <button className="label-follow">Follow</button>
                    </div>
                    <div className="label-socials">
                        <Link to='#' className="fb"><ImFacebook/><span className="socials-name">Facebook</span></Link>
                        <Link to='#' className="yt"><ImYoutube/><span className="socials-name">Youtube</span></Link>
                        <Link to='#' className="soundcloud"><ImSoundcloud/><span className="socials-name">Soundcloud</span></Link>
                        <Link to='#' className="spotify"><ImSpotify/><span className="socials-name">Spotify</span></Link>
                    </div>
                </div>
                <div className="rightbar">
                    <div className="label-nav">
                        <Link to={'/label/'+label.key} >Overall</Link>
                        <Link to='artists' >Artists</Link>
                        <Link to='tracks' >Tracks</Link>
                    </div>
                    <div className="label-content">
                        <Outlet context={{labelDesc:label.description}}/>
                    </div>
                </div>
            </>}
        </main>
        <Footer/>
    </div>
  )
}

export default LabelSite

export function getLabelDesc(){
    return useOutletContext<ContextType>()
}