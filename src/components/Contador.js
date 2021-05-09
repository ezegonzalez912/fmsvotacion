import React, { useEffect, useState } from 'react'
import { palabras } from './palabras'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faUndoAlt } from '@fortawesome/free-solid-svg-icons'

export const Contador = () => {

    const [mode, setMode] = useState('easymode')

    const [time, setTime] = useState(60)

    const [timeMax, setTimeMax] = useState(60)

    const [play, setPlay] = useState(false)
    
    useEffect(() => {
        if (play){
            if(time > 0){
                setTimeout(() => {
                    setTime(time - 1)
                }, 1000)
            }
        }else{
            setTime(timeMax)
        }
    })

    const tagAleatorio = (num) => {
        const numRandom = Math.random() * palabras[num].palabras.length;
        const numRandom2 = Math.floor(numRandom);
        return palabras[num].palabras[numRandom2];
    };

    const reset = () => {
        setPlay(false)
    }

    const [palabra, setPalabra] = useState('')

    const [timePalabras, setTimePalabras] = useState(10)

    useEffect(() => {
        if(play === true && time % timePalabras === 0 && mode != 'tematicas'){
            if(time>0){
                setPalabra(tagAleatorio(0))
            }else{
                setPalabra('')
            } 
        }
    }, [time, play])

    useEffect(() => {
        if(play === true && mode === 'tematicas'){
            setPalabra(tagAleatorio(1))
        }
    }, [play])

    const addTime = () => {
        if(play === false && time<180){
            setTime(time + 10)
            setTimeMax(time + 10)
        }
    }

    const resTime = () => {
        if(play === false && time>60){
            setTime(time - 10)
            setTimeMax(time - 10)
        }
    }

    const selectEasy = () => {
        setMode('easymode')
        setPlay(false)
        setTimePalabras(10)
    }

    const selectHard = () => {
        setMode('hardmode')
        setPlay(false)
        setTimePalabras(5)
    }

    const selectTematica = () => {
        setMode('tematicas')
        setPlay(false)
        setPalabra('')
    }

    return (
        <div className='contadorBotonContainer'>
            <div className='selectFormato'>
                    <button className={mode === 'easymode' ? 'selectActivo' : null} onClick={() => selectEasy()}>EasyMode</button>
                    <button className={mode === 'hardmode' ? 'selectActivo' : null} onClick={() => selectHard()}>HardMode</button>
                    <button className={mode === 'tematicas' ? 'selectActivo' : null} onClick={() => selectTematica()}>Tematicas</button>
                    {/* <button className={mode === 'random' ? 'selectActivo' : null} onClick={() => {setMode('random'); setPlay(false)}}>Random</button> */}
                    <button title='Próximamente mas modos.'>Próximamente</button>
            </div>
            <div className='contadorContainer'>
                <p>{mode === 'easymode' ? 'Palabras cada 10 segundos.' : mode === 'hardmode' ? 'Palabras cada 5 segundos.' : mode === 'tematicas' ? 'Una tematica para todo el minuto.' : null}</p>
                <div className='contador'>
                    <button onClick={() => resTime()}>-</button>
                    <h1>{time}</h1>
                    <button onClick={() => addTime()} >+</button>
                </div>
                <div className='palabra'>{play ? <h2>{palabra}</h2> : <h2 className='palabra'/>}</div>
                <div className='contadorControles'>
                    {play ? <FontAwesomeIcon className='control' icon={faUndoAlt} onClick={() => reset()}/> 
                    :<FontAwesomeIcon className='control' icon={faPlay} onClick={() => setPlay(true)}/>}
                </div>
            </div>
        </div>
    )
}