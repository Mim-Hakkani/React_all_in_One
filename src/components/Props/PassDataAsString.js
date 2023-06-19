import React from 'react';

const PassDataAsString = (props) => {

 console.log("props Data :: ", props);
    return (
        <div style={{border:'1px solid gray'}}>
            <h3>Name is : {props.name}</h3>
            <h3>Designation is : {props.designation}</h3>
            <h3>Emp Id is : {props.id}</h3>
        </div>
    );
};

export default PassDataAsString;