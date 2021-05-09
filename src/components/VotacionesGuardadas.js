import React from 'react'
import styled from 'styled-components'
import { ResultadosMenu } from './ResultadosMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export const VotacionesGuardadas = ({resultados, borrarResultado}) => {

    return (
        <div>
            <Titulo>Votaciones guardadas</Titulo>
            <Contenedor>  
                {
                    resultados.length === 0 ? <Contenedor1><Title>~ No tienes votaciones guardadas ~</Title></Contenedor1>
                    : resultados.map((resultado, index) => {
                        return <Espaciado key={index}>
                            
                                    <Controles>
                                        <p>{resultado.fms} - {resultado.jornada} - {resultado.fecha}</p>
                                        <FontAwesomeIcon title='Borrar resultados' className='save-icon' icon={faTimesCircle} onClick={() => borrarResultado(index)} />
                                    </Controles>
                                    <ContenedorResultado>
                                            <ResultadosMenu competidor1={resultado.mc1} easyMode1={resultado.easymode1} hardMode1={resultado.hardmode1} tematicas1={resultado.tematicas1} tematicas1_2={resultado.tematicas1_2} personaje1={resultado.personaje1}
                                                            ramdomMode1={resultado.random1} minutoSangre1={resultado.sangre1} minutoSangre1_2={resultado.sangre1_2} deluxeMode1={resultado.deluxe1} puntajeMC1={resultado.puntajeMC1}
                                                            competidor2={resultado.mc2} easyMode2={resultado.easymode2} hardMode2={resultado.hardmode2} tematicas2={resultado.tematicas2} tematicas2_2={resultado.tematicas2_2} personaje2={resultado.personaje2}
                                                            ramdomMode2={resultado.random2} minutoSangre2={resultado.sangre2} minutoSangre2_2={resultado.sangre2_2} deluxeMode2={resultado.deluxe2} puntajeMC2={resultado.puntajeMC2}
                                                            formato={resultado.formato}/>
                                    </ContenedorResultado>
                               </Espaciado>
                      })
                }
            </Contenedor>
        </div>
    )
}

const Contenedor1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 320px;
    margin-bottom: 200px;
`;

const Title = styled.p`
    text-align: center;
    color: white;
    font-size: 15px;
    font-weight: 400;
`;

const Espaciado = styled.div`
    margin: 0 20px;
`;

const Contenedor = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 700px;
`;

const Titulo = styled.h1`
    color: white;
    font-weight: 500;
    margin: 130px 0 50px 0;
    text-align: center;
`;

const ContenedorResultado = styled.div`
    width: 680px;
    padding: 10px;
    background-color: white;
    border-radius: 15px;
    margin: 0 0 50px 0;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, .5);
`;

const Controles = styled.div`
    width: 100%;
    box-shadow: 0px 0px 8px rgba(0,0,0,.5);
    padding: 3px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3px;
    background-color: rgba(32, 32, 32, 0.785);
    border-radius: 15px;
    p{
        font-size: 13px;
        font-weight: 400;
        color: white;
        opacity: .8;
        padding: 0 15px;
    }
    button:hover{
        opacity: 1;
    }
`