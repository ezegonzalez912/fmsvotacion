import React, { useState } from 'react'
import icon from '../img/buscador.png'

export const SelectVideo = ({setErrorVideo, focusVotar}) => {

    const [video, setVideo] = useState("https://www.youtube.com/embed/FSHAnFO7D18");

    const transfromLink = (e, link) => {
        e.preventDefault()

        const link1 = 'https://youtu.be/'
        const link2 = 'https://www.youtube.com/watch?v='

        if(link.length === 0){
            setErrorVideo(true)
            setTimeout(() => setErrorVideo(false), 2000)
        }else if(link.includes(link1)){
            const code = link.substr(17)
            setVideo(`https://www.youtube.com/embed/${code}`)
            focusVotar()
        }else if (link.includes(link2)){
            const code = link.substr(32).replace('&', '?')
            setVideo(`https://www.youtube.com/embed/${code}`)
            focusVotar()
        }else{
            setErrorVideo(true)
            setTimeout(() => setErrorVideo(false), 2000)
        }
        setInput('')
    } 

    const [input, setInput] = useState('')

    return (
        <div className='contenedor-video'>
            <img src={icon}></img>
            <form action='' onSubmit={(e) => transfromLink(e, input)}>
                <input placeholder='Agrega el link de la batalla o directo' tabIndex='-3' value={input} onChange={(e) => setInput(e.target.value)}/>
                <button tabIndex='-3' >Agregar</button>
            </form>
            <h1>Votación</h1>
            <div>
                <iframe tabIndex='-3' width="1280px" height="720" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}
