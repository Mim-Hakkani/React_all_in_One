import React from 'react';

const ChildComponent = ({count,Increment}) => {
    return (
        <div>
            <h2>The Count Number is : {count}</h2>
            <button onClick={()=>Increment(5)}>Increment </button>
        </div>
    );
};

export default ChildComponent;