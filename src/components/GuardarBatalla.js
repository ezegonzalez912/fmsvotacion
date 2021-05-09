import React from 'react'
import styled from 'styled-components'

export const GuardarBatalla = ({setGuardarBatalla, guardarDatos, fecha, setFecha, jornada, setJornada, fms, setFms}) => {
    return (
        <Contenedor>
            <h2>Guarda la batalla</h2>
            <input value={jornada} onChange={ (e) => setJornada(e.target.value)} type='text'></input>
            <select value={fms} onChange={ (e) => setFms(e.target.value)} name="transporte">
                <option>FMS Argentina</option>
                <option>FMS Chile</option>
                <option>FMS España</option>
                <option>FMS Mexico</option>
                <option>FMS Peru</option>
                <option>Otro</option>
            </select>
            <input value={fecha} onChange={ (e) => setFecha(e.target.value)} type='date'></input>
            <Guardar onClick={() => guardarDatos()}>Guardar</Guardar>
            <Cancelar onClick={() => setGuardarBatalla(false)}>Cancelar</Cancelar>
        </Contenedor>
    )
}

const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 900;
    background-color: white;
    width: 400px;
    height: auto;
    padding: 15px 0;
    border-radius: 15px;
    box-shadow: 0px 0px 5px rgba(0,0,0,.3);
    justify-content: center;
    align-items: center;
        h2{
            text-align: center;
            font-size: 17px;
        }
        input{
            border: none;
            border: 1px solid #bcbcbc;
            border-radius: 35px;
            width: 80%;
            padding: 7px;
            margin: 4px;
            outline: none;
            color: rgba(32,32,32);
            font-weight: 500;
        }
        select{
            border: none;
            border: 1px solid #bcbcbc;
            border-radius: 35px;
            width: 84%;
            padding: 7px;
            margin: 4px;
            outline: none;
            color: rgba(32,32,32);
            font-weight: 500;
        }
`;

const Guardar = styled.button`
    border: none;
    border: 1px solid #bcbcbc;
    border-radius: 35px;
    width: 84%;
    padding: 7px;
    margin: 4px;
    outline: none;
    color: rgba(32,32,32);
    cursor: pointer;
    font-weight: 500;
    :hover{
        color: white;
        background-color: #595bb7;
    }
`;

const Cancelar = styled.button`
    border: none;
    border: 1px solid #bcbcbc;
    border-radius: 35px;
    width: 84%;
    padding: 7px;
    margin: 4px;
    outline: none;
    color: rgba(32,32,32);
    cursor: pointer;
    font-weight: 500;
    :hover{
        color: white;
        background-color: #595bb7;
    }
`;
