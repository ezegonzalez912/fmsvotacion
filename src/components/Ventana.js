import React from 'react'
import styled from 'styled-components'
import { MenuVotacion } from './MenuVotacion'

export const Ventana = ({setConfirmDelate, setResultado, resultado}) => {
    return (
        <Contenedor>
            <MenuVotacion setConfirmDelate={setConfirmDelate} resultado={resultado} setResultado={setResultado}/>
        </Contenedor>
    )
}

const Contenedor = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #202020;
`;