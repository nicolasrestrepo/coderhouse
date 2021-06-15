import React, { Children } from 'react';
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



class CardContainer extends React.Component {

    constructor(){
        super();
        this.state = {
            referens: referensData,
            contador: 0
        }
    
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(){
        if(this.state.contador !== 0){
            
        }
        console.log('component did Update')
    }


    addNewCard = () => {
        const newReference =  {
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            user: {
                name: 'Nicolas Test New',
                course: 'Desarrollo React',
                photo: 'https://picsum.photos/id/237/200/300'
            }
        }

        this.setState({
            ...this.state,
            referens: [...this.state.referens, newReference]
        })
    }

    buttonFunction = () => {
        alert('esta funcion esta desde el padre')
    }

    render(){

        return(
            <div>
                Container Card
              //5  {this.state.referens.map((item, key) => 
                    <Card {...item} buttonFunction={this.buttonFunction} />)}

                <button onClick={this.addNewCard}>Agregar Referencia</button>    
            </div>
        )
    }
}

export default CardContainer;