import React from 'react'
import styled from 'styled-components';
import { DeluxeMode } from './DeluxeMode'

export const DeluxeMenu = ({competidor1, setDeluxeMode1, deluxeMode1, competidor2, setDeluxeMode2, deluxeMode2, ocultarTotal}) => {
    return (
        <div className='mode-contenedor'>
            <h2 className='mode-title'>RONDA DELUXE</h2>
            <div className='title-mode-deluxe'>
                <Texto>Técnicas</Texto><Texto>Flow</Texto><Texto>P. Escena</Texto><Texto>TOTAL</Texto>
            </div>
            <DeluxeMode competidor={competidor2} setDeluxeMode={setDeluxeMode2} deluxeMode={deluxeMode2} ocultarTotal={ocultarTotal}/>
            <DeluxeMode competidor={competidor1} setDeluxeMode={setDeluxeMode1} deluxeMode={deluxeMode1} ocultarTotal={ocultarTotal}/>  
        </div>
    )
}

const Texto = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-left: 10px;
  color: rgb(32, 32, 32);;
`;
