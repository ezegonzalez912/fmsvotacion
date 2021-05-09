import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

export const ResultadosMenu = ({competidor1, easyMode1, hardMode1, tematicas1, tematicas1_2, personaje1, ramdomMode1, minutoSangre1, minutoSangre1_2, deluxeMode1, puntajeMC1,
                                competidor2, easyMode2, hardMode2, tematicas2, tematicas2_2, personaje2, ramdomMode2, minutoSangre2, minutoSangre2_2, deluxeMode2, puntajeMC2, formato}) => {
    const [resultadoFinal, setResultadoFinal] = useState('')

    useEffect(() => {
        const resto1 = puntajeMC1 - puntajeMC2
        const resto2 = puntajeMC2 - puntajeMC1

        if(resto1 >= 0){
            if (resto1 <= 5){
                return setResultadoFinal(`El resultado es: REPLICA por diferencia de ${resto1} puntos.`)
            }
        }else if(resto2 >= 0){
            if (resto2 <= 5){
                return setResultadoFinal(`El resultado es: REPLICA por diferencia de ${resto2} puntos.`)
            }
        }
        if(puntajeMC1 > puntajeMC2){
            const puntaje = puntajeMC1 - puntajeMC2
            return setResultadoFinal(`El ganador es ${competidor1} por ${puntaje} puntos.`)
        }
        if(puntajeMC2 > puntajeMC1){
            const puntaje = puntajeMC2 - puntajeMC1
            return setResultadoFinal(`El ganador es ${competidor2} por ${puntaje} puntos.`)
        }
    }, [puntajeMC1, puntajeMC2])


    return (
        <div className='mode-contenedor'>
            <h2 className='mode-title'>RESULTADOS</h2>
            <ContenedorTotal>
                <ContenedorTitle>
                    <br/>
                    <h2 className='title-competidor'>{competidor1}</h2>
                    <h2 className='title-competidor'>{competidor2}</h2>
                </ContenedorTitle>
                <ContenedorPuntaje>
                    <Puntaje>
                        <p>Easy Mode</p>
                        <p>{easyMode1}</p>
                        <p>{easyMode2}</p>
                    </Puntaje>
                    <Puntaje>
                        <p>Hard Mode</p>
                        <p>{hardMode1}</p>
                        <p>{hardMode2}</p>
                    </Puntaje>
                    <Puntaje>
                        <p>Tematicas</p>
                        <p>{tematicas1 + tematicas1_2}</p>
                        <p>{tematicas2 + tematicas2_2}</p>
                    </Puntaje>
                    {
                        formato === '2018' ? 
                        <Puntaje>
                            <p>Personajes</p>
                            <p>{personaje1}</p>
                            <p>{personaje2}</p>
                        </Puntaje> :
                        <Puntaje>
                            <p>Random</p>
                            <p>{ramdomMode1}</p>
                            <p>{ramdomMode2}</p>
                        </Puntaje>
                    }
                    <Puntaje>
                        <p>Sangre</p>
                        <p>{minutoSangre1 + minutoSangre1_2}</p>
                        <p>{minutoSangre2 + minutoSangre2_2}</p>
                    </Puntaje>
                    <Puntaje>
                        <p>Deluxe</p>
                        <p>{deluxeMode1}</p>
                        <p>{deluxeMode2}</p>
                    </Puntaje>
                    <Puntaje>
                        <p>TOTAL</p>
                        <p>{puntajeMC1}</p>
                        <p>{puntajeMC2}</p>
                    </Puntaje>
                </ContenedorPuntaje>
            </ContenedorTotal>
            <Result>{resultadoFinal}</Result>
        </div>
    )
}

const ContenedorTotal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    margin-bottom: 12px;
`
const ContenedorTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ContenedorPuntaje = styled.div`
    display: flex;
`;

const Puntaje = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 10px;
    font-size: 15px;
`;

const Result = styled.p`
    text-align: center;
    font-size: 19px;
    color: #4547a0;
    font-weight: 500;
`;