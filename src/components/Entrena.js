import React, { useState } from 'react'
import { SearchBar } from './SearchBar';
import ReactPlayer from 'react-player'
import { Contador } from './Contador';
import { VideoList } from './VideoList';

export const Entrena = () => {

    const [videoLink, setVideoLink] = useState('https://www.youtube.com/embed/iTDi6J5pkrM')

    const [playing, setPlaying] = useState(false)

    const [volume, setVolume] = useState(0.5)

    return (<>
        <h1 className='entrenaTitle'>Entrena tu freestyle</h1>
        <div className='entrenaContenedor'>
            <div className='setVideoContainer'>
                <SearchBar setVideoLink={setVideoLink}/>
                <div className='videoEntrena'>
                    <VideoList setVideoLink={setVideoLink}/>
                    <ReactPlayer url={videoLink} width={396} loop={true} height={223} playing={true} controls={true} progressInterval={10000} volume={volume}/>
                </div>
            </div>
            <Contador />
        </div></>
    )
}
