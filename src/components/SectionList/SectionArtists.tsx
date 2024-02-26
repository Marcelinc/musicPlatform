import { useNavigate } from 'react-router-dom'
import '../../resources/SectionContainer.css'

type SectionProps = {
    sectionTitle:string,
    artistsList: {
        id:number,
        artistName:string,
        image: string
    }[]
}

const SectionArtists = ({sectionTitle,artistsList}:SectionProps) => {

    const navigate = useNavigate();
    console.log('artistslist',artistsList)

    //navigate to the artist's page
    const redirectToArtist = (artistId:number) => {
        console.log('redirectToArtist', artistId)
        navigate('/artist/'+artistId);
    }

  return (
    <section className='section-container'>
        <h2>{sectionTitle}</h2>
        <div className='section-list'>
            {artistsList?.map((item => (
                <div className='section-item' key={item.id} onClick={() => redirectToArtist(item.id)}>
                    <div className='section-image'>
                        <img src={`/images/${item.image}`} alt='Artist Image'/>
                    </div>
                    <span className='section-item-name'>{item.artistName}</span>
                </div>)
            ))}
        </div>
    </section>
  )
}

export default SectionArtists