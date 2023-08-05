import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [count,setCount] =useState(0);

    const handleIncrement = (number)=>{
        setCount(count+number)
    }
    return (
        <div>
           <ChildComponent count={count} Increment={handleIncrement} />
        </div>
    );
};

export default ParentComponent;