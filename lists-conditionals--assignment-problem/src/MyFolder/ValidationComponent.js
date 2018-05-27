import React from 'react';


const ValidationComponent = (props) =>{
    let string="";
    if(props.value<=5)
        string="Text too small..."
    else if(props.value>10)
        string = "Text too large..."
    return (
        <div>
            <p>{string}</p>

        </div>

    );
}

export default ValidationComponent;