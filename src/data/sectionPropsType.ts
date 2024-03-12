export type SectionArtistsProps = {
    sectionTitle:string,
    dataList: {
        artist: {
            _id:number,
            artistName:string,
            image: string
        }
    }[]
}