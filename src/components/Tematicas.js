import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {funcionInput} from '../hooks/funcionInput'
import {cambiarValor} from '../hooks/OnChangueInput'
import { cambiarValor2 } from '../hooks/OnChangueInput2'

export const Tematicas = ({setTematicas, tematicas, competidor, ocultarTotal}) => {

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const [input4, setInput4] = useState('')
    const [input5, setInput5] = useState('')
    const [input6, setInput6] = useState('')
    const [input7, setInput7] = useState('')

    useEffect(() => {
        setTematicas(funcionInput(input1) + funcionInput(input2) + funcionInput(input3) + funcionInput(input4) 
                   + funcionInput(input5) + funcionInput(input6) + funcionInput(input7))
      }, [input1, input2, input3, input4, input5, input6, input7, setTematicas])

    return (
        <Contenedor>
            <div className='title-contenedor'>
                <h2 className='title-competidor'>{competidor}</h2>
            </div>
            <div className='inputs-contenedor'>
                <input inputmode="tel" className='input' type='text' value={input1} onChange={ (e) => cambiarValor(e, setInput1)} />
                <input inputmode="tel" className='input' type='text' value={input2} onChange={ (e) => cambiarValor(e, setInput2)} />
                <input inputmode="tel" className='input' type='text' value={input3} onChange={ (e) => cambiarValor(e, setInput3)} />
                <input inputmode="tel" className='input' type='text' value={input4} onChange={ (e) => cambiarValor(e, setInput4)} />
                <input inputmode="tel" className='input input-especial' type='text' value={input5} onChange={ (e) => cambiarValor2(e, setInput5)} />
                <input inputmode="tel" className='input input-especial' type='text' value={input6} onChange={ (e) => cambiarValor2(e, setInput6)} />
                <input inputmode="tel" className='input input-especial' type='text' value={input7} onChange={ (e) => cambiarValor2(e, setInput7)} />
                {ocultarTotal ? <input tabIndex='-1' className='input input-resultado' readOnly value={tematicas}/> : <input tabIndex='-1' className='input input-resultado' readOnly value='-'/>}
            </div>
        </Contenedor>
    )
}

const Contenedor = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin: 0 20px;
`;