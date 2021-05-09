import React from 'react'
import styled from 'styled-components';
import { MinutoSangre } from './MinutoSangre';
import { MinutoSangreRespuesta } from './MinutoSangreRespuesta';

export const MinutoSangreMenu = ({competidor1, setMinutoSangre1, minutoSangre1, competidor2, setMinutoSangre2, minutoSangre2, ocultarTotal}) => {
    return (
        <div className='mode-contenedor'>
            <h2 className='mode-title'>PRIMER MINUTO SANGRE</h2>
            <div className='title-mode-easy-hard'>
                <Texto>Técnicas</Texto><Texto>Flow</Texto><Texto>P. Escena</Texto><Texto>TOTAL</Texto>
            </div>
            <MinutoSangre competidor={competidor2} setMinutoSangre={setMinutoSangre2} minutoSangre={minutoSangre2} ocultarTotal={ocultarTotal}/>
            <MinutoSangreRespuesta competidor={competidor1} setMinutoSangre={setMinutoSangre1} minutoSangre={minutoSangre1} ocultarTotal={ocultarTotal}/>
        </div>
    )
}

const Texto = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-left: 11px;
  color: rgb(32, 32, 32);;
`;