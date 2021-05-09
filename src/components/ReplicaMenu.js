import React, { useState } from 'react'
import styled from 'styled-components';
import { Replica } from './Replica';

export const ReplicaMenu = ({competidor1, setReplica1, replica1, competidor2, setReplica2, replica2, ocultarTotal}) => {

    const [nuevaReplica, setNuevaReplica] = useState(false)

    return (
        <div className='mode-contenedorREPLICA'>
            <div className='replica'>
                <h2 className='mode-title'>RÉPLICA</h2>
                <div className='title-mode-easy-hard'>
                    <Texto>Técnicas</Texto><Texto>Flow</Texto><Texto>P. Escena</Texto><Texto>TOTAL</Texto>
                </div>
                    {
                        nuevaReplica ? <>
                            <Replica competidor={competidor2} setReplica={setReplica2} replica={replica2} nuevaReplica={nuevaReplica} ocultarTotal={ocultarTotal}/>
                            <Replica competidor={competidor1} setReplica={setReplica1} replica={replica1} nuevaReplica={nuevaReplica} ocultarTotal={ocultarTotal}/>
                        </>
                        : <>
                            <Replica competidor={competidor1} setReplica={setReplica1} replica={replica1} nuevaReplica={nuevaReplica} ocultarTotal={ocultarTotal}/>
                            <Replica competidor={competidor2} setReplica={setReplica2} replica={replica2} nuevaReplica={nuevaReplica} ocultarTotal={ocultarTotal}/>
                        </>
                    }
                    
                </div>
            <button className='nuevaReplica' onClick={() => setNuevaReplica(!nuevaReplica)}>Nueva réplica</button>
        </div>
    )
}

const Texto = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-left: 6px;
  color: rgb(49, 49, 49);
`;
