import React from 'react'
import styled from 'styled-components'
import { Tematicas } from './Tematicas'

export const SegundaTematica = ({competidor1, setTematicas1, tematicas1, competidor2, setTematicas2, tematicas2, ocultarTotal}) => {
    return (
        <div className='mode-contenedor'>
            <h2 className='mode-title'>SEGUNDA TEMÁTICA</h2>
            <div className='title-mode-tematicas'>
                <Texto>Técnicas</Texto><Texto>Flow</Texto><Texto>P. Escena</Texto><Texto>TOTAL</Texto>
            </div>
            <Tematicas competidor={competidor2} setTematicas={setTematicas2} tematicas={tematicas2} ocultarTotal={ocultarTotal}/>
            <Tematicas competidor={competidor1} setTematicas={setTematicas1} tematicas={tematicas1} ocultarTotal={ocultarTotal}/>
        </div>
    )
}

const Texto = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-left: 11px;
  color: rgb(32, 32, 32);;
`;