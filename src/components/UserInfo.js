import React from 'react';


const styles = {
    img:{
        borderRadius: '50%',
        width: '70px',
        height: '70px',
    },
    name: {
        fontSize: '30px',
    },
    course: {
        fontSize: '25px',
        color: 'gray'
    }
}

function UserInfo({name, photo, course}){

    return (
        <div>
            <img src={photo} style={styles.img}/>
            <div>
                <span style={styles.name}>{name}</span>
                <span style={styles.course}>{course}</span>
            </div>
        </div>
    )

}

export default UserInfo;