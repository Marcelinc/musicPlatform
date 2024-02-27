import { useEffect } from 'react'
import '../../resources/LabelSite/LabelOverall.css'
import { getLabelDesc } from '../../pages/LabelPage'

const LabelOverall = () => {

  const labelContext = getLabelDesc()

  useEffect(() => {
    console.log(labelContext)
  },[])

  return (
    <div className="label-overall">
      <section className="about">
        <h2 className="header">About</h2>
        <p>{labelContext.labelDesc}</p>
      </section>
      <section className="news">
        <h2 className="header">News</h2>
        <div className='news-content'>
          <div className='news-img'>
            <img src='#' alt='news-img'/>
          </div>
          <div className='news-'></div>
        </div>
      </section>
      <section className="last-tracks">
        <h2 className='header'>Recently released</h2>
      </section>
    </div>
  )
}

export default LabelOverall

