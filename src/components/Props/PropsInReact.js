import React from 'react';
import PassDataAsString from './PassDataAsString';

const PropsInReact = () => {
    return (
        <div style={{display:'flex'}}> 
            <PassDataAsString name="Mim" designation="React Developer" id="150132" /> 
            <PassDataAsString name="Hasan" designation="UI-UX Developer" id="150144" /> 
            <PassDataAsString name="Masum" designation="Backend Developer" id="150175" /> 
        </div>
    );
};

export default PropsInReact;