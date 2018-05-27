import React from 'react';


const CharComponent = (props) =>{
    return(

        <div>
            <p 
                style={{display:'inline-block', padding:'16px', textAlign:'center', margin:'16px', border:'1px solid black'}}
                onClick = {props.click} 
            >{props.value[props.index]}</p>
        </div>
    );
}
export default CharComponent;