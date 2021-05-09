import React from 'react'
import styled from 'styled-components'

export const ConfirmDelate = ({borarDatos, setConfirmDealte}) => {
    return (
        <Contenedor>
            <h2>¿Seguro desea borrar los datos?</h2>
            <div>
                <button onClick={() => setConfirmDealte(false)}>Cancelar</button>
                <button onClick={() => borarDatos()}>Borrar</button>
            </div>
        </Contenedor>
    )
}

const Contenedor = styled.div`
    width: 250px;
    height: 80px;
    background-color: white;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    padding: 10px 14px;
    box-shadow: 0px 0px 8px rgba(0,0,0,.5);
    z-index: 1000;
    h2{
        text-align: center;
        font-size: 15px;
        color: rgba(32,32,32);
    }
    button{
        border: none;
        padding: 3px;
        outline: none;
        border: 1px solid #d7d7d7;
        border-radius: 15px;
        padding: 4px 6px;
        margin: 10px;
        cursor: pointer;
    }
    button:hover{
        color: white;
        background-color: #595bb7;
    }
`;