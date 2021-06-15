import React, {useState, useEffect} from 'react';
import Card from './Card';

const referensData = [
    {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        user: {
            name: 'Nataly G',
            course: 'Desarrollo React',
            photo: 'https://picsum.photos/id/237/200/300'

        }
    },
    {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        user: {
            name: 'Juan Pablo',
            course: 'Desarrollo React',
            photo: 'https://picsum.photos/id/237/200/300',
        }
    },
    {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        user: {
            name: 'Matias',
            course: 'Desarrollo React',
            photo: 'https://picsum.photos/id/237/200/300'
        }
    },
]


function CardContainer(){

    const [referens, setReferences] = useState(referensData);

    const [contador, setContador] = useState(0)

    const addNewCard = () => {
        const newReference =  {
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            user: {
                name: 'Nicolas Test New',
                course: 'Desarrollo React',
                photo: 'https://picsum.photos/id/237/200/300'
            }
        }
        setReferences([...referens, newReference])
    }

    const buttonFunction = () => {
        alert('esta funcion esta desde el padre')
    }

    useEffect(() => { console.log('esto es un componentDidMount')}, []) // componentDidMount

    useEffect(() => { console.log('cada vez que reference cambien yo cambio')
}, [referens]) // componentDidMount
    
    return(
        <div>
            Container Card
          {referens.map((item, key) => 
                <Card {...item} buttonFunction={buttonFunction} />)}

            <button onClick={addNewCard}>Agregar Referencia</button>    
        </div>
    )
}

export default CardContainer;