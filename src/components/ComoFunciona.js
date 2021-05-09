import React from 'react'
import icon from '../img/comofunciona.png'

export const ComoFunciona = () => {
    
    return (
        <div className='contenedor-funcion margin1'>
            <img src={icon}></img>
            <div className='funcion-title'>
                <h1>¿Cómo funciona?</h1>
                <p>En el inicio de la pagina deberán agregar el link de la batalla o directo (Asegúrese de copiar de manera correcta el link desde la web de Youtube).
                A los lados del menú encontrara flechas para moverse entre los diferentes modos y debajo cuatro botones con diversas funciones.
                En caso de haber una replica seleccione el botón del mismo nombre(tenga encuentra que los resultados de esta misma son independientes al resultado total).
                Las puntuaciones deben tener un valor que van desde el 0 al 4 (inclusive), en caso de querer sumar un <b>0.5</b> agregue un <b>. (punto)</b> al numero, es decir, si vota con 1. equivale a 1.5.
                En los minuto sangre/personajes si desea <b>marcar una respuesta/utilización de personaje</b> presione la <b>tecla + (signo mas/suma)</b>. Recuerde que para moverse de manera rápida en la votación debe presionar la tecla <b>TAB</b>.
                <br/><b>¡Ahora puedes votar batallas con el formato de FMS 2018/19!</b>
                </p>
            </div>
        </div>
    )
}
