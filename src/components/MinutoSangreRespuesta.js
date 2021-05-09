import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {funcionInput} from '../hooks/funcionInput'
import {cambiarValor} from '../hooks/OnChangueInput'
import { cambiarValor2 } from '../hooks/OnChangueInput2'

export const MinutoSangreRespuesta = ({setMinutoSangre, minutoSangre, competidor, ocultarTotal}) => {

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const [input4, setInput4] = useState('')
    const [input5, setInput5] = useState('')
    const [input6, setInput6] = useState('')
    const [input7, setInput7] = useState('')
    const [input8, setInput8] = useState('')
    const [input9, setInput9] = useState('')

    const [checkBox1, setCheckBox1] = useState(false)
    const [checkBox2, setCheckBox2] = useState(false)
    const [checkBox3, setCheckBox3] = useState(false)
    const [checkBox4, setCheckBox4] = useState(false)
    const [checkBox5, setCheckBox5] = useState(false)
    const [checkBox6, setCheckBox6] = useState(false)

    const addCheckBox = (estado) => {
        if(estado === true){
            return parseFloat(1)
        }else {
            return parseFloat(0)
        }
    }

    useEffect(() => {
        setMinutoSangre(funcionInput(input1) + funcionInput(input2) + funcionInput(input3) + funcionInput(input4) 
        + funcionInput(input5) + funcionInput(input6) + funcionInput(input7) + funcionInput(input8) + funcionInput(input9)
        + addCheckBox(checkBox1) + addCheckBox(checkBox2) + addCheckBox(checkBox3) + addCheckBox(checkBox4) 
        + addCheckBox(checkBox5) + addCheckBox(checkBox6))
    }, [input1, input2, input3, input4, input5, input6, input7, input8, input9, 
        checkBox1, checkBox2, checkBox3, checkBox4, checkBox5, checkBox6, setMinutoSangre])
    

    const sumaRespuesta = (e, setInput, setCheckbox) => {
        cambiarValor(e, setInput)
        console.log(e.target.value)
        if ( e.target.value === '+' || e.target.value === '.+' || e.target.value === '0+'  || e.target.value === '0.+' || e.target.value === '1+' || e.target.value === '1.+'
        ||   e.target.value === '2+'|| e.target.value === '2.+'|| e.target.value === '3+'  || e.target.value === '3.+' || e.target.value === '4+' ){
            setCheckbox( estado => !estado)
        }
    }

    return (
        <Contenedor>
            <div className='title-contenedor'>
                <h2 className='title-competidor'>{competidor}</h2>
            </div>
            <div className='inputs-contenedor'>
                <div className='contenedor-sangre'>
                    <input inputmode="tel" className='input' type='text' value={input1} onChange={ (e) => sumaRespuesta(e, setInput1, setCheckBox1)} />
                    <input tabIndex='-100' className='checkbox' type='checkbox' checked={checkBox1} onChange={() => setCheckBox1(!checkBox1)}/>
                </div>
                <div className='contenedor-sangre'>
                    <input inputmode="tel" className='input' type='text' value={input2} onChange={ (e) => sumaRespuesta(e, setInput2, setCheckBox2)} />
                    <input tabIndex='-100' className='checkbox' type='checkbox' checked={checkBox2}  onChange={() => setCheckBox2(!checkBox2)}/>
                </div>
                <div className='contenedor-sangre'>
                    <input inputmode="tel" className='input' type='text' value={input3} onChange={ (e) => sumaRespuesta(e, setInput3, setCheckBox3)} />
                    <input tabIndex='-100' className='checkbox' type='checkbox' checked={checkBox3}  onChange={() => setCheckBox3(!checkBox3)}/>
                </div>
                <div className='contenedor-sangre'>
                    <input inputmode="tel" className='input' type='text' value={input4} onChange={ (e) => sumaRespuesta(e, setInput4, setCheckBox4)} />
                    <input tabIndex='-100' className='checkbox' type='checkbox' checked={checkBox4}  onChange={() => setCheckBox4(!checkBox4)}/>
                </div>
                <div className='contenedor-sangre'>
                    <input inputmode="tel" className='input' type='text' value={input5} onChange={ (e) => sumaRespuesta(e, setInput5, setCheckBox5)} />
                    <input tabIndex='-100' className='checkbox' type='checkbox' checked={checkBox5}  onChange={() => setCheckBox5(!checkBox5)}/>
                </div>
                <div className='contenedor-sangre'>
                    <input inputmode="tel" className='input' type='text' value={input6} onChange={ (e) => sumaRespuesta(e, setInput6, setCheckBox6)} />
                    <input tabIndex='-100' className='checkbox' type='checkbox' checked={checkBox6}  onChange={() => setCheckBox6(!checkBox6)}/>
                </div>
                <input inputmode="tel" className='input input-especial' type='text' value={input7} onChange={ (e) => cambiarValor2(e, setInput7)} />
                <input inputmode="tel" className='input input-especial' type='text' value={input8} onChange={ (e) => cambiarValor2(e, setInput8)} />
                <input inputmode="tel" className='input input-especial' type='text' value={input9} onChange={ (e) => cambiarValor2(e, setInput9)} />
                {ocultarTotal ? <input tabIndex='-1' className='input input-resultado' readOnly value={minutoSangre}/> : <input tabIndex='-1' className='input input-resultado' readOnly value='-'/>}
            </div>
    </Contenedor>
    )
}

const Contenedor = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin: 0 20px;
`;