import React from 'react';
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

    state = {
        referens: referensData,
    }

    render(){
        return(
            <div>
                Container Card
                {this.state.referens.map((item) =>  <Card {...item}/> )}
            </div>
        )
    }

}

export default CardContainer;