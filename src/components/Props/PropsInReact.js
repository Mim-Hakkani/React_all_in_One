import React from 'react';
import PassDataAsString from './PassDataAsString';
import PassDataAsObject from './PassDataAsObject';

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
        </>
      
    );
};

export default PropsInReact;