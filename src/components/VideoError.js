import React from 'react'
import styled from 'styled-components'
import error from '../img/error.png'

export const VideoError = () => {
    return (
        <Contenedor>
            <img src={error}/>
            <div>
                <h2>Batalla no encontrada</h2>
                <p>Intenta copiar el link desde youtube!</p>
            </div>
        </Contenedor>
    )
}

const Contenedor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 20px;
    background-color: white;
    width: auto;
    height: 60px;
    border-radius: 20px;
    position: absolute;
    top: 20px;
    text-align: center;
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    img{
        height: 50px;
        margin-right: 20px;
    }
    h2{
        color: rgba(32,32,32);
        font-size: 18px;
    }
    p{
        color: rgba(32,32,32);
        font-size: 15px;
    }

    animation-name: modalFade;
    animation-duration: .3s;
    
    @keyframes modalFade {
    from {transform: translateY(-50%);opacity: 0;}
    to {transform: translateY(0);opacity: 1;} 
    }
`;