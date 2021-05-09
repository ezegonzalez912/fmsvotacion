import React from 'react'
import styled from 'styled-components'

export const ConfirmFormato = ({setConfirmFormato, selectFormato}) => {
    return (
        <Contenedor>
            <h1>¿Esta seguro de cambiar el formato?</h1>
            <p>Al cambiar el formato se borran los puntajes actuales</p>
            <div>
                <button onClick={()=> setConfirmFormato(false)} >Cancelar</button>
                <button onClick={()=> selectFormato()} >Cambiar</button>
            </div>
        </Contenedor>
    )
}

const Contenedor = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 0px 8px rgba(0,0,0,.300);
    width: 350px;
    z-index: 900;
    padding: 5px;
    h1{
        font-size: 18px;
        text-align: center;
    }
    p{
        text-align: center;
        font-size: 16px;
    }
    button{
        border: none;
        padding: 3px;
        outline: none;
        border: 1px solid #d7d7d7;
        border-radius: 15px;
        padding: 4px 6px;
        margin: 5px;
        cursor: pointer;
    }
    button:hover{
        color: white;
        background-color: #595bb7;
    }
`;