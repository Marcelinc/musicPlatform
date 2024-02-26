import { useNavigate } from 'react-router-dom'
import '../../resources/SectionContainer.css'

type SectionProps = {
    sectionTitle: string,
    tracksList: {id:number, name: string, imgUrl: string,artist: {
        id:number, artistName: string}[]}[]
}

const SectionTracks = ({sectionTitle,tracksList}:SectionProps) => {

    const navigate = useNavigate()
    const redirectToTrack = (id:number) => {
        //navigate('/track/' + id)
        console.log(id)
    }
    const redirectToArtist = (id:number) => {
        navigate('/artist/' + id)
    }

  return (
    <section className='section-container'>
        <h2>{sectionTitle}</h2>
        <div className='section-list snaps-inline'>
            {tracksList?.map((item => (
                <div className='section-item' key={item.id}>
                    <div className='section-image' onClick={() => redirectToTrack(item.id)}>
                        <img src={`/images/${item.imgUrl}`} alt='Track Image'/>
                    </div>
                    <span className='section-item-name' /*onClick={() => redirectToTrack(item.id)}*/>{item.name}</span>
                    <span className='section-item-owner' onClick={() => redirectToArtist(item.artist[0].id)}>{item.artist[0].artistName}</span>   
                </div>)
            ))}
        </div>
    </section>
  )
}

export default SectionTracks