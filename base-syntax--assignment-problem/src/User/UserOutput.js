import React from 'react';

const UserOutput = (props) => {

    return (<div style = {props.style}>
        <p>Hi {props.username}!</p>
        <p>Don't waste your time reading this</p>
    </div>
    );

}

export default UserOutput;