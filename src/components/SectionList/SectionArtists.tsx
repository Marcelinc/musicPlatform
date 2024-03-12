/**List of artists - in a row */

import { useNavigate } from 'react-router-dom'
import '../../resources/SectionContainer.css'
import { SectionArtistsProps } from '../../data/sectionPropsType';

const SectionArtists = ({sectionTitle,dataList}:SectionArtistsProps) => {

    const navigate = useNavigate();
    //console.log('artistslist',dataList)

    //navigate to the artist's page
    const redirectToArtist = (artistId:number) => {
        //console.log('redirectToArtist', artistId)
        navigate('/artist/'+artistId);
    }

  return (
    <section className='section-container'>
        <h2>{sectionTitle}</h2>
        <div className='section-list'>
            {dataList?.map((item => (<div className='section-item' key={item.artist._id} onClick={() => redirectToArtist(item.artist._id)}>
                    <div className='section-image'>
                        <img src={item.artist.image} alt='Artist Image'/>
                    </div>
                    <span className='section-item-name'>{item.artist.artistName}</span>
                </div>)
            ))}
        </div>
    </section>
  )
}

export default SectionArtists