import React from 'react';

export default function Contador({nombre, contadorNumero}){
    console.log('props ---->');

    return (

    <div>
    {nombre}
    <h1>{contadorNumero}</h1>
    </div>    
    )
}


