import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
    return (
        <Contenedor className='footer'>
            <a  target="_blank" href='https://mail.google.com/mail/#inbox?compose=new'>Contacto: <br/>fmsvotaciononline@gmail.com</a>
            <p>Version 1.3 <br/>Cualquier bug reportarlo al nuestro Correo y/o Twitter.</p>
        </Contenedor>
    )
}

const Contenedor = styled.div`
    margin-top: 100px;
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    a{
        font-size: 13px;
        text-align: start;
        text-decoration: none;
        color: #9456f1;
        margin: 0 50px;
    }
    p{
        font-size: 13px;
        text-align: end;
        text-decoration: none;
        color: #9456f1;
        margin: 0 50px;
    }
`;
