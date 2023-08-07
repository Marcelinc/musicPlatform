import '../../resources/SectionContainer.css'

type SectionProps = {
    title: string,
    list: {id:number, name: string, imgUrl: string,artist: {
        id:number, artistName: string}[]}[]
}

const SectionTracks = ({title,list}:SectionProps) => {
  return (
    <section className='section-container'>
        <h2>{title}</h2>
        <div className='section-list snaps-inline'>
            {list?.map((item => (
                <div className='section-item' key={item.id}>
                    <div className='section-image'>
                        <img src={`/images/${item.imgUrl}`} alt='Track Image'/>
                    </div>
                    <span className='section-item-name'>{item.name}</span>
                    <span className='section-item-owner'>{item.artist[0].artistName}</span>   
                </div>)
            ))}
        </div>
    </section>
  )
}

export default SectionTracks