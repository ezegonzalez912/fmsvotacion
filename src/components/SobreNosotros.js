import React from 'react'
import icon from '../img/sobrenosotros2.png'

export const SobreNosotros = () => {
    return (
        <div className='contenedor-funcion margin2'>
        <img src={icon}></img>
        <div className='funcion-title'>
            <h1>Sobre nosotros</h1>
            <p>FMSVotacion.com es una pagina web desarrollada por y para los amantes de la competencia de freestyle FMS, gracias a esta aplicación web vas a poder ponerte en papel de juez y votar batallas en vivo o
                en el momento que lo desees desde un solo lugar, sin la necesidad de descargar aplicaciones externas o usar lápiz y papel.<br/>
                Si tenes alguna duda o sugerencia no dudes contactarte vía  <a href='https://twitter.com/fms_votacion'  target='__BLANK'><b>Twitter</b></a>.
            </p>
        </div>
    </div>
    )
}
