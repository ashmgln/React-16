import React from 'react';
const person = (props) => {
    return (
        <div className = "App">
            <p>Applicant Number = {props.string}</p>
            <p>You are {Math.ceil(Math.random()*100)}% stupid.</p>
            
        </div>
    );
}

export default person;
