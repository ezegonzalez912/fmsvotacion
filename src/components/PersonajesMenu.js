import React from 'react'
import styled from 'styled-components';
import { Personajes } from './Personajes';

export const PersonajesMenu = ({competidor1, setPersonaje1, personaje1, competidor2, setPersonaje2, personaje2, ocultarTotal}) => {
    return (
        <div className='mode-contenedor'>
            <h2 className='mode-title'>PERSONAJES CONTRAPUESTOS</h2>
            <div className='title-mode-easy-hard'>
                <Texto>Técnicas</Texto><Texto>Flow</Texto><Texto>P. Escena</Texto><Texto>TOTAL</Texto>
            </div>
            <Personajes competidor={competidor1} setPersonaje={setPersonaje1} personajes={personaje1} ocultarTotal={ocultarTotal}/>
            <Personajes competidor={competidor2} setPersonaje={setPersonaje2} personajes={personaje2} ocultarTotal={ocultarTotal}/>
        </div>
    )
}

const Texto = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-left: 11px;
  color: rgb(32, 32, 32);;
`;