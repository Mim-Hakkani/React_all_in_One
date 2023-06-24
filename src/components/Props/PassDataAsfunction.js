import React from 'react';

const PassDataAsfunction = ({personalInfo}) => {
    const info = {
    name:'Golam Hakkani mim',
    designation:"react developer"
}
    return (
        <div>
            <h3>React Works as Function :: </h3>
            {(personalInfo(info))}
        </div>
    );
};

export default PassDataAsfunction;