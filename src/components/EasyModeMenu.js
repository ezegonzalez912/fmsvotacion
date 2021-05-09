import React from 'react'
import styled from 'styled-components';
import { EasyMode } from './EasyMode'

export const EasyModeMenu = ({competidor1, setEasyMode1, easyMode1, setCompetidor1, cambiarMC1, setCambiarMC1, competidor2, setEasyMode2, easyMode2, setCompetidor2, cambiarMC2, setCambiarMC2, ocultarTotal}) => {
    return (
        <div className='mode-contenedor'>
            <h2 className='mode-title'>EASY MODE</h2>
            <div className='title-mode-easy-hard'>
                <Texto>Técnicas</Texto><Texto>Flow</Texto><Texto>P. Escena</Texto><Texto>TOTAL</Texto>
            </div>
            <EasyMode competidor={competidor1} setEasyMode={setEasyMode1} easyMode={easyMode1} cambiarMC={cambiarMC1} setCambiarMC={setCambiarMC1} setCompetidor={setCompetidor1} ocultarTotal={ocultarTotal}/>
            <EasyMode competidor={competidor2} setEasyMode={setEasyMode2} easyMode={easyMode2} cambiarMC={cambiarMC2} setCambiarMC={setCambiarMC2} setCompetidor={setCompetidor2} ocultarTotal={ocultarTotal}/>
        </div>
    )
}

const Texto = styled.p`
  font-size: 12px;
  margin-left: 11px;
  color: rgb(32, 32, 32);;
`;