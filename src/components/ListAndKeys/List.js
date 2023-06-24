import React from 'react';

const List = ({item}) => {
    return (
        <div style={{display:'flex' ,}}>
            <p>id : {item.id}</p>
            <p>Text : {item.text}</p>
            <p>Staus : {item.status}</p>
        </div>
    );
};

export default List;