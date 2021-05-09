import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export const VideoItem = ({titulo, id, setVideoLink}) => {
    return (
        <div className='beatContenedor'>
            <h1>{titulo}</h1>
            <FontAwesomeIcon icon={faPlay} onClick={() => setVideoLink(`https://www.youtube.com/embed/${id}`)}/>
        </div>
    )
}

