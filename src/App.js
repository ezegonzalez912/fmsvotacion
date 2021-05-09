import React, {useEffect, useRef, useState } from 'react'
import { ComoFunciona } from './components/ComoFunciona'
import { ConfirmDelate } from './components/ConfirmDelate'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MenuVotacion } from './components/MenuVotacion'
import { SelectVideo } from './components/SelectVideo'
import { SobreNosotros } from './components/SobreNosotros'
import { VideoError } from './components/VideoError'
import { Redirect, Route, Switch } from 'react-router-dom';
import { VotacionesGuardadas } from './components/VotacionesGuardadas'
import { Ventana } from './components/Ventana'
import { Entrena } from './components/Entrena'

export const App = () => {

    const [errorVideo, setErrorVideo] = useState(false)

    const votar = useRef(null);
    const funcion = useRef(null);
    const nosotros = useRef(null);

    const focusVotar = () => {
        votar.current.scrollIntoView({block: "end", behavior: "smooth"});
    }
    const focusFuncion = () => {
        funcion.current.scrollIntoView({block: "start", behavior: "smooth"});
    }
    const focusNosotros = () => {
        nosotros.current.scrollIntoView({block: "start", behavior: "smooth"});
    }

    const [confirmDelate, setConfirmDelate] = useState(false)

    const [resultado, setResultado] = useState([])

    const borrarResultado = (index) => {
        const newArray = [...resultado]
        newArray.splice(index, 1)
        setResultado(newArray)
    }

    useEffect(() => {
        const estado = JSON.parse(localStorage.getItem('resultados'))
        if(estado === null){
            setResultado([])
        }else{
            setResultado(estado)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('resultados', JSON.stringify(resultado))
    }, [resultado])

    return (
        <>
        <Switch>
            <Route path='/votar-ventana' exact={true}>
                <Ventana setConfirmDelate={setConfirmDelate} resultado={resultado} setResultado={setResultado}/>
            </Route>
        
        <div className='ContenedorWeb'>
                        { errorVideo ? <VideoError /> : null}
                <Header focusVotar={focusVotar} focusFuncion={focusFuncion} focusNosotros={focusNosotros}/>
                <Switch>
                        <Route path='/' exact={true} >
                            <SelectVideo errorVideo={errorVideo} setErrorVideo={setErrorVideo} focusVotar={focusVotar}/>
                            <MenuVotacion setConfirmDelate={setConfirmDelate} resultado={resultado} setResultado={setResultado}/>
                            <p ref={votar}></p>
                            <ComoFunciona />
                            <p ref={funcion}></p>
                        </Route>
                        <Route path='/votaciones'>
                            <VotacionesGuardadas resultados={resultado} setResultado={setResultado} borrarResultado={borrarResultado}/>
                        </Route>
                        <Route path='/entrenamiento'>
                            <Entrena />
                        </Route>
                        <Redirect to='/' />
                </Switch>
                <SobreNosotros />
                <p ref={nosotros}></p>
                <Footer />
        </div>
        </Switch>
        {
            confirmDelate ? <ConfirmDelate /> : null
        }
        </>
    )
}
