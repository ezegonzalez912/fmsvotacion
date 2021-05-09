import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {funcionInput} from '../hooks/funcionInput'
import {cambiarValor} from '../hooks/OnChangueInput'
import { cambiarValor2 } from '../hooks/OnChangueInput2'

export const RamdomMode = ({competidor1, competidor2, setRamdomMode1, setRamdomMode2, ramdomMode1, ramdomMode2, ocultarTotal}) => {


    //PRIMER COMPETIDOR
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

    useEffect(() => {
        setRamdomMode1(funcionInput(input1) + funcionInput(input2) + funcionInput(input3) + funcionInput(input4) 
        + funcionInput(input5) + funcionInput(input6) + funcionInput(input7) + funcionInput(input8) + funcionInput(input9)
        + funcionInput(input10) + funcionInput(input11))
      }, [input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, setRamdomMode1])

    //PRIMER COMPETIDOR
    const [input1_2, setInput1_2] = useState('')
    const [input2_2, setInput2_2] = useState('')
    const [input3_2, setInput3_2] = useState('')
    const [input4_2, setInput4_2] = useState('')
    const [input5_2, setInput5_2] = useState('')
    const [input6_2, setInput6_2] = useState('')
    const [input7_2, setInput7_2] = useState('')
    const [input8_2, setInput8_2] = useState('')
    const [input9_2, setInput9_2] = useState('')
    const [input10_2, setInput10_2] = useState('')
    const [input11_2, setInput11_2] = useState('')

    useEffect(() => {
        setRamdomMode2(funcionInput(input1_2) + funcionInput(input2_2) + funcionInput(input3_2) + funcionInput(input4_2) 
        + funcionInput(input5_2) + funcionInput(input6_2) + funcionInput(input7_2) + funcionInput(input8_2) + funcionInput(input9_2)
        + funcionInput(input10_2) + funcionInput(input11_2))
      }, [input1_2, input2_2, input3_2, input4_2, input5_2, input6_2, input7_2, input8_2, input9_2, input10_2, input11_2, setRamdomMode2])



    return (
        <>
            <Contenedor>
                <div className='title-contenedor'>
                    <h2 className='title-competidor'>{competidor1}</h2>
                </div>
                <div className='inputs-contenedor'>
                    <input inputmode="tel" className='input' tabIndex='501' type='text' value={input1} onChange={ (e) => cambiarValor(e, setInput1)} />
                    <input inputmode="tel" className='input' tabIndex='502' type='text' value={input2} onChange={ (e) => cambiarValor(e, setInput2)} />
                    <input inputmode="tel" className='input' tabIndex='505' type='text' value={input3} onChange={ (e) => cambiarValor(e, setInput3)} />
                    <input inputmode="tel" className='input' tabIndex='506' type='text' value={input4} onChange={ (e) => cambiarValor(e, setInput4)} />
                    <input inputmode="tel" className='input' tabIndex='509' type='text' value={input5} onChange={ (e) => cambiarValor(e, setInput5)} />
                    <input inputmode="tel" className='input' tabIndex='510' type='text' value={input6} onChange={ (e) => cambiarValor(e, setInput6)} />
                    <input inputmode="tel" className='input' tabIndex='513' type='text' value={input7} onChange={ (e) => cambiarValor(e, setInput7)} />
                    <input inputmode="tel" className='input' tabIndex='514' type='text' value={input8} onChange={ (e) => cambiarValor(e, setInput8)} />
                    <input inputmode="tel" className='input input-especial' tabIndex='517' type='text' value={input9}  onChange={ (e) => cambiarValor2(e, setInput9) } />
                    <input inputmode="tel" className='input input-especial' tabIndex='518' type='text' value={input10} onChange={ (e) => cambiarValor2(e, setInput10)} />
                    <input inputmode="tel" className='input input-especial' tabIndex='519' type='text' value={input11} onChange={ (e) => cambiarValor2(e, setInput11)} />
                    {ocultarTotal ? <input tabIndex='-1' className='input input-resultado' readOnly value={ramdomMode1}/> : <input tabIndex='-1' className='input input-resultado' readOnly value='-'/>}
                </div>
            </Contenedor>
            <Contenedor>
                <div className='title-contenedor'>
                    <h2 className='title-competidor'>{competidor2}</h2>
                </div>
                <div className='inputs-contenedor'>
                    <input inputmode="tel" className='input' tabIndex='503' type='text' value={input1_2} onChange={ (e) => cambiarValor(e, setInput1_2)} />
                    <input inputmode="tel" className='input' tabIndex='504' type='text' value={input2_2} onChange={ (e) => cambiarValor(e, setInput2_2)} />
                    <input inputmode="tel" className='input' tabIndex='507' type='text' value={input3_2} onChange={ (e) => cambiarValor(e, setInput3_2)} />
                    <input inputmode="tel" className='input' tabIndex='508' type='text' value={input4_2} onChange={ (e) => cambiarValor(e, setInput4_2)} />
                    <input inputmode="tel" className='input' tabIndex='511' type='text' value={input5_2} onChange={ (e) => cambiarValor(e, setInput5_2)} />
                    <input inputmode="tel" className='input' tabIndex='512' type='text' value={input6_2} onChange={ (e) => cambiarValor(e, setInput6_2)} />
                    <input inputmode="tel" className='input' tabIndex='515' type='text' value={input7_2} onChange={ (e) => cambiarValor(e, setInput7_2)} />
                    <input inputmode="tel" className='input' tabIndex='516' type='text' value={input8_2} onChange={ (e) => cambiarValor(e, setInput8_2)} />
                    <input inputmode="tel" className='input input-especial' tabIndex='520' type='text' value={input9_2}  onChange={ (e) => cambiarValor2(e, setInput9_2) } />
                    <input inputmode="tel" className='input input-especial' tabIndex='521' type='text' value={input10_2} onChange={ (e) => cambiarValor2(e, setInput10_2)} />
                    <input inputmode="tel" className='input input-especial' tabIndex='522' type='text' value={input11_2} onChange={ (e) => cambiarValor2(e, setInput11_2)} />
                    {ocultarTotal ? <input tabIndex='-1' className='input input-resultado' readOnly value={ramdomMode2}/> : <input tabIndex='-1' className='input input-resultado' readOnly value='-'/>}
                </div>
            </Contenedor>
        </>
    )
}

const Contenedor = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin: 0 20px;
`;
