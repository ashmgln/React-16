import React from 'react';
import styles from './Person.css'
const person = (props) => {
    return (
        <div className = {styles.Person}>
            <p>Applicant Number = {props.string}</p>
            <p>You are {Math.ceil(Math.random()*100)}% stupid.</p>
            
        </div>
    );
}

export default person;
