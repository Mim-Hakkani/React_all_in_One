import React, { useState } from 'react';

const ConditionalRendering = () => {

    const [isLoggin,setIsloggin] =useState(false);

    // conditional rendering old way 

    let content = ''

    if(isLoggin){
     content ='Welcome is the Ehsan Marketing '
    }
    else{
        content = "Register First Then give a access "
    }



    return (
        <div>

            {/* works as ternary opeator  */}

            <button onClick={()=>setIsloggin(!isLoggin)}> {isLoggin ? 'Logout' : "Register" }</button>
           
           {/* works as normal if else method  */}

            <h4>Condetionl Renderiong in old way </h4>
            <p>{content}</p>


            {/* works as and operation . when true then rendering the element */}

            {
                isLoggin && <p style={{color:'green'}}>Hi ,, I am a Registerd user </p>
            }
        </div>
    );
};

export default ConditionalRendering;