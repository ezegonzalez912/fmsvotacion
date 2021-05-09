import React from 'react'
import styled from 'styled-components';
import { RamdomMode } from './RamdomMode';

export const RamdomMenu = ({competidor1, competidor2, setRamdomMode1, setRamdomMode2, ramdomMode1, ramdomMode2, ocultarTotal}) => {
    return (
        <div className='mode-contenedor'>
            <h2 className='mode-title'>RANDOM MODE</h2>
            <div className='title-mode-ramdon'>
                <Texto>Técnicas</Texto><Texto>Flow</Texto><Texto>P. Escena</Texto><Texto>TOTAL</Texto>
            </div>
            <RamdomMode competidor1={competidor1} setRamdomMode1={setRamdomMode1} ramdomMode1={ramdomMode1} ocultarTotal={ocultarTotal}
                        competidor2={competidor2} setRamdomMode2={setRamdomMode2} ramdomMode2={ramdomMode2} ocultarTotal={ocultarTotal}/>
        </div>
    )
}

const Texto = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-left: 10px;
  color: rgb(32, 32, 32);;
`;
