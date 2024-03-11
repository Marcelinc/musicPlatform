import { countryType } from "./countryType";

export type artistType = {
    id:number,
    artistName:string,
    image:string,
    location:countryType,
    followers:number,
    about: string,
    latest: {
        trackId: number,
        trackName:string,
        trackImg:string,
    } | null,
    tracks: {
        trackId: number,
        trackName:string,
        trackImg:string,
    }[] | [],
    playlists: {
        playlistId: number,
        playlistName:string,
        playlistImg:string
    }[] | [],
    popularTracks: {
        trackId: number,
        trackName:string,
        trackImg:string,
    }[] | [];
}