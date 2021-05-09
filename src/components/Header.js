import React from 'react'
import { Link } from 'react-router-dom'
import logoVecorBlanco from '../img/logoVectorBlanco.png'

export const Header = ({focusVotar, focusFuncion, focusNosotros}) => {
    return (
        <div className='contenedor-header'>
            <img src={logoVecorBlanco} ></img>
            <ul>
                <li><Link tabIndex='-1' to='/'>             <a tabIndex='-1'>Votar</a>                   </Link></li>
                <li><Link tabIndex='-1' to='/votaciones'>   <a tabIndex='-1'>Batallas guardadas</a>      </Link></li>
                <li><Link tabIndex='-1' to='/entrenamiento'>  <a tabIndex='-1'>Entrena</a>    </Link></li>
            </ul>
        </div>
    )
}
