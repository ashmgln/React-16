import React from 'react';

const UserInput = (props) => {
    return (
        <div style={props.style}>
            <input onChange={props.click} value={props.username} />
        </div>

    );
}
export default UserInput;