import '../../resources/SectionContainer.css'

type SectionProps = {
    title:string,
    list: {
        id:number,
        artistName:string,
        image: string
    }[]
}

const SectionArtists = ({title,list}:SectionProps) => {
  return (
    <section className='section-container'>
        <h2>{title}</h2>
        <div className='section-list'>
            {list?.map((item => (
                <div className='section-item' key={item.id}>
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