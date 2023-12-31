import React, { useState } from 'react';
import PassDataAsString from './PassDataAsString';
import PassDataAsObject from './PassDataAsObject';
import PassDataAsArray from './PassDataAsArray';
import PassDataAsfunction from './PassDataAsfunction';

const PropsInReact = () => {

//  pass data as object (advanced)

    const skills ={
        technical : ['html','css','js','react'],
        academic : ['ssc','hsc','bsc'],
        other : {
            play:'Cricket',
            entertainment:'Heard News'
        }
    }

    // pass data as array 

const users = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com' },
];

// pass data as a function 



const personalInfo = (info)=>{
   console.log("::",info);
    return `My name is ${info.name}\n. i am a ${info.designation}`
 
}



    return (
        <> 
        
          <div style={{display:'flex'}}> 
            <PassDataAsString name="Mim" designation="React Developer" id="150132" /> 
            <PassDataAsString name="Hasan" designation="UI-UX Developer" id="150144" /> 
            <PassDataAsString name="Masum" designation="Backend Developer" id="150175" /> 
        </div>

        <div>
            <PassDataAsObject objData = {skills}/>
        </div>

        <PassDataAsArray users={users}/>


        {/* pass data as a function  */}
        <PassDataAsfunction personalInfo={personalInfo} />
        </>
      
    );
};

export default PropsInReact;