import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {funcionInput} from '../hooks/funcionInput'
import {cambiarValor} from '../hooks/OnChangueInput'

export const Replica = ({competidor, setReplica, replica, nuevaReplica, ocultarTotal}) => {

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const [input4, setInput4] = useState('')
    const [input5, setInput5] = useState('')
    const [input6, setInput6] = useState('')
    const [input7, setInput7] = useState('')
    const [input8, setInput8] = useState('')
    const [input9, setInput9] = useState('')

    useEffect(() => {
        setReplica(funcionInput(input1) + funcionInput(input2) + funcionInput(input3) + funcionInput(input4) 
        + funcionInput(input5) + funcionInput(input6) + funcionInput(input7) + funcionInput(input8) + funcionInput(input9))
      }, [input1, input2, input3, input4, input5, input6, input7, input8, input9, setReplica])
    
    useEffect(() => {
      setInput1('')
      setInput2('')
      setInput3('')
      setInput4('')
      setInput5('')
      setInput6('')
      setInput7('')
      setInput8('')
      setInput9('')
      
    }, [nuevaReplica])

    return (
        <Contenedor>
          <div className='title-contenedor'>
            <h2 className='title-competidor'>{competidor}</h2>
          </div>
          <div className='inputs-contenedor'>
            <input inputmode="tel" tabIndex='900' className='input' type='text' value={input1} onChange={ (e) => cambiarValor(e, setInput1)}/>
            <input inputmode="tel" tabIndex='901' className='input' type='text' value={input2} onChange={ (e) => cambiarValor(e, setInput2)} />
            <input inputmode="tel" tabIndex='902' className='input' type='text' value={input3} onChange={ (e) => cambiarValor(e, setInput3)} />
            <input inputmode="tel" tabIndex='903' className='input' type='text' value={input4} onChange={ (e) => cambiarValor(e, setInput4)} />
            <input inputmode="tel" tabIndex='904' className='input' type='text' value={input5} onChange={ (e) => cambiarValor(e, setInput5)} />
            <input inputmode="tel" tabIndex='905' className='input' type='text' value={input6} onChange={ (e) => cambiarValor(e, setInput6)} />
            <input inputmode="tel" className='input input-especial' type='text' value={input7} onChange={ (e) => cambiarValor(e, setInput7)} />
            <input inputmode="tel" className='input input-especial' type='text' value={input8} onChange={ (e) => cambiarValor(e, setInput8)} />
            <input inputmode="tel" className='input input-especial' type='text' value={input9} onChange={ (e) => cambiarValor(e, setInput9)} />
            {ocultarTotal ? <input tabIndex='-1' className='input input-resultado' readOnly value={replica}/> : <input tabIndex='-1' className='input input-resultado' readOnly value='-'/>}
          </div>
      </Contenedor>
    )
}

const Contenedor = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin: 0 20px;
`;