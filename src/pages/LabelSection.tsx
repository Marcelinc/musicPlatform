import labelsList from '../data/labels.json'
import {IoMdHeart} from 'react-icons/io'
import '../resources/LabelSection.css'

export const LabelSection = () => {
    return (
      <div className="label-container">
        <h1>Labels</h1>
        {labelsList.map(label => <div className="label">
          <div className='label-img'>
            <img src={label.imgUrl} alt='Spinnin Records' />
          </div>
          <div className='label-info'>
            <span>{label.name}</span>
            <span><IoMdHeart color='red'/> {label.followers}</span>
          </div>
        </div>)}
      </div>
    )
  }