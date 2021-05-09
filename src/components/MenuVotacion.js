import React, {useEffect, useState } from 'react'
import styled from 'styled-components'
import { DeluxeMenu } from './DeluxeMenu'
import { EasyModeMenu } from './EasyModeMenu'
import { HardModeMenu } from './HardModeMenu'
import { MinutoSangre2Menu } from './MinutoSangre2Menu'
import { MinutoSangreMenu } from './MinutoSangreMenu'
import { PrimeraTematica } from './PrimeraTematica'
import { RamdomMenu } from './RamdomMenu'
import { ReplicaMenu } from './ReplicaMenu'
import { ResultadosMenu } from './ResultadosMenu'
import { SegundaTematica } from './SegundaTematica'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { GuardarBatalla } from './GuardarBatalla'
import { ConfirmDelate } from './ConfirmDelate'
import { PersonajesMenu } from './PersonajesMenu'
import { ConfirmFormato } from './ConfirmFormato'

export const MenuVotacion = ({setResultado, resultado}) => {

    //COMPETIDOR 1

    const [competidor1, setCompetidor1] = useState('MC 1')
    const [cambiarMC1, setCambiarMC1] = useState(false)
    const [puntajeMC1, setPuntajeMC1] = useState(0)

    const [easyMode1, setEasyMode1] = useState(0)
    const [hardMode1, setHardMode1] = useState(0)
    const [tematicas1, setTematicas1] = useState(0)
    const [tematicas1_2, setTematicas1_2] = useState(0)
    const [ramdomMode1, setRamdomMode1] = useState(0)
    const [deluxeMode1, setDeluxeMode1] = useState(0)
    const [minutoSangre1, setMinutoSangre1] = useState(0)
    const [minutoSangre1_2, setMinutoSangre1_2] = useState(0)
    
    const [replica1, setReplica1] = useState(0)

    const [personaje1, setPersonaje1] = useState(0)

    useEffect(() => {
        if(formato === '2018'){
            setPuntajeMC1(easyMode1 + hardMode1 + tematicas1 + tematicas1_2 + personaje1 + deluxeMode1 + minutoSangre1 + minutoSangre1_2)
        }else{
            setPuntajeMC1(easyMode1 + hardMode1 + tematicas1 + tematicas1_2 + ramdomMode1 + deluxeMode1 + minutoSangre1 + minutoSangre1_2)
        }
    }, [easyMode1, hardMode1, tematicas1, tematicas1_2, ramdomMode1, deluxeMode1, minutoSangre1, minutoSangre1_2, personaje1])

    //COMPETIDOR 2

    const [competidor2, setCompetidor2] = useState('MC 2')
    const [cambiarMC2, setCambiarMC2] = useState(false)
    const [puntajeMC2, setPuntajeMC2] = useState(0)
    
    const [easyMode2, setEasyMode2] = useState(0)
    const [hardMode2, setHardMode2] = useState(0)
    const [tematicas2, setTematicas2] = useState(0)
    const [tematicas2_2, setTematicas2_2] = useState(0)
    const [ramdomMode2, setRamdomMode2] = useState(0)
    const [deluxeMode2, setDeluxeMode2] = useState(0)
    const [minutoSangre2, setMinutoSangre2] = useState(0)
    const [minutoSangre2_2, setMinutoSangre2_2] = useState(0)

    const [replica2, setReplica2] = useState(0)

    const [personaje2, setPersonaje2] = useState(0)

    useEffect(() => {
        if(formato === '2018'){
            setPuntajeMC2(easyMode2 + hardMode2 + tematicas2 + tematicas2_2 + personaje2 + deluxeMode2 + minutoSangre2 + minutoSangre2_2)
        }else {
            setPuntajeMC2(easyMode2 + hardMode2 + tematicas2 + tematicas2_2 + ramdomMode2 + deluxeMode2 + minutoSangre2 + minutoSangre2_2)
        }
    }, [easyMode2, hardMode2, tematicas2, tematicas2_2, ramdomMode2, deluxeMode2, minutoSangre2, minutoSangre2_2, personaje2])

    //Selec mode
    const [mode, setMode] = useState('easyMode')

    const [borrar, setBorrar] = useState(true)

    const borarDatos = () => {
        setBorrar(false)
        setTimeout(() => {
            setBorrar(true)
        } ,0.1)
        setConfirmDealte(false)
    }

    const [confirmDealte, setConfirmDealte] = useState(false)



    const modeSiguiente = () => {
        if(mode === 'easyMode'){setMode('hardMode')}
        if(mode === 'hardMode'){setMode('tematica1')}
        if(mode === 'tematica1'){setMode('tematica2')}
        if(mode === 'tematica2'){setMode('ramdomMode')}
        if(mode === 'ramdomMode'){setMode('minutoSagre1')}
        if(mode === 'minutoSagre1'){setMode('minutoSangre2')}
        if(mode === 'minutoSangre2'){setMode('deluxMode')}
        if(mode === 'deluxMode'){setMode('resultado')}
        if(mode === 'resultado'){setMode('replica')}
    }

    const modeAnterior = () => {
        if(mode === 'replica'){setMode('resultado')}
        if(mode === 'resultado'){setMode('deluxMode')}
        if(mode === 'deluxMode'){setMode('minutoSangre2')}
        if(mode === 'minutoSangre2'){setMode('minutoSagre1')}
        if(mode === 'minutoSagre1'){setMode('ramdomMode')}
        if(mode === 'ramdomMode'){setMode('tematica2')}
        if(mode === 'tematica2'){setMode('tematica1')}
        if(mode === 'tematica1'){setMode('hardMode')}
        if(mode === 'hardMode'){setMode('easyMode')}
    }

    /*Guardar batalla*/

    const [jornada, setJornada] = useState('Jornada 1')
    const [fms, setFms] = useState('FMS Argentina')
    const [fecha, setFecha] = useState('2021-04-04')


    const [guardarBatalla, setGuardarBatalla] = useState(false)

    const guardarDatos = () => {
        setResultado([
            ...resultado, {fms:fms, jornada: jornada, fecha: fecha, formato: formato,
                           mc1: competidor1, easymode1: easyMode1 , hardmode1: hardMode1, tematicas1: tematicas1, tematicas1_2: tematicas1_2, random1: ramdomMode1, 
                           personaje1: personaje1, sangre1: minutoSangre1, sangre1_2: minutoSangre1_2, deluxe1: deluxeMode1, puntajeMC1: puntajeMC1,
                           mc2: competidor2, easymode2: easyMode2 , hardmode2: hardMode2, tematicas2: tematicas2, tematicas2_2: tematicas2_2, random2: ramdomMode2, 
                           personaje2: personaje2, sangre2: minutoSangre2, sangre2_2: minutoSangre2_2, deluxe2: deluxeMode2, puntajeMC2: puntajeMC2}
                    ])
        setGuardarBatalla(!guardarBatalla)
    }

    const [ocultarTotal, setOcultarTotal] = useState(true)

    const [formato, setFormato] = useState('2020')

    const selectFormato = () =>{
        if(formato==='2018'){
            setFormato('2020')
        }else if(formato === '2020'){
            setFormato('2018')
        }
        setConfirmFormato(false)
        borarDatos()
    }

    const [confirmFormato, setConfirmFormato] = useState(false)

    return (
        <div className='contenedor-vote'>
            {confirmFormato ? <ConfirmFormato selectFormato={selectFormato} setConfirmFormato={setConfirmFormato}/> : null}
            {guardarBatalla ? <GuardarBatalla setGuardarBatalla={setGuardarBatalla} guardarDatos={guardarDatos}
                              jornada={jornada} setJornada={setJornada} fms={fms}
                              setFms={setFms} fecha={fecha} setFecha={setFecha}/> : null}
            {confirmDealte ? <ConfirmDelate borarDatos={borarDatos} setConfirmDealte={setConfirmDealte}/> : null}
            {
                borrar ? 
                <>
                    <div className='contenedor-vote2'>
                    <button className='boton-left' onClick={() => modeAnterior()}><FontAwesomeIcon icon={faChevronLeft}/></button>
                    <div>
                        <div className={mode==='easyMode' ? 'mostrar' : 'ocultar'}>
                            <EasyModeMenu ocultarTotal={ocultarTotal} competidor1={competidor1} setEasyMode1={setEasyMode1} easyMode1={easyMode1} cambiarMC1={cambiarMC1} setCambiarMC1={setCambiarMC1} setCompetidor1={setCompetidor1}
                                                competidor2={competidor2} setEasyMode2={setEasyMode2} easyMode2={easyMode2} cambiarMC2={cambiarMC2} setCambiarMC2={setCambiarMC2} setCompetidor2={setCompetidor2}/>
                        </div>
                        <div className={mode==='hardMode' ? 'mostrar' : 'ocultar'}>
                            <HardModeMenu ocultarTotal={ocultarTotal} competidor1={competidor1} setHardMode1={setHardMode1} hardMode1={hardMode1}
                                         competidor2={competidor2} setHardMode2={setHardMode2} hardMode2={hardMode2}/>
                        </div>
                        <div className={mode==='tematica1' ? 'mostrar' : 'ocultar'}>
                            <PrimeraTematica ocultarTotal={ocultarTotal} competidor1={competidor1} setTematicas1={setTematicas1} tematicas1={tematicas1}
                                            competidor2={competidor2} setTematicas2={setTematicas2} tematicas2={tematicas2}/>
                        </div>
                        <div className={mode==='tematica2' ? 'mostrar' : 'ocultar'}>
                            <SegundaTematica ocultarTotal={ocultarTotal} competidor1={competidor1} setTematicas1={setTematicas1_2} tematicas1={tematicas1_2}
                                            competidor2={competidor2} setTematicas2={setTematicas2_2} tematicas2={tematicas2_2}/>   
                        </div>
                        {
                            formato === '2020' ? 
                            <div className={mode==='ramdomMode' ? 'mostrar' : 'ocultar'}>
                                <RamdomMenu ocultarTotal={ocultarTotal} competidor1={competidor1} setRamdomMode1={setRamdomMode1} ramdomMode1={ramdomMode1}
                                            competidor2={competidor2} setRamdomMode2={setRamdomMode2} ramdomMode2={ramdomMode2}/>   
                            </div>
                            :
                            <div className={mode==='ramdomMode' ? 'mostrar' : 'ocultar'}>
                                <PersonajesMenu ocultarTotal={ocultarTotal} competidor1={competidor1} setPersonaje1={setPersonaje1} personaje1={personaje1}
                                            competidor2={competidor2} setPersonaje2={setPersonaje2} personaje2={personaje2}/>   
                            </div>
                        }
                        <div className={mode==='minutoSagre1' ? 'mostrar' : 'ocultar'}>
                            <MinutoSangreMenu ocultarTotal={ocultarTotal} competidor1={competidor1} setMinutoSangre1={setMinutoSangre1} minutoSangre1={minutoSangre1}
                                            competidor2={competidor2} setMinutoSangre2={setMinutoSangre2} minutoSangre2={minutoSangre2}/>
                        </div>
                        <div className={mode==='minutoSangre2' ? 'mostrar' : 'ocultar'}>
                            <MinutoSangre2Menu ocultarTotal={ocultarTotal} competidor1={competidor1} setMinutoSangre1_2={setMinutoSangre1_2} minutoSangre1_2={minutoSangre1_2}
                                            competidor2={competidor2} setMinutoSangre2_2={setMinutoSangre2_2} minutoSangre2_2={minutoSangre2_2}/>
                        </div>
                        <div className={mode==='deluxMode' ? 'mostrar' : 'ocultar'}>
                            <DeluxeMenu ocultarTotal={ocultarTotal} competidor1={competidor1} setDeluxeMode1={setDeluxeMode1} deluxeMode1={deluxeMode1}
                                        competidor2={competidor2} setDeluxeMode2={setDeluxeMode2} deluxeMode2={deluxeMode2}/>   
                        </div>
                        <div className={mode==='replica' ? 'mostrar' : 'ocultar'}>
                            <ReplicaMenu ocultarTotal={ocultarTotal} competidor1={competidor1} setReplica1={setReplica1} replica1={replica1}
                                        competidor2={competidor2} setReplica2={setReplica2} replica2={replica2}/>   
                        </div>
                        <div className={mode==='resultado' ? 'mostrar' : 'ocultar'}>
                            <ResultadosMenu competidor1={competidor1} easyMode1={easyMode1} hardMode1={hardMode1} tematicas1={tematicas1} tematicas1_2={tematicas1_2} personaje1={personaje1}
                                            ramdomMode1={ramdomMode1} minutoSangre1={minutoSangre1} minutoSangre1_2={minutoSangre1_2} deluxeMode1={deluxeMode1} puntajeMC1={puntajeMC1}
                                            competidor2={competidor2} easyMode2={easyMode2} hardMode2={hardMode2} tematicas2={tematicas2} tematicas2_2={tematicas2_2} personaje2={personaje2}
                                            ramdomMode2={ramdomMode2} minutoSangre2={minutoSangre2} minutoSangre2_2={minutoSangre2_2} deluxeMode2={deluxeMode2} puntajeMC2={puntajeMC2} formato={formato}/>
                        </div>
                    </div>
                    <button className='boton-right' onClick={() => modeSiguiente()}> <FontAwesomeIcon icon={faChevronRight}/> </button>
                    </div>
                </>
            : <div className='mode-contenedor'></div>
            }
        

            <div className='contenedor-buttons'>
                <Botones>
                    <button className={mode==='resultado' ? 'botonSelec ' : 'botonNormal'} onClick={ () => setMode('resultado')} >Resultados</button>
                    <button className={mode==='replica' ? 'botonSelec' : 'botonNormal'} onClick={ () => setMode('replica')} >+ Réplica</button>
                    <button className='botonBorrar' onClick= {()=> setConfirmDealte(true)} >Borrar datos</button>
                    <button className='botonBorrar' onClick= {()=> window.open('/votar-ventana','FMS VOTACIÓN', `width=775, height=250, scrollbars=NO, resizable=NO, menubar=NO, location=NO, status=NO, toolbar=NO, top=100, left=30`)} >Abrir ventana</button>
                    <button className='botonNormal' onClick={() => setGuardarBatalla(!guardarBatalla)}>Guardar</button>
                    <BotonEye className='botonNormal' onClick={() => setOcultarTotal(!ocultarTotal)}>
                        {ocultarTotal ? <FontAwesomeIcon icon={faEyeSlash} title='Ocultar resultado'/> : <FontAwesomeIcon icon={faEye} title='Mostrar resultado'/>}
                    </BotonEye>
                    <button className='botonNormal' onClick={() => setConfirmFormato(true)}>{formato === '2020' ? 'Formato 2018/19' : 'Formato 2020/21'}</button>
                </Botones>
                <Titulo >
                            
                </Titulo>
                
            </div>

            

        </div>
    )
}

const Botones = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const Titulo = styled.div`
    width: 87%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    h1{
        color: rgba(32,32,32);
        margin: 12px;
    }
    a{
        font-size: 13px;
        cursor: pointer;
        color: rgba(32,32,32);
    }
    a:hover{
        color: #141414;
    }
`;

const BotonEye = styled.button`
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`