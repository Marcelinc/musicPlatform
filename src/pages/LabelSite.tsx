import { useEffect, useState } from "react"
import LabelsData from '../data/labels.json'
import { Link, useParams } from "react-router-dom"
import '../resources/Labelsite.css'
import Border from "../components/Border"
import {IoMdHeart} from 'react-icons/io'

interface Label {
    id: number,
    name: string,
    key: string,
    followers: number,
    description: string,
    imgUrl: string,
    tags: {key: string,value: string}[]
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
    console.log(labelKey)

    useEffect(() => {
        var labelData = LabelsData.find(label => label.key === labelKey.name)
        if(labelData){
            setLabel(labelData)
        }
        setLoading(false)
    },[])

  return (
    <div className="labelSite-container">
        {loading ? <div className="loading">
            Loading
        </div> : <>
            <div className="leftbar">
                <img src={label.imgUrl} alt={label.name}/>
                <span className="labelname">{label.name}</span>
                <Border/>
                <div className="label-followers">
                    <span><IoMdHeart color='red'/> {label.followers}</span>
                    <button className="label-follow">Follow</button>
                </div>
                <div className="label-socials">
                    <Link to='#'>Facebook</Link>
                    <Link to='#'>Youtube</Link>
                    <Link to='#'>Soundcloud</Link>
                </div>
            </div>
            <div className="rightbar">
                <div className="label-nav">
                    <Link to='' >Overall</Link>
                    <Link to='artists' >Artists</Link>
                    <Link to='tracks' >Tracks</Link>
                </div>
                <div className="label-content">

                </div>
            </div>
        </>}
    </div>
  )
}

export default LabelSite