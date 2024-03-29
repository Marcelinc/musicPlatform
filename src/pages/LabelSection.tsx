import labelsList from '../data/labels.json'
import {IoMdHeart} from 'react-icons/io'
import '../resources/LabelSection.css'
import MusicTag from '../components/MusicTag'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export const LabelSection = () => {

  const navigate = useNavigate()

  const onClickHandler = (labelname: string) => {
    navigate(`/label/${labelname}`)
  }

    return (
      <div className="label-container">
        <h1>Labels</h1>
        <section className='label-list'>
          {labelsList.map(label => <div key={label.id} className="label" onClick={() => onClickHandler(label.key)}>
            <div className='label-img'>
              <img src={label.imgUrl} alt='Spinnin Records' />
            </div>
            <div className='label-info'>
              <h2>{label.name}</h2>
              <div className='label-desc'>{label.description}</div>
              <div className='label-tags'>
                <span><IoMdHeart color='red'/> {label.followers}</span>
                {label.tags.map((tag,index) => <MusicTag key={index} tagName={tag.value} tagKey={tag.key}/>)}
              </div>
            </div>
          </div>)}
        </section>
        <Footer/>
      </div>
    )
  }