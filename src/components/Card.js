import React from 'react';
import UserInfo from './UserInfo';

function Card({message, user, buttonFunction, children}){
    return (
        <div style={{border: '1px solid black', width: '400px', height: '260px'}}>
                    {message}
            <UserInfo {...user}/>
            <button onClick={buttonFunction}>aca recibo cualquier funcion</button>
            {children}
        </div>
    )
}

export default Card
