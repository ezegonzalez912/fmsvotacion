import React from 'react'
import { VideoItem } from './VideoItem'

export const VideoList = ({setVideoLink}) => {
    return (<>
        <h3>Recomendados</h3>
        <div className='listVideos'>    
            <VideoItem titulo={'Freestyle Boom Bap Beat | "HIGH"'} id={'HIfxZqQeNk8'} setVideoLink={setVideoLink}/>
            <VideoItem titulo={'Base de Rap Boom Bap Underground Hip Hop'} id={'HsdhO-RYyI4'} setVideoLink={setVideoLink}/>
            <VideoItem titulo={'Dicelo Al Micro" - Boom Bap Beat'} id={'wm-LMc_fCj8'} setVideoLink={setVideoLink}/>
            <VideoItem titulo={'Melodic Type Beat - "No Love"'} id={'HIfxZqQeNk8'} setVideoLink={setVideoLink}/>
            <VideoItem titulo={'Roddy Ricch x Pop Smoke Type Beat | HAVANA'} id={'l9TcCBN4ROg'} setVideoLink={setVideoLink}/>
            <VideoItem titulo={'Smooth Guitar Beat - "Moody" '} id={'PZGMbO6kgbU'} setVideoLink={setVideoLink}/>
            <VideoItem titulo={'Lil Baby x Quavo Type Beat 700'} id={'0RwNcz_dulM'} setVideoLink={setVideoLink}/>
            <VideoItem titulo={'"Lacoste África" Beat de Funk Consciente 2020'} id={'LlCzXBttv_8'} setVideoLink={setVideoLink}/>
            <VideoItem titulo={'Fast Rap Trap Beat Instrumental DINERO'} id={'EhmWLNWpQdw'} setVideoLink={setVideoLink}/>
            <VideoItem titulo={'"EL MUNDO ES TUYO" RAP/TRAP BEAT INSTRUMENTAL'} id={'YVkeAcWYVJE'} setVideoLink={setVideoLink}/>
            <VideoItem titulo={'Nerso & Verse - De Locos (Ibai Instrumental)'} id={'H6LMs0-lxKU'} setVideoLink={setVideoLink}/>
            <VideoItem titulo={'TYPE BEAT DOBLE TEMPO 4X4'} id={'RZgXqe1j8tM'} setVideoLink={setVideoLink}/>
            <VideoItem titulo={'Nerso & Verse - Tik Tok'} id={'ONj6SZUhwkU'} setVideoLink={setVideoLink}/>
        </div>
    </>)
}
