import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {funcionInput} from '../hooks/funcionInput'
import {cambiarValor} from '../hooks/OnChangueInput'
import { cambiarValor2 } from '../hooks/OnChangueInput2'

export const DeluxeMode = ({competidor, setDeluxeMode, deluxeMode, ocultarTotal}) => {

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const [input4, setInput4] = useState('')
    const [input5, setInput5] = useState('')
    const [input6, setInput6] = useState('')
    const [input7, setInput7] = useState('')
    const [input8, setInput8] = useState('')
    const [input9, setInput9] = useState('')
    const [input10, setInput10] = useState('')
    const [input11, setInput11] = useState('')
    const [input12, setInput12] = useState('')
    const [input13, setInput13] = useState('')
    const [input14, setInput14] = useState('')

    useEffect(() => {
        setDeluxeMode(funcionInput(input1) + funcionInput(input2) + funcionInput(input3) + funcionInput(input4) 
        + funcionInput(input5) + funcionInput(input6) + funcionInput(input7) + funcionInput(input8) + funcionInput(input9)
        + funcionInput(input10) + funcionInput(input11) + funcionInput(input12) + funcionInput(input13) + funcionInput(input14))
      }, [input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, input12, input13, input14, setDeluxeMode])

    return (
        <Contenedor>
            <div className='title-contenedor'>
                <h2 className='title-competidor'>{competidor}</h2>
            </div>
            <div className='inputs-contenedor'>
                <input inputmode="tel" tabIndex='601' className='input' type='text' value={input1} onChange={ (e) => cambiarValor(e, setInput1)}/>
                <input inputmode="tel" tabIndex='602' className='input' type='text' value={input2} onChange={ (e) => cambiarValor(e, setInput2)} />
                <input inputmode="tel" tabIndex='603' className='input' type='text' value={input3} onChange={ (e) => cambiarValor(e, setInput3)} />
                <input inputmode="tel" tabIndex='604' className='input input-especial' type='text' value={input4} onChange={ (e) => cambiarValor(e, setInput4)} />
                <input inputmode="tel" tabIndex='605' className='input' type='text' value={input5} onChange={ (e) => cambiarValor(e, setInput5)} />
                <input inputmode="tel" tabIndex='606' className='input' type='text' value={input6} onChange={ (e) => cambiarValor(e, setInput6)} />
                <input inputmode="tel" tabIndex='607' className='input' type='text' value={input7} onChange={ (e) => cambiarValor(e, setInput7)} />
                <input inputmode="tel" tabIndex='608' className='input' type='text' value={input8} onChange={ (e) => cambiarValor(e, setInput8)} />
                <input inputmode="tel" tabIndex='609' className='input' type='text' value={input9} onChange={ (e) => cambiarValor(e, setInput9)} />
                <input inputmode="tel" tabIndex='610' className='input' type='text' value={input10} onChange={ (e) => cambiarValor(e, setInput10)} />
                <input inputmode="tel" tabIndex='611' className='input' type='text' value={input11} onChange={ (e) => cambiarValor(e, setInput11)} />
                <input inputmode="tel" className='input input-especial' type='text' value={input12} onChange={ (e) => cambiarValor2(e, setInput12)} />
                <input inputmode="tel" className='input input-especial' type='text' value={input13} onChange={ (e) => cambiarValor2(e, setInput13)} />
                <input inputmode="tel" className='input input-especial' type='text' value={input14} onChange={ (e) => cambiarValor2(e, setInput14)} />
                {ocultarTotal ? <input tabIndex='-1' className='input input-resultado' readOnly value={deluxeMode}/> : <input tabIndex='-1' className='input input-resultado' readOnly value='-'/>}
            </div>
    </Contenedor>
    )
}

const Contenedor = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin: 0 20px;
`;