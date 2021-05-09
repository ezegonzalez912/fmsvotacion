import React from 'react'
import styled from 'styled-components';
import { HardMode } from './HardMode'

export const HardModeMenu = ({competidor1, setHardMode1, hardMode1, competidor2, setHardMode2, hardMode2, ocultarTotal}) => {
    return (
        <div className='mode-contenedor'>
            <h2 className='mode-title'>HARD MODE</h2>
            <div className='title-mode-easy-hard'>
                <Texto>Técnicas</Texto><Texto>Flow</Texto><Texto>P. Escena</Texto><Texto>TOTAL</Texto>
            </div>
            <HardMode competidor={competidor2} setHardMode={setHardMode2} hardMode={hardMode2} ocultarTotal={ocultarTotal}/>
            <HardMode competidor={competidor1} setHardMode={setHardMode1} hardMode={hardMode1} ocultarTotal={ocultarTotal}/>
        </div>
    )
}

const Texto = styled.p`
  font-size: 12px;
  margin-left: 11px;
  color: rgb(32, 32, 32);;
`;